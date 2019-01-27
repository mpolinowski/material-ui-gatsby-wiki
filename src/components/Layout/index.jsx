import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../../utils/withRoot'

import Transition from './transition'

import Paper from '@material-ui/core/Paper'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuButton from '@material-ui/icons/Menu'
import Hidden from '@material-ui/core/Hidden'

import MainNav from './Side_Navigation/index'
import FloatingButtons from './floating-buttons'
import AdvancedMenu from './advanced-nav'
import RemoteMenu from './remote-nav'
import MotionMenu from './motion-nav'
import InstallationMenu from './installation-nav'
import ProductsMenu from './products-nav'

import Logo from '../../assets/logo_250x65.png'

require('../../assets/styles/markdown.css')

const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    maxWidth: 1160,
    minHeight: '100 vh',
    position: 'relative',
    backgroundColor: '#fafafa',
  },
  appBar: {
    zIndex: 100,
    position: 'fixed',
    marginLeft: 0,
    backgroundColor: '#fff',
  },
  logo: {
    height: 50,
    margin: '7px 5px 5px -15px',
    boxShadow: '1px 1px 1px #888888',
  },
  floatbar: {
    width: '100%',
    maxWidth: 950,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  navMenuHide: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    color: '#000',
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    zIndex: 1,
    width: drawerWidth,
    height: `100vh`,
    overflowX: 'hidden',
    overflowY: 'scroll',
    paddingRight: 17,
    WebkitOverflowScrolling: 'touch',
    MsOverflowStyle: 'none',
    overflow: '-moz-scrollbars-none',
    backgroundColor: '#2f78f9',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    maxWidth: 860,
    display: `block`,
    height: `100vh`,
    boxShadow: '1px 1px 2px rgba(0, 0, 0, .1)',
    padding: theme.spacing.unit * 3,
    backgroundColor: '#fdfdfd',
    // overflowX: 'hidden',
    overflowY: 'scroll',
    paddingRight: 17,
    WebkitOverflowScrolling: 'touch',
    MsOverflowStyle: 'none',
    overflow: '-moz-scrollbars-none',
  },
  desktopHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  }
});

class Layout extends React.Component {

  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme, children, location } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <MainNav location={location} />
      </div>
    );

    return (
      <Paper className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <img src={Logo} alt="INSTAR Deutschland GmbH" className={classes.logo} />
            <div className={classes.floatbar}>
              <div className={classes.navMenuHide}>
                <ProductsMenu />
                <InstallationMenu />
                <MotionMenu />
                <RemoteMenu />
                <AdvancedMenu />
              </div>
              <IconButton
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuButton />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Transition location={location}>{children}</Transition>
          <div className={classes.desktopHide}><FloatingButtons /></div>
        </main>
      </Paper>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles, { withTheme: true })(Layout))
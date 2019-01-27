import React from 'react'
import Link from 'gatsby-link'

import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import TocButton from '@material-ui/icons/Toc'

import presets from "../../utils/presets"

const styles = {
    fab: {
      background: presets.brand,
      marginLeft: '5px',
      boxShadow: `none`,
      boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
      textDecoration: 'none',
      color: 'white'
    },
    toc: {
      fontSize: 24
    },
}

class MenuButton extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        <Fab color="primary"
          aria-label="toc"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          className={classes.fab}
        >
          <TocButton className={classes.menu} />
        </Fab>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <Link to="/FAQs/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>FAQs</MenuItem>
          </Link>
          <Link to="/Downloads/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Downloads</MenuItem>
          </Link>
          <Link to="/Products/Usermanuals/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Usermanuals</MenuItem>
          </Link>
          <Link to="/Products/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Products</MenuItem>
          </Link>
          <hr />
          <Link to="/Quick_Installation/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Quick Installation</MenuItem>
          </Link>
          <Link to="/Motion_Detection/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Motion Detection</MenuItem>
          </Link>
          <Link to="/Internet_Access/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Remote Access</MenuItem>
          </Link>
          <Link to="/Advanced_User/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>For Developer</MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(MenuButton)
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"

import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import SearchIcon from '@material-ui/icons/Search'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import CloudDownload from '@material-ui/icons/CloudDownload'
import LocalLibrary from '@material-ui/icons/LocalLibrary'
import ShoppingCartButton from '@material-ui/icons/ShoppingCart'
import AnnouncementButton from '@material-ui/icons/Announcement'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  navtitle: {
    color: theme.palette.background.paper,
    margin: '15px 0  10px 20px',
    boxShadow: '0 1px 2px -2px white',
  },
  navsubtitle: {
    color: theme.palette.background.paper,
  },
  navbutton: {
    color: theme.palette.background.paper,
  }
})

const ButtonLink01 = props => <Link to="/" {...props} />
const ButtonLink02 = props => <Link to="/FAQs/" {...props} />
const ButtonLink03 = props => <Link to="/Downloads/" {...props} />
const ButtonLink04 = props => <Link to="/Products/Usermanuals/" {...props} />

function NavHeader(props) {
  const { classes } = props;
  return (
    <List component="nav">
      <Typography variant="h5" className={classes.navtitle}>
        Support
        </Typography>
      <ListItem button component={ButtonLink01}>
        <ListItemIcon>
          <SearchIcon className={classes.navbutton} />
        </ListItemIcon>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Search
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink02}>
        <ListItemIcon>
          <QuestionAnswerIcon className={classes.navbutton} />
        </ListItemIcon>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          FAQs
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink03}>
        <ListItemIcon>
          <CloudDownload className={classes.navbutton} />
        </ListItemIcon>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Downloads
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink04}>
        <ListItemIcon>
          <LocalLibrary className={classes.navbutton} />
        </ListItemIcon>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Usermanuals
          </Typography>
      </ListItem>
      <a href="https://www.instar.de/?___store=de_english&___from_store=de_german" target="_blank" rel="noopener noreferrer">
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartButton className={classes.navbutton} />
          </ListItemIcon>
          <Typography variant="subtitle1" className={classes.navsubtitle}>
            Online Shop
          </Typography>
        </ListItem>
      </a>
      <a href="https://www.instar.de/privacy?___store=de_english&___from_store=de_german" target="_blank" rel="noopener noreferrer">
        <ListItem button>
          <ListItemIcon>
            <AnnouncementButton className={classes.navbutton} />
          </ListItemIcon>
          <Typography variant="subtitle1" className={classes.navsubtitle}>
            Privacy
          </Typography>
        </ListItem>
      </a>
    </List>
  );
}

NavHeader.propTypes = {
  classes: PropTypes.object.isRequired,
}

// export default withRoot(withStyles(styles)(NavHeader))

export default withStyles(styles, { withTheme: true })(NavHeader)
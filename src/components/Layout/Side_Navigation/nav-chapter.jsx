import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"

import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import CameraIcon from '@material-ui/icons/Camera'
import InstallationIcon from '@material-ui/icons/Build'
import MotionDetectionIcon from '@material-ui/icons/DirectionsRun'
import RemoteAccessIcon from '@material-ui/icons/PhonelinkRing'
import DevIcon from '@material-ui/icons/Code'
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

const ButtonLink06 = props => <Link to="/Products/" {...props} />
const ButtonLink07 = props => <Link to="/Quick_Installation/" {...props} />
const ButtonLink08 = props => <Link to="/Motion_Detection/" {...props} />
const ButtonLink09 = props => <Link to="/Internet_Access/" {...props} />
const ButtonLink10 = props => <Link to="/Advanced_User/" {...props} />

function ChapterNav(props) {
  const { classes } = props;
  return (
    <List component="nav">
      <Typography variant="h5" className={classes.navtitle}>
        Chapter
        </Typography>
      <ListItem button component={ButtonLink06}>
        <ListItemIcon>
          <CameraIcon className={classes.navbutton} />
        </ListItemIcon>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Products
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink07}>
        <ListItemIcon>
          <InstallationIcon className={classes.navbutton} />
        </ListItemIcon>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Quick Installation
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink08}>
        <ListItemIcon>
          <MotionDetectionIcon className={classes.navbutton} />
        </ListItemIcon>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Motion Detection
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink09}>
        <ListItemIcon>
          <RemoteAccessIcon className={classes.navbutton} />
        </ListItemIcon>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Remote Access
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink10}>
        <ListItemIcon>
          <DevIcon className={classes.navbutton} />
        </ListItemIcon>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          For Developers
          </Typography>
      </ListItem>
    </List>
  );
}

ChapterNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

// export default withRoot(withStyles(styles)(ChapterNav))

export default withStyles(styles, { withTheme: true })(ChapterNav)
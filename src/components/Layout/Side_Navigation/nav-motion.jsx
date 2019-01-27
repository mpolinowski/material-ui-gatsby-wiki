import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"

import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
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
  navsubtitleindent: {
    color: theme.palette.background.paper,
    marginLeft: 15,
  },
  navsubtitlesecindent: {
    color: theme.palette.background.paper,
    marginLeft: 25,
  },
  navbutton: {
    color: theme.palette.background.paper,
  }
})

const ButtonLink01 = props => <Link to="/Motion_Detection/Setup/" {...props} />
const ButtonLink02 = props => <Link to="/Motion_Detection/Setup/720p_Series/" {...props} />
const ButtonLink03 = props => <Link to="/Motion_Detection/Setup/VGA_Series/" {...props} />
const ButtonLink04 = props => <Link to="/Motion_Detection/Alarm_Notification/" {...props} />
const ButtonLink05 = props => <Link to="/Motion_Detection/Alarm_Notification/720p_Series/" {...props} />
const ButtonLink06 = props => <Link to="/Motion_Detection/Alarm_Notification/VGA_Series/" {...props} />
const ButtonLink07 = props => <Link to="/Motion_Detection/Alarm_Notification/Troubleshooting/" {...props} />
const ButtonLink08 = props => <Link to="/Motion_Detection/Alarm_Recording/" {...props} />
const ButtonLink09 = props => <Link to="/Motion_Detection/SD_Card_Access/" {...props} />
const ButtonLink10 = props => <Link to="/Motion_Detection/SD_Card_Access/Bitkinex/" {...props} />
const ButtonLink11 = props => <Link to="/Motion_Detection/SD_Card_Access/CuteFTP/" {...props} />
const ButtonLink12 = props => <Link to="/Motion_Detection/SD_Card_Access/DownThemAll/" {...props} />
const ButtonLink13 = props => <Link to="/Motion_Detection/SD_Card_Access/Interachy/" {...props} />
const ButtonLink14 = props => <Link to="/Motion_Detection/SD_Card_Access/DeepVacuum/" {...props} />
const ButtonLink15 = props => <Link to="/Motion_Detection/SD_Card_Access/SiteSucker/" {...props} />
const ButtonLink16 = props => <Link to="/Motion_Detection/SD_Card_Access/SimpleWget/" {...props} />
const ButtonLink17 = props => <Link to="/Motion_Detection/Alarm_FTP_Upload/" {...props} />
const ButtonLink18 = props => <Link to="/Motion_Detection/Alarm_FTP_Upload/720p_Series/" {...props} />
const ButtonLink19 = props => <Link to="/Motion_Detection/Alarm_FTP_Upload/VGA_Series/" {...props} />
const ButtonLink20 = props => <Link to="/Motion_Detection/Router_as_a_FTP_Server/" {...props} />
const ButtonLink21 = props => <Link to="/Motion_Detection/Router_as_a_FTP_Server/AVM_Fritzbox_as_FTP_Server/" {...props} />
const ButtonLink22 = props => <Link to="/Motion_Detection/Router_as_a_FTP_Server/Telekom_Speedport_as_FTP_Server/" {...props} />
const ButtonLink23 = props => <Link to="/Motion_Detection/Router_as_a_FTP_Server/QNAP_as_FTP_Server/" {...props} />
const ButtonLink24 = props => <Link to="/Motion_Detection/Router_as_a_FTP_Server/WD_MyCloud_as_FTP_Server/" {...props} />
const ButtonLink25 = props => <Link to="/Motion_Detection/Router_as_a_FTP_Server/Synology_as_FTP_Server/" {...props} />
const ButtonLink26 = props => <Link to="/Motion_Detection/FTP_Server_Setup/" {...props} />
const ButtonLink27 = props => <Link to="/Motion_Detection/FTP_Server_Setup/Install_FileZilla_Server/" {...props} />
const ButtonLink28 = props => <Link to="/Motion_Detection/Alarm_Server/" {...props} />
const ButtonLink29 = props => <Link to="/Motion_Detection/INSTAR_Cloud/" {...props} />
const ButtonLink30 = props => <Link to="/Motion_Detection/INSTAR_Cloud/Create_User_Account/" {...props} />
const ButtonLink31 = props => <Link to="/Motion_Detection/INSTAR_Cloud/Storage/" {...props} />
const ButtonLink32 = props => <Link to="/Motion_Detection/INSTAR_Cloud/User/" {...props} />
const ButtonLink33 = props => <Link to="/Motion_Detection/INSTAR_Cloud/Administration/" {...props} />
const ButtonLink34 = props => <Link to="/Motion_Detection/INSTAR_Cloud/Alarm_Recordings/" {...props} />
const ButtonLink35 = props => <Link to="/Motion_Detection/INSTAR_Cloud/Camera_Sets/" {...props} />

function MotionNav(props) {
  const { classes } = props;
  return (
    <List component="nav">
      <Typography variant="h5" className={classes.navtitle}>
        Motion Detection
        </Typography>
      <ListItem button component={ButtonLink01}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Setup
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink01}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ 1080p Series
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink02}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ 720p Series
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink03}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ VGA Series
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink04}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Alarm Notification
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink04}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ 1080p Series
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink05}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ 720p Series
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink06}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ VGA Series
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink07}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Troubleshooting
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink08}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Video Recording
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink09}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          SD Card Access
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink10}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Bitkinex
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink11}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ CuteFTP
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink12}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ DownThemAll
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink13}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Interachy
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink14}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ DeepVacuum
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink15}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ SiteSucker
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink16}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ SimpleWget
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink17}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Alarm FTP Upload
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink17}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ 1080p Series
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink18}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ 720p Series
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink19}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ VGA Series
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink20}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Router as a FTP Server
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink21}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ AVM Fritzbox
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink22}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Telekom Speedport
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink23}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ QNAP
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink24}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ WD MyCloud
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink25}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Synology
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink26}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          FTP Server Setup
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink27}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ FTP Server Installation
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink28}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Alarm Server
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink29}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          INSTAR Cloud
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink30}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Create a User Account
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink31}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Storage
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink32}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ User Management
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink33}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Administration
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink34}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Alarm Recordings
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink35}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Camera Sets
          </Typography>
      </ListItem>
    </List>
  );
}

MotionNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

// export default withRoot(withStyles(styles)(MotionNav))

export default withStyles(styles, { withTheme: true })(MotionNav)
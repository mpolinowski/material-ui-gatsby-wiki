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

const ButtonLink01 = props => <Link to="/Quick_Installation/How_Does_An_IP_Camera_Work/" {...props} />
const ButtonLink02 = props => <Link to="/Quick_Installation/After_Unpacking/" {...props} />
const ButtonLink03 = props => <Link to="/Quick_Installation/First_Steps/" {...props} />
const ButtonLink04 = props => <Link to="/Quick_Installation/Power_over_Ethernet/" {...props} />
const ButtonLink05 = props => <Link to="/Quick_Installation/Powerline/" {...props} />
const ButtonLink06 = props => <Link to="/Quick_Installation/Direct_LAN_Connection/" {...props} />
const ButtonLink07 = props => <Link to="/Quick_Installation/Alternative_IP_Scanner/" {...props} />
const ButtonLink08 = props => <Link to="/Quick_Installation/Alternative_IP_Scanner/Angry_IP_Scanner/" {...props} />
const ButtonLink09 = props => <Link to="/Quick_Installation/Alternative_IP_Scanner/Fing_CLI/" {...props} />
const ButtonLink10 = props => <Link to="/Quick_Installation/Alternative_IP_Scanner/Fing_Mobile/" {...props} />
const ButtonLink11 = props => <Link to="/Quick_Installation/Language_Selection/" {...props} />
const ButtonLink12 = props => <Link to="/Quick_Installation/Live_Video/" {...props} />
const ButtonLink13 = props => <Link to="/Quick_Installation/Live_Video/ActiveX/" {...props} />
const ButtonLink14 = props => <Link to="/Quick_Installation/Live_Video/QuickTime/" {...props} />
const ButtonLink15 = props => <Link to="/Quick_Installation/Live_Video/MJPEG/" {...props} />
const ButtonLink16 = props => <Link to="/Quick_Installation/Live_Video/Troubleshooting/Avast/" {...props} />
const ButtonLink17 = props => <Link to="/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2013/" {...props} />
const ButtonLink18 = props => <Link to="/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2014/" {...props} />
const ButtonLink19 = props => <Link to="/Quick_Installation/Live_Video/Troubleshooting/Kaspersky_2017/" {...props} />
const ButtonLink20 = props => <Link to="/Quick_Installation/Live_Video/Troubleshooting/AVG/" {...props} />
const ButtonLink21 = props => <Link to="/Quick_Installation/Live_Video/Troubleshooting/AVIRA/" {...props} />
const ButtonLink22 = props => <Link to="/Quick_Installation/Live_Video/Troubleshooting/F-Secure/" {...props} />
const ButtonLink23 = props => <Link to="/Quick_Installation/Live_Video/Troubleshooting/GDATA/" {...props} />
const ButtonLink24 = props => <Link to="/Quick_Installation/Creating_User_Accounts/" {...props} />
const ButtonLink25 = props => <Link to="/Quick_Installation/WebUI_And_Firmware_Upgrade/" {...props} />
const ButtonLink26 = props => <Link to="/Quick_Installation/WebUI_And_Firmware_Upgrade/720p_Cameras/" {...props} />
const ButtonLink27 = props => <Link to="/Quick_Installation/WebUI_And_Firmware_Upgrade/VGA_Cameras/" {...props} />
const ButtonLink28 = props => <Link to="/Quick_Installation/How_To_Clear_Your_Browsing_History/" {...props} />
const ButtonLink29 = props => <Link to="/Quick_Installation/How_To_Clear_Your_Browsing_History/Internet_Explorer/" {...props} />
const ButtonLink30 = props => <Link to="/Quick_Installation/How_To_Clear_Your_Browsing_History/Mozilla_Firefox/" {...props} />
const ButtonLink31 = props => <Link to="/Quick_Installation/How_To_Clear_Your_Browsing_History/Google_Chromium/" {...props} />
const ButtonLink32 = props => <Link to="/Quick_Installation/How_To_Clear_Your_Browsing_History/Opera/" {...props} />
const ButtonLink33 = props => <Link to="/Quick_Installation/How_To_Clear_Your_Browsing_History/Microsoft_Edge/" {...props} />
const ButtonLink34 = props => <Link to="/Quick_Installation/How_To_Clear_Your_Browsing_History/Vivaldi/" {...props} />
const ButtonLink35 = props => <Link to="/Quick_Installation/Set_Up_A_Wireless_Connection/" {...props} />
const ButtonLink36 = props => <Link to="/Quick_Installation/Set_Up_A_Wireless_Connection/WPS_Plug_and_Play/" {...props} />
const ButtonLink37 = props => <Link to="/Quick_Installation/ONVIF/" {...props} />
const ButtonLink38 = props => <Link to="/Quick_Installation/ONVIF/Software_Integration/" {...props} />

function InstallNav(props) {
  const { classes } = props;
  return (
    <List component="nav">
      <Typography variant="h5" className={classes.navtitle}>
        Quick Installation
        </Typography>
      <ListItem button component={ButtonLink01}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Getting Started
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink02}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          After Unpacking
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink03}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          First Steps
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink04}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Power over Ethernet
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink05}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Powerline
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink06}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Direct LAN Connection
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink07}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Find your Camera
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink07}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ INSTAR Camera Tool
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink08}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Angry IP Scanner
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink09}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Fing CLI
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink10}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Fing Mobile
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink11}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Language Selection
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink12}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Live Video (Flash)
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink13}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ ActiveX
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink14}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ QuickTime
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink15}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ MJPEG
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink16}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Avast
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink17}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Kaspersky 2013
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink18}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Kaspersky 2014
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink19}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Kaspersky 2017
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink20}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ AVG
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink21}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ AVIRA
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink22}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ F-Secure
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink23}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ GDATA
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink24}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          User Management
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink25}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          WebUI and Firmware Upgrade
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink25}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ 1080p Cameras
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink26}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ 720p Cameras
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink27}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ VGA Cameras
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink28}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Clear your Browsing History
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink29}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Internet Explorer
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink30}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Mozilla Firefox
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink31}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Google Chrome
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink32}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Opera
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink33}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Microsoft Edge
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink34}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Vivaldi
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink35}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Set up a Wireless Connection
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink36}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ WPS Function
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink37}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          ONVIF
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink38}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Software Integration
          </Typography>
      </ListItem>
    </List>
  );
}

InstallNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

// export default withRoot(withStyles(styles)(InstallNav))

export default withStyles(styles, { withTheme: true })(InstallNav)
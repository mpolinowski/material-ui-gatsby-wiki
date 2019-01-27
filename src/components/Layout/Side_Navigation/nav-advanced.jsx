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

const ButtonLinkVPN = props => <Link to="/Advanced_User/VPN_AVM_Fritzbox/" {...props} />
const ButtonLinkWebsite = props => <Link to="/Advanced_User/Website_Integration/" {...props} />
const ButtonLinkWebsiteHD = props => <Link to="/Advanced_User/Website_Integration/HD_Camera_Integration/" {...props} />
const ButtonLinkWebsiteCambozola = props => <Link to="/Advanced_User/Website_Integration/Cambozola/" {...props} />
const ButtonLinkWebsiteOIPCM = props => <Link to="/Advanced_User/Website_Integration/Open_IP_Camera_Manager/" {...props} />
const ButtonLinkCGI = props => <Link to="/Advanced_User/CGI_Commands/" {...props} />
const ButtonLinkCGI1080 = props => <Link to="/1080p_Series_CGI_List/" {...props} />
const ButtonLinkCGI720 = props => <Link to="/720p_Series_CGI_List/" {...props} />
const ButtonLinkCGIVGA = props => <Link to="/Advanced_User/CGI_Commands/VGA_Series_CGI_List/" {...props} />
const ButtonLinkMQTT = props => <Link to="/Advanced_User/Node-RED_and_MQTT/" {...props} />
const ButtonLinkMQTTIntro = props => <Link to="/Advanced_User/Node-RED_and_MQTT/Introduction/" {...props} />
const ButtonLinkMQTTInter = props => <Link to="/Advanced_User/Node-RED_and_MQTT/Intermediate/" {...props} />
const ButtonLinkMQTTAdv = props => <Link to="/Advanced_User/Node-RED_and_MQTT/Advanced/" {...props} />
const ButtonLinkMQTTPro = props => <Link to="/Advanced_User/Node-RED_and_MQTT/Projects/" {...props} />
const ButtonLinkMQTTPhone = props => <Link to="/Advanced_User/Node-RED_and_MQTT/Smartphone_Integration/" {...props} />
const ButtonLinkHAB = props => <Link to="/Advanced_User/OpenHAB_Home_Automation/" {...props} />
const ButtonLinkHABInstall = props => <Link to="/Advanced_User/OpenHAB_Home_Automation/OpenHAB_Installation_on_Windows/" {...props} />
const ButtonLinkHABNodeRed = props => <Link to="/Advanced_User/OpenHAB_Home_Automation/Node-RED_Installation_on_Windows/" {...props} />
const ButtonLinkHABMQTT = props => <Link to="/Advanced_User/OpenHAB_Home_Automation/Mosquitto_Installation_on_Windows/" {...props} />
const ButtonLinkHABIPCam = props => <Link to="/Advanced_User/OpenHAB_Home_Automation/IP_Camera_Control/" {...props} />
const ButtonLinkHABian = props => <Link to="/Advanced_User/openHABian_on_Raspberry_Pi/" {...props} />
const ButtonLinkHABianHAB = props => <Link to="/Advanced_User/openHABian_on_Raspberry_Pi/OpenHAB_Setup/" {...props} />
const ButtonLinkHABianRED = props => <Link to="/Advanced_User/openHABian_on_Raspberry_Pi/Node-RED_Setup/" {...props} />
const ButtonLinkHABianMosquitto = props => <Link to="/Advanced_User/openHABian_on_Raspberry_Pi/Mosquitto_Setup/" {...props} />
const ButtonLinkHABianProjects = props => <Link to="/Advanced_User/openHABian_on_Raspberry_Pi/Projects/" {...props} />
const ButtonLinkIOBroker = props => <Link to="/Advanced_User/IOBroker_on_Raspberry_Pi/" {...props} />
const ButtonLinkIOBrokerWin = props => <Link to="/Advanced_User/IOBroker_on_Raspberry_Pi/IOBroker_Windows_10_Installation/" {...props} />
const ButtonLinkRaspian = props => <Link to="/Advanced_User/IOBroker_on_Raspberry_Pi/Raspian_Preparation/" {...props} />
const ButtonLinkIOBrokerInstall = props => <Link to="/Advanced_User/IOBroker_on_Raspberry_Pi/IOBroker_Installation/" {...props} />
const ButtonLinkIOBrokerSetup = props => <Link to="/Advanced_User/IOBroker_on_Raspberry_Pi/IOBroker_Setup/" {...props} />
const ButtonLinkVisualisation = props => <Link to="/Advanced_User/IOBroker_on_Raspberry_Pi/Visualisation/" {...props} />
const ButtonLinkMotionEye = props => <Link to="/Advanced_User/IOBroker_on_Raspberry_Pi/motionEye/" {...props} />
const ButtonLinkAlexaNode = props => <Link to="/Advanced_User/Alexa_Voice_Control_without_Cloud/" {...props} />
const ButtonLinkIFTTTNode = props => <Link to="/Advanced_User/Node-RED_and_IFTTT/" {...props} />
const ButtonLinkZigBee = props => <Link to="/Advanced_User/XiaoMi_Home_Zigbee2MQTT/" {...props} />
const ButtonLinkTasker = props => <Link to="/Advanced_User/Tasker/" {...props} />
const ButtonLinkRestoreWeb = props => <Link to="/Advanced_User/Restore_WebUI/" {...props} />
const ButtonLinkRestoreFirm = props => <Link to="/Advanced_User/Restore_Firmware/" {...props} />
const ButtonLinkRestoreFirmVGA = props => <Link to="/Advanced_User/Restore_Firmware/VGA_Models/" {...props} />
const ButtonLinkRestoreCTTV = props => <Link to="/Advanced_User/CCTV_vs_IP/" {...props} />


function ProductNav(props) {
  const { classes } = props;
  return (
    <List component="nav">
      <Typography variant="h5" className={classes.navtitle}>
        For Developers
        </Typography>
      <ListItem button component={ButtonLinkVPN}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          VPN Tunnel
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkWebsite}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Website Integration
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkWebsiteHD}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ HD Cameras (HTML5)
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkWebsiteCambozola}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Cambozola (Java)
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkWebsiteOIPCM}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ OIPCM (PHP)
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkCGI}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          CGI Commands
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkCGI1080}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ 1080p Models
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkCGI720}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ 720p Models
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkCGIVGA}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ VGA Models
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkMQTT}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Node-RED and MQTT
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkMQTTIntro}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Introduction
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkMQTTInter}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Intermediate
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkMQTTAdv}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Advanced
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkMQTTPro}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Projects
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkMQTTPhone}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Phone Integration
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkHAB}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          OpenHAB 2
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkHABInstall}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ OpenHAB 2 Installation
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkHABNodeRed}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Node-RED Installation
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkHABMQTT}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Mosquitto Installation
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkHABIPCam}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IP Camera Control
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkHABian}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Raspberry Pi & openHABian
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkHABianHAB}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ OpenHAB Setup
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkHABianRED}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Node-RED Setup
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkHABianMosquitto}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Mosquitto Setup
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkHABianProjects}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Projects
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkIOBroker}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          ioBroker
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkIOBrokerWin}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Windows 10 (optional)
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkRaspian}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Raspian Preparation
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkIOBrokerInstall}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ ioBroker Installation
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkIOBrokerSetup}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ ioBroker Setup
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkVisualisation}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Visualisation
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkMotionEye}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ motionEye
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkAlexaNode}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Node-RED & Alexa
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkIFTTTNode}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Node-RED & IFTTT
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkZigBee}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          ZigBee & XiaoMi Home
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkTasker}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Tasker Automation
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkRestoreWeb}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Restore WebUI
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkRestoreFirm}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Restore Firmware
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkRestoreFirm}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ 720p Models
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkRestoreFirmVGA}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ VGA Models
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLinkRestoreCTTV}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Analogue vs Digital
          </Typography>
      </ListItem>
    </List>
  );
}

ProductNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(ProductNav)









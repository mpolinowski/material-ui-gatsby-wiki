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


const CGICommands = props => <Link to="/Advanced_User/CGI_Commands/" {...props} />
const CGICommands1080p = props => <Link to="/1080p_Series_CGI_List/" {...props} />

const CGICommands1080pAlarm = props => <Link to="/1080p_Series_CGI_List/Alarm_Menu/" {...props} />
const CGICommands1080pAlarmActions = props => <Link to="/1080p_Series_CGI_List/Alarm_Menu/Actions/" {...props} />
const CGICommands1080pAlarmAS = props => <Link to="/1080p_Series_CGI_List/Alarm_Menu/Alarm_Server/" {...props} />
const CGICommands1080pAlarmAreas = props => <Link to="/1080p_Series_CGI_List/Alarm_Menu/Areas/" {...props} />
const CGICommands1080pAlarmPush = props => <Link to="/1080p_Series_CGI_List/Alarm_Menu/Push_Service/" {...props} />
const CGICommands1080pAlarmSchedule = props => <Link to="/1080p_Series_CGI_List/Alarm_Menu/Schedule/" {...props} />

const CGICommands1080pFeatures = props => <Link to="/1080p_Series_CGI_List/Features_Menu/" {...props} />
const CGICommands1080pFeaturesEmail = props => <Link to="/1080p_Series_CGI_List/Features_Menu/Email/" {...props} />
const CGICommands1080pFeaturesFTP = props => <Link to="/1080p_Series_CGI_List/Features_Menu/FTP/" {...props} />
const CGICommands1080pFeaturesIR = props => <Link to="/1080p_Series_CGI_List/Features_Menu/IR_Nightvision/" {...props} />
const CGICommands1080pFeaturesRec = props => <Link to="/1080p_Series_CGI_List/Features_Menu/Manual_Recording/" {...props} />
const CGICommands1080pFeaturesPTZ = props => <Link to="/1080p_Series_CGI_List/Features_Menu/PTZ/" {...props} />
const CGICommands1080pFeaturesPTZTour = props => <Link to="/1080p_Series_CGI_List/Features_Menu/PTZ-Tour/" {...props} />
const CGICommands1080pFeaturesSD = props => <Link to="/1080p_Series_CGI_List/Features_Menu/SD_Card/" {...props} />
const CGICommands1080pFeaturesStatus = props => <Link to="/1080p_Series_CGI_List/Features_Menu/Status_LEDs/" {...props} />

const CGICommands1080pMulti = props => <Link to="/1080p_Series_CGI_List/Multimedia_Menu/" {...props} />
const CGICommands1080pMultiAudio = props => <Link to="/1080p_Series_CGI_List/Multimedia_Menu/Audio/" {...props} />
const CGICommands1080pMultiImage = props => <Link to="/1080p_Series_CGI_List/Multimedia_Menu/Image/" {...props} />
const CGICommands1080pMultiVideo = props => <Link to="/1080p_Series_CGI_List/Multimedia_Menu/Video/" {...props} />
const CGICommands1080pMultiOverlays = props => <Link to="/1080p_Series_CGI_List/Multimedia_Menu/Overlays/" {...props} />
const CGICommands1080pMultiPrivacy = props => <Link to="/1080p_Series_CGI_List/Multimedia_Menu/Privacy_Mask/" {...props} />

const CGICommands1080pNet = props => <Link to="/1080p_Series_CGI_List/Network_Menu/" {...props} />
const CGICommands1080pNetDDNS = props => <Link to="/1080p_Series_CGI_List/Network_Menu/Remote_Access/" {...props} />
const CGICommands1080pNetConfig = props => <Link to="/1080p_Series_CGI_List/Network_Menu/IP_Configuration/" {...props} />
const CGICommands1080pNetUPnP = props => <Link to="/1080p_Series_CGI_List/Network_Menu/UPnP/" {...props} />
const CGICommands1080pNetWiFi = props => <Link to="/1080p_Series_CGI_List/Network_Menu/WiFi/" {...props} />
const CGICommands1080pNetONVIF = props => <Link to="/1080p_Series_CGI_List/Network_Menu/ONVIF/" {...props} />

const CGICommands1080pRec = props => <Link to="/1080p_Series_CGI_List/Recording_Menu/" {...props} />
const CGICommands1080pRecPhotoseries = props => <Link to="/1080p_Series_CGI_List/Recording_Menu/Photoseries/" {...props} />
const CGICommands1080pRecVideo = props => <Link to="/1080p_Series_CGI_List/Recording_Menu/Video/" {...props} />

const CGICommands1080pSystem = props => <Link to="/1080p_Series_CGI_List/System_Menu/" {...props} />
const CGICommands1080pSystemDate = props => <Link to="/1080p_Series_CGI_List/System_Menu/Date_Time/" {...props} />
const CGICommands1080pSystemLanguage = props => <Link to="/1080p_Series_CGI_List/System_Menu/Language/" {...props} />
const CGICommands1080pSystemInfo = props => <Link to="/1080p_Series_CGI_List/System_Menu/Overview/" {...props} />
const CGICommands1080pSystemReboot = props => <Link to="/1080p_Series_CGI_List/System_Menu/Reboot/" {...props} />
const CGICommands1080pSystemLog = props => <Link to="/1080p_Series_CGI_List/System_Menu/System_Log/" {...props} />
const CGICommands1080pSystemReset = props => <Link to="/1080p_Series_CGI_List/System_Menu/Reset/" {...props} />
const CGICommands1080pSystemUpdate = props => <Link to="/1080p_Series_CGI_List/System_Menu/Update/" {...props} />
const CGICommands1080pSystemUser = props => <Link to="/1080p_Series_CGI_List/System_Menu/User/" {...props} />


function ProductNav(props) {
  const { classes } = props;
  return (
    <List component="nav">
      <Typography variant="h5" className={classes.navtitle}>
        For Developers
        </Typography>
      <ListItem button component={CGICommands}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          CGI Overview
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080p}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          1080p Series CGI Commands
          </Typography>
      </ListItem>

      <ListItem button component={CGICommands1080pAlarm}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Alarm Menu
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pAlarmActions}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Actions
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pAlarmAS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Alarm Server
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pAlarmAreas}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Alarm Areas
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pAlarmPush}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Push Service
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pAlarmSchedule}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Schedule
          </Typography>
      </ListItem>


      <ListItem button component={CGICommands1080pMulti}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Multimedia Menu
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pMultiAudio}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Audio
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pMultiImage}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Image
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pMultiVideo}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Video
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pMultiOverlays}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Image
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pMultiPrivacy}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Video
          </Typography>
      </ListItem>


      <ListItem button component={CGICommands1080pNet}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Network Menu
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pNetDDNS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Remote Access
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pNetConfig}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IP Configuration
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pNetONVIF}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › ONVIF
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pNetUPnP}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › UPnP
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pNetWiFi}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › WiFi
          </Typography>
      </ListItem>


      <ListItem button component={CGICommands1080pRec}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Recording Menu
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pRecPhotoseries}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Photoseries
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pRecVideo}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Video
          </Typography>
      </ListItem>


      <ListItem button component={CGICommands1080pFeatures}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Features Menu
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pFeaturesEmail}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Email
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pFeaturesFTP}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › FTP
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pFeaturesIR}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IR LEDs
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pFeaturesRec}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Manual Recording
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pFeaturesPTZ}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › PTZ
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pFeaturesPTZTour}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › PTZ Tour
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pFeaturesSD}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › SD Card
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pFeaturesStatus}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Status LEDs
          </Typography>
      </ListItem>


      <ListItem button component={CGICommands1080pSystem}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ System Menu
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pSystemDate}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Date & Time
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pSystemInfo}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Overview
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pSystemLog}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › System Log
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pSystemReset}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Reset
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pSystemReboot}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Reboot
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pSystemLanguage}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Language
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pSystemUpdate}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Update
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands1080pSystemUser}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › User Management
          </Typography>
      </ListItem>


    </List>
  );
}

ProductNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(ProductNav)
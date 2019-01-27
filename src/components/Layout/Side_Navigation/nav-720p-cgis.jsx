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
const CGICommands720p = props => <Link to="/720p_Series_CGI_List/" {...props} />

const CGICommands720pAlarm = props => <Link to="/720p_Series_CGI_List/Alarm_Menu/" {...props} />
const CGICommands720pAlarmActions = props => <Link to="/720p_Series_CGI_List/Alarm_Menu/Actions/" {...props} />
const CGICommands720pAlarmAS = props => <Link to="/720p_Series_CGI_List/Alarm_Menu/Alarm_Server/" {...props} />
const CGICommands720pAlarmAreas = props => <Link to="/720p_Series_CGI_List/Alarm_Menu/Areas/" {...props} />
const CGICommands720pAlarmAudio = props => <Link to="/720p_Series_CGI_List/Alarm_Menu/Audio_Alarm/" {...props} />
const CGICommands720pAlarmEmail = props => <Link to="/720p_Series_CGI_List/Alarm_Menu/Email/" {...props} />
const CGICommands720pAlarmFTP = props => <Link to="/720p_Series_CGI_List/Alarm_Menu/FTP/" {...props} />
const CGICommands720pPrivacy = props => <Link to="/720p_Series_CGI_List/Alarm_Menu/Privacy_Mask/" {...props} />
const CGICommands720pAlarmSchedule = props => <Link to="/720p_Series_CGI_List/Alarm_Menu/Schedule/" {...props} />
const CGICommands720pAlarmSD = props => <Link to="/720p_Series_CGI_List/Alarm_Menu/SD_Card/" {...props} />
const CGICommands720pAlarmSMTP = props => <Link to="/720p_Series_CGI_List/Alarm_Menu/SMTP_Server/" {...props} />

const CGICommands720pMulti = props => <Link to="/720p_Series_CGI_List/Multimedia_Menu/" {...props} />
const CGICommands720pMultiAudio = props => <Link to="/720p_Series_CGI_List/Multimedia_Menu/Audio/" {...props} />
const CGICommands720pMultiImage = props => <Link to="/720p_Series_CGI_List/Multimedia_Menu/Image/" {...props} />
const CGICommands720pMultiVideo = props => <Link to="/720p_Series_CGI_List/Multimedia_Menu/Video/" {...props} />

const CGICommands720pNet = props => <Link to="/720p_Series_CGI_List/Network_Menu/" {...props} />
const CGICommands720pNetDDNS = props => <Link to="/720p_Series_CGI_List/Network_Menu/DDNS/" {...props} />
const CGICommands720pNetConfig = props => <Link to="/720p_Series_CGI_List/Network_Menu/IP_Config/" {...props} />
const CGICommands720pNetP2P = props => <Link to="/720p_Series_CGI_List/Network_Menu/P2P/" {...props} />
const CGICommands720pNetPush = props => <Link to="/720p_Series_CGI_List/Network_Menu/Push_Service/" {...props} />
const CGICommands720pNetUPnP = props => <Link to="/720p_Series_CGI_List/Network_Menu/UPnP/" {...props} />
const CGICommands720pNetWiFi = props => <Link to="/720p_Series_CGI_List/Network_Menu/WiFi/" {...props} />

const CGICommands720pRec = props => <Link to="/720p_Series_CGI_List/Recording_Menu/" {...props} />
const CGICommands720pRecPhotoseries = props => <Link to="/720p_Series_CGI_List/Recording_Menu/Photoseries/" {...props} />
const CGICommands720pRecSchedule = props => <Link to="/720p_Series_CGI_List/Recording_Menu/Schedule/" {...props} />
const CGICommands720pRecVideo = props => <Link to="/720p_Series_CGI_List/Recording_Menu/Video/" {...props} />

const CGICommands720pSoftware = props => <Link to="/720p_Series_CGI_List/Software_Menu/" {...props} />
const CGICommands720pSoftwareBack = props => <Link to="/720p_Series_CGI_List/Software_Menu/Backup-Restore/" {...props} />
const CGICommands720pSoftwareLang = props => <Link to="/720p_Series_CGI_List/Software_Menu/Language/" {...props} />
const CGICommands720pSoftwareReboot = props => <Link to="/720p_Series_CGI_List/Software_Menu/Reboot-Reset/" {...props} />
const CGICommands720pSoftwareUpdate= props => <Link to="/720p_Series_CGI_List/Software_Menu/Update/" {...props} />

const CGICommands720pSystem = props => <Link to="/720p_Series_CGI_List/System_Menu/" {...props} />
const CGICommands720pSystemDate = props => <Link to="/720p_Series_CGI_List/System_Menu/Date-Time/" {...props} />
const CGICommands720pSystemInfo = props => <Link to="/720p_Series_CGI_List/System_Menu/Info/" {...props} />
const CGICommands720pSystemIR = props => <Link to="/720p_Series_CGI_List/System_Menu/IR_LEDs/" {...props} />
const CGICommands720pSystemLog = props => <Link to="/720p_Series_CGI_List/System_Menu/Log/" {...props} />
const CGICommands720pSystemONVIF = props => <Link to="/720p_Series_CGI_List/System_Menu/ONVIF/" {...props} />
const CGICommands720pSystemPTZ = props => <Link to="/720p_Series_CGI_List/System_Menu/PTZ/" {...props} />
const CGICommands720pSystemPTZTour = props => <Link to="/720p_Series_CGI_List/System_Menu/PTZ_Tour/" {...props} />
const CGICommands720pSystemStatus = props => <Link to="/720p_Series_CGI_List/System_Menu/Status_LED/" {...props} />
const CGICommands720pSystemUser = props => <Link to="/720p_Series_CGI_List/System_Menu/User/" {...props} />

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
      <ListItem button component={CGICommands720p}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          720p Series CGI Commands
          </Typography>
      </ListItem>

      <ListItem button component={CGICommands720pAlarm}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Alarm Menu
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pAlarmActions}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Actions
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pAlarmAS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Alarm Server
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pAlarmAreas}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Alarm Areas
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pAlarmAudio}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Audio Alarm
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pAlarmEmail}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Email
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pAlarmFTP}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › FTP
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pPrivacy}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Privacy Mask
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pAlarmSchedule}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Schedule
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pAlarmSD}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › SD Card
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pAlarmSMTP}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › SMTP
          </Typography>
      </ListItem>


      <ListItem button component={CGICommands720pMulti}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Multimedia Menu
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pMultiAudio}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Audio
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pMultiImage}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Image
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pMultiVideo}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Video
          </Typography>
      </ListItem>


      <ListItem button component={CGICommands720pNet}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Network Menu
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pNetDDNS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › DDNS
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pNetConfig}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IP Configuration
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pNetP2P}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › P2P
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pNetPush}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Push Service
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pNetUPnP}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › UPnP
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pNetWiFi}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › WiFi
          </Typography>
      </ListItem>


      <ListItem button component={CGICommands720pRec}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Recording Menu
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pRecPhotoseries}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Photoseries
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pRecSchedule}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Schedule
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pRecVideo}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Video
          </Typography>
      </ListItem>


      <ListItem button component={CGICommands720pSoftware}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Software Menu
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pSoftwareBack}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Backup & Restore
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pSoftwareLang}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Language
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pSoftwareReboot}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Reboot & Reset
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pSoftwareUpdate}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Update
          </Typography>
      </ListItem>



      <ListItem button component={CGICommands720pSystem}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ System Menu
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pSystemDate}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Date & Time
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pSystemInfo}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Info
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pSystemIR}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IR LEDs
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pSystemLog}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › System Log
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pSystemONVIF}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › ONVIF
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pSystemPTZ}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › PTZ
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pSystemPTZTour}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › PTZ Tour
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pSystemStatus}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Status LEDs
          </Typography>
      </ListItem>
      <ListItem button component={CGICommands720pSystemUser}>
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
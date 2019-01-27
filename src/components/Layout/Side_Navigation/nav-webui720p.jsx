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

const Overview = props => <Link to="/Web_User_Interface/1080p_Series/Overview/" {...props} />
const Web720p = props => <Link to="/Web_User_Interface/720p_Series/" {...props} />

const Software = props => <Link to="/Web_User_Interface/720p_Series/Software/" {...props} />
const SoftwareLang = props => <Link to="/Web_User_Interface/720p_Series/Software/Language/" {...props} />
const SoftwareReboot = props => <Link to="/Web_User_Interface/720p_Series/Software/Reboot_Reset/" {...props} />
const SoftwareBackup = props => <Link to="/Web_User_Interface/720p_Series/Software/Backup/" {...props} />
const SoftwareUpdate = props => <Link to="/Web_User_Interface/720p_Series/Software/Update/" {...props} />

const Network = props => <Link to="/Web_User_Interface/720p_Series/Network/" {...props} />
const NetworkIPConf = props => <Link to="/Web_User_Interface/720p_Series/Network/IP_Configuration/" {...props} />
const NetworkWiFi = props => <Link to="/Web_User_Interface/720p_Series/Network/WiFi/" {...props} />
const NetworkDDNS = props => <Link to="/Web_User_Interface/720p_Series/Network/DDNS/" {...props} />
const NetworkP2P = props => <Link to="/Web_User_Interface/720p_Series/Network/P2P/" {...props} />
const NetworkUPnP = props => <Link to="/Web_User_Interface/720p_Series/Network/UPnP/" {...props} />
const NetworkPush = props => <Link to="/Web_User_Interface/720p_Series/Network/Push_Service/" {...props} />

const System = props => <Link to="/Web_User_Interface/720p_Series/System/" {...props} />
const SystemInfo = props => <Link to="/Web_User_Interface/720p_Series/System/Info/" {...props} />
const SystemDate = props => <Link to="/Web_User_Interface/720p_Series/System/Date_Time/" {...props} />
const SystemUser = props => <Link to="/Web_User_Interface/720p_Series/System/User/" {...props} />
const SystemStatus = props => <Link to="/Web_User_Interface/720p_Series/System/Status_LED/" {...props} />
const SystemIR = props => <Link to="/Web_User_Interface/720p_Series/System/IR_LEDs/" {...props} />
const SystemONVIF = props => <Link to="/Web_User_Interface/720p_Series/System/ONVIF/" {...props} />
const SystemPTZ = props => <Link to="/Web_User_Interface/720p_Series/System/PTZ/" {...props} />
const SystemPTZTour = props => <Link to="/Web_User_Interface/720p_Series/System/PTZ_Tour/" {...props} />
const SystemLog = props => <Link to="/Web_User_Interface/720p_Series/System/System_Log/" {...props} />

const Multimedia = props => <Link to="/Web_User_Interface/720p_Series/Multimedia/" {...props} />
const MultimediaVideo = props => <Link to="/Web_User_Interface/720p_Series/Multimedia/Video/" {...props} />
const MultimediaImage = props => <Link to="/Web_User_Interface/720p_Series/Multimedia/Image/" {...props} />
const MultimediaPrivacy = props => <Link to="/Web_User_Interface/720p_Series/Multimedia/Privacy_Mask/" {...props} />
const MultimediaAudio = props => <Link to="/Web_User_Interface/720p_Series/Multimedia/Audio/" {...props} />

const Alarm = props => <Link to="/Web_User_Interface/720p_Series/Alarm/" {...props} />
const AlarmAreas = props => <Link to="/Web_User_Interface/720p_Series/Alarm/Areas/" {...props} />
const AlarmActions = props => <Link to="/Web_User_Interface/720p_Series/Alarm/Actions/" {...props} />
const AlarmSchedule = props => <Link to="/Web_User_Interface/720p_Series/Alarm/Schedule/" {...props} />
const AlarmSMTP = props => <Link to="/Web_User_Interface/720p_Series/Alarm/SMTP_Server/" {...props} />
const AlarmEmail = props => <Link to="/Web_User_Interface/720p_Series/Alarm/Email/" {...props} />
const AlarmFTP = props => <Link to="/Web_User_Interface/720p_Series/Alarm/FTP/" {...props} />
const AlarmAS = props => <Link to="/Web_User_Interface/720p_Series/Alarm/Alarmserver/" {...props} />
const AlarmAudio = props => <Link to="/Web_User_Interface/720p_Series/Alarm/Audio_Alarm/" {...props} />
const AlarmSD = props => <Link to="/Web_User_Interface/720p_Series/Alarm/SD_Card/" {...props} />

const Recording = props => <Link to="/Web_User_Interface/720p_Series/Recording/" {...props} />
const RecordingSchedule = props => <Link to="/Web_User_Interface/720p_Series/Recording/Schedule/" {...props} />
const RecordingVideo = props => <Link to="/Web_User_Interface/720p_Series/Recording/Video/" {...props} />
const RecordingPhoto = props => <Link to="/Web_User_Interface/720p_Series/Recording/Photoseries/" {...props} />

const Cloud = props => <Link to="/Web_User_Interface/1080p_Series/Cloud/" {...props} />

const Menu = props => <Link to="/Web_User_Interface/720p_Series/Menu_Bar/" {...props} />

const VideoMenu = props => <Link to="/Web_User_Interface/720p_Series/Video_Menu_Bar/" {...props} />

const PTZControl = props => <Link to="/Web_User_Interface/720p_Series/PTZ_Control/" {...props} />

function WebUIHDNav(props) {
  const { classes } = props;
  return (
    <List component="nav">
      <Typography variant="h5" className={classes.navtitle}>
        Web User Interface
        </Typography>
      <ListItem button component={Overview}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Overview
          </Typography>
      </ListItem>
      <ListItem button component={Web720p}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          720p Series
          </Typography>
      </ListItem>

      <ListItem button component={Software}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Software Menu
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareLang}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Language
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareReboot}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Reboot & Reset
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareBackup}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Backup
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareUpdate}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Update
          </Typography>
      </ListItem>

      <ListItem button component={Network}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Network Menu
          </Typography>
      </ListItem>
      <ListItem button component={NetworkIPConf}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IP Configuration
          </Typography>
      </ListItem>
      <ListItem button component={NetworkWiFi}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › WiFi
          </Typography>
      </ListItem>
      <ListItem button component={NetworkDDNS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › DDNS Service
          </Typography>
      </ListItem>
      <ListItem button component={NetworkP2P}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › P2P Service
          </Typography>
      </ListItem>
      <ListItem button component={NetworkUPnP}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › UPnP Service
          </Typography>
      </ListItem>
      <ListItem button component={NetworkPush}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Push Service
          </Typography>
      </ListItem>
      <ListItem button component={NetworkPush}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Push Service
          </Typography>
      </ListItem>

      <ListItem button component={System}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ System Menu
          </Typography>
      </ListItem>
      <ListItem button component={SystemInfo}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Info
          </Typography>
      </ListItem>
      <ListItem button component={SystemDate}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Date & Time
          </Typography>
      </ListItem>
      <ListItem button component={SystemUser}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › User
          </Typography>
      </ListItem>
      <ListItem button component={SystemStatus}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Status LED
          </Typography>
      </ListItem>
      <ListItem button component={SystemIR}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IR LEDs
          </Typography>
      </ListItem>
      <ListItem button component={SystemONVIF}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › ONVIF
          </Typography>
      </ListItem>
      <ListItem button component={SystemPTZ}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › PTZ
          </Typography>
      </ListItem>
      <ListItem button component={SystemPTZTour}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › PTZ Tour
          </Typography>
      </ListItem>
      <ListItem button component={SystemLog}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Log
          </Typography>
      </ListItem>

      <ListItem button component={Multimedia}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Multimedia Menu
          </Typography>
      </ListItem>
      <ListItem button component={MultimediaVideo}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Video
          </Typography>
      </ListItem>
      <ListItem button component={MultimediaImage}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Image
          </Typography>
      </ListItem>
      <ListItem button component={MultimediaPrivacy}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Privacy Mask
          </Typography>
      </ListItem>
      <ListItem button component={MultimediaAudio}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Audio
          </Typography>
      </ListItem>

      <ListItem button component={Alarm}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Alarm Menu
          </Typography>
      </ListItem>
      <ListItem button component={AlarmAreas}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Alarm Areas
          </Typography>
      </ListItem>
      <ListItem button component={AlarmActions}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Alarm Actions
          </Typography>
      </ListItem>
      <ListItem button component={AlarmSchedule}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Alarm Schedule
          </Typography>
      </ListItem>
      <ListItem button component={AlarmSMTP}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Alarm SMTP Server
          </Typography>
      </ListItem>
      <ListItem button component={AlarmEmail}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Alarm Email
          </Typography>
      </ListItem>
      <ListItem button component={AlarmFTP}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Alarm FTP
          </Typography>
      </ListItem>
      <ListItem button component={AlarmAS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Alarm Server
          </Typography>
      </ListItem>
      <ListItem button component={AlarmAudio}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Audio Alarm
          </Typography>
      </ListItem>
      <ListItem button component={AlarmSD}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › SD Card
          </Typography>
      </ListItem>

      <ListItem button component={Recording}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Recording Menu
          </Typography>
      </ListItem>
      <ListItem button component={RecordingSchedule}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Schedule
          </Typography>
      </ListItem>
      <ListItem button component={RecordingVideo}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Video
          </Typography>
      </ListItem>
      <ListItem button component={RecordingPhoto}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Photoseries
          </Typography>
      </ListItem>

      <ListItem button component={Cloud}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Cloud Menu
          </Typography>
      </ListItem>

      <ListItem button component={Menu}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Menu Bar
          </Typography>
      </ListItem>

      <ListItem button component={VideoMenu}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Video Menu Bar
          </Typography>
      </ListItem>

      <ListItem button component={PTZControl}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ PTZ Control
          </Typography>
      </ListItem>

    </List>
  );
}

WebUIHDNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(WebUIHDNav)
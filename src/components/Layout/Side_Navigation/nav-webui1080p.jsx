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
const Web10800p = props => <Link to="/Web_User_Interface/1080p_Series/" {...props} />

const Network = props => <Link to="/Web_User_Interface/1080p_Series/Network/" {...props} />
const NetworkIPConf = props => <Link to="/Web_User_Interface/1080p_Series/Network/IP_Configuration/" {...props} />
const NetworkWiFi = props => <Link to="/Web_User_Interface/1080p_Series/Network/WiFi/" {...props} />
const NetworkDDNS = props => <Link to="/Web_User_Interface/1080p_Series/Network/Remote_Access/" {...props} />
const NetworkUPnP = props => <Link to="/Web_User_Interface/1080p_Series/Network/UPnP/" {...props} />
const NetworkONVIF = props => <Link to="/Web_User_Interface/1080p_Series/Network/ONVIF/" {...props} />

const Multimedia = props => <Link to="/Web_User_Interface/1080p_Series/Multimedia/" {...props} />
const MultimediaVideo = props => <Link to="/Web_User_Interface/1080p_Series/Multimedia/Video/" {...props} />
const MultimediaImage = props => <Link to="/Web_User_Interface/1080p_Series/Multimedia/Image/" {...props} />
const MultimediaPrivacy = props => <Link to="/Web_User_Interface/1080p_Series/Multimedia/Privacy_Mask/" {...props} />
const MultimediaAudio = props => <Link to="/Web_User_Interface/1080p_Series/Multimedia/Audio/" {...props} />
const MultimediaOverlay = props => <Link to="/Web_User_Interface/1080p_Series/Multimedia/Video_Overlays/" {...props} />

const Feature = props => <Link to="/Web_User_Interface/1080p_Series/Features/" {...props} />
const FeatureEmail = props => <Link to="/Web_User_Interface/1080p_Series/Features/Email/" {...props} />
const FeatureFTP = props => <Link to="/Web_User_Interface/1080p_Series/Features/FTP/" {...props} />
const FeatureIR = props => <Link to="/Web_User_Interface/1080p_Series/Features/IR_LEDs/" {...props} />
const FeaturePTZ = props => <Link to="/Web_User_Interface/1080p_Series/Features/PTZ/" {...props} />
const FeaturePTZTour = props => <Link to="/Web_User_Interface/1080p_Series/Features/PTZ_Tour/" {...props} />
const FeatureSD = props => <Link to="/Web_User_Interface/1080p_Series/Features/SD_Card/" {...props} />
const FeatureStatus = props => <Link to="/Web_User_Interface/1080p_Series/Features/Status_LED/" {...props} />
const FeatureRecording = props => <Link to="/Web_User_Interface/1080p_Series/Features/Manual_Recording/" {...props} />

const Alarm = props => <Link to="/Web_User_Interface/1080p_Series/Alarm/" {...props} />
const AlarmActions = props => <Link to="/Web_User_Interface/1080p_Series/Alarm/Actions/" {...props} />
const AlarmAreas = props => <Link to="/Web_User_Interface/1080p_Series/Alarm/Areas/" {...props} />
const AlarmSchedule = props => <Link to="/Web_User_Interface/1080p_Series/Alarm/Schedule/" {...props} />
const AlarmPush = props => <Link to="/Web_User_Interface/1080p_Series/Alarm/Push_Service/" {...props} />
const AlarmAS = props => <Link to="/Web_User_Interface/1080p_Series/Alarm/Alarm_Server/" {...props} />

const Recording = props => <Link to="/Web_User_Interface/1080p_Series/Recording/" {...props} />
const RecordingVideo = props => <Link to="/Web_User_Interface/1080p_Series/Recording/Video/" {...props} />
const RecordingPhoto = props => <Link to="/Web_User_Interface/1080p_Series/Recording/Photoseries/" {...props} />

const System = props => <Link to="/Web_User_Interface/1080p_Series/System/" {...props} />
const SystemInfo = props => <Link to="/Web_User_Interface/1080p_Series/System/Info/" {...props} />
const SystemUser = props => <Link to="/Web_User_Interface/1080p_Series/System/User/" {...props} />
const SystemWebUI = props => <Link to="/Web_User_Interface/1080p_Series/System/WebUI/" {...props} />
const SystemDate = props => <Link to="/Web_User_Interface/1080p_Series/System/Date_Time/" {...props} />
const SystemLanguage = props => <Link to="/Web_User_Interface/1080p_Series/System/Language/" {...props} />
const SystemLog = props => <Link to="/Web_User_Interface/1080p_Series/System/Log/" {...props} />
const SystemUpdate = props => <Link to="/Web_User_Interface/1080p_Series/System/Update/" {...props} />
const SystemReboot = props => <Link to="/Web_User_Interface/1080p_Series/System/Reboot/" {...props} />
const SystemReset = props => <Link to="/Web_User_Interface/1080p_Series/System/Reset/" {...props} />

const Cloud = props => <Link to="/Web_User_Interface/1080p_Series/Cloud/" {...props} />

function WebUIFHDNav(props) {
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
      <ListItem button component={Web10800p}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          1080p Series
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
      <ListItem button component={NetworkUPnP}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › UPnP Service
          </Typography>
      </ListItem>
      <ListItem button component={NetworkONVIF}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Push Service
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
      <ListItem button component={MultimediaOverlay}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Video Overlays
          </Typography>
      </ListItem>

      <ListItem button component={Feature}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Feature Menu
          </Typography>
      </ListItem>
      <ListItem button component={FeatureEmail}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Email
          </Typography>
      </ListItem>
      <ListItem button component={FeatureFTP}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › FTP
          </Typography>
      </ListItem>
      <ListItem button component={FeatureIR}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IR Nightvision
          </Typography>
      </ListItem>
      <ListItem button component={FeaturePTZ}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › PTZ
          </Typography>
      </ListItem>
      <ListItem button component={FeaturePTZTour}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › PTZ Tour
          </Typography>
      </ListItem>
      <ListItem button component={FeatureSD}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › SD Card
          </Typography>
      </ListItem>
      <ListItem button component={FeatureStatus}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Status LED
          </Typography>
      </ListItem>
      <ListItem button component={FeatureRecording}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Manual Recording
          </Typography>
      </ListItem>

      <ListItem button component={Alarm}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Alarm Menu
          </Typography>
      </ListItem>
      <ListItem button component={AlarmActions}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Alarm Actions
          </Typography>
      </ListItem>
      <ListItem button component={AlarmAreas}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Alarm Areas
          </Typography>
      </ListItem>
      <ListItem button component={AlarmSchedule}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Alarm Schedule
          </Typography>
      </ListItem>
      <ListItem button component={AlarmPush}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Push Service
          </Typography>
      </ListItem>
      <ListItem button component={AlarmAS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Alarm Server
          </Typography>
      </ListItem>

      <ListItem button component={Recording}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Recording Menu
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

      <ListItem button component={System}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ System Menu
          </Typography>
      </ListItem>
      <ListItem button component={SystemInfo}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Overview
          </Typography>
      </ListItem>
      <ListItem button component={SystemUser}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › User
          </Typography>
      </ListItem>
      <ListItem button component={SystemWebUI}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › WebUI
          </Typography>
      </ListItem>
      <ListItem button component={SystemDate}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Date & Time
          </Typography>
      </ListItem>
      <ListItem button component={SystemLanguage}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Language
          </Typography>
      </ListItem>
      <ListItem button component={SystemLog}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Log
          </Typography>
      </ListItem>
      <ListItem button component={SystemUpdate}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Update
          </Typography>
      </ListItem>
      <ListItem button component={SystemReboot}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Reboot
          </Typography>
      </ListItem>
      <ListItem button component={SystemReset}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Reset
          </Typography>
      </ListItem>

      <ListItem button component={Cloud}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Cloud Menu
          </Typography>
      </ListItem>

    </List>
  );
}

WebUIFHDNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(WebUIFHDNav)
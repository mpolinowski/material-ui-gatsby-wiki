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

const Software = props => <Link to="/Software/" {...props} />

const SoftwareWin = props => <Link to="/Software/Windows/" {...props} />
const SoftwareWinIV2 = props => <Link to="/Software/Windows/InstarVision/" {...props} />
const SoftwareWinIVWP = props => <Link to="/Software/Windows/InstarVision/Windows_Phone/" {...props} />
const SoftwareWinIVMetro = props => <Link to="/Software/Windows/InstarVision/Metro/" {...props} />
const SoftwareWinBlueIris = props => <Link to="/Software/Windows/Blue_Iris/" {...props} />
const SoftwareWinCCTV = props => <Link to="/Software/Windows/CCTV_Chrome_Plugin/" {...props} />
const SoftwareWingo1984 = props => <Link to="/Software/Windows/go1984/" {...props} />
const SoftwareWiniSpy = props => <Link to="/Software/Windows/iSpy/" {...props} />
const SoftwareWinP2P = props => <Link to="/Software/Windows/P2P_Client/" {...props} />
const SoftwareWinSighthound = props => <Link to="/Software/Windows/Sighthound/" {...props} />
const SoftwareWinVLC = props => <Link to="/Software/Windows/VLC_Player/" {...props} />
const SoftwareWinWebcam = props => <Link to="/Software/Windows/Webcam_Motion_Detector/" {...props} />
const SoftwareWinWebCamXP = props => <Link to="/Software/Windows/WebCam_XP/" {...props} />
const SoftwareWinYAW = props => <Link to="/Software/Windows/YAW_Cam/" {...props} />
const SoftwareWinZebra = props => <Link to="/Software/Windows/Zebra_Surveillance/" {...props} />
const SoftwareWinZone = props => <Link to="/Software/Windows/Zone_Trigger/" {...props} />

const SoftwareMacOS = props => <Link to="/Software/macOS/" {...props} />
const SoftwareMacOSEvoCam = props => <Link to="/Software/macOS/EvoCam/" {...props} />
const SoftwareMacOSSecuritySpy = props => <Link to="/Software/macOS/SecuritySpy/" {...props} />
const SoftwareMacOSSighthound = props => <Link to="/Software/macOS/Sighthound/" {...props} />
const SoftwareMacOSVLC = props => <Link to="/Software/macOS/VLC_Player/" {...props} />

const SoftwareLinux = props => <Link to="/Software/Linux/" {...props} />
const SoftwareLinuxMotionEye = props => <Link to="/Software/Linux/MotionEye/" {...props} />
const SoftwareLinuxNodeRED = props => <Link to="/Software/Linux/Node-RED/" {...props} />
const SoftwareLinuxOpenHAB2 = props => <Link to="/Software/Linux/OpenHAB2/" {...props} />

const SoftwareAnd = props => <Link to="/Software/Android/" {...props} />
const SoftwareAndIV = props => <Link to="/Software/Android/InstarVision/" {...props} />
const SoftwareAndIPCam = props => <Link to="/Software/Android/IP_Cam_Viewer/" {...props} />
const SoftwareAndTiny = props => <Link to="/Software/Android/TinyCam_Monitor/" {...props} />

const SoftwareIOs = props => <Link to="/Software/iOS/" {...props} />
const SoftwareIOsIV = props => <Link to="/Software/iOS/InstarVision/" {...props} />
const SoftwareIOsIPCam = props => <Link to="/Software/iOS/IP_Cam_Viewer/" {...props} />
const SoftwareIOsLiveCams = props => <Link to="/Software/iOS/LiveCams/" {...props} />
const SoftwareIOsICCAM = props => <Link to="/Software/iOS/ICCAM/" {...props} />
const SoftwareIOsVision = props => <Link to="/Software/iOS/IP_Vision_Pro/" {...props} />
const SoftwareIOsP2P = props => <Link to="/Software/iOS/P2P_Cam_Live/" {...props} />

const SoftwareOther = props => <Link to="/Software/Other_Platforms/" {...props} />
const SoftwareOtherInstarVision = props => <Link to="/Software/Other_Platforms/InstarVision_Blackberry/" {...props} />
const SoftwareOtherSynology = props => <Link to="/Software/Other_Platforms/Synology/" {...props} />
const SoftwareOtherQNAP = props => <Link to="/Software/Other_Platforms/QNAP/" {...props} />
const SoftwareOtherFritzphone = props => <Link to="/Software/Other_Platforms/AVM_Fritzphone/" {...props} />
const SoftwareOtherDomovea = props => <Link to="/Software/Other_Platforms/Domovea/" {...props} />
const SoftwareOtherASUSTOR = props => <Link to="/Software/Other_Platforms/ASUSTOR_Surveillance_Center/" {...props} />

function ProductNav(props) {
  const { classes } = props;
  return (
    <List component="nav">
      <Typography variant="h5" className={classes.navtitle}>
        Products
        </Typography>
      <ListItem button component={Software}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Software
          </Typography>
      </ListItem>


      <ListItem button component={SoftwareWin}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Windows
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareWinIV2}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › InstarVision v2
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareWinIVWP}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › InstarVision for Windows Phone
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareWinIVMetro}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › InstarVision for Windows Metro
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareWinBlueIris}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Blue Iris
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareWinCCTV}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › CCTV Browser Plugin
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareWingo1984}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › go1984
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareWiniSpy}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › iSpy
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareWinP2P}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › P2P Client
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareWinSighthound}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Sighthound
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareWinVLC}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › VLC Player
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareWinWebcam}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Webcam Motion Detector
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareWinWebCamXP}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › WebCam XP
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareWinYAW}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › YAW Cam
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareWinZebra}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Zebra Surveillance
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareWinZone}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Zone Trigger
          </Typography>
      </ListItem>


      <ListItem button component={SoftwareMacOS}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ macOS
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareMacOSSighthound}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Sighthound
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareMacOSSecuritySpy}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › SecuritySpy
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareMacOSVLC}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › VLC Player
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareMacOSEvoCam}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › EvoCam
          </Typography>
      </ListItem>


      <ListItem button component={SoftwareLinux}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Linux
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareLinuxMotionEye}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › MotionEye
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareLinuxNodeRED}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Node-RED & MQTT
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareLinuxOpenHAB2}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › OpenHAB 2
          </Typography>
      </ListItem>


      <ListItem button component={SoftwareAnd}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Android
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareAndIV}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › InstarVision for Android
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareAndIPCam}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IP Cam Viewer
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareAndTiny}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › TinyCam Monitor
          </Typography>
      </ListItem>

      <ListItem button component={SoftwareIOs}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ iOS
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareIOsIV}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › InstarVision for iPhone & iPad
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareIOsIPCam}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IP Cam Viewer
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareIOsLiveCams}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › LiveCams
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareIOsICCAM}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › ICCAM
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareIOsVision}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IP Vision Pro
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareIOsP2P}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › P2P Cam Live
          </Typography>
      </ListItem>


      <ListItem button component={SoftwareOther}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Other Platforms
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareOtherInstarVision}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › InstarVision for Blackberry
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareOtherSynology}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Synology
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareOtherQNAP}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › QNAP
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareOtherFritzphone}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › AVM Fritzphone
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareOtherDomovea}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Domovea
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareOtherASUSTOR}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › ASUSTOR Surveillance Center
          </Typography>
      </ListItem>

    </List>
  );
}

ProductNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(ProductNav)
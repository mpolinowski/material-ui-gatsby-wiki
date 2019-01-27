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

const Downloads = props => <Link to="/Downloads/" {...props} />

const Accessories = props => <Link to="/Downloads/Accessories/" {...props} />
const AccessoriesLight = props => <Link to="/Downloads/Accessories/IN-90x/" {...props} />
const AccessoriesActionCam = props => <Link to="/Downloads/Accessories/IN-DV1215/" {...props} />
const AccessoriesMikro = props => <Link to="/Downloads/Accessories/IN-Mikro_380/" {...props} />
const AccessoriesMotion300 = props => <Link to="/Downloads/Accessories/IN-Motion_300/" {...props} />
const AccessoriesMotion500 = props => <Link to="/Downloads/Accessories/IN-Motion_500/" {...props} />

const Software = props => <Link to="/Downloads/Desktop_Software/" {...props} />
const SoftwareCamTool = props => <Link to="/Downloads/Desktop_Software/Instar_Camera_Tool/" {...props} />
const SoftwareInstarVision = props => <Link to="/Downloads/Desktop_Software/InstarVision/" {...props} />
const SoftwareMetro = props => <Link to="/Downloads/Desktop_Software/InstarVision_Metro/" {...props} />

const IndoorCams = props => <Link to="/Downloads/Indoor_Cameras/" {...props} />
const IndoorCams3001 = props => <Link to="/Downloads/Indoor_Cameras/IN-3001/" {...props} />
const IndoorCams3003 = props => <Link to="/Downloads/Indoor_Cameras/IN-3003/" {...props} />
const IndoorCams3010 = props => <Link to="/Downloads/Indoor_Cameras/IN-3010/" {...props} />
const IndoorCams3011 = props => <Link to="/Downloads/Indoor_Cameras/IN-3011/" {...props} />
const IndoorCams6001 = props => <Link to="/Downloads/Indoor_Cameras/IN-6001_HD/" {...props} />
const IndoorCams6012 = props => <Link to="/Downloads/Indoor_Cameras/IN-6012_HD/" {...props} />
const IndoorCams6014 = props => <Link to="/Downloads/Indoor_Cameras/IN-6014_HD/" {...props} />
const IndoorCams8015 = props => <Link to="/Downloads/Indoor_Cameras/IN-8015_HD/" {...props} />

const OutdoorCams = props => <Link to="/Downloads/Outdoor_Cameras/" {...props} />
const OutdoorCams2904 = props => <Link to="/Downloads/Outdoor_Cameras/IN-2904/" {...props} />
const OutdoorCams2905 = props => <Link to="/Downloads/Outdoor_Cameras/IN-2905_V2/" {...props} />
const OutdoorCams2908 = props => <Link to="/Downloads/Outdoor_Cameras/IN-2908/" {...props} />
const OutdoorCams4009 = props => <Link to="/Downloads/Outdoor_Cameras/IN-4009/" {...props} />
const OutdoorCams4010 = props => <Link to="/Downloads/Outdoor_Cameras/IN-4010_V2/" {...props} />
const OutdoorCams4011 = props => <Link to="/Downloads/Outdoor_Cameras/IN-4011/" {...props} />
const OutdoorCams5905 = props => <Link to="/Downloads/Outdoor_Cameras/IN-5905_HD/" {...props} />
const OutdoorCams5907 = props => <Link to="/Downloads/Outdoor_Cameras/IN-5907_HD/" {...props} />
const OutdoorCams7011 = props => <Link to="/Downloads/Outdoor_Cameras/IN-7011_HD/" {...props} />
const OutdoorCams9008 = props => <Link to="/Downloads/Outdoor_Cameras/IN-9008_HD/" {...props} />
const OutdoorCams9020 = props => <Link to="/Downloads/Outdoor_Cameras/IN-9020_HD/" {...props} />

const MobileApps = props => <Link to="/Downloads/Mobile_Apps/" {...props} />
const MobileAppsAndroid = props => <Link to="/Downloads/Mobile_Apps/Android_BlackBerry/" {...props} />
const MobileAppsiOS = props => <Link to="/Downloads/Mobile_Apps/iOS/" {...props} />
const MobileAppsWP = props => <Link to="/Downloads/Mobile_Apps/Windows_Phone/" {...props} />

const NetworkAccessories = props => <Link to="/Downloads/Network_Accessories/" {...props} />
const NetworkAccessoriesLAN = props => <Link to="/Downloads/Network_Accessories/IN-LAN_500/" {...props} />
const NetworkAccessoriesPoE = props => <Link to="/Downloads/Network_Accessories/IN-PoE_1000/" {...props} />
const NetworkAccessoriesRoute = props => <Link to="/Downloads/Network_Accessories/IN-Route_P52/" {...props} />


function ProductNav(props) {
  const { classes } = props;
  return (
    <List component="nav">
      <Typography variant="h5" className={classes.navtitle}>
        Product
        </Typography>
      <ListItem button component={Downloads}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Downloads
          </Typography>
      </ListItem>

      <ListItem button component={IndoorCams}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Indoor Cameras
          </Typography>
      </ListItem>
      <ListItem button component={IndoorCams3001}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-3001
          </Typography>
      </ListItem>
      <ListItem button component={IndoorCams3003}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-3003
          </Typography>
      </ListItem>
      <ListItem button component={IndoorCams3010}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-3010
          </Typography>
      </ListItem>
      <ListItem button component={IndoorCams3011}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-3011
          </Typography>
      </ListItem>
      <ListItem button component={IndoorCams6001}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-6001 HD
          </Typography>
      </ListItem>
      <ListItem button component={IndoorCams6012}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-6012 HD
          </Typography>
      </ListItem>
      <ListItem button component={IndoorCams6014}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-6014 HD
          </Typography>
      </ListItem>
      <ListItem button component={IndoorCams8015}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-8015 Full HD
          </Typography>
      </ListItem>

      <ListItem button component={OutdoorCams}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Outdoor Cameras
          </Typography>
      </ListItem>
      <ListItem button component={OutdoorCams2904}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-2904
          </Typography>
      </ListItem>
      <ListItem button component={OutdoorCams2905}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-2905
          </Typography>
      </ListItem>
      <ListItem button component={OutdoorCams2908}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-2908
          </Typography>
      </ListItem>
      <ListItem button component={OutdoorCams4009}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-4009
          </Typography>
      </ListItem>
      <ListItem button component={OutdoorCams4010}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-4010
          </Typography>
      </ListItem>
      <ListItem button component={OutdoorCams4011}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-4011
          </Typography>
      </ListItem>
      <ListItem button component={OutdoorCams5905}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-5905 HD
          </Typography>
      </ListItem>
      <ListItem button component={OutdoorCams5907}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-5907 HD
          </Typography>
      </ListItem>
      <ListItem button component={OutdoorCams7011}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-7011 HD
          </Typography>
      </ListItem>
      <ListItem button component={OutdoorCams9008}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-9008 Full HD
          </Typography>
      </ListItem>
      <ListItem button component={OutdoorCams9020}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-9020 Full HD
          </Typography>
      </ListItem>

      <ListItem button component={Software}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Software
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareCamTool}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › InstarVision Camera Tool
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareInstarVision}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › InstarVision
          </Typography>
      </ListItem>
      <ListItem button component={SoftwareMetro}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › InstarVision Metro
          </Typography>
      </ListItem>

      <ListItem button component={MobileApps}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Mobile Apps
          </Typography>
      </ListItem>
      <ListItem button component={MobileAppsAndroid}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › InstarVision Android & BlackBerry
          </Typography>
      </ListItem>
      <ListItem button component={MobileAppsiOS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › InstarVision iOS
          </Typography>
      </ListItem>
      <ListItem button component={MobileAppsWP}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › InstarVision Windows Phone
          </Typography>
      </ListItem>

      <ListItem button component={Accessories}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Accessories
          </Typography>
      </ListItem>
      <ListItem button component={AccessoriesLight}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-90x
          </Typography>
      </ListItem>
      <ListItem button component={AccessoriesActionCam}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-DV1215
          </Typography>
      </ListItem>
      <ListItem button component={AccessoriesMikro}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-Mikro 380
          </Typography>
      </ListItem>
      <ListItem button component={AccessoriesMotion300}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-Motion 300
          </Typography>
      </ListItem>
      <ListItem button component={AccessoriesMotion500}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          ›IN-Motion 500
          </Typography>
      </ListItem>

      <ListItem button component={NetworkAccessories}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Network Accessories
          </Typography>
      </ListItem>
      <ListItem button component={NetworkAccessoriesLAN}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-LAN 500
          </Typography>
      </ListItem>
      <ListItem button component={NetworkAccessoriesPoE}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-PoE 1000
          </Typography>
      </ListItem>
      <ListItem button component={NetworkAccessoriesRoute}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › IN-Route P52
          </Typography>
      </ListItem>

    </List>
  );
}

ProductNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(ProductNav)
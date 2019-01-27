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

const IndoorCams = props => <Link to="/Indoor_Cameras/" {...props} />

const OutdoorCams = props => <Link to="/Outdoor_Cameras/" {...props} />

const CamLenses = props => <Link to="/Products/Lenses/" {...props} />
const Lenses9008 = props => <Link to="/Products/Lenses/IN-8015/" {...props} />
const Lenses8015 = props => <Link to="/Products/Lenses/IN-9008/" {...props} />

const Software = props => <Link to="/Software/" {...props} />

const SoftwareWin = props => <Link to="/Software/Windows/" {...props} />
const SoftwareWinIV2 = props => <Link to="/Software/Windows/InstarVision/" {...props} />
const SoftwareWinIVWP = props => <Link to="/Software/Windows/InstarVision/Windows_Phone/" {...props} />
const SoftwareWinIVMetro = props => <Link to="/Software/Windows/InstarVision/Metro/" {...props} />

const SoftwareMacOS = props => <Link to="/Software/macOS/" {...props} />
const SoftwareLinux = props => <Link to="/Software/Linux/" {...props} />

const SoftwareAnd = props => <Link to="/Software/Android/" {...props} />
const SoftwareAndIV = props => <Link to="/Software/Android/InstarVision/" {...props} />

const SoftwareIOs = props => <Link to="/Software/iOS/" {...props} />
const SoftwareIOsIV = props => <Link to="/Software/iOS/InstarVision/" {...props} />

const SoftwareOther = props => <Link to="/Software/Other_Platforms/" {...props} />

const ButtonLink11 = props => <Link to="/Web_User_Interface/1080p_Series/Overview/" {...props} />
const ButtonLink12 = props => <Link to="/Web_User_Interface/1080p_Series/" {...props} />
const ButtonLink13 = props => <Link to="/Web_User_Interface/720p_Series/" {...props} />
const ButtonLink14 = props => <Link to="/Web_User_Interface/1080p_Series/Overview/" {...props} />
const ButtonLink15 = props => <Link to="/Products/IN-LAN/" {...props} />
const ButtonLink16 = props => <Link to="/Products/Power_over_Ethernet/" {...props} />
const ButtonLink17 = props => <Link to="/Products/IN-Route/" {...props} />
const ButtonLink18 = props => <Link to="/Products/IN-Route/First_Steps/" {...props} />
const ButtonLink19 = props => <Link to="/Products/IN-Route/Overview/" {...props} />
const ButtonLink20 = props => <Link to="/Products/IN-Route/Network/" {...props} />
const ButtonLink21 = props => <Link to="/Products/IN-Route/Firewall/" {...props} />
const ButtonLink22 = props => <Link to="/Products/IN-Route/System/" {...props} />
const ButtonLink23 = props => <Link to="/Products/IN-Route/Help/" {...props} />
const ButtonLink24 = props => <Link to="/Products/IN-Motion/" {...props} />
const ButtonLink25 = props => <Link to="/Products/IN-Motion/300/" {...props} />
const ButtonLink26 = props => <Link to="/Products/IN-Motion/500/" {...props} />
const ButtonLink27 = props => <Link to="/Products/IN-Motion/500/Dual_Sensor/" {...props} />
const ButtonLink28 = props => <Link to="/Products/IN-Motion/500/Setup/" {...props} />
const ButtonLink29 = props => <Link to="/Products/IN-Motion/500/Wiring/" {...props} />
const ButtonLink30 = props => <Link to="/Products/IN-Motion/500/User_Interface/" {...props} />
const ButtonLink31 = props => <Link to="/Products/IN-Motion/500/Considerations/" {...props} />
const ButtonLink32 = props => <Link to="/Products/IN-Motion/500/Recorder/" {...props} />
const ButtonLink33 = props => <Link to="/Products/IN-Mikro/" {...props} />
const ButtonLink34 = props => <Link to="/Products/IR_Lighting/" {...props} />
const ButtonLink35 = props => <Link to="/Downloads/" {...props} />
const ButtonLink36 = props => <Link to="/Products/Usermanuals/" {...props} />

function ProductNav(props) {
  const { classes } = props;
  return (
    <List component="nav">
      <Typography variant="h5" className={classes.navtitle}>
        Products
        </Typography>
      <ListItem button component={IndoorCams}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Indoor Cameras
          </Typography>
      </ListItem>

      <ListItem button component={OutdoorCams}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Outdoor Cameras
          </Typography>
      </ListItem>

      <ListItem button component={CamLenses}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Lenses
          </Typography>
      </ListItem>
      <ListItem button component={Lenses9008}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-8015 Full HD
          </Typography>
      </ListItem>
      <ListItem button component={Lenses8015}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-9008 Full HD
          </Typography>
      </ListItem>

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

      <ListItem button component={SoftwareMacOS}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ macOS
          </Typography>
      </ListItem>

      <ListItem button component={SoftwareLinux}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Linux
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

      <ListItem button component={SoftwareOther}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Other Platforms
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink11}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Web User Interface
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink12}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ 1080p Series
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink13}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ 720p Series
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink14}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ VGA Series
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink15}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          IN-LAN
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink16}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          IN-PoE
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink17}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          IN-Route
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink18}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ First Steps
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink19}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Overview
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink20}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Network
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink21}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Firewall
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink22}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ System
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink23}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Help
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink24}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          IN-Motion
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink25}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-Motion 300
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink26}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-Motion 500
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink27}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Dual Sensor
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink28}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Setup
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink29}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Wiring
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink30}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › User Interface
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink31}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Considerations
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink32}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Recorder
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink33}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          IN-Mikro
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink34}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Infrared Floodlights
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink35}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Downloads
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink36}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Usermanuals
          </Typography>
      </ListItem>
    </List>
  );
}

ProductNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

// export default withRoot(withStyles(styles)(ProductNav))

export default withStyles(styles, { withTheme: true })(ProductNav)
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

const In8015 = props => <Link to="/Indoor_Cameras/IN-8015_HD/" {...props} />
const In8015Manual = props => <Link to="/Indoor_Cameras/IN-8015_HD/Usermanual/" {...props} />
const In8015QS = props => <Link to="/Indoor_Cameras/IN-8015_HD/Quick_Installation/" {...props} />
const In8015Warning = props => <Link to="/Indoor_Cameras/IN-8015_HD/Safety_Warnings/" {...props} />
const In8015Features = props => <Link to="/Indoor_Cameras/IN-8015_HD/Product_Features/" {...props} />
const In8015Specs = props => <Link to="/Indoor_Cameras/IN-8015_HD/Technical_Specifications/" {...props} />
const In8015Reset = props => <Link to="/Indoor_Cameras/IN-8015_HD/Camera_Reset/" {...props} />
const In8015Lense = props => <Link to="/Indoor_Cameras/IN-8015_HD/Lense_Adjustment/" {...props} />
const In8015Warranty = props => <Link to="/Indoor_Cameras/IN-8015_HD/Warranty/" {...props} />
const In8015Streaming = props => <Link to="/Indoor_Cameras/IN-8015_HD/Video_Streaming/" {...props} />

const In8003 = props => <Link to="/Indoor_Cameras/IN-8003_HD/" {...props} />
const In8003Manual = props => <Link to="/Indoor_Cameras/IN-8003_HD/Usermanual/" {...props} />
const In8003QS = props => <Link to="/Indoor_Cameras/IN-8003_HD/Quick_Installation/" {...props} />
const In8003Warning = props => <Link to="/Indoor_Cameras/IN-8003_HD/Safety_Warnings/" {...props} />
const In8003Features = props => <Link to="/Indoor_Cameras/IN-8003_HD/Product_Features/" {...props} />
const In8003Specs = props => <Link to="/Indoor_Cameras/IN-8003_HD/Technical_Specifications/" {...props} />
const In8003Reset = props => <Link to="/Indoor_Cameras/IN-8003_HD/Camera_Reset/" {...props} />
const In8003Lense = props => <Link to="/Indoor_Cameras/IN-8003_HD/Lense_Adjustment/" {...props} />
const In8003Warranty = props => <Link to="/Indoor_Cameras/IN-8003_HD/Warranty/" {...props} />
const In8003Streaming = props => <Link to="/Indoor_Cameras/IN-8003_HD/Video_Streaming/" {...props} />

const In6014 = props => <Link to="/Indoor_Cameras/IN-6014_HD/" {...props} />
const In6014Manual = props => <Link to="/Indoor_Cameras/IN-6014_HD/Usermanual/" {...props} />
const In6014QS = props => <Link to="/Indoor_Cameras/IN-6014_HD/Quick_Installation/" {...props} />
const In6014Warning = props => <Link to="/Indoor_Cameras/IN-6014_HD/Safety_Warnings/" {...props} />
const In6014Features = props => <Link to="/Indoor_Cameras/IN-6014_HD/Product_Features/" {...props} />
const In6014Specs = props => <Link to="/Indoor_Cameras/IN-6014_HD/Technical_Specifications/" {...props} />
const In6014Reset = props => <Link to="/Indoor_Cameras/IN-6014_HD/Camera_Reset/" {...props} />
const In6014Lense = props => <Link to="/Indoor_Cameras/IN-6014_HD/Lense_Adjustment/" {...props} />
const In6014Warranty = props => <Link to="/Indoor_Cameras/IN-6014_HD/Warranty/" {...props} />
const In6014Streaming = props => <Link to="/Indoor_Cameras/IN-6014_HD/Video_Streaming/" {...props} />

const In6012 = props => <Link to="/Indoor_Cameras/IN-6012_HD/" {...props} />
const In6012Manual = props => <Link to="/Indoor_Cameras/IN-6012_HD/Usermanual/" {...props} />
const In6012QS = props => <Link to="/Indoor_Cameras/IN-6012_HD/Quick_Installation/" {...props} />
const In6012Warning = props => <Link to="/Indoor_Cameras/IN-6012_HD/Safety_Warnings/" {...props} />
const In6012Features = props => <Link to="/Indoor_Cameras/IN-6012_HD/Product_Features/" {...props} />
const In6012Specs = props => <Link to="/Indoor_Cameras/IN-6012_HD/Technical_Specifications/" {...props} />
const In6012Reset = props => <Link to="/Indoor_Cameras/IN-6012_HD/Camera_Reset/" {...props} />
const In6012Lense = props => <Link to="/Indoor_Cameras/IN-6012_HD/Lense_Adjustment/" {...props} />
const In6012Warranty = props => <Link to="/Indoor_Cameras/IN-6012_HD/Warranty/" {...props} />
const In6012Streaming = props => <Link to="/Indoor_Cameras/IN-6012_HD/Video_Streaming/" {...props} />

const In6001 = props => <Link to="/Indoor_Cameras/IN-6001_HD/" {...props} />
const In6001Manual = props => <Link to="/Indoor_Cameras/IN-6001_HD/Usermanual/" {...props} />
const In6001QS = props => <Link to="/Indoor_Cameras/IN-6001_HD/Quick_Installation/" {...props} />
const In6001Warning = props => <Link to="/Indoor_Cameras/IN-6001_HD/Safety_Warnings/" {...props} />
const In6001Features = props => <Link to="/Indoor_Cameras/IN-6001_HD/Product_Features/" {...props} />
const In6001Specs = props => <Link to="/Indoor_Cameras/IN-6001_HD/Technical_Specifications/" {...props} />
const In6001Reset = props => <Link to="/Indoor_Cameras/IN-6001_HD/Camera_Reset/" {...props} />
const In6001Lense = props => <Link to="/Indoor_Cameras/IN-6001_HD/Lense_Adjustment/" {...props} />
const In6001Warranty = props => <Link to="/Indoor_Cameras/IN-6001_HD/Warranty/" {...props} />
const In6001Streaming = props => <Link to="/Indoor_Cameras/IN-6001_HD/Video_Streaming/" {...props} />

const In3011 = props => <Link to="/Indoor_Cameras/IN-3011/" {...props} />
const In3011Specs = props => <Link to="/Indoor_Cameras/IN-3011/Technical_Specifications/" {...props} />
const In3011Warning = props => <Link to="/Indoor_Cameras/IN-3011/Safety_Warnings/" {...props} />

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

      <ListItem button component={In8015}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-8015 Full HD
          </Typography>
      </ListItem>
      <ListItem button component={In8015Manual}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Usermanual
          </Typography>
      </ListItem>
      <ListItem button component={In8015QS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Camera Installation
          </Typography>
      </ListItem>
      <ListItem button component={In8015Warning}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Safety Warnings
          </Typography>
      </ListItem>
      <ListItem button component={In8015Features}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Product Features
          </Typography>
      </ListItem>
      <ListItem button component={In8015Specs}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Technical Specifications
          </Typography>
      </ListItem>
      <ListItem button component={In8015Reset}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Reset Your Camera
          </Typography>
      </ListItem>
      <ListItem button component={In8015Lense}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Lense Adjustment
          </Typography>
      </ListItem>
      <ListItem button component={In8015Streaming}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Video Streaming
          </Typography>
      </ListItem>
      <ListItem button component={In8015Warranty}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Warranty & Disposal
          </Typography>
      </ListItem>

      <ListItem button component={In8003}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-8003 Full HD
          </Typography>
      </ListItem>
      <ListItem button component={In8003Manual}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Usermanual
          </Typography>
      </ListItem>
      <ListItem button component={In8003QS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Camera Installation
          </Typography>
      </ListItem>
      <ListItem button component={In8003Warning}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Safety Warnings
          </Typography>
      </ListItem>
      <ListItem button component={In8003Features}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Product Features
          </Typography>
      </ListItem>
      <ListItem button component={In8003Specs}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Technical Specifications
          </Typography>
      </ListItem>
      <ListItem button component={In8003Reset}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Reset Your Camera
          </Typography>
      </ListItem>
      <ListItem button component={In8003Lense}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Lense Adjustment
          </Typography>
      </ListItem>
      <ListItem button component={In8003Streaming}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Video Streaming
          </Typography>
      </ListItem>
      <ListItem button component={In8003Warranty}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Warranty & Disposal
          </Typography>
      </ListItem>

      <ListItem button component={In6014}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-6014 HD
          </Typography>
      </ListItem>
      <ListItem button component={In6014Manual}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Usermanual
          </Typography>
      </ListItem>
      <ListItem button component={In6014QS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Camera Installation
          </Typography>
      </ListItem>
      <ListItem button component={In6014Warning}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Safety Warnings
          </Typography>
      </ListItem>
      <ListItem button component={In6014Features}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Product Features
          </Typography>
      </ListItem>
      <ListItem button component={In6014Specs}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Technical Specifications
          </Typography>
      </ListItem>
      <ListItem button component={In6014Reset}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Reset Your Camera
          </Typography>
      </ListItem>
      <ListItem button component={In6014Lense}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Lense Adjustment
          </Typography>
      </ListItem>
      <ListItem button component={In6014Streaming}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Video Streaming
          </Typography>
      </ListItem>
      <ListItem button component={In6014Warranty}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Warranty & Disposal
          </Typography>
      </ListItem>

      <ListItem button component={In6012}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-6012 HD
          </Typography>
      </ListItem>
      <ListItem button component={In6012Manual}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Usermanual
          </Typography>
      </ListItem>
      <ListItem button component={In6012QS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Camera Installation
          </Typography>
      </ListItem>
      <ListItem button component={In6012Warning}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Safety Warnings
          </Typography>
      </ListItem>
      <ListItem button component={In6012Features}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Product Features
          </Typography>
      </ListItem>
      <ListItem button component={In6012Specs}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Technical Specifications
          </Typography>
      </ListItem>
      <ListItem button component={In6012Reset}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Reset Your Camera
          </Typography>
      </ListItem>
      <ListItem button component={In6012Lense}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Lense Adjustment
          </Typography>
      </ListItem>
      <ListItem button component={In6012Streaming}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Video Streaming
          </Typography>
      </ListItem>
      <ListItem button component={In6012Warranty}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Warranty & Disposal
          </Typography>
      </ListItem>

      <ListItem button component={In6001}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-6001 HD
          </Typography>
      </ListItem>
      <ListItem button component={In6001Manual}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Usermanual
          </Typography>
      </ListItem>
      <ListItem button component={In6001QS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Camera Installation
          </Typography>
      </ListItem>
      <ListItem button component={In6001Warning}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Safety Warnings
          </Typography>
      </ListItem>
      <ListItem button component={In6001Features}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Product Features
          </Typography>
      </ListItem>
      <ListItem button component={In6001Specs}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Technical Specifications
          </Typography>
      </ListItem>
      <ListItem button component={In6001Reset}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Reset Your Camera
          </Typography>
      </ListItem>
      <ListItem button component={In6001Lense}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Lense Adjustment
          </Typography>
      </ListItem>
      <ListItem button component={In6001Streaming}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Video Streaming
          </Typography>
      </ListItem>
      <ListItem button component={In6001Warranty}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Warranty & Disposal
          </Typography>
      </ListItem>

      <ListItem button component={In3011}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-3011
          </Typography>
      </ListItem>
      <ListItem button component={In3011Specs}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Technical Specifications
          </Typography>
      </ListItem>
      <ListItem button component={In3011Warning}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Safety Warnings
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
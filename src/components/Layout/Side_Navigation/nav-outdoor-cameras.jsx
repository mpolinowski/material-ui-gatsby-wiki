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

const OutdoorCams = props => <Link to="/Outdoor_Cameras/" {...props} />

const In9020 = props => <Link to="/Outdoor_Cameras/IN-9020_HD/" {...props} />
const In9020Manual = props => <Link to="/Outdoor_Cameras/IN-9020_HD/Usermanual/" {...props} />
const In9020QS = props => <Link to="/Outdoor_Cameras/IN-9020_HD/Quick_Installation/" {...props} />
const In9020Warning = props => <Link to="/Outdoor_Cameras/IN-9020_HD/Safety_Warnings/" {...props} />
const In9020Features = props => <Link to="/Outdoor_Cameras/IN-9020_HD/Product_Features/" {...props} />
const In9020Specs = props => <Link to="/Outdoor_Cameras/IN-9020_HD/Technical_Specifications/" {...props} />
const In9020Reset = props => <Link to="/Outdoor_Cameras/IN-9020_HD/Camera_Reset/" {...props} />
const In9020Lense = props => <Link to="/Outdoor_Cameras/IN-9020_HD/Lense_Adjustment/" {...props} />
const In9020Warranty = props => <Link to="/Outdoor_Cameras/IN-9020_HD/Warranty/" {...props} />

const In9010 = props => <Link to="/Outdoor_Cameras/IN-9010_HD/" {...props} />
const In9010Manual = props => <Link to="/Outdoor_Cameras/IN-9010_HD/Usermanual/" {...props} />
const In9010QS = props => <Link to="/Outdoor_Cameras/IN-9010_HD/Quick_Installation/" {...props} />
const In9010Warning = props => <Link to="/Outdoor_Cameras/IN-9010_HD/Safety_Warnings/" {...props} />
const In9010Features = props => <Link to="/Outdoor_Cameras/IN-9010_HD/Product_Features/" {...props} />
const In9010Specs = props => <Link to="/Outdoor_Cameras/IN-9010_HD/Technical_Specifications/" {...props} />
const In9010Reset = props => <Link to="/Outdoor_Cameras/IN-9010_HD/Camera_Reset/" {...props} />
const In9010Lense = props => <Link to="/Outdoor_Cameras/IN-9010_HD/Lense_Adjustment/" {...props} />
const In9010Warranty = props => <Link to="/Outdoor_Cameras/IN-9010_HD/Warranty/" {...props} />

const In9008 = props => <Link to="/Outdoor_Cameras/IN-9008_HD/" {...props} />
const In9008Manual = props => <Link to="/Outdoor_Cameras/IN-9008_HD/Usermanual/" {...props} />
const In9008QS = props => <Link to="/Outdoor_Cameras/IN-9008_HD/Quick_Installation/" {...props} />
const In9008Warning = props => <Link to="/Outdoor_Cameras/IN-9008_HD/Safety_Warnings/" {...props} />
const In9008Features = props => <Link to="/Outdoor_Cameras/IN-9008_HD/Product_Features/" {...props} />
const In9008Specs = props => <Link to="/Outdoor_Cameras/IN-9008_HD/Technical_Specifications/" {...props} />
const In9008Reset = props => <Link to="/Outdoor_Cameras/IN-9008_HD/Camera_Reset/" {...props} />
const In9008Lense = props => <Link to="/Outdoor_Cameras/IN-9008_HD/Lense_Adjustment/" {...props} />
const In9008Warranty = props => <Link to="/Outdoor_Cameras/IN-9008_HD/Warranty/" {...props} />

const In7011 = props => <Link to="/Outdoor_Cameras/IN-7011_HD/" {...props} />
const In7011Manual = props => <Link to="/Outdoor_Cameras/IN-7011_HD/Usermanual/" {...props} />
const In7011QS = props => <Link to="/Outdoor_Cameras/IN-7011_HD/Quick_Installation/" {...props} />
const In7011Warning = props => <Link to="/Outdoor_Cameras/IN-7011_HD/Safety_Warnings/" {...props} />
const In7011Features = props => <Link to="/Outdoor_Cameras/IN-7011_HD/Product_Features/" {...props} />
const In7011Specs = props => <Link to="/Outdoor_Cameras/IN-7011_HD/Technical_Specifications/" {...props} />
const In7011Reset = props => <Link to="/Outdoor_Cameras/IN-7011_HD/Camera_Reset/" {...props} />
const In7011Lense = props => <Link to="/Outdoor_Cameras/IN-7011_HD/Lense_Adjustment/" {...props} />
const In7011Warranty = props => <Link to="/Outdoor_Cameras/IN-7011_HD/Warranty/" {...props} />

const In5907 = props => <Link to="/Outdoor_Cameras/IN-5907_HD/" {...props} />
const In5907Manual = props => <Link to="/Outdoor_Cameras/IN-5907_HD/Usermanual/" {...props} />
const In5907QS = props => <Link to="/Outdoor_Cameras/IN-5907_HD/Quick_Installation/" {...props} />
const In5907Warning = props => <Link to="/Outdoor_Cameras/IN-5907_HD/Safety_Warnings/" {...props} />
const In5907Features = props => <Link to="/Outdoor_Cameras/IN-5907_HD/Product_Features/" {...props} />
const In5907Specs = props => <Link to="/Outdoor_Cameras/IN-5907_HD/Technical_Specifications/" {...props} />
const In5907Reset = props => <Link to="/Outdoor_Cameras/IN-5907_HD/Camera_Reset/" {...props} />
const In5907Lense = props => <Link to="/Outdoor_Cameras/IN-5907_HD/Lense_Adjustment/" {...props} />
const In5907Warranty = props => <Link to="/Outdoor_Cameras/IN-5907_HD/Warranty/" {...props} />

const In5905 = props => <Link to="/Outdoor_Cameras/IN-5905_HD/" {...props} />
const In5905Manual = props => <Link to="/Outdoor_Cameras/IN-5905_HD/Usermanual/" {...props} />
const In5905QS = props => <Link to="/Outdoor_Cameras/IN-5905_HD/Quick_Installation/" {...props} />
const In5905Warning = props => <Link to="/Outdoor_Cameras/IN-5905_HD/Safety_Warnings/" {...props} />
const In5905Features = props => <Link to="/Outdoor_Cameras/IN-5905_HD/Product_Features/" {...props} />
const In5905Specs = props => <Link to="/Outdoor_Cameras/IN-5905_HD/Technical_Specifications/" {...props} />
const In5905Reset = props => <Link to="/Outdoor_Cameras/IN-5905_HD/Camera_Reset/" {...props} />
const In5905Lense = props => <Link to="/Outdoor_Cameras/IN-5905_HD/Lense_Adjustment/" {...props} />
const In5905Warranty = props => <Link to="/Outdoor_Cameras/IN-5905_HD/Warranty/" {...props} />

const In2905 = props => <Link to="/Outdoor_Cameras/IN-2905_V2/" {...props} />
const In2905Specs = props => <Link to="/Outdoor_Cameras/IN-2905_V2/Technical_Specifications/" {...props} />

const In2908 = props => <Link to="/Outdoor_Cameras/IN-2908/" {...props} />
const In2908Specs = props => <Link to="/Outdoor_Cameras/IN-2908/Technical_Specifications/" {...props} />

const In4010 = props => <Link to="/Outdoor_Cameras/IN-4010_V2/" {...props} />
const In4010Specs = props => <Link to="/Outdoor_Cameras/IN-4010_V2/Technical_Specifications/" {...props} />

const In4011 = props => <Link to="/Outdoor_Cameras/IN-4011/" {...props} />
const In4011Specs = props => <Link to="/Outdoor_Cameras/IN-4011/Technical_Specifications/" {...props} />

function ProductNav(props) {
  const { classes } = props;
  return (
    <List component="nav">
      <Typography variant="h5" className={classes.navtitle}>
        Products
        </Typography>

      <ListItem button component={OutdoorCams}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Outdoor Cameras
          </Typography>
      </ListItem>

      <ListItem button component={In9020}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-9020 Full HD
          </Typography>
      </ListItem>
      <ListItem button component={In9020Manual}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Usermanual
          </Typography>
      </ListItem>
      <ListItem button component={In9020QS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Camera Installation
          </Typography>
      </ListItem>
      <ListItem button component={In9020Warning}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Safety Warnings
          </Typography>
      </ListItem>
      <ListItem button component={In9020Features}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Product Features
          </Typography>
      </ListItem>
      <ListItem button component={In9020Specs}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Technical Specifications
          </Typography>
      </ListItem>
      <ListItem button component={In9020Reset}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Reset Your Camera
          </Typography>
      </ListItem>
      <ListItem button component={In9020Lense}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Lense Adjustment
          </Typography>
      </ListItem>
      <ListItem button component={In9020Warranty}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Warranty & Disposal
          </Typography>
      </ListItem>

      <ListItem button component={In9010}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-9010 Full HD
          </Typography>
      </ListItem>
      <ListItem button component={In9010Manual}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Usermanual
          </Typography>
      </ListItem>
      <ListItem button component={In9010QS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Camera Installation
          </Typography>
      </ListItem>
      <ListItem button component={In9010Warning}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Safety Warnings
          </Typography>
      </ListItem>
      <ListItem button component={In9010Features}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Product Features
          </Typography>
      </ListItem>
      <ListItem button component={In9010Specs}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Technical Specifications
          </Typography>
      </ListItem>
      <ListItem button component={In9010Reset}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Reset Your Camera
          </Typography>
      </ListItem>
      <ListItem button component={In9010Lense}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Lense Adjustment
          </Typography>
      </ListItem>
      <ListItem button component={In9010Warranty}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Warranty & Disposal
          </Typography>
      </ListItem>

      <ListItem button component={In9008}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-9008 Full HD
          </Typography>
      </ListItem>
      <ListItem button component={In9008Manual}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Usermanual
          </Typography>
      </ListItem>
      <ListItem button component={In9008QS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Camera Installation
          </Typography>
      </ListItem>
      <ListItem button component={In9008Warning}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Safety Warnings
          </Typography>
      </ListItem>
      <ListItem button component={In9008Features}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Product Features
          </Typography>
      </ListItem>
      <ListItem button component={In9008Specs}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Technical Specifications
          </Typography>
      </ListItem>
      <ListItem button component={In9008Reset}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Reset Your Camera
          </Typography>
      </ListItem>
      <ListItem button component={In9008Lense}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Lense Adjustment
          </Typography>
      </ListItem>
      <ListItem button component={In9008Warranty}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Warranty & Disposal
          </Typography>
      </ListItem>

      <ListItem button component={In7011}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-7011 HD
          </Typography>
      </ListItem>
      <ListItem button component={In7011Manual}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Usermanual
          </Typography>
      </ListItem>
      <ListItem button component={In7011QS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Camera Installation
          </Typography>
      </ListItem>
      <ListItem button component={In7011Warning}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Safety Warnings
          </Typography>
      </ListItem>
      <ListItem button component={In7011Features}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Product Features
          </Typography>
      </ListItem>
      <ListItem button component={In7011Specs}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Technical Specifications
          </Typography>
      </ListItem>
      <ListItem button component={In7011Reset}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Reset Your Camera
          </Typography>
      </ListItem>
      <ListItem button component={In7011Lense}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Lense Adjustment
          </Typography>
      </ListItem>
      <ListItem button component={In7011Warranty}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Warranty & Disposal
          </Typography>
      </ListItem>

      <ListItem button component={In5907}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-5907 HD
          </Typography>
      </ListItem>
      <ListItem button component={In5907Manual}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Usermanual
          </Typography>
      </ListItem>
      <ListItem button component={In5907QS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Camera Installation
          </Typography>
      </ListItem>
      <ListItem button component={In5907Warning}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Safety Warnings
          </Typography>
      </ListItem>
      <ListItem button component={In5907Features}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Product Features
          </Typography>
      </ListItem>
      <ListItem button component={In5907Specs}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Technical Specifications
          </Typography>
      </ListItem>
      <ListItem button component={In5907Reset}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Reset Your Camera
          </Typography>
      </ListItem>
      <ListItem button component={In5907Lense}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Lense Adjustment
          </Typography>
      </ListItem>
      <ListItem button component={In5907Warranty}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Warranty & Disposal
          </Typography>
      </ListItem>

      <ListItem button component={In5905}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-5905 HD
          </Typography>
      </ListItem>
      <ListItem button component={In5905Manual}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Usermanual
          </Typography>
      </ListItem>
      <ListItem button component={In5905QS}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Camera Installation
          </Typography>
      </ListItem>
      <ListItem button component={In5905Warning}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Safety Warnings
          </Typography>
      </ListItem>
      <ListItem button component={In5905Features}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Product Features
          </Typography>
      </ListItem>
      <ListItem button component={In5905Specs}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Technical Specifications
          </Typography>
      </ListItem>
      <ListItem button component={In5905Reset}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Reset Your Camera
          </Typography>
      </ListItem>
      <ListItem button component={In5905Lense}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Lense Adjustment
          </Typography>
      </ListItem>
      <ListItem button component={In5905Warranty}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Warranty & Disposal
          </Typography>
      </ListItem>

      <ListItem button component={In2905}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-2905 v2
          </Typography>
      </ListItem>
      <ListItem button component={In2905Specs}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Technical Specifications
          </Typography>
      </ListItem>

      <ListItem button component={In2908}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-2908
          </Typography>
      </ListItem>
      <ListItem button component={In2908Specs}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Technical Specifications
          </Typography>
      </ListItem>

      <ListItem button component={In4010}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-4010 v2
          </Typography>
      </ListItem>
      <ListItem button component={In4010Specs}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Technical Specifications
          </Typography>
      </ListItem>

      <ListItem button component={In4011}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ IN-4011
          </Typography>
      </ListItem>
      <ListItem button component={In4011Specs}>
        <Typography variant="caption" className={classes.navsubtitlesecindent}>
          › Technical Specifications
          </Typography>
      </ListItem>
    </List>
  );
}

ProductNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(ProductNav)
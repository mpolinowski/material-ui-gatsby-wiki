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

const ButtonLink01 = props => <Link to="/Internet_Access/Point_to_Point/" {...props} />
const ButtonLink02 = props => <Link to="/Internet_Access/The_DDNS_Service/" {...props} />
const ButtonLink03 = props => <Link to="/Internet_Access/The_DDNS_Service/Test_DDNS_Address/" {...props} />
const ButtonLink04 = props => <Link to="/Internet_Access/Port_Forwarding/" {...props} />
const ButtonLink05 = props => <Link to="/Internet_Access/Port_Forwarding/Router_Access/" {...props} />
const ButtonLink06 = props => <Link to="/Internet_Access/Port_Forwarding/AVM_Fritzbox/" {...props} />
const ButtonLink07 = props => <Link to="/Internet_Access/Port_Forwarding/Telekom_Speedport/" {...props} />
const ButtonLink08 = props => <Link to="/Internet_Access/Port_Forwarding/D-Link/" {...props} />
const ButtonLink09 = props => <Link to="/Internet_Access/Port_Forwarding/Netgear/" {...props} />
const ButtonLink10 = props => <Link to="/Internet_Access/Port_Forwarding/Vodafone_Easybox/" {...props} />
const ButtonLink11 = props => <Link to="/Internet_Access/Port_Forwarding/Pirelli/" {...props} />
const ButtonLink12 = props => <Link to="/Internet_Access/Port_Forwarding/Digitalisierungsbox_Smart/" {...props} />
const ButtonLink13 = props => <Link to="/Internet_Access/Port_Forwarding/Asus/" {...props} />
const ButtonLink14 = props => <Link to="/Internet_Access/Port_Forwarding/Linksys/" {...props} />
const ButtonLink15 = props => <Link to="/Internet_Access/Port_Forwarding/TP-Link/" {...props} />
const ButtonLink16 = props => <Link to="/Internet_Access/Mobile_Access/" {...props} />
const ButtonLink17 = props => <Link to="/Internet_Access/DDNS_Provider/" {...props} />
const ButtonLink18 = props => <Link to="/Internet_Access/DDNS_Provider/NoIP/" {...props} />
const ButtonLink19 = props => <Link to="/Internet_Access/DDNS_Provider/Selfhost/" {...props} />
const ButtonLink20 = props => <Link to="/Internet_Access/DDNS_Provider/DDNSS/" {...props} />

function InternetNav(props) {
  const { classes } = props;
  return (
    <List component="nav">
      <Typography variant="h5" className={classes.navtitle}>
        Remote Access
        </Typography>
      <ListItem button component={ButtonLink01}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          P2P Service
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink02}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          DDNS Service
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink03}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ DDNS Testing
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink04}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Port Forwarding
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink05}>
        <Typography variant="subtitle1" className={classes.navsubtitleindent}>
          ▪ Router Access
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink06}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ AVM Fritzbox
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink07}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Telekom Speedport
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink08}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ D-Link
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink09}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Netgear
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink10}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Vodafone Easybox
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink11}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Pirelli Router
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink12}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Digitalisierungsbox Smart
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink13}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Asus
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink14}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Linksys
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink15}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ TP-Link
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink16}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Mobile Access
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink17}>
        <Typography variant="subtitle1" className={classes.navsubtitle}>
          Thirdparty DDNS Provider
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink18}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ NoIP
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink19}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ Selfhost
          </Typography>
      </ListItem>
      <ListItem button component={ButtonLink20}>
        <Typography variant="caption" className={classes.navsubtitleindent}>
          ▪ DDNSS
          </Typography>
      </ListItem>
    </List>
  );
}

InternetNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

// export default withRoot(withStyles(styles)(InternetNav))

export default withStyles(styles, { withTheme: true })(InternetNav)
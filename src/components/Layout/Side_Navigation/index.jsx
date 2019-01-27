import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import NavHeader from './nav-header'
import ChapterNav from './nav-chapter'
import ProductNav from './nav-products'
import IndoorNav from './nav-indoor-cameras'
import OutdoorNav from './nav-outdoor-cameras'
import SoftwareNav from './nav-software'
import CgiHDNav from './nav-720p-cgis'
import CgiFHDNav from './nav-1080p-cgis'
import DownloadsNav from './nav-downloads'
import InstallationNav from './nav-installation'
import MotionNav from './nav-motion'
import InternetNav from './nav-internet'
import AdvancedNav from './nav-advanced'
import WebUiHDNav from './nav-webui720p'
import WebUiFHDNav from './nav-webui1080p'

import Conditional from './conditional-render'

const styles = {
  root: {
    width: 300,
  }
}

function MainNav(props) {
  const { classes, location } = props
  return (
    <div className={classes.root}>
      <NavHeader />
      <ChapterNav />
      <Conditional if={location.pathname.match(/^\/Products\//i)}>
        <ProductNav />
      </Conditional>
      <Conditional if={location.pathname.match(/^\/Indoor_Cameras\//i)}>
        <IndoorNav />
      </Conditional>
      <Conditional if={location.pathname.match(/^\/Outdoor_Cameras\//i)}>
        <OutdoorNav />
      </Conditional>
      <Conditional if={location.pathname.match(/^\/Downloads\//i)}>
        <DownloadsNav />
      </Conditional>
      <Conditional if={location.pathname.match(/^\/Software\//i)}>
        <SoftwareNav />
      </Conditional>
      <Conditional if={location.pathname == "/Web_User_Interface/1080p_Series/Overview/"}>
        <ProductNav />
      </Conditional>
      <Conditional if={location.pathname.match(/^\/Web_User_Interface\/720p_Series\//i)}>
        <WebUiHDNav />
      </Conditional>
      <Conditional if={location.pathname.match(/^\/Web_User_Interface\/1080p_Series\//i)}>
        <WebUiFHDNav />
      </Conditional>
      <Conditional if={location.pathname.match(/^\/Quick_Installation\//i)}>
        <InstallationNav />
      </Conditional>
      <Conditional if={location.pathname.match(/^\/Motion_Detection\//i)}>
        <MotionNav />
      </Conditional>
      <Conditional if={location.pathname.match(/^\/Internet_Access\//i)}>
        <InternetNav />
      </Conditional>
      <Conditional if={location.pathname.match(/^\/Advanced_User\//i)}>
        <AdvancedNav />
      </Conditional>
      <Conditional if={location.pathname.match(/^\/720p_Series_CGI_List\//i)}>
        <CgiHDNav />
      </Conditional>
      <Conditional if={location.pathname.match(/^\/1080p_Series_CGI_List\//i)}>
        <CgiFHDNav />
      </Conditional>
    </div >
  );
}

MainNav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(MainNav)
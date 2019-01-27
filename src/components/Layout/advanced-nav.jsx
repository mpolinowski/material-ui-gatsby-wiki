import React from 'react'
import { Link } from "gatsby"

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

class MenuButton extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-label="For Developers Menu"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Developer
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <Link to="/Advanced_User/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}><strong>For Developer</strong></MenuItem>
          </Link>
          <hr />
          <Link to="/Advanced_User/VPN_AVM_Fritzbox/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>VPN Tunnel</MenuItem>
          </Link>
          <Link to="/Advanced_User/Website_Integration/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Website Integration</MenuItem>
          </Link>
          <Link to="/Advanced_User/Website_Integration/HD_Camera_Integration/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ HD Camera Integration</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/Website_Integration/Cambozola/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Cambozola</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/Website_Integration/Open_IP_Camera_Manager/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ OIPCM</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/CGI_Commands/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>CGI Commands</MenuItem>
          </Link>
          <Link to="/1080p_Series_CGI_List/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ 1080p Series</small></MenuItem>
          </Link>
          <Link to="/720p_Series_CGI_List/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ 720p Series</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/CGI_Commands/VGA_Series_CGI_List/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ VGA Series</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/Node-RED_and_MQTT/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Node-RED & MQTT</MenuItem>
          </Link>
          <Link to="/Advanced_User/Node-RED_and_MQTT/Introduction/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Introduction</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/Node-RED_and_MQTT/Intermediate/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Intermediate</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/Node-RED_and_MQTT/Advanced/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Advanced</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/Node-RED_and_MQTT/Projects/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Projects</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/Node-RED_and_MQTT/Smartphone_Integration/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Smartphone Integration</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/OpenHAB_Home_Automation/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>OpenHAB 2</MenuItem>
          </Link>
          <Link to="/Advanced_User/OpenHAB_Home_Automation/OpenHAB_Installation_on_Windows/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ OpenHAB 2 Installation</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/OpenHAB_Home_Automation/Node-RED_Installation_on_Windows/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Node-RED Installation</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/OpenHAB_Home_Automation/Mosquitto_Installation_on_Windows/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Mosquitto Broker Installation</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/OpenHAB_Home_Automation/IP_Camera_Control/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IP Camera Control</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/openHABian_on_Raspberry_Pi/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>openHABian on a Raspberry Pi</MenuItem>
          </Link>
          <Link to="/Advanced_User/openHABian_on_Raspberry_Pi/OpenHAB_Setup/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ OpenHAB Setup</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/openHABian_on_Raspberry_Pi/Node-RED_Setup/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Node-RED Setup</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/openHABian_on_Raspberry_Pi/Mosquitto_Setup/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Mosquitto Setup</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/openHABian_on_Raspberry_Pi/Projects/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Projects</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/IOBroker_on_Raspberry_Pi/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>IOBroker on a Raspberry Pi</MenuItem>
          </Link>
          <Link to="/Advanced_User/IOBroker_on_Raspberry_Pi/IOBroker_Windows_10_Installation/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Installation under Windows 10 (optional)</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/IOBroker_on_Raspberry_Pi/Raspian_Preparation/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Setup your Raspberry Pi</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/IOBroker_on_Raspberry_Pi/IOBroker_Installation/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IOBroker Installation</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/IOBroker_on_Raspberry_Pi/IOBroker_Setup/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IOBroker Setup</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/IOBroker_on_Raspberry_Pi/Visualisation/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Visualisation</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/IOBroker_on_Raspberry_Pi/motionEye/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ motionEye</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/Alexa_Voice_Control_without_Cloud/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Node-RED & Alexa</MenuItem>
          </Link>
          <Link to="/Advanced_User/Node-RED_and_IFTTT/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Node-RED & IFTTT</MenuItem>
          </Link>
          <Link to="/Advanced_User/XiaoMi_Home_Zigbee2MQTT/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>XiaoMi Home & Zigbee2MQTT</MenuItem>
          </Link>
          <Link to="/Advanced_User/Tasker/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Tasker Automatisation</MenuItem>
          </Link>
          <Link to="/Advanced_User/Restore_WebUI/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Restore WebUI</MenuItem>
          </Link>
          <Link to="/Advanced_User/Restore_Firmware/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Restore Firmware</MenuItem>
          </Link>
          <Link to="/Advanced_User/Restore_Firmware/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ 720p Series</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/Restore_Firmware/VGA_Models/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ VGA Series</small></MenuItem>
          </Link>
          <Link to="/Advanced_User/CCTV_vs_IP/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>CCTV vs IP</MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }
}

export default MenuButton;

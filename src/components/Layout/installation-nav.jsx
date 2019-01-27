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
          aria-label="search"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Installation
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <Link to="/Quick_Installation/" style={{ textDecoration: "none", outline: 'none' }} >
            <MenuItem onClick={this.handleClose}><strong>Quick Installation</strong></MenuItem>
          </Link>
          <hr />
          <Link to="/Quick_Installation/How_does_an_IP_Camera_Work/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>How does an IP Camera Work?</MenuItem>
          </Link>
          <Link to="/Quick_Installation/After_Unpacking/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>After Unpacking</MenuItem>
          </Link>
          <Link to="/Quick_Installation/First_Steps/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>First Steps</MenuItem>
          </Link>
          <Link to="/Quick_Installation/Power_over_Ethernet/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Power over Ethernet</MenuItem>
          </Link>
          <Link to="/Quick_Installation/Powerline/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Powerline</MenuItem>
          </Link>
          <Link to="/Quick_Installation/Direct_LAN_Connection/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Direct LAN Connection</MenuItem>
          </Link>
          <Link to="/Quick_Installation/Alternative_IP_Scanner/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Find your Camera</MenuItem>
          </Link>
          <Link to="/Quick_Installation/Language_Selection/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Language Selection</MenuItem>
          </Link>
          <Link to="/Quick_Installation/Live_Video/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Live Video</MenuItem>
          </Link>
          <Link to="/Quick_Installation/Creating_User_Accounts/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>User Management</MenuItem>
          </Link>
          <Link to="/Quick_Installation/WebUI_And_Firmware_Upgrade/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>WebUI and Firmware Upgrade</MenuItem>
          </Link>
          <Link to="/Quick_Installation/WebUI_And_Firmware_Upgrade/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ 1080p Series</small></MenuItem>
          </Link>
          <Link to="/Quick_Installation/WebUI_And_Firmware_Upgrade/720p_Cameras/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ 720p Series</small></MenuItem>
          </Link>
          <Link to="/Quick_Installation/WebUI_And_Firmware_Upgrade/VGA_Cameras/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ VGA Series</small></MenuItem>
          </Link>
          <Link to="/Quick_Installation/How_To_Clear_Your_Browsing_History/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Clear your Browsing History</MenuItem>
          </Link>
          <Link to="/Quick_Installation/Set_Up_A_Wireless_Connection/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Wireless Connection</MenuItem>
          </Link>
          <Link to="/Quick_Installation/ONVIF/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>ONVIF</MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }
}

export default MenuButton;

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
          Products
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <Link to="/Products/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}><strong>Products</strong></MenuItem>
          </Link>
          <hr />
          <Link to="/Downloads/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Downloads</MenuItem>
          </Link>
          <Link to="/Products/Usermanuals/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Usermanuals</MenuItem>
          </Link>
          <Link to="/Indoor_Cameras/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Indoor Cameras</MenuItem>
          </Link>
          <Link to="/Indoor_Cameras/IN-8015_HD/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IN-8015 HD</small></MenuItem>
          </Link>
          <Link to="/Indoor_Cameras/IN-8003_HD/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IN-8003 HD</small></MenuItem>
          </Link>
          <Link to="/Indoor_Cameras/IN-6014_HD/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IN-6014 HD</small></MenuItem>
          </Link>
          <Link to="/Indoor_Cameras/IN-6012_HD/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IN-6012 HD</small></MenuItem>
          </Link>
          <Link to="/Indoor_Cameras/IN-6001_HD/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IN-6001 HD</small></MenuItem>
          </Link>
          <Link to="/Indoor_Cameras/IN-3011/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IN-3011</small></MenuItem>
          </Link>
          <Link to="/Outdoor_Cameras/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Outdoor Cameras</MenuItem>
          </Link>
          <Link to="/Outdoor_Cameras/IN-9020_HD/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IN-9020 HD</small></MenuItem>
          </Link>
          <Link to="/Outdoor_Cameras/IN-9010_HD/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IN-9010 HD</small></MenuItem>
          </Link>
          <Link to="/Outdoor_Cameras/IN-9008_HD/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IN-9008 HD</small></MenuItem>
          </Link>
          <Link to="/Outdoor_Cameras/IN-7011_HD/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IN-7011 HD</small></MenuItem>
          </Link>
          <Link to="/Outdoor_Cameras/IN-5907_HD/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IN-5907 HD</small></MenuItem>
          </Link>
          <Link to="/Outdoor_Cameras/IN-5905_HD/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IN-5905 HD</small></MenuItem>
          </Link>
          <Link to="/Outdoor_Cameras/IN-2905_V2/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IN-2905</small></MenuItem>
          </Link>
          <Link to="/Outdoor_Cameras/IN-2908/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IN-2908</small></MenuItem>
          </Link>
          <Link to="/Outdoor_Cameras/IN-4010_V2/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IN-4010</small></MenuItem>
          </Link>
          <Link to="/Outdoor_Cameras/IN-4011/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ IN-4011</small></MenuItem>
          </Link>
          <Link to="/Products/Lenses/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Lenses</MenuItem>
          </Link>
          <Link to="/Software/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Software</MenuItem>
          </Link>
          <Link to="/Software/Windows/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Windows</small></MenuItem>
          </Link>
          <Link to="/Software/macOS/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ macOS</small></MenuItem>
          </Link>
          <Link to="/Software/Linux/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Linux</small></MenuItem>
          </Link>
          <Link to="/Software/Android/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Android</small></MenuItem>
          </Link>
          <Link to="/Software/iOS/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ iOS</small></MenuItem>
          </Link>
          <Link to="/Software/Other_Platforms/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Other Platforms</small></MenuItem>
          </Link>
          <Link to="/Web_User_Interface/1080p_Series/Overview/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Web User Interface</MenuItem>
          </Link>
          <Link to="/Web_User_Interface/1080p_Series/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ 1080p Serie</small></MenuItem>
          </Link>
          <Link to="/Web_User_Interface/720p_Series/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ 720p Serie</small></MenuItem>
          </Link>
          <Link to="/Products/IN-LAN/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>IN-LAN</MenuItem>
          </Link>
          <Link to="/Products/Power_over_Ethernet/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>IN-PoE</MenuItem>
          </Link>
          <Link to="/Products/IN-Route/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>IN-Route</MenuItem>
          </Link>
          <Link to="/Products/IN-Motion/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>IN-Motion</MenuItem>
          </Link>
          <Link to="/Products/IN-Mikro/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>IN-Mikro</MenuItem>
          </Link>
          <Link to="/Products/IR_Lighting/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Infrared Spotlights</MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }
}

export default MenuButton;

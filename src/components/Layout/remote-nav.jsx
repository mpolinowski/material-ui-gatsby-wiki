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
          aria-label="Remote Access Menu"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Remote Access
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <Link to="/Internet_Access/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}><strong>Remote Access</strong></MenuItem>
          </Link>
          <hr />
          <Link to="/Internet_Access/Point_to_Point/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>P2P Connection</MenuItem>
          </Link>
          <Link to="/Internet_Access/The_DDNS_Service/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>The DDNS Service</MenuItem>
          </Link>
          <Link to="/Internet_Access/Port_Forwarding/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Port Forwarding</MenuItem>
          </Link>
          <Link to="/Internet_Access/Port_Forwarding/Router_Access/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Router Access</small></MenuItem>
          </Link>
          <Link to="/Internet_Access/Port_Forwarding/AVM_Fritzbox/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ AVM Fritzbox</small></MenuItem>
          </Link>
          <Link to="/Internet_Access/Port_Forwarding/Telekom_Speedport/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Telekom Speedport</small></MenuItem>
          </Link>
          <Link to="/Internet_Access/Port_Forwarding/D-Link/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ D-Link</small></MenuItem>
          </Link>
          <Link to="/Internet_Access/Port_Forwarding/Netgear/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Netgear</small></MenuItem>
          </Link>
          <Link to="/Internet_Access/Port_Forwarding/Vodafone_Easybox/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Vodafone_Easybox</small></MenuItem>
          </Link>
          <Link to="/Internet_Access/Port_Forwarding/Pirelli/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Pirelli</small></MenuItem>
          </Link>
          <Link to="/Internet_Access/Port_Forwarding/Digitalisierungsbox_Smart/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Digitalisierungsbox Smart</small></MenuItem>
          </Link>
          <Link to="/Internet_Access/Port_Forwarding/Asus/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Asus</small></MenuItem>
          </Link>
          <Link to="/Internet_Access/Port_Forwarding/Linksys/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Linksys</small></MenuItem>
          </Link>
          <Link to="/Internet_Access/Port_Forwarding/TP-Link/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ TP-Link</small></MenuItem>
          </Link>
          <Link to="/Internet_Access/Port_Forwarding/Unitymedia_Connectbox/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Unitymedia Connectbox</small></MenuItem>
          </Link>
          <Link to="/Internet_Access/Port_Forwarding/Zyxel_Speedlink/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Zyxel Speedlink</small></MenuItem>
          </Link>
          <Link to="/Internet_Access/Mobile_Access/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Mobile Access</MenuItem>
          </Link>
          <Link to="/Internet_Access/DDNS_Provider/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>DDNS Provider</MenuItem>
          </Link>
          <Link to="/Internet_Access/DDNS_Provider/NoIP/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ NoIP</small></MenuItem>
          </Link>
          <Link to="/Internet_Access/DDNS_Provider/Selfhost/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Selfhost</small></MenuItem>
          </Link>
          <Link to="/Internet_Access/DDNS_Provider/DDNSS/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ DDNSS</small></MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }
}

export default MenuButton;

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
          Motion Detection
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <Link to="/Motion_Detection/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}><strong>Motion Detection</strong></MenuItem>
          </Link>
          <hr />
          <Link to="/Motion_Detection/Setup/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Setup</MenuItem>
          </Link>
          <Link to="/Motion_Detection/Setup/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ 1080p Series</small></MenuItem>
          </Link>
          <Link to="/Motion_Detection/Setup/720p_Series/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ 720p Series</small></MenuItem>
          </Link>
          <Link to="/Motion_Detection/Setup/VGA_Series/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ VGA Series</small></MenuItem>
          </Link>
          <Link to="/Motion_Detection/Alarm_Notification/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Alarm Notification</MenuItem>
          </Link>
          <Link to="/Motion_Detection/Alarm_Notification/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ 1080p Series</small></MenuItem>
          </Link>
          <Link to="/Motion_Detection/Alarm_Notification/720p_Series/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ 720p Series</small></MenuItem>
          </Link>
          <Link to="/Motion_Detection/Alarm_Notification/VGA_Series/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ VGA Series</small></MenuItem>
          </Link>
          <Link to="/Motion_Detection/Alarm_Notification/Troubleshooting/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ Troubleshooting</small></MenuItem>
          </Link>
          <Link to="/Motion_Detection/Alarm_Recording/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Alarm Recording</MenuItem>
          </Link>
          <Link to="/Motion_Detection/SD_Card_Access/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>SD Card Access</MenuItem>
          </Link>
          <Link to="/Motion_Detection/Alarm_FTP_Upload/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Alarm FTP Upload</MenuItem>
          </Link>
          <Link to="/Motion_Detection/Alarm_FTP_Upload/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ 1080p Series</small></MenuItem>
          </Link>
          <Link to="/Motion_Detection/Alarm_FTP_Upload/720p_Series/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ 720p Series</small></MenuItem>
          </Link>
          <Link to="/Motion_Detection/Alarm_FTP_Upload/VGA_Series/"
            style={{ textDecoration: "none", outline: 'none', }}>
            <MenuItem onClick={this.handleClose}><small>▪ VGA Series</small></MenuItem>
          </Link>
          <Link to="/Motion_Detection/Router_as_a_FTP_Server/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Router as FTP Server</MenuItem>
          </Link>
          <Link to="/Motion_Detection/FTP_Server_Setup/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>FTP Server Setup</MenuItem>
          </Link>
          <Link to="/Motion_Detection/Alarm_Server/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>Alarm Server</MenuItem>
          </Link>
          <Link to="/Motion_Detection/INSTAR_Cloud/" style={{ textDecoration: "none", outline: 'none' }}>
            <MenuItem onClick={this.handleClose}>INSTAR Cloud</MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }
}

export default MenuButton

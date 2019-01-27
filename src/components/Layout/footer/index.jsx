import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import LeftArrowIcon from '@material-ui/icons/NavigateBefore';
import RightArrowIcon from '@material-ui/icons/NavigateNext';

const styles = theme => ({
  root: {
    position: 'fixed',
    bottom: 0,
    backgroundColor: theme.palette.background.paper,
    margin: '0 -25px',
  },
  flexwrap: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100vw',
    maxWidth: 860,
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

function FooterLinks({ classes, previousLink, previousTitle, nextLink, nextTitle }) {
  return (
    <Paper className={classes.root} elevation={1}>
      <div className={classes.flexwrap}>
        <Button className={classes.button} size="small" href={previousLink}>
          <LeftArrowIcon className={classes.leftIcon} />
          {previousTitle}
        </Button>
        <Button className={classes.button} size="small" href={nextLink}>
          {nextTitle}
          <RightArrowIcon className={classes.rightIcon} />
        </Button>
      </div>
    </Paper>
  );
}

FooterLinks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterLinks);
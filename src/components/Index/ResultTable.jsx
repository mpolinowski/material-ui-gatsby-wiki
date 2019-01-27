import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'


import presets from "../../utils/presets"

const styles = {
  card: {
    display: 'flex',
    marginBottom: 15,
    paddingTop: 5,
  },
  content: {
    flex: '1',
  },
  cover: {
    width: 151,
    height: 151    
  },
  inlineList: {
    marginTop: `35px`,
  },
  inlineListItem: {
    display: `inline`,
    fontSize: `small`,
  },
  badgeStyle: {
    color: presets.lightGrey,
    backgroundColor: presets.verylightGrey,
    boxShadow: `inset 0 1px 2px rgba(255,255,255,0.3),
              inset 0 -1px 2px rgba(0,0,0,0.3),
              0 1px 1px rgba(255,255,255,0.9)`,
    padding: 4,
    height: 26,
    marginLeft: 7,
    border: `1px solid rgba(0,0,0,0.1)`,
    borderRadius: 4,
    fontSize: `small`,
    float: `right`,
    display: `flex`,
    alignContent: `center`,
    justifyContent: `center`
  }
}

function ResultTable(props) {
  const {
    classes,
    title,
    badge,
    abstract,
    imagesquare,
    sublink1,
    sublink2,
    sublink3,
    sublink4,
    subtitle1,
    subtitle2,
    subtitle3,
    subtitle4
  } = props;

  return (
    <div>
      <Card className={classes.card}>
        <Link to={sublink1} style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>
          <CardMedia
            className={classes.cover}
            image={imagesquare}
            title={title}
          />
        </Link>
        <CardContent className={classes.content}>
          <Link to={sublink1} style={{ textDecoration: 'none', color: 'white' }}>
            <span className={classes.badgeStyle}>
              {badge}
            </span>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {abstract}
            </Typography>
          </Link>
          <Typography variant="caption" gutterBottom align="right">
            <ul className={classes.inlineList}>
              <li className={classes.inlineListItem}><Link to={sublink1}>{subtitle1}</Link></li>
              <li className={classes.inlineListItem}><Link to={sublink2}>&nbsp;{subtitle2}</Link></li>
              <li className={classes.inlineListItem}><Link to={sublink3}>&nbsp;{subtitle3}</Link></li>
              <li className={classes.inlineListItem}><Link to={sublink4}>&nbsp;{subtitle4}</Link></li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

ResultTable.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles)(ResultTable)
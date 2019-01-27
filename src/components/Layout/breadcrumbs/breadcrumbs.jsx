import React from 'react'

import { withStyles } from '@material-ui/core/styles'
// import withRoot from '../../../utils/withRoot'

import BreadcrumbsPills from './breadcrumbs-pill'

const styles = {
  breadcrumbwrapper: {
    marginLeft: '-32px',
    marginBottom: 25
  },
  breadcrumblist: {
    listStyleType: 'none'
  },
}

function BreadCrumbs({ classes, pills }) {
  return (
    <div className={classes.breadcrumbwrapper}>
      <ul className={classes.breadcrumblist}>
        {
          pills.map((pill, i) =>
            <BreadcrumbsPills key={i} {...pill} />
          )
        }
      </ul>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(BreadCrumbs)
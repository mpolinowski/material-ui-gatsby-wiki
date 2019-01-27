import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"

import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import SearchButton from '@material-ui/icons/Search'

import MenuButton from './mobile-nav'
import presets from '../../utils/presets'

const styles = theme => ({
    fab: {
        background: presets.brand,
        marginLeft: '5px',
        boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
    },
    search: {
        fontSize: 20
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        position: `fixed`,
        zIndex: 1000,
        right: 25,
        bottom: 90,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
})

const SearchAssistant = props => <Link to="/Assistants/Global_Search/" {...props} />

function FloatingButtons(props) {
    const {
        classes
    } = props;
    return (
        <div className={classes.container}>
            <Fab
                component={SearchAssistant}
                color="primary"
                aria-label="search"
                className={classes.fab}
                style={{textDecoration: 'none', color: 'white'}}>
                <SearchButton className={classes.search} />
            </Fab>
            <MenuButton />
        </div>
    );
}

FloatingButtons.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(FloatingButtons)

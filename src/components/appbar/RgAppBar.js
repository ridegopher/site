import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import { PropTypes } from 'react'
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {auth} from "../../api/auth";

const queryString = require("query-string");

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class RgAppBar extends Component {
    constructor(props) {
        super(props);
        this._auth()
    }

    _auth() {
        const code = queryString.parse(window.location.search).code
        if (code && code != null) {
            // this.props.onStateChange('signing in', {});
            window.history.pushState("authed", "Ride Gopher", "/");
            const authPromise = auth(code)
            authPromise.then(user => {
                if (user.authenticated) {
                    this.props.onStateChange('signedIn', {});
                }
            })
        }

    }

    render() {
        const {classes} = this.props;
        const isNotLoggedIn = this.props.authState !== 'signedIn';
        return (
            <React.Fragment>
                <AppBar position="sticky">
                    <Toolbar>
                        <div className={classes.grow}>
                            <Typography variant="h4" color="inherit">
                                Ride Gopher
                            </Typography>
                            <Typography variant="subtitle2" color="inherit" className={classes.grow}>
                                Automate Strava
                            </Typography>
                        </div>
                        {isNotLoggedIn ? <Button color="inherit"
                                                 href={"https://www.strava.com/oauth/authorize?client_id=25651&response_type=code&redirect_uri=http://localhost:3000/auth"}><img
                                src={"/connect.svg"} alt=""/></Button> : ""}
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

RgAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RgAppBar);
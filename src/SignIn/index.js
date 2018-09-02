import {Auth} from 'aws-amplify';
import React, {Component} from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function login(win, pollTimer, redirectUri, comp) {
    try {
        if (!!win && win.location.href.indexOf(redirectUri) !== -1) {
            window.clearInterval(pollTimer);

            const loc = win.location;
            win.close()

            const code = getParameterByName('code', loc)

            axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
            axios.get('https://api.ridegopher.com/strava/oauth?code=' + code)
                .then(function (response) {
                    const token = response.data.token
                    const identityId = response.data.identity_id
                    Auth.federatedSignIn('developer', {
                            token: token,
                            identity_id: identityId
                        },
                        {
                            id: identityId
                        }
                    ).then(credentials => {
                        if (credentials.authenticated) {
                            comp.props.onStateChange('signedIn')
                        }
                    }).catch(e => {
                        console.error(e)
                    });
                })
        }
    } catch (err) {
        // do something or nothing if window still not redirected after SignIn
    }
}

class SignIn extends Component {
    oAuth2TokenGet() {
        const redirectUri = 'http://localhost:3000';
        const url = `https://www.strava.com/oauth/authorize?client_id=25651&response_type=code&redirect_uri=http://localhost:3000`;
        const win = window.open(url, 'name', 'height=600,width=450');
        if (win) win.focus();
        const pollTimer = window.setInterval(() => {
            login(win, pollTimer, redirectUri, this)
        }, 100)
    }


    render() {
        if (this.props.authState !== 'signedIn') {
            return (
                <Button onClick={
                    this.oAuth2TokenGet.bind(this)}>Sign in with Strava
                </Button>
            );
        } else {
            return null
        }
    }
}

export default SignIn
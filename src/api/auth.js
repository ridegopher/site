import axios from 'axios';
import {Auth} from 'aws-amplify';

export const auth = (code) => {
    axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
    const rgCredentials = axios.get('https://api.ridegopher.com/strava/oauth?code=' + code)
    return rgCredentials.then(response => {
        const credentials = response.data
        return Auth.federatedSignIn('developer', {
                token: credentials.token,
                identity_id: credentials.identity_id,
                expires_at: 600,
            },
            {
                id: rgCredentials.identityId
            }
        )
    })
}
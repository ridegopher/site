import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import UserSettings from '../components/user/UserSettings'
import ActivityList from "../components/activity/ActivityList";
import CommuteList from "../components/commute/CommuteList";

class Home extends Component {
    render() {
        const isLoggedIn = this.props.authState === 'signedIn';
        if(!isLoggedIn) {
            return (                
                    <Grid container className="content-grid" spacing={2}>
                        <Grid item xs={12}>
                                <UserSettings />
                            </Grid>
                            <Grid item xs={12}>
                                <ActivityList/>
                            </Grid>
                            <Grid item xs={12}>
                                <CommuteList/>
                            </Grid>                                    
                    </Grid>                
            )
        } else {
            return null
        }
    }
}

export default Home;
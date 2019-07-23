import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import UserSettings from '../user/UserSettings'
import ActivityList from "../activity/ActivityList";
import CommuteList from "../commute/CommuteList";
import { Auth } from 'aws-amplify';

class Home extends Component {
    state = {
        user:{}
    };

    componentDidMount(){
        Auth.currentAuthenticatedUser()
        .then(user => {
            this.setState({
                user:user.attributes 
            })
        })
    }

    render() {
        const isLoggedIn = this.props.authState === 'signedIn';
        if(!isLoggedIn) {
            return (                
                    <Grid container className="content-grid" spacing={2}>
                        <Grid item xs={12}>
                                <UserSettings user={this.state.user}/>
                            </Grid>
                            <Grid item xs={12}>
                                <ActivityList user={this.state.user}/>
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
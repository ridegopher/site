import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid/Grid";

class Home extends Component {
    render() {
        const isLoggedIn = this.props.authState === 'signedIn';
        if(!isLoggedIn) {
            return (
                <React.Fragment>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <h1>I am the Mother Fucking Marketing Website</h1>
                            </Grid>
                        </Grid>
                    </Grid>
                </React.Fragment>
            )
        } else {
            return null
        }
    }
}

export default Home;
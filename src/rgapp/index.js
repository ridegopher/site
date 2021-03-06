import React, {Component} from "react";
import {graphqlOperation} from "aws-amplify";
import {Connect} from "aws-amplify-react";
import * as queries from '../graphql/queries';
import {print as gqlToString} from 'graphql/language';

class RideGopherApp extends Component {
    render() {
        const isLoggedIn = this.props.authState === 'signedIn';
        if (isLoggedIn) {
            return (
                <React.Fragment>
                    <Connect query={graphqlOperation(gqlToString(queries.get_athlete_data))}>
                        {({data: {getAthlete}, loading, error}) => {
                            if (error) return (<h3>Error</h3>);
                            if (loading || !getAthlete) return (<h3>Loading...</h3>)
                            return <div athlete={getAthlete}/>
                        }}
                    </Connect>
                </React.Fragment>
            )
        } else {
            return null
        }
    }
}

export default RideGopherApp
import React, {Component} from "react";
import {API, graphqlOperation} from "aws-amplify";
import { Connect } from "aws-amplify-react";
import * as queries from '../graphql/queries';
import {print as gqlToString} from 'graphql/language';

class RideGopherApp extends Component {
    render() {
        const ListView = ({ athlete }) => (
            <div>
                <h3>Hello World</h3>
                {athlete.firstname}
            </div>
        );
        const isLoggedIn = this.props.authState === 'signedIn';
        if(isLoggedIn) {
            return (
                <React.Fragment>
                    <Connect query={graphqlOperation(gqlToString(queries.get_athlete_data))}>
                        {({ data: { getAthlete }, loading, error }) => {
                            if (error) return (<h3>Error</h3>);
                            if (loading || !getAthlete) return (<h3>Loading...</h3>)
                                return <ListView athlete={getAthlete}/>
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
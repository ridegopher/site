import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import theme from "./config/theme"
import Home from "./home";
import {Authenticator} from 'aws-amplify-react';
import Amplify from 'aws-amplify';
import RgAppBar from "./components/RgAppBar";
import RideGopherApp from "./rgapp";

Amplify.configure({
    Auth: {
        identityPoolId: 'us-east-1:efd0bace-4b74-4521-a5af-5d4f5175a6dc',
        region: 'us-east-1',
        mandatorySignIn: true,
    },
    aws_appsync_graphqlEndpoint: "https://jalxzy6w4rh77fh3xidwzo7cuu.appsync-api.us-east-1.amazonaws.com/graphql",
    aws_appsync_region: "us-east-1",
    aws_appsync_authenticationType: "AWS_IAM",
});

class Index extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <CssBaseline/>
                    <Authenticator hideDefault>
                        <RgAppBar/>
                        <Home/>
                        <RideGopherApp/>
                    </Authenticator>
                </div>
            </MuiThemeProvider>
        );
    }

}

ReactDOM.render(<Index/>, document.getElementById('root'));

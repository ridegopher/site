import React, {Component} from 'react';
import Amplify from 'aws-amplify';
import {Authenticator} from 'aws-amplify-react';
import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import theme from './theme/config'
import Home from "./Home";
import SignIn from "./SignIn";

Amplify.configure({
    Auth: {
        identityPoolId: 'us-east-1:efd0bace-4b74-4521-a5af-5d4f5175a6dc',

        region: 'us-east-1',

        mandatorySignIn: false,
    }
});

const federated = {
    developer: 'auth.ridegopher.dev',
};

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <CssBaseline/>
                    <Authenticator authState='signIn' hideDefault federated={federated}
                                   onStateChange={this.handleAuthStateChange}>
                        <Home />
                        <SignIn />
                    </Authenticator>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;

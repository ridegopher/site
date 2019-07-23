import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider';
import theme from "../../config/theme"
import Home from "../home/home";
import RgAppBar from "../appbar/RgAppBar";
import { withAuthenticator } from 'aws-amplify-react';


const signUpConfig = {
  header: 'My Customized Sign Up',
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Given Name',
      key: 'given_name',
      required: true,
      displayOrder: 2,
      type: 'string'
    },
    {
      label: 'Family Name',
      key: 'family_name',
      required: true,
      displayOrder: 3,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 4,
      type: 'password'
    }
  ]
};
const usernameAttributes = 'email';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <CssBaseline/>
                    <RgAppBar/>
                    <Home/>
                </div>
            </MuiThemeProvider>
        );
    }

}

export default withAuthenticator(App, {signUpConfig, usernameAttributes});

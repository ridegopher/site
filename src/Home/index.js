import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";


const Home = () => (
    <React.Fragment>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    Ride Gopher
                </Typography>
            </Toolbar>
        </AppBar>
    </React.Fragment>
)

export default Home
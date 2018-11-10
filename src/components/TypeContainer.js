import {Component} from "react";
import Typography from "@material-ui/core/Typography/Typography";
import Activity from "./Activity";
import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Commute from "./Commute";
import Button from "@material-ui/core/Button/Button";
import AddIcon from '@material-ui/icons/Add';

class TypeContainer extends Component {
    render() {
        return (
            <Grid spacing={40} style={{padding:40}}>
                <Grid item xs={12} spacing={40}>
                    <Grid container
                          direction="column"
                          justify="space-evenly"
                          alignItems="center"
                          style={{paddingBottom:40}}>
                        <Typography variant="h3" color="inherit" align="left">
                            Activities
                        </Typography>
                        {this.props.athlete.activities.map(activity => (
                            <Activity key={activity.activity_type} activity={activity}/>))}
                    </Grid>
                </Grid>
                <Grid item xs={12} spacing={40}>
                    <Grid container
                          direction="column"
                          justify="space-evenly"
                          alignItems="center">
                        <Typography variant="h3" color="inherit" align="left">
                            Commutes
                        </Typography>
                        {this.props.athlete.commutes.map(commute => (
                            <Commute key={commute.name} commute={commute}/>))}
                    </Grid>
                </Grid>
                <Button style={{position:"absolute", bottom: 50, right: 50}} variant="fab" color="primary" aria-label="Add">
                    <AddIcon />
                </Button>
            </Grid>)
    }
}

export default TypeContainer
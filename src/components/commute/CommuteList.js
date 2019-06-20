import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Commute from "./Commute";


class CommuteList extends React.Component {
    render(){
        return (        
            <Container maxWidth="lg" className="commute-list-cont">
                <Paper className="commute-list">
                    <Typography variant="h5" component="h3">
                    Commutes
                    </Typography>
                    <Commute/>
                </Paper>
            </Container>
        )
    }
};

export default CommuteList;
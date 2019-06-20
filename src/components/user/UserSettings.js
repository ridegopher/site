import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class UserSettings extends React.Component {
    state = {
        dateFormat:'dd/mm/yyyy',
        distanceFormat: 'k',
        dateFormats: ['dd/mm/yyyy', 'mm/dd/yyyy'],
        distanceFormats:[{format:'k', name:'Kilometers'}, {format:'m', name: 'Miles'}],
        defaultDescriptionFormat:"1.2 Miles - Night Run - with RideGopher"
      };

    render(){
        return(
            <Container maxWidth="lg" className="content">
                <Paper className="UserSettings">
                    <Typography variant="h5" component="h3">
                    User Settings
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <Avatar >JW</Avatar>
                        </Grid>
                         <Grid item xs={6}>
                            <Grid item lg container direction="column" spacing={2}>
                                <Grid item xs>
                                    <InputLabel htmlFor="distance-format">Distance Format</InputLabel>
                                    <Select
                                    id="distance-format"
                                    value={this.state.distanceFormat}                                   
                                    >
                                        {this.state.distanceFormats.map(f => (
                                            <MenuItem key={f.format} value={f.format}>{f.name}</MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                                <Grid item xs>
                                    <InputLabel htmlFor="dateformat">Date Format</InputLabel>
                                        <Select
                                        id="dateformat"
                                        value={this.state.dateFormat}                                   
                                        >
                                            {this.state.dateFormats.map(format => (
                                                <MenuItem key={format} value={format}>{format}</MenuItem>
                                            ))}
                                        </Select>
                                 </Grid>
                                 <Grid item xs>
                                    <TextField
                                            id="default-activity-format"
                                            label="Default Activity Format"
                                            value={this.state.defaultDescriptionFormat}
                                            margin="normal"
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            variant="outlined"
                                            fullWidth
                                        />
                                 </Grid>                                 
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        )
    };
}

export default UserSettings;
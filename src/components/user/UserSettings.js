import React from "react";
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import gs from "../../api/StravaApi";

const gearService = new gs();

const styles = theme => ({
    avatar: {
        margin: 10,
      },
      bigAvatar: {
        margin: 10,
        width: 150,
        height: 150,
      }  
})

class UserSettings extends React.Component {
    state = {
        dateFormat:'',
        distanceFormat: '',
        dateFormats: ['dd/mm/yyyy', 'mm/dd/yyyy', '%m/%d/%Y'],
        distanceFormats:[{format:'K', name:'Kilometers'}, {format:'M', name: 'Miles'}],
        defaultDescriptionFormat:'',
        athlete:{}
      };

    componentDidMount(){
        this.loadGearSettings()
        this.loadAthlete()
    }

    loadGearSettings = async () =>{
        let userSettings = await gearService.getDefaultSettings()
        console.log(userSettings)
        this.setState({
            dateFormat:userSettings.dateFormat,
            distanceFormat:userSettings.distanceFormat,
            defaultDescriptionFormat:userSettings.defaultDescriptionFormat
        })
    };

    loadAthlete = async () =>{
        let athlete = await gearService.getStravaAthlete();
        console.log(athlete)
        this.setState({
            athlete: athlete
        })
    }

    render(){
        const { classes } = this.props;
        return(
            <Container maxWidth="lg" className="content">
                <Paper className="UserSettings">
                    <Typography variant="h5" component="h3">
                    User Settings
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <Avatar src={this.state.athlete.profile} className={classes.bigAvatar}>JW</Avatar>
                            <span>{this.state.athlete.firstname} {this.state.athlete.lastname}</span>
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

export default withStyles(styles)(UserSettings);
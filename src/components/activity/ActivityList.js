import React from "react";
import _ from 'lodash';
import { withStyles } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Activity from "./Activity";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import gs from "../../api/GoRiderApi"

  const styles = theme => ({
    root: {
        padding: theme.spacing(3, 2),
      },
      greenFab: {
        margin: 10,
        color: '#fff',
        backgroundColor: green[500],
      }
  });

const gearService = gs();

class ActivityList extends React.Component {
    state = {
        activitySettings: [],
        userGear: []
      };
     
    componentDidMount() {
        this.loadGearSettings();
        this.loadUserGear();
    };

    loadGearSettings = () =>{
        gearService.settings
        .get({})
        .then(data => {
            this.setState({
                activitySettings: data.gearSettings
            });
        });
    };

    loadUserGear = () => {
        gearService.gear
        .list({})
        .then(data => {
            this.setState({
                userGear: data.gear
            });
        });
    }

    handleActivityTypeChange = (e, id) => {
        var setting = _.find(this.state.activitySettings, ['id', id])
        _.set(setting, 'activityType', e.target.value)
        this.setState({
            activitySettings: this.state.activitySettings
          });
      };

      handleGearChange = (e, id) => {
        var setting = _.find(this.state.activitySettings, ['id', id])
        var selectedGear = _.find(this.state.userGear, ['id', e.target.value])
        _.set(setting, 'gear', selectedGear)
        this.setState({
            activitySettings: this.state.activitySettings
        });
      };

      handleSaveClick = event => {
        console.log("Call Save API")
      };

      handleRemoveClick = (id) => {
        this.setState({
            activitySettings: this.state.activitySettings.filter(setting => setting.id !== id)
        });
      };

      handleAddActivitySetting = event => {
        console.log(event)
      }
    
    render(){
        const { classes } = this.props;
        return (        
            <Container maxWidth="lg" className="activities">
                <Paper className={classes.root}>
                    <Grid container spacing={2} >
                        <Grid container>
                            <Grid item xs={9} >
                                <Typography variant="h5" component="h3" align='left'>
                                Activity List
                                </Typography>
                            </Grid>
                            <Grid item xs={3} align='right'>
                                <Fab color="secondary" aria-label="Add" className={classes.greenFab} onClick={() => this.handleAddActivitySetting()}>
                                    <AddIcon />
                                </Fab>                                
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus sapien, iaculis eget mollis ac, efficitur et tortor. Aenean magna nibh, consequat at facilisis et, eleifend quis augue.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {this.state.activitySettings.map( activitySetting => (
                                <Activity 
                                key={activitySetting.id}
                                activitySetting={activitySetting}  
                                userGear={this.state.userGear} 
                                onActivityTypeChange={this.handleActivityTypeChange}
                                onGearChange={this.handleGearChange}
                                onSave={this.handleSaveClick} 
                                onRemove={this.handleRemoveClick} />
                            ))}
                        </Grid>
                    </Grid>             
                </Paper>
            </Container>
        )
    }
};

export default withStyles(styles)(ActivityList);
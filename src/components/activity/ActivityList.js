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
import grs from "../../api/StravaApi";
import uuid from "uuid";

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
const grService = new grs();

class ActivityList extends React.Component {
    state = {
        gearSettings: [],
        userGear: [],
        activityGear: [],
      };
     
    componentDidMount() {
        this.loadGearSettings();
        this.loadUserGear();
    };

    loadGearSettings = () =>{
        grService.getActivitySettings(this.props.email)
        .then(data => {
            console.log(data)
            this.setState({
                gearSettings: data
            });
        });
    };

    loadUserGear = () => {
        grService.getUserGear()
        .then(data => {
            this.setState({
                userGear: data
            });
        });
    }

    handleActivityTypeChange = (e, id) => {
        var setting = _.find(this.state.gearSettings, ['id', id])
        _.set(setting, 'activityType', e.target.value)
        this.setState({
            gearSettings: this.state.gearSettings,
            activityGear: this.getActivityGearList(e.target.value)
          });
      };

      getActivityGearList = (activityType) => {
          var bikeActivities = ['Ride']
          var shoeActivities = ['Run', 'Run Indoor', 'Walk']
          if(bikeActivities.includes(activityType)){
              return this.state.userGear.get('bikes')
          }
          if(shoeActivities.includes(activityType)){
            return this.state.userGear.get('shoes')
          }
          return [];
      }

      handleGearChange = (e, id) => {
        var setting = _.find(this.state.gearSettings, ['id', id])
        _.set(setting, 'gearId', e.target.value)
        this.setState({
            gearSettings: this.state.gearSettings
        });
      };

      handleSaveClick = (id) => {
        console.log("Call Save API")
        var setting = _.find(this.state.gearSettings, ['id', id])
        grService.saveGearSetting(setting)
      };

      handleRemoveClick = (id) => {
        this.setState({
            gearSettings: this.state.gearSettings.filter(setting => setting.id !== id)
        });
      };

      handleAddActivitySetting = event => {
        var newActivitySetting = {
            id:uuid.v4(),
            email:this.props.user.email,
            activityType:'',
            gearId:''
        }
        this.setState({
            gearSettings: this.state.gearSettings.concat(newActivitySetting)
        });

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
                                <Fab color="secondary" aria-label="Add" className={classes.greenFab} onClick={(e) => this.handleAddActivitySetting(e)}>
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
                            {this.state.gearSettings.map( activitySetting => (
                                <Activity 
                                key={activitySetting.id}
                                activitySetting={activitySetting}  
                                userGear={this.getActivityGearList(activitySetting.activityType)} 
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
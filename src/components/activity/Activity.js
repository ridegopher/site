import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ACTIVITY_TYPES } from "../../api/GoRiderApi";


const styles = theme => ({
    root: {
        width: '85%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '85%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
});

class Activity extends React.Component {
    render(){
        const { classes, activitySetting, userGear, onGearChange, onActivityTypeChange, onRemove, onSave } = this.props;
        return (
                <ExpansionPanel >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>Activity</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.details}>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <InputLabel htmlFor="activity-type">Activity</InputLabel>
                                <Select
                                    id="activity-type"
                                    value={activitySetting.activityType}
                                    onChange={e => onActivityTypeChange(e, activitySetting.id)}                           
                                 > 
                                    {ACTIVITY_TYPES.map(type=> (
                                        <MenuItem key={type} value={type}>{type}</MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                            <Grid item xs={4}>
                                <InputLabel htmlFor="gear">Gear</InputLabel>
                                <Select
                                    id="gear"
                                    value={activitySetting.gear.id}
                                    onChange={e => onGearChange(e, activitySetting.id)}                     
                                 > 
                                    {userGear.map(g=> (
                                        <MenuItem key={g.id} value={g.id}>{g.name}</MenuItem>
                                    ))}
                                </Select>
                            </Grid>                                    
                            <Grid item xs={4}>
                                      <FormGroup aria-label="position" name="position" value={activitySetting.enabled}  row>
 `                                       <FormControlLabel
                                        value="top"
                                        control={<Switch color="primary" />}
                                        label="Disable"
                                        labelPlacement="start"
                                        />
                                    </FormGroup>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>
                        <Button size="small" color="secondary" onClick={e => onRemove(activitySetting.id)}>
                            Remove
                        </Button>
                        <Button size="small" color="primary" onClick={e => onSave(activitySetting.id)}>
                            Save
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
    )};

}

Activity.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Activity);
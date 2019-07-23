import { API, graphqlOperation, Auth } from 'aws-amplify';
import * as queries from '../graphql/queries.ts';
import * as mutations from '../graphql/mutations.ts';
import axios from 'axios';

let instance = null;
const auth_token = 'a40790f7b47ebf0d8a7a8c257a09880620d94c4e';

const stravaApi = axios.create({
    baseURL: 'https://www.strava.com/api/v3',
    timeout: 1000,
    headers: {'Authorization': 'Bearer ' + auth_token}
  });

const privateMethods = {
    getStravaAthlete () {
        return stravaApi.get('/athlete')
    },
    getCurrentUser () {
        return Auth.currentAuthenticatedUser()
    }
  }

class RideGopherAPI {    
  constructor() {
    if(!instance){
      instance = this;
      this.athletePromise = privateMethods.getStravaAthlete.call(this);
      this.currentUser = privateMethods.getCurrentUser.call(this);
    }

    return instance;
  }

  async getDefaultSettings() {
    try {
      let user = await this.currentUser
      let rgUserSettingRes = await API.graphql(graphqlOperation(queries.getUserSetting, {"email": user.attributes.email}))
      let rideGopherUser = rgUserSettingRes.data.getUserSetting
      if(rideGopherUser === null){
        rideGopherUser = await this.buildDefaultSettings(user);
        console.log(rideGopherUser);
        await API.graphql(graphqlOperation(mutations.createUserSetting, {input: rideGopherUser}))
      }
      return rideGopherUser;
    }
    catch(err){
      console.log(err)
    }
  }

  getCurrentUser(){
    this.currentUser
    .then(user => {
      return Promise.resolve(user.attributes);
    })
    .catch(err => console.log(err));
  }

  async buildDefaultSettings(user){
    let athlete = await this.getStravaAthlete();
    return {
          'email': user.attributes.email,
          'dateFormat': athlete.date_preference,
          'distanceFormat': 'M',
          'defaultDescriptionFormat': '1.2 Miles - Night Run - with RideGopher'
        }
  }

  getStravaAthlete() {
    return this.athletePromise
    .then(resp => {
        return Promise.resolve(resp.data);
    })
    .catch(err => console.log(err));
  }

  getActivitySettings(email) {    
    return API.graphql(graphqlOperation(queries.listGearSettings, {"email": email}))
    .then(resp => {
      console.log(resp)
      return Promise.resolve(resp.data.listGearSettings.items);
    })
    .catch(err => console.log(err));
  }
  
  getUserGear(){
    return this.getStravaAthlete()
    .then(user => {
      var gearMap = new Map();
      gearMap.set('bikes', user.bikes || []);
      gearMap.set('shoes', user.shoes || []);
      return Promise.resolve(gearMap);
    })
    .catch(err => console.log(err));
  }

  saveGearSetting(gearSetting){
    console.log(gearSetting)
    try {
      // if(typeof gearSetting.id == 'number'){
      //   delete gearSetting.id;
        API.graphql(graphqlOperation(mutations.createGearSetting, {input: gearSetting}))
      // }
      // else {
        // API.graphql(graphqlOperation(mutations.updateGearSetting, {input: gearSetting}))
      // }
    }
    catch(err){
      console.log(err)
    }
  }
}

export default RideGopherAPI;
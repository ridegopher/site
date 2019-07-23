const isNode = require("is-node");
const faker = require("faker/locale/en");

let key;

const ACTIVITY_TYPES = [
  "Ride",
  "Run",
  "Run Indoor",
  "Swim",
  "Weights",
  "Walk"
];

const time = () => 1000 + Math.floor(Math.random() * 3000);

const promiseGen = output =>
  new Promise(resolve => setTimeout(() => resolve(output), time()));

const gearGen = () => ({
    id: faker.random.number(1000),
    name: faker.lorem.words(3)
});

const userGear = Array.from({ length: 7 }).map(() => gearGen())

const gearSettingsGen = () => ({
    id: faker.random.number(1000),
    activityType: ACTIVITY_TYPES[faker.random.number(3)],
    gear: userGear[faker.random.number(6)]
});

const api = {
  gear: {
    list(opts) {
      return promiseGen({
          gear: userGear
      });
    }
  },
  settings: {
    get(opts) {
      return promiseGen({
        gearSettings: Array.from({ length: 4 }).map(() => gearSettingsGen())
      });
    }
  }
};

module.exports = function createGearSettingServiceSingleton(creds) {
  if (creds) {
    key = creds.key;
  }
  return api;
};

module.exports.ACTIVITY_TYPES = ACTIVITY_TYPES;

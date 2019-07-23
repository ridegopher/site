// tslint:disable
// this is an auto generated file. This will be overwritten

export const createUserSetting = `mutation CreateUserSetting($input: CreateUserSettingInput!) {
  createUserSetting(input: $input) {
    email
    dateFormat
    distanceFormat
    defaultDescriptionFormat
  }
}
`;
export const updateUserSetting = `mutation UpdateUserSetting($input: UpdateUserSettingInput!) {
  updateUserSetting(input: $input) {
    email
    dateFormat
    distanceFormat
    defaultDescriptionFormat
  }
}
`;
export const deleteUserSetting = `mutation DeleteUserSetting($input: DeleteUserSettingInput!) {
  deleteUserSetting(input: $input) {
    email
    dateFormat
    distanceFormat
    defaultDescriptionFormat
  }
}
`;
export const createGearSetting = `mutation CreateGearSetting($input: CreateGearSettingInput!) {
  createGearSetting(input: $input) {
    id
    email
    activityType
    gearId
  }
}
`;
export const updateGearSetting = `mutation UpdateGearSetting($input: UpdateGearSettingInput!) {
  updateGearSetting(input: $input) {
    id
    email
    activityType
    gearId
  }
}
`;
export const deleteGearSetting = `mutation DeleteGearSetting($input: DeleteGearSettingInput!) {
  deleteGearSetting(input: $input) {
    id
    email
    activityType
    gearId
  }
}
`;

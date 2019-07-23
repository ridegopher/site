// tslint:disable
// this is an auto generated file. This will be overwritten

export const getUserSetting = `query GetUserSetting($email: String!) {
  getUserSetting(email: $email) {
    email
    dateFormat
    distanceFormat
    defaultDescriptionFormat
  }
}
`;
export const listUserSettings = `query ListUserSettings(
  $email: String
  $filter: ModelUserSettingFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserSettings(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      email
      dateFormat
      distanceFormat
      defaultDescriptionFormat
    }
    nextToken
  }
}
`;
export const getGearSetting = `query GetGearSetting($id: ID!, $email: String!) {
  getGearSetting(id: $id, email: $email) {
    id
    email
    activityType
    gearId
  }
}
`;
export const listGearSettings = `query ListGearSettings(
  $id: ID
  $email: ModelStringKeyConditionInput
  $filter: ModelGearSettingFilterInput
  $limit: Int
  $nextToken: String
) {
  listGearSettings(
    id: $id
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      email
      activityType
      gearId
    }
    nextToken
  }
}
`;
export const gearSettingByUser = `query GearSettingByUser(
  $email: String
  $filter: ModelGearSettingFilterInput
  $limit: Int
  $nextToken: String
) {
  gearSettingByUser(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      email
      activityType
      gearId
    }
    nextToken
  }
}
`;

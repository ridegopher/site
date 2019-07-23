/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateUserSettingInput = {
  email: string,
  dateFormat: string,
  distanceFormat: string,
  defaultDescriptionFormat: string,
};

export type UpdateUserSettingInput = {
  email: string,
  dateFormat?: string | null,
  distanceFormat?: string | null,
  defaultDescriptionFormat?: string | null,
};

export type DeleteUserSettingInput = {
  email: string,
};

export type CreateGearSettingInput = {
  id: string,
  email: string,
  activityType: string,
  gearId: string,
};

export type UpdateGearSettingInput = {
  id: string,
  email: string,
  activityType?: string | null,
  gearId?: string | null,
};

export type DeleteGearSettingInput = {
  id: string,
  email: string,
};

export type ModelUserSettingFilterInput = {
  email?: ModelStringFilterInput | null,
  dateFormat?: ModelStringFilterInput | null,
  distanceFormat?: ModelStringFilterInput | null,
  defaultDescriptionFormat?: ModelStringFilterInput | null,
  and?: Array< ModelUserSettingFilterInput | null > | null,
  or?: Array< ModelUserSettingFilterInput | null > | null,
  not?: ModelUserSettingFilterInput | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelGearSettingFilterInput = {
  id?: ModelIDFilterInput | null,
  email?: ModelStringFilterInput | null,
  activityType?: ModelStringFilterInput | null,
  gearId?: ModelStringFilterInput | null,
  and?: Array< ModelGearSettingFilterInput | null > | null,
  or?: Array< ModelGearSettingFilterInput | null > | null,
  not?: ModelGearSettingFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateUserSettingMutationVariables = {
  input: CreateUserSettingInput,
};

export type CreateUserSettingMutation = {
  createUserSetting:  {
    __typename: "UserSetting",
    email: string,
    dateFormat: string,
    distanceFormat: string,
    defaultDescriptionFormat: string,
  } | null,
};

export type UpdateUserSettingMutationVariables = {
  input: UpdateUserSettingInput,
};

export type UpdateUserSettingMutation = {
  updateUserSetting:  {
    __typename: "UserSetting",
    email: string,
    dateFormat: string,
    distanceFormat: string,
    defaultDescriptionFormat: string,
  } | null,
};

export type DeleteUserSettingMutationVariables = {
  input: DeleteUserSettingInput,
};

export type DeleteUserSettingMutation = {
  deleteUserSetting:  {
    __typename: "UserSetting",
    email: string,
    dateFormat: string,
    distanceFormat: string,
    defaultDescriptionFormat: string,
  } | null,
};

export type CreateGearSettingMutationVariables = {
  input: CreateGearSettingInput,
};

export type CreateGearSettingMutation = {
  createGearSetting:  {
    __typename: "GearSetting",
    id: string,
    email: string,
    activityType: string,
    gearId: string,
  } | null,
};

export type UpdateGearSettingMutationVariables = {
  input: UpdateGearSettingInput,
};

export type UpdateGearSettingMutation = {
  updateGearSetting:  {
    __typename: "GearSetting",
    id: string,
    email: string,
    activityType: string,
    gearId: string,
  } | null,
};

export type DeleteGearSettingMutationVariables = {
  input: DeleteGearSettingInput,
};

export type DeleteGearSettingMutation = {
  deleteGearSetting:  {
    __typename: "GearSetting",
    id: string,
    email: string,
    activityType: string,
    gearId: string,
  } | null,
};

export type GetUserSettingQueryVariables = {
  email: string,
};

export type GetUserSettingQuery = {
  getUserSetting:  {
    __typename: "UserSetting",
    email: string,
    dateFormat: string,
    distanceFormat: string,
    defaultDescriptionFormat: string,
  } | null,
};

export type ListUserSettingsQueryVariables = {
  email?: string | null,
  filter?: ModelUserSettingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserSettingsQuery = {
  listUserSettings:  {
    __typename: "ModelUserSettingConnection",
    items:  Array< {
      __typename: "UserSetting",
      email: string,
      dateFormat: string,
      distanceFormat: string,
      defaultDescriptionFormat: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGearSettingQueryVariables = {
  id: string,
  email: string,
};

export type GetGearSettingQuery = {
  getGearSetting:  {
    __typename: "GearSetting",
    id: string,
    email: string,
    activityType: string,
    gearId: string,
  } | null,
};

export type ListGearSettingsQueryVariables = {
  id?: string | null,
  email?: ModelStringKeyConditionInput | null,
  filter?: ModelGearSettingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGearSettingsQuery = {
  listGearSettings:  {
    __typename: "ModelGearSettingConnection",
    items:  Array< {
      __typename: "GearSetting",
      id: string,
      email: string,
      activityType: string,
      gearId: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GearSettingByUserQueryVariables = {
  email?: string | null,
  filter?: ModelGearSettingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GearSettingByUserQuery = {
  gearSettingByUser:  {
    __typename: "ModelGearSettingConnection",
    items:  Array< {
      __typename: "GearSetting",
      id: string,
      email: string,
      activityType: string,
      gearId: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSettingSubscription = {
  onCreateUserSetting:  {
    __typename: "UserSetting",
    email: string,
    dateFormat: string,
    distanceFormat: string,
    defaultDescriptionFormat: string,
  } | null,
};

export type OnUpdateUserSettingSubscription = {
  onUpdateUserSetting:  {
    __typename: "UserSetting",
    email: string,
    dateFormat: string,
    distanceFormat: string,
    defaultDescriptionFormat: string,
  } | null,
};

export type OnDeleteUserSettingSubscription = {
  onDeleteUserSetting:  {
    __typename: "UserSetting",
    email: string,
    dateFormat: string,
    distanceFormat: string,
    defaultDescriptionFormat: string,
  } | null,
};

export type OnCreateGearSettingSubscription = {
  onCreateGearSetting:  {
    __typename: "GearSetting",
    id: string,
    email: string,
    activityType: string,
    gearId: string,
  } | null,
};

export type OnUpdateGearSettingSubscription = {
  onUpdateGearSetting:  {
    __typename: "GearSetting",
    id: string,
    email: string,
    activityType: string,
    gearId: string,
  } | null,
};

export type OnDeleteGearSettingSubscription = {
  onDeleteGearSetting:  {
    __typename: "GearSetting",
    id: string,
    email: string,
    activityType: string,
    gearId: string,
  } | null,
};

/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type RegisterOutput = {
  __typename?: 'RegisterOutput';
  id: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "contact_form_submissions" */
export type Contact_Form_Submissions = {
  __typename?: 'contact_form_submissions';
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  message: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "contact_form_submissions" */
export type Contact_Form_Submissions_Aggregate = {
  __typename?: 'contact_form_submissions_aggregate';
  aggregate?: Maybe<Contact_Form_Submissions_Aggregate_Fields>;
  nodes: Array<Contact_Form_Submissions>;
};

/** aggregate fields of "contact_form_submissions" */
export type Contact_Form_Submissions_Aggregate_Fields = {
  __typename?: 'contact_form_submissions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Contact_Form_Submissions_Max_Fields>;
  min?: Maybe<Contact_Form_Submissions_Min_Fields>;
};


/** aggregate fields of "contact_form_submissions" */
export type Contact_Form_Submissions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contact_Form_Submissions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "contact_form_submissions". All fields are combined with a logical 'AND'. */
export type Contact_Form_Submissions_Bool_Exp = {
  _and?: InputMaybe<Array<Contact_Form_Submissions_Bool_Exp>>;
  _not?: InputMaybe<Contact_Form_Submissions_Bool_Exp>;
  _or?: InputMaybe<Array<Contact_Form_Submissions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact_form_submissions" */
export enum Contact_Form_Submissions_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContactFormSubmissionsPkey = 'contact_form_submissions_pkey'
}

/** input type for inserting data into table "contact_form_submissions" */
export type Contact_Form_Submissions_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Contact_Form_Submissions_Max_Fields = {
  __typename?: 'contact_form_submissions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Contact_Form_Submissions_Min_Fields = {
  __typename?: 'contact_form_submissions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "contact_form_submissions" */
export type Contact_Form_Submissions_Mutation_Response = {
  __typename?: 'contact_form_submissions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Contact_Form_Submissions>;
};

/** on_conflict condition type for table "contact_form_submissions" */
export type Contact_Form_Submissions_On_Conflict = {
  constraint: Contact_Form_Submissions_Constraint;
  update_columns?: Array<Contact_Form_Submissions_Update_Column>;
  where?: InputMaybe<Contact_Form_Submissions_Bool_Exp>;
};

/** Ordering options when selecting data from "contact_form_submissions". */
export type Contact_Form_Submissions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: contact_form_submissions */
export type Contact_Form_Submissions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "contact_form_submissions" */
export enum Contact_Form_Submissions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "contact_form_submissions" */
export type Contact_Form_Submissions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "contact_form_submissions" */
export type Contact_Form_Submissions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contact_Form_Submissions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contact_Form_Submissions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "contact_form_submissions" */
export enum Contact_Form_Submissions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Contact_Form_Submissions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contact_Form_Submissions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contact_Form_Submissions_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "maps" */
export type Maps = {
  __typename?: 'maps';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  owner_id: Scalars['uuid']['output'];
  /** An array relationship */
  territories: Array<Territories>;
  /** An aggregate relationship */
  territories_aggregate: Territories_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  users: Users;
};


/** columns and relationships of "maps" */
export type MapsTerritoriesArgs = {
  distinct_on?: InputMaybe<Array<Territories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Territories_Order_By>>;
  where?: InputMaybe<Territories_Bool_Exp>;
};


/** columns and relationships of "maps" */
export type MapsTerritories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Territories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Territories_Order_By>>;
  where?: InputMaybe<Territories_Bool_Exp>;
};

/** aggregated selection of "maps" */
export type Maps_Aggregate = {
  __typename?: 'maps_aggregate';
  aggregate?: Maybe<Maps_Aggregate_Fields>;
  nodes: Array<Maps>;
};

/** aggregate fields of "maps" */
export type Maps_Aggregate_Fields = {
  __typename?: 'maps_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Maps_Max_Fields>;
  min?: Maybe<Maps_Min_Fields>;
};


/** aggregate fields of "maps" */
export type Maps_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Maps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "maps". All fields are combined with a logical 'AND'. */
export type Maps_Bool_Exp = {
  _and?: InputMaybe<Array<Maps_Bool_Exp>>;
  _not?: InputMaybe<Maps_Bool_Exp>;
  _or?: InputMaybe<Array<Maps_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  territories?: InputMaybe<Territories_Bool_Exp>;
  territories_aggregate?: InputMaybe<Territories_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "maps" */
export enum Maps_Constraint {
  /** unique or primary key constraint on columns "id" */
  MapsPkey = 'maps_pkey'
}

/** input type for inserting data into table "maps" */
export type Maps_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  territories?: InputMaybe<Territories_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  users?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Maps_Max_Fields = {
  __typename?: 'maps_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Maps_Min_Fields = {
  __typename?: 'maps_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "maps" */
export type Maps_Mutation_Response = {
  __typename?: 'maps_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Maps>;
};

/** input type for inserting object relation for remote table "maps" */
export type Maps_Obj_Rel_Insert_Input = {
  data: Maps_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Maps_On_Conflict>;
};

/** on_conflict condition type for table "maps" */
export type Maps_On_Conflict = {
  constraint: Maps_Constraint;
  update_columns?: Array<Maps_Update_Column>;
  where?: InputMaybe<Maps_Bool_Exp>;
};

/** Ordering options when selecting data from "maps". */
export type Maps_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  territories_aggregate?: InputMaybe<Territories_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: maps */
export type Maps_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "maps" */
export enum Maps_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "maps" */
export type Maps_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "maps" */
export type Maps_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Maps_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Maps_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "maps" */
export enum Maps_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Maps_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Maps_Set_Input>;
  /** filter the rows which have to be updated */
  where: Maps_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  changeEmail: Scalars['Boolean']['output'];
  changePassword: Scalars['Boolean']['output'];
  /** delete data from the table: "contact_form_submissions" */
  delete_contact_form_submissions?: Maybe<Contact_Form_Submissions_Mutation_Response>;
  /** delete single row from the table: "contact_form_submissions" */
  delete_contact_form_submissions_by_pk?: Maybe<Contact_Form_Submissions>;
  /** delete data from the table: "maps" */
  delete_maps?: Maybe<Maps_Mutation_Response>;
  /** delete single row from the table: "maps" */
  delete_maps_by_pk?: Maybe<Maps>;
  /** delete data from the table: "states" */
  delete_states?: Maybe<States_Mutation_Response>;
  /** delete single row from the table: "states" */
  delete_states_by_pk?: Maybe<States>;
  /** delete data from the table: "territories" */
  delete_territories?: Maybe<Territories_Mutation_Response>;
  /** delete single row from the table: "territories" */
  delete_territories_by_pk?: Maybe<Territories>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "users_maps" */
  delete_users_maps?: Maybe<Users_Maps_Mutation_Response>;
  /** delete single row from the table: "users_maps" */
  delete_users_maps_by_pk?: Maybe<Users_Maps>;
  destroyUser: Scalars['Boolean']['output'];
  /** insert data into the table: "contact_form_submissions" */
  insert_contact_form_submissions?: Maybe<Contact_Form_Submissions_Mutation_Response>;
  /** insert a single row into the table: "contact_form_submissions" */
  insert_contact_form_submissions_one?: Maybe<Contact_Form_Submissions>;
  /** insert data into the table: "maps" */
  insert_maps?: Maybe<Maps_Mutation_Response>;
  /** insert a single row into the table: "maps" */
  insert_maps_one?: Maybe<Maps>;
  /** insert data into the table: "states" */
  insert_states?: Maybe<States_Mutation_Response>;
  /** insert a single row into the table: "states" */
  insert_states_one?: Maybe<States>;
  /** insert data into the table: "territories" */
  insert_territories?: Maybe<Territories_Mutation_Response>;
  /** insert a single row into the table: "territories" */
  insert_territories_one?: Maybe<Territories>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "users_maps" */
  insert_users_maps?: Maybe<Users_Maps_Mutation_Response>;
  /** insert a single row into the table: "users_maps" */
  insert_users_maps_one?: Maybe<Users_Maps>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  login?: Maybe<LoginOutput>;
  /** Create new user. */
  register?: Maybe<RegisterOutput>;
  resendVerificationEmail: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  sendPasswordResetEmail: Scalars['Boolean']['output'];
  /** update data of the table: "contact_form_submissions" */
  update_contact_form_submissions?: Maybe<Contact_Form_Submissions_Mutation_Response>;
  /** update single row of the table: "contact_form_submissions" */
  update_contact_form_submissions_by_pk?: Maybe<Contact_Form_Submissions>;
  /** update multiples rows of table: "contact_form_submissions" */
  update_contact_form_submissions_many?: Maybe<Array<Maybe<Contact_Form_Submissions_Mutation_Response>>>;
  /** update data of the table: "maps" */
  update_maps?: Maybe<Maps_Mutation_Response>;
  /** update single row of the table: "maps" */
  update_maps_by_pk?: Maybe<Maps>;
  /** update multiples rows of table: "maps" */
  update_maps_many?: Maybe<Array<Maybe<Maps_Mutation_Response>>>;
  /** update data of the table: "states" */
  update_states?: Maybe<States_Mutation_Response>;
  /** update single row of the table: "states" */
  update_states_by_pk?: Maybe<States>;
  /** update multiples rows of table: "states" */
  update_states_many?: Maybe<Array<Maybe<States_Mutation_Response>>>;
  /** update data of the table: "territories" */
  update_territories?: Maybe<Territories_Mutation_Response>;
  /** update single row of the table: "territories" */
  update_territories_by_pk?: Maybe<Territories>;
  /** update multiples rows of table: "territories" */
  update_territories_many?: Maybe<Array<Maybe<Territories_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "users_maps" */
  update_users_maps?: Maybe<Users_Maps_Mutation_Response>;
  /** update single row of the table: "users_maps" */
  update_users_maps_by_pk?: Maybe<Users_Maps>;
  /** update multiples rows of table: "users_maps" */
  update_users_maps_many?: Maybe<Array<Maybe<Users_Maps_Mutation_Response>>>;
  verifyEmail: Scalars['Boolean']['output'];
};


/** mutation root */
export type Mutation_RootChangeEmailArgs = {
  newEmail: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Contact_Form_SubmissionsArgs = {
  where: Contact_Form_Submissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_Form_Submissions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MapsArgs = {
  where: Maps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Maps_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_StatesArgs = {
  where: States_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_States_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TerritoriesArgs = {
  where: Territories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Territories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Users_MapsArgs = {
  where: Users_Maps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_Maps_By_PkArgs = {
  map_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDestroyUserArgs = {
  password: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Contact_Form_SubmissionsArgs = {
  objects: Array<Contact_Form_Submissions_Insert_Input>;
  on_conflict?: InputMaybe<Contact_Form_Submissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_Form_Submissions_OneArgs = {
  object: Contact_Form_Submissions_Insert_Input;
  on_conflict?: InputMaybe<Contact_Form_Submissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MapsArgs = {
  objects: Array<Maps_Insert_Input>;
  on_conflict?: InputMaybe<Maps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Maps_OneArgs = {
  object: Maps_Insert_Input;
  on_conflict?: InputMaybe<Maps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StatesArgs = {
  objects: Array<States_Insert_Input>;
  on_conflict?: InputMaybe<States_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_States_OneArgs = {
  object: States_Insert_Input;
  on_conflict?: InputMaybe<States_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TerritoriesArgs = {
  objects: Array<Territories_Insert_Input>;
  on_conflict?: InputMaybe<Territories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Territories_OneArgs = {
  object: Territories_Insert_Input;
  on_conflict?: InputMaybe<Territories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_MapsArgs = {
  objects: Array<Users_Maps_Insert_Input>;
  on_conflict?: InputMaybe<Users_Maps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Maps_OneArgs = {
  object: Users_Maps_Insert_Input;
  on_conflict?: InputMaybe<Users_Maps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootRegisterArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootResetPasswordArgs = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootSendPasswordResetEmailArgs = {
  email: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootUpdate_Contact_Form_SubmissionsArgs = {
  _set?: InputMaybe<Contact_Form_Submissions_Set_Input>;
  where: Contact_Form_Submissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_Form_Submissions_By_PkArgs = {
  _set?: InputMaybe<Contact_Form_Submissions_Set_Input>;
  pk_columns: Contact_Form_Submissions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_Form_Submissions_ManyArgs = {
  updates: Array<Contact_Form_Submissions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MapsArgs = {
  _set?: InputMaybe<Maps_Set_Input>;
  where: Maps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Maps_By_PkArgs = {
  _set?: InputMaybe<Maps_Set_Input>;
  pk_columns: Maps_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Maps_ManyArgs = {
  updates: Array<Maps_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StatesArgs = {
  _inc?: InputMaybe<States_Inc_Input>;
  _set?: InputMaybe<States_Set_Input>;
  where: States_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_States_By_PkArgs = {
  _inc?: InputMaybe<States_Inc_Input>;
  _set?: InputMaybe<States_Set_Input>;
  pk_columns: States_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_States_ManyArgs = {
  updates: Array<States_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TerritoriesArgs = {
  _set?: InputMaybe<Territories_Set_Input>;
  where: Territories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Territories_By_PkArgs = {
  _set?: InputMaybe<Territories_Set_Input>;
  pk_columns: Territories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Territories_ManyArgs = {
  updates: Array<Territories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_MapsArgs = {
  _set?: InputMaybe<Users_Maps_Set_Input>;
  where: Users_Maps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Maps_By_PkArgs = {
  _set?: InputMaybe<Users_Maps_Set_Input>;
  pk_columns: Users_Maps_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Maps_ManyArgs = {
  updates: Array<Users_Maps_Updates>;
};


/** mutation root */
export type Mutation_RootVerifyEmailArgs = {
  code: Scalars['String']['input'];
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "contact_form_submissions" */
  contact_form_submissions: Array<Contact_Form_Submissions>;
  /** fetch aggregated fields from the table: "contact_form_submissions" */
  contact_form_submissions_aggregate: Contact_Form_Submissions_Aggregate;
  /** fetch data from the table: "contact_form_submissions" using primary key columns */
  contact_form_submissions_by_pk?: Maybe<Contact_Form_Submissions>;
  /** fetch data from the table: "maps" */
  maps: Array<Maps>;
  /** fetch aggregated fields from the table: "maps" */
  maps_aggregate: Maps_Aggregate;
  /** fetch data from the table: "maps" using primary key columns */
  maps_by_pk?: Maybe<Maps>;
  /** An array relationship */
  states: Array<States>;
  /** An aggregate relationship */
  states_aggregate: States_Aggregate;
  /** fetch data from the table: "states" using primary key columns */
  states_by_pk?: Maybe<States>;
  /** An array relationship */
  territories: Array<Territories>;
  /** An aggregate relationship */
  territories_aggregate: Territories_Aggregate;
  /** fetch data from the table: "territories" using primary key columns */
  territories_by_pk?: Maybe<Territories>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "users_maps" */
  users_maps: Array<Users_Maps>;
  /** fetch aggregated fields from the table: "users_maps" */
  users_maps_aggregate: Users_Maps_Aggregate;
  /** fetch data from the table: "users_maps" using primary key columns */
  users_maps_by_pk?: Maybe<Users_Maps>;
};


export type Query_RootContact_Form_SubmissionsArgs = {
  distinct_on?: InputMaybe<Array<Contact_Form_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Form_Submissions_Order_By>>;
  where?: InputMaybe<Contact_Form_Submissions_Bool_Exp>;
};


export type Query_RootContact_Form_Submissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Form_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Form_Submissions_Order_By>>;
  where?: InputMaybe<Contact_Form_Submissions_Bool_Exp>;
};


export type Query_RootContact_Form_Submissions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMapsArgs = {
  distinct_on?: InputMaybe<Array<Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Maps_Order_By>>;
  where?: InputMaybe<Maps_Bool_Exp>;
};


export type Query_RootMaps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Maps_Order_By>>;
  where?: InputMaybe<Maps_Bool_Exp>;
};


export type Query_RootMaps_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootStatesArgs = {
  distinct_on?: InputMaybe<Array<States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<States_Order_By>>;
  where?: InputMaybe<States_Bool_Exp>;
};


export type Query_RootStates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<States_Order_By>>;
  where?: InputMaybe<States_Bool_Exp>;
};


export type Query_RootStates_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTerritoriesArgs = {
  distinct_on?: InputMaybe<Array<Territories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Territories_Order_By>>;
  where?: InputMaybe<Territories_Bool_Exp>;
};


export type Query_RootTerritories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Territories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Territories_Order_By>>;
  where?: InputMaybe<Territories_Bool_Exp>;
};


export type Query_RootTerritories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsers_MapsArgs = {
  distinct_on?: InputMaybe<Array<Users_Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Maps_Order_By>>;
  where?: InputMaybe<Users_Maps_Bool_Exp>;
};


export type Query_RootUsers_Maps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Maps_Order_By>>;
  where?: InputMaybe<Users_Maps_Bool_Exp>;
};


export type Query_RootUsers_Maps_By_PkArgs = {
  map_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};

/** A state created under a territory */
export type States = {
  __typename?: 'states';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  name_abbreviation: Scalars['String']['output'];
  state_map_id: Scalars['Int']['output'];
  /** An object relationship */
  territory: Territories;
  territory_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "states" */
export type States_Aggregate = {
  __typename?: 'states_aggregate';
  aggregate?: Maybe<States_Aggregate_Fields>;
  nodes: Array<States>;
};

export type States_Aggregate_Bool_Exp = {
  count?: InputMaybe<States_Aggregate_Bool_Exp_Count>;
};

export type States_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<States_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<States_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "states" */
export type States_Aggregate_Fields = {
  __typename?: 'states_aggregate_fields';
  avg?: Maybe<States_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<States_Max_Fields>;
  min?: Maybe<States_Min_Fields>;
  stddev?: Maybe<States_Stddev_Fields>;
  stddev_pop?: Maybe<States_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<States_Stddev_Samp_Fields>;
  sum?: Maybe<States_Sum_Fields>;
  var_pop?: Maybe<States_Var_Pop_Fields>;
  var_samp?: Maybe<States_Var_Samp_Fields>;
  variance?: Maybe<States_Variance_Fields>;
};


/** aggregate fields of "states" */
export type States_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<States_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "states" */
export type States_Aggregate_Order_By = {
  avg?: InputMaybe<States_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<States_Max_Order_By>;
  min?: InputMaybe<States_Min_Order_By>;
  stddev?: InputMaybe<States_Stddev_Order_By>;
  stddev_pop?: InputMaybe<States_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<States_Stddev_Samp_Order_By>;
  sum?: InputMaybe<States_Sum_Order_By>;
  var_pop?: InputMaybe<States_Var_Pop_Order_By>;
  var_samp?: InputMaybe<States_Var_Samp_Order_By>;
  variance?: InputMaybe<States_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "states" */
export type States_Arr_Rel_Insert_Input = {
  data: Array<States_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<States_On_Conflict>;
};

/** aggregate avg on columns */
export type States_Avg_Fields = {
  __typename?: 'states_avg_fields';
  state_map_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "states" */
export type States_Avg_Order_By = {
  state_map_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "states". All fields are combined with a logical 'AND'. */
export type States_Bool_Exp = {
  _and?: InputMaybe<Array<States_Bool_Exp>>;
  _not?: InputMaybe<States_Bool_Exp>;
  _or?: InputMaybe<Array<States_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  name_abbreviation?: InputMaybe<String_Comparison_Exp>;
  state_map_id?: InputMaybe<Int_Comparison_Exp>;
  territory?: InputMaybe<Territories_Bool_Exp>;
  territory_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "states" */
export enum States_Constraint {
  /** unique or primary key constraint on columns "id" */
  StatesPkey = 'states_pkey'
}

/** input type for incrementing numeric columns in table "states" */
export type States_Inc_Input = {
  state_map_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "states" */
export type States_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_abbreviation?: InputMaybe<Scalars['String']['input']>;
  state_map_id?: InputMaybe<Scalars['Int']['input']>;
  territory?: InputMaybe<Territories_Obj_Rel_Insert_Input>;
  territory_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type States_Max_Fields = {
  __typename?: 'states_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  name_abbreviation?: Maybe<Scalars['String']['output']>;
  state_map_id?: Maybe<Scalars['Int']['output']>;
  territory_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "states" */
export type States_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_abbreviation?: InputMaybe<Order_By>;
  state_map_id?: InputMaybe<Order_By>;
  territory_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type States_Min_Fields = {
  __typename?: 'states_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  name_abbreviation?: Maybe<Scalars['String']['output']>;
  state_map_id?: Maybe<Scalars['Int']['output']>;
  territory_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "states" */
export type States_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_abbreviation?: InputMaybe<Order_By>;
  state_map_id?: InputMaybe<Order_By>;
  territory_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "states" */
export type States_Mutation_Response = {
  __typename?: 'states_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<States>;
};

/** on_conflict condition type for table "states" */
export type States_On_Conflict = {
  constraint: States_Constraint;
  update_columns?: Array<States_Update_Column>;
  where?: InputMaybe<States_Bool_Exp>;
};

/** Ordering options when selecting data from "states". */
export type States_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_abbreviation?: InputMaybe<Order_By>;
  state_map_id?: InputMaybe<Order_By>;
  territory?: InputMaybe<Territories_Order_By>;
  territory_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: states */
export type States_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "states" */
export enum States_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameAbbreviation = 'name_abbreviation',
  /** column name */
  StateMapId = 'state_map_id',
  /** column name */
  TerritoryId = 'territory_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "states" */
export type States_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_abbreviation?: InputMaybe<Scalars['String']['input']>;
  state_map_id?: InputMaybe<Scalars['Int']['input']>;
  territory_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type States_Stddev_Fields = {
  __typename?: 'states_stddev_fields';
  state_map_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "states" */
export type States_Stddev_Order_By = {
  state_map_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type States_Stddev_Pop_Fields = {
  __typename?: 'states_stddev_pop_fields';
  state_map_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "states" */
export type States_Stddev_Pop_Order_By = {
  state_map_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type States_Stddev_Samp_Fields = {
  __typename?: 'states_stddev_samp_fields';
  state_map_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "states" */
export type States_Stddev_Samp_Order_By = {
  state_map_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "states" */
export type States_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: States_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type States_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_abbreviation?: InputMaybe<Scalars['String']['input']>;
  state_map_id?: InputMaybe<Scalars['Int']['input']>;
  territory_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type States_Sum_Fields = {
  __typename?: 'states_sum_fields';
  state_map_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "states" */
export type States_Sum_Order_By = {
  state_map_id?: InputMaybe<Order_By>;
};

/** update columns of table "states" */
export enum States_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameAbbreviation = 'name_abbreviation',
  /** column name */
  StateMapId = 'state_map_id',
  /** column name */
  TerritoryId = 'territory_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type States_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<States_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<States_Set_Input>;
  /** filter the rows which have to be updated */
  where: States_Bool_Exp;
};

/** aggregate var_pop on columns */
export type States_Var_Pop_Fields = {
  __typename?: 'states_var_pop_fields';
  state_map_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "states" */
export type States_Var_Pop_Order_By = {
  state_map_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type States_Var_Samp_Fields = {
  __typename?: 'states_var_samp_fields';
  state_map_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "states" */
export type States_Var_Samp_Order_By = {
  state_map_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type States_Variance_Fields = {
  __typename?: 'states_variance_fields';
  state_map_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "states" */
export type States_Variance_Order_By = {
  state_map_id?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "contact_form_submissions" */
  contact_form_submissions: Array<Contact_Form_Submissions>;
  /** fetch aggregated fields from the table: "contact_form_submissions" */
  contact_form_submissions_aggregate: Contact_Form_Submissions_Aggregate;
  /** fetch data from the table: "contact_form_submissions" using primary key columns */
  contact_form_submissions_by_pk?: Maybe<Contact_Form_Submissions>;
  /** fetch data from the table in a streaming manner: "contact_form_submissions" */
  contact_form_submissions_stream: Array<Contact_Form_Submissions>;
  /** fetch data from the table: "maps" */
  maps: Array<Maps>;
  /** fetch aggregated fields from the table: "maps" */
  maps_aggregate: Maps_Aggregate;
  /** fetch data from the table: "maps" using primary key columns */
  maps_by_pk?: Maybe<Maps>;
  /** fetch data from the table in a streaming manner: "maps" */
  maps_stream: Array<Maps>;
  /** An array relationship */
  states: Array<States>;
  /** An aggregate relationship */
  states_aggregate: States_Aggregate;
  /** fetch data from the table: "states" using primary key columns */
  states_by_pk?: Maybe<States>;
  /** fetch data from the table in a streaming manner: "states" */
  states_stream: Array<States>;
  /** An array relationship */
  territories: Array<Territories>;
  /** An aggregate relationship */
  territories_aggregate: Territories_Aggregate;
  /** fetch data from the table: "territories" using primary key columns */
  territories_by_pk?: Maybe<Territories>;
  /** fetch data from the table in a streaming manner: "territories" */
  territories_stream: Array<Territories>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "users_maps" */
  users_maps: Array<Users_Maps>;
  /** fetch aggregated fields from the table: "users_maps" */
  users_maps_aggregate: Users_Maps_Aggregate;
  /** fetch data from the table: "users_maps" using primary key columns */
  users_maps_by_pk?: Maybe<Users_Maps>;
  /** fetch data from the table in a streaming manner: "users_maps" */
  users_maps_stream: Array<Users_Maps>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootContact_Form_SubmissionsArgs = {
  distinct_on?: InputMaybe<Array<Contact_Form_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Form_Submissions_Order_By>>;
  where?: InputMaybe<Contact_Form_Submissions_Bool_Exp>;
};


export type Subscription_RootContact_Form_Submissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Form_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contact_Form_Submissions_Order_By>>;
  where?: InputMaybe<Contact_Form_Submissions_Bool_Exp>;
};


export type Subscription_RootContact_Form_Submissions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootContact_Form_Submissions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contact_Form_Submissions_Stream_Cursor_Input>>;
  where?: InputMaybe<Contact_Form_Submissions_Bool_Exp>;
};


export type Subscription_RootMapsArgs = {
  distinct_on?: InputMaybe<Array<Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Maps_Order_By>>;
  where?: InputMaybe<Maps_Bool_Exp>;
};


export type Subscription_RootMaps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Maps_Order_By>>;
  where?: InputMaybe<Maps_Bool_Exp>;
};


export type Subscription_RootMaps_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMaps_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Maps_Stream_Cursor_Input>>;
  where?: InputMaybe<Maps_Bool_Exp>;
};


export type Subscription_RootStatesArgs = {
  distinct_on?: InputMaybe<Array<States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<States_Order_By>>;
  where?: InputMaybe<States_Bool_Exp>;
};


export type Subscription_RootStates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<States_Order_By>>;
  where?: InputMaybe<States_Bool_Exp>;
};


export type Subscription_RootStates_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootStates_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<States_Stream_Cursor_Input>>;
  where?: InputMaybe<States_Bool_Exp>;
};


export type Subscription_RootTerritoriesArgs = {
  distinct_on?: InputMaybe<Array<Territories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Territories_Order_By>>;
  where?: InputMaybe<Territories_Bool_Exp>;
};


export type Subscription_RootTerritories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Territories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Territories_Order_By>>;
  where?: InputMaybe<Territories_Bool_Exp>;
};


export type Subscription_RootTerritories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTerritories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Territories_Stream_Cursor_Input>>;
  where?: InputMaybe<Territories_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_MapsArgs = {
  distinct_on?: InputMaybe<Array<Users_Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Maps_Order_By>>;
  where?: InputMaybe<Users_Maps_Bool_Exp>;
};


export type Subscription_RootUsers_Maps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Maps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Maps_Order_By>>;
  where?: InputMaybe<Users_Maps_Bool_Exp>;
};


export type Subscription_RootUsers_Maps_By_PkArgs = {
  map_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_Maps_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Maps_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Maps_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** A collection of states under a particular map */
export type Territories = {
  __typename?: 'territories';
  color?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  map: Maps;
  map_id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  states: Array<States>;
  /** An aggregate relationship */
  states_aggregate: States_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** A collection of states under a particular map */
export type TerritoriesStatesArgs = {
  distinct_on?: InputMaybe<Array<States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<States_Order_By>>;
  where?: InputMaybe<States_Bool_Exp>;
};


/** A collection of states under a particular map */
export type TerritoriesStates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<States_Order_By>>;
  where?: InputMaybe<States_Bool_Exp>;
};

/** aggregated selection of "territories" */
export type Territories_Aggregate = {
  __typename?: 'territories_aggregate';
  aggregate?: Maybe<Territories_Aggregate_Fields>;
  nodes: Array<Territories>;
};

export type Territories_Aggregate_Bool_Exp = {
  count?: InputMaybe<Territories_Aggregate_Bool_Exp_Count>;
};

export type Territories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Territories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Territories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "territories" */
export type Territories_Aggregate_Fields = {
  __typename?: 'territories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Territories_Max_Fields>;
  min?: Maybe<Territories_Min_Fields>;
};


/** aggregate fields of "territories" */
export type Territories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Territories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "territories" */
export type Territories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Territories_Max_Order_By>;
  min?: InputMaybe<Territories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "territories" */
export type Territories_Arr_Rel_Insert_Input = {
  data: Array<Territories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Territories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "territories". All fields are combined with a logical 'AND'. */
export type Territories_Bool_Exp = {
  _and?: InputMaybe<Array<Territories_Bool_Exp>>;
  _not?: InputMaybe<Territories_Bool_Exp>;
  _or?: InputMaybe<Array<Territories_Bool_Exp>>;
  color?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  map?: InputMaybe<Maps_Bool_Exp>;
  map_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  states?: InputMaybe<States_Bool_Exp>;
  states_aggregate?: InputMaybe<States_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "territories" */
export enum Territories_Constraint {
  /** unique or primary key constraint on columns "id" */
  TerritoriesPkey = 'territories_pkey'
}

/** input type for inserting data into table "territories" */
export type Territories_Insert_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  map?: InputMaybe<Maps_Obj_Rel_Insert_Input>;
  map_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  states?: InputMaybe<States_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Territories_Max_Fields = {
  __typename?: 'territories_max_fields';
  color?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  map_id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "territories" */
export type Territories_Max_Order_By = {
  color?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  map_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Territories_Min_Fields = {
  __typename?: 'territories_min_fields';
  color?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  map_id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "territories" */
export type Territories_Min_Order_By = {
  color?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  map_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "territories" */
export type Territories_Mutation_Response = {
  __typename?: 'territories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Territories>;
};

/** input type for inserting object relation for remote table "territories" */
export type Territories_Obj_Rel_Insert_Input = {
  data: Territories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Territories_On_Conflict>;
};

/** on_conflict condition type for table "territories" */
export type Territories_On_Conflict = {
  constraint: Territories_Constraint;
  update_columns?: Array<Territories_Update_Column>;
  where?: InputMaybe<Territories_Bool_Exp>;
};

/** Ordering options when selecting data from "territories". */
export type Territories_Order_By = {
  color?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  map?: InputMaybe<Maps_Order_By>;
  map_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  states_aggregate?: InputMaybe<States_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: territories */
export type Territories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "territories" */
export enum Territories_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MapId = 'map_id',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "territories" */
export type Territories_Set_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  map_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "territories" */
export type Territories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Territories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Territories_Stream_Cursor_Value_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  map_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "territories" */
export enum Territories_Update_Column {
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MapId = 'map_id',
  /** column name */
  Name = 'name',
  /** column name */
  Note = 'note',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Territories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Territories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Territories_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  avatar_file_key?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  display_name?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  email_verification_code?: Maybe<Scalars['String']['output']>;
  email_verified: Scalars['Boolean']['output'];
  hashed_password: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  password_at: Scalars['timestamptz']['output'];
  password_reset_code?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  avatar_file_key?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_verification_code?: InputMaybe<String_Comparison_Exp>;
  email_verified?: InputMaybe<Boolean_Comparison_Exp>;
  hashed_password?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  password_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  password_reset_code?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  avatar_file_key?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verification_code?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<Scalars['Boolean']['input']>;
  hashed_password?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  password_at?: InputMaybe<Scalars['timestamptz']['input']>;
  password_reset_code?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** A junction table to allow users to see their maps */
export type Users_Maps = {
  __typename?: 'users_maps';
  created_at: Scalars['timestamptz']['output'];
  map_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "users_maps" */
export type Users_Maps_Aggregate = {
  __typename?: 'users_maps_aggregate';
  aggregate?: Maybe<Users_Maps_Aggregate_Fields>;
  nodes: Array<Users_Maps>;
};

/** aggregate fields of "users_maps" */
export type Users_Maps_Aggregate_Fields = {
  __typename?: 'users_maps_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Maps_Max_Fields>;
  min?: Maybe<Users_Maps_Min_Fields>;
};


/** aggregate fields of "users_maps" */
export type Users_Maps_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Maps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users_maps". All fields are combined with a logical 'AND'. */
export type Users_Maps_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Maps_Bool_Exp>>;
  _not?: InputMaybe<Users_Maps_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Maps_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  map_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_maps" */
export enum Users_Maps_Constraint {
  /** unique or primary key constraint on columns "map_id", "user_id" */
  UsersMapsPkey = 'users_maps_pkey'
}

/** input type for inserting data into table "users_maps" */
export type Users_Maps_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  map_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Users_Maps_Max_Fields = {
  __typename?: 'users_maps_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  map_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Users_Maps_Min_Fields = {
  __typename?: 'users_maps_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  map_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "users_maps" */
export type Users_Maps_Mutation_Response = {
  __typename?: 'users_maps_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Maps>;
};

/** on_conflict condition type for table "users_maps" */
export type Users_Maps_On_Conflict = {
  constraint: Users_Maps_Constraint;
  update_columns?: Array<Users_Maps_Update_Column>;
  where?: InputMaybe<Users_Maps_Bool_Exp>;
};

/** Ordering options when selecting data from "users_maps". */
export type Users_Maps_Order_By = {
  created_at?: InputMaybe<Order_By>;
  map_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_maps */
export type Users_Maps_Pk_Columns_Input = {
  map_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};

/** select columns of table "users_maps" */
export enum Users_Maps_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  MapId = 'map_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "users_maps" */
export type Users_Maps_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  map_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "users_maps" */
export type Users_Maps_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Maps_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Maps_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  map_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "users_maps" */
export enum Users_Maps_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  MapId = 'map_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Users_Maps_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Maps_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Maps_Bool_Exp;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  avatar_file_key?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verification_code?: Maybe<Scalars['String']['output']>;
  hashed_password?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  password_at?: Maybe<Scalars['timestamptz']['output']>;
  password_reset_code?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  avatar_file_key?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verification_code?: Maybe<Scalars['String']['output']>;
  hashed_password?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  password_at?: Maybe<Scalars['timestamptz']['output']>;
  password_reset_code?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  avatar_file_key?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verification_code?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  hashed_password?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  password_at?: InputMaybe<Order_By>;
  password_reset_code?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AvatarFileKey = 'avatar_file_key',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerificationCode = 'email_verification_code',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  HashedPassword = 'hashed_password',
  /** column name */
  Id = 'id',
  /** column name */
  PasswordAt = 'password_at',
  /** column name */
  PasswordResetCode = 'password_reset_code',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatar_file_key?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verification_code?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<Scalars['Boolean']['input']>;
  hashed_password?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  password_at?: InputMaybe<Scalars['timestamptz']['input']>;
  password_reset_code?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  avatar_file_key?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verification_code?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<Scalars['Boolean']['input']>;
  hashed_password?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  password_at?: InputMaybe<Scalars['timestamptz']['input']>;
  password_reset_code?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AvatarFileKey = 'avatar_file_key',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerificationCode = 'email_verification_code',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  HashedPassword = 'hashed_password',
  /** column name */
  Id = 'id',
  /** column name */
  PasswordAt = 'password_at',
  /** column name */
  PasswordResetCode = 'password_reset_code',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type UpdateDisplayNameMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  avatar_file_key?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateDisplayNameMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', avatar_file_key?: string | null, email: string, display_name?: string | null } | null };

export type DestroyUserMutationVariables = Exact<{
  password: Scalars['String']['input'];
}>;


export type DestroyUserMutation = { __typename?: 'mutation_root', destroyUser: boolean };

export type ChangePasswordMutationVariables = Exact<{
  oldPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
}>;


export type ChangePasswordMutation = { __typename?: 'mutation_root', changePassword: boolean };

export type ChangeEmailMutationVariables = Exact<{
  newEmail: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type ChangeEmailMutation = { __typename?: 'mutation_root', changeEmail: boolean };

export type UpdateUserMutationVariables = Exact<{
  display_name: Scalars['String']['input'];
  id: Scalars['uuid']['input'];
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', display_name?: string | null, avatar_file_key?: string | null, email: string } | null };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'mutation_root', register?: { __typename?: 'RegisterOutput', token: string, id: string } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'mutation_root', login?: { __typename?: 'LoginOutput', token: string, id: string } | null };

export type SendPasswordResetEmailMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type SendPasswordResetEmailMutation = { __typename?: 'mutation_root', sendPasswordResetEmail: boolean };

export type VerifyEmailMutationVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type VerifyEmailMutation = { __typename?: 'mutation_root', verifyEmail: boolean };

export type ResetPasswordMutationVariables = Exact<{
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
}>;


export type ResetPasswordMutation = { __typename?: 'mutation_root', resetPassword: boolean };

export type SubmitContactFormMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  message: Scalars['String']['input'];
}>;


export type SubmitContactFormMutation = { __typename?: 'mutation_root', insert_contact_form_submissions?: { __typename?: 'contact_form_submissions_mutation_response', affected_rows: number } | null };

export type CreateMapMutationVariables = Exact<{
  map: Maps_Insert_Input;
}>;


export type CreateMapMutation = { __typename?: 'mutation_root', insert_maps_one?: { __typename?: 'maps', id: any, name: string, created_at: any, updated_at: any } | null };

export type FetchMapsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchMapsQuery = { __typename?: 'query_root', maps: Array<{ __typename?: 'maps', name: string, id: any, created_at: any, updated_at: any }> };


export const UpdateDisplayNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDisplayName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"avatar_file_key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"avatar_file_key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"avatar_file_key"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar_file_key"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"display_name"}}]}}]}}]} as unknown as DocumentNode<UpdateDisplayNameMutation, UpdateDisplayNameMutationVariables>;
export const DestroyUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DestroyUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"destroyUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<DestroyUserMutation, DestroyUserMutationVariables>;
export const ChangePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oldPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}}]}]}}]} as unknown as DocumentNode<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ChangeEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newEmail"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<ChangeEmailMutation, ChangeEmailMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"display_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_users_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"display_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"display_name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"display_name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar_file_key"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SendPasswordResetEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendPasswordResetEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendPasswordResetEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<SendPasswordResetEmailMutation, SendPasswordResetEmailMutationVariables>;
export const VerifyEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}]}}]} as unknown as DocumentNode<VerifyEmailMutation, VerifyEmailMutationVariables>;
export const ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}}]}]}}]} as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SubmitContactFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitContactForm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_contact_form_submissions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<SubmitContactFormMutation, SubmitContactFormMutationVariables>;
export const CreateMapDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateMap"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"map"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"maps_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_maps_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"map"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<CreateMapMutation, CreateMapMutationVariables>;
export const FetchMapsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchMaps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"maps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<FetchMapsQuery, FetchMapsQueryVariables>;
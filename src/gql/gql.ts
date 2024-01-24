/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation UpdateDisplayName($id: uuid!, $avatar_file_key: String) {\n          update_users_by_pk(pk_columns: {id: $id}, _set: {avatar_file_key: $avatar_file_key}) {\n            avatar_file_key\n            email\n            display_name\n          }\n        }": types.UpdateDisplayNameDocument,
    "\n    mutation DestroyUser($password: String!) {\n      destroyUser(password: $password)\n    }\n    ": types.DestroyUserDocument,
    "\n    mutation ChangePassword($oldPassword: String!, $newPassword: String!) {\n      changePassword(oldPassword: $oldPassword, newPassword: $newPassword)\n    }\n    ": types.ChangePasswordDocument,
    "\n    mutation ChangeEmail($newEmail: String!, $password: String!) {\n      changeEmail(newEmail: $newEmail, password: $password)\n    }\n    ": types.ChangeEmailDocument,
    "\n    mutation UpdateUser($display_name: String!, $id: uuid!) {\n      update_users_by_pk(pk_columns: {id: $id}, _set: {display_name: $display_name}) {\n        display_name\n        avatar_file_key\n        email\n      }\n    }\n    ": types.UpdateUserDocument,
    "\n    mutation register($email: String!, $password: String!) {\n      register(email: $email, password: $password) {\n        token\n        id\n      }\n    }": types.RegisterDocument,
    "\n    mutation Login($email: String!, $password: String!) {\n      login(email: $email, password: $password) {\n        token\n        id\n      }\n    }": types.LoginDocument,
    "\n    mutation SendPasswordResetEmail($email: String!) {\n      sendPasswordResetEmail(email: $email)\n    }": types.SendPasswordResetEmailDocument,
    "\n    mutation VerifyEmail($code: String!) {\n      verifyEmail(code: $code)\n    }": types.VerifyEmailDocument,
    "\n    mutation ResetPassword($code: String!, $email: String!, $newPassword: String!) {\n      resetPassword(code: $code, email: $email, newPassword: $newPassword)\n    }": types.ResetPasswordDocument,
    "\n    mutation SubmitContactForm($name: String!, $email: String!, $message: String!) {\n      insert_contact_form_submissions(objects: {email: $email, message: $message, name: $name}) {\n        affected_rows\n      }\n    }\n    ": types.SubmitContactFormDocument,
    "\n      mutation CreateMap($map: maps_insert_input!) {\n        insert_maps_one(object: $map) {\n          id\n          name\n          created_at\n          updated_at\n        }\n      }\n    ": types.CreateMapDocument,
    "\n      mutation DeleteMap($mapId: uuid!) {\n        delete_maps_by_pk(id: $mapId) {\n          id\n        }\n      }\n    ": types.DeleteMapDocument,
    "\n      query FetchMap($mapId: uuid!) {\n        maps_by_pk(id: $mapId) {\n         name\n         id\n         created_at\n         updated_at\n        }\n      }\n    ": types.FetchMapDocument,
    "\n      query FetchMaps {\n        maps {\n         name\n         id\n         created_at\n         updated_at\n        }\n      }\n    ": types.FetchMapsDocument,
    "\n    mutation DeleteState ($stateMapId: Int!, $mapId: uuid!)  {\n      delete_states_by_pk(state_map_id: $stateMapId, map_id: $mapId) {\n        id\n        name\n        state_map_id\n        territory_id\n      }\n    }\n  ": types.DeleteStateDocument,
    "\n      query FetchStates($mapId: uuid!) {\n        states(where: { map_id: {_eq: $mapId }}) {\n          id\n          name\n          state_map_id\n          territory {\n            id\n            color\n          }\n        }\n      }\n    ": types.FetchStatesDocument,
    "\n    mutation CreateState ($name: String!, $stateMapId: Int!, $territoryId: uuid!, $mapId: uuid!, $stateAbbr: String!)  {\n      insert_states_one(object: { name: $name, territory_id: $territoryId, state_map_id: $stateMapId, map_id: $mapId, name_abbreviation: $stateAbbr }) {\n        id\n        name\n        state_map_id\n        territory_id\n      }\n    }\n  ": types.CreateStateDocument,
    "\n    mutation DeleteTerritory ($territoryId: uuid!) {\n      delete_territories_by_pk(id: $territoryId) {\n        id\n        states {\n          id\n          state_map_id\n        }\n      }\n    }\n  ": types.DeleteTerritoryDocument,
    "\n    mutation UpdateTerritory ($territoryId: uuid!, $updates: territories_set_input) {\n      update_territories_by_pk(pk_columns: { id: $territoryId }, _set: $updates) {\n        id\n      }\n    }\n  ": types.UpdateTerritoryDocument,
    "\n      query FetchTerritories($mapId: uuid!) {\n        territories(where: { map_id: { _eq: $mapId }}) {\n          id\n          name\n          color\n          note\n          updated_at\n          states {\n            id\n            name\n            state_map_id\n          }\n        }\n      }\n    ": types.FetchTerritoriesDocument,
    "\n      mutation CreateTerritory ($name: String!, $color: String!, $mapId: uuid!)  {\n        insert_territories_one(object: { name: $name, color: $color, map_id: $mapId }) {\n          id\n        }\n      }\n    ": types.CreateTerritoryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateDisplayName($id: uuid!, $avatar_file_key: String) {\n          update_users_by_pk(pk_columns: {id: $id}, _set: {avatar_file_key: $avatar_file_key}) {\n            avatar_file_key\n            email\n            display_name\n          }\n        }"): (typeof documents)["mutation UpdateDisplayName($id: uuid!, $avatar_file_key: String) {\n          update_users_by_pk(pk_columns: {id: $id}, _set: {avatar_file_key: $avatar_file_key}) {\n            avatar_file_key\n            email\n            display_name\n          }\n        }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DestroyUser($password: String!) {\n      destroyUser(password: $password)\n    }\n    "): (typeof documents)["\n    mutation DestroyUser($password: String!) {\n      destroyUser(password: $password)\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation ChangePassword($oldPassword: String!, $newPassword: String!) {\n      changePassword(oldPassword: $oldPassword, newPassword: $newPassword)\n    }\n    "): (typeof documents)["\n    mutation ChangePassword($oldPassword: String!, $newPassword: String!) {\n      changePassword(oldPassword: $oldPassword, newPassword: $newPassword)\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation ChangeEmail($newEmail: String!, $password: String!) {\n      changeEmail(newEmail: $newEmail, password: $password)\n    }\n    "): (typeof documents)["\n    mutation ChangeEmail($newEmail: String!, $password: String!) {\n      changeEmail(newEmail: $newEmail, password: $password)\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateUser($display_name: String!, $id: uuid!) {\n      update_users_by_pk(pk_columns: {id: $id}, _set: {display_name: $display_name}) {\n        display_name\n        avatar_file_key\n        email\n      }\n    }\n    "): (typeof documents)["\n    mutation UpdateUser($display_name: String!, $id: uuid!) {\n      update_users_by_pk(pk_columns: {id: $id}, _set: {display_name: $display_name}) {\n        display_name\n        avatar_file_key\n        email\n      }\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation register($email: String!, $password: String!) {\n      register(email: $email, password: $password) {\n        token\n        id\n      }\n    }"): (typeof documents)["\n    mutation register($email: String!, $password: String!) {\n      register(email: $email, password: $password) {\n        token\n        id\n      }\n    }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation Login($email: String!, $password: String!) {\n      login(email: $email, password: $password) {\n        token\n        id\n      }\n    }"): (typeof documents)["\n    mutation Login($email: String!, $password: String!) {\n      login(email: $email, password: $password) {\n        token\n        id\n      }\n    }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation SendPasswordResetEmail($email: String!) {\n      sendPasswordResetEmail(email: $email)\n    }"): (typeof documents)["\n    mutation SendPasswordResetEmail($email: String!) {\n      sendPasswordResetEmail(email: $email)\n    }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation VerifyEmail($code: String!) {\n      verifyEmail(code: $code)\n    }"): (typeof documents)["\n    mutation VerifyEmail($code: String!) {\n      verifyEmail(code: $code)\n    }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation ResetPassword($code: String!, $email: String!, $newPassword: String!) {\n      resetPassword(code: $code, email: $email, newPassword: $newPassword)\n    }"): (typeof documents)["\n    mutation ResetPassword($code: String!, $email: String!, $newPassword: String!) {\n      resetPassword(code: $code, email: $email, newPassword: $newPassword)\n    }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation SubmitContactForm($name: String!, $email: String!, $message: String!) {\n      insert_contact_form_submissions(objects: {email: $email, message: $message, name: $name}) {\n        affected_rows\n      }\n    }\n    "): (typeof documents)["\n    mutation SubmitContactForm($name: String!, $email: String!, $message: String!) {\n      insert_contact_form_submissions(objects: {email: $email, message: $message, name: $name}) {\n        affected_rows\n      }\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation CreateMap($map: maps_insert_input!) {\n        insert_maps_one(object: $map) {\n          id\n          name\n          created_at\n          updated_at\n        }\n      }\n    "): (typeof documents)["\n      mutation CreateMap($map: maps_insert_input!) {\n        insert_maps_one(object: $map) {\n          id\n          name\n          created_at\n          updated_at\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation DeleteMap($mapId: uuid!) {\n        delete_maps_by_pk(id: $mapId) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation DeleteMap($mapId: uuid!) {\n        delete_maps_by_pk(id: $mapId) {\n          id\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query FetchMap($mapId: uuid!) {\n        maps_by_pk(id: $mapId) {\n         name\n         id\n         created_at\n         updated_at\n        }\n      }\n    "): (typeof documents)["\n      query FetchMap($mapId: uuid!) {\n        maps_by_pk(id: $mapId) {\n         name\n         id\n         created_at\n         updated_at\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query FetchMaps {\n        maps {\n         name\n         id\n         created_at\n         updated_at\n        }\n      }\n    "): (typeof documents)["\n      query FetchMaps {\n        maps {\n         name\n         id\n         created_at\n         updated_at\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteState ($stateMapId: Int!, $mapId: uuid!)  {\n      delete_states_by_pk(state_map_id: $stateMapId, map_id: $mapId) {\n        id\n        name\n        state_map_id\n        territory_id\n      }\n    }\n  "): (typeof documents)["\n    mutation DeleteState ($stateMapId: Int!, $mapId: uuid!)  {\n      delete_states_by_pk(state_map_id: $stateMapId, map_id: $mapId) {\n        id\n        name\n        state_map_id\n        territory_id\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query FetchStates($mapId: uuid!) {\n        states(where: { map_id: {_eq: $mapId }}) {\n          id\n          name\n          state_map_id\n          territory {\n            id\n            color\n          }\n        }\n      }\n    "): (typeof documents)["\n      query FetchStates($mapId: uuid!) {\n        states(where: { map_id: {_eq: $mapId }}) {\n          id\n          name\n          state_map_id\n          territory {\n            id\n            color\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateState ($name: String!, $stateMapId: Int!, $territoryId: uuid!, $mapId: uuid!, $stateAbbr: String!)  {\n      insert_states_one(object: { name: $name, territory_id: $territoryId, state_map_id: $stateMapId, map_id: $mapId, name_abbreviation: $stateAbbr }) {\n        id\n        name\n        state_map_id\n        territory_id\n      }\n    }\n  "): (typeof documents)["\n    mutation CreateState ($name: String!, $stateMapId: Int!, $territoryId: uuid!, $mapId: uuid!, $stateAbbr: String!)  {\n      insert_states_one(object: { name: $name, territory_id: $territoryId, state_map_id: $stateMapId, map_id: $mapId, name_abbreviation: $stateAbbr }) {\n        id\n        name\n        state_map_id\n        territory_id\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteTerritory ($territoryId: uuid!) {\n      delete_territories_by_pk(id: $territoryId) {\n        id\n        states {\n          id\n          state_map_id\n        }\n      }\n    }\n  "): (typeof documents)["\n    mutation DeleteTerritory ($territoryId: uuid!) {\n      delete_territories_by_pk(id: $territoryId) {\n        id\n        states {\n          id\n          state_map_id\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateTerritory ($territoryId: uuid!, $updates: territories_set_input) {\n      update_territories_by_pk(pk_columns: { id: $territoryId }, _set: $updates) {\n        id\n      }\n    }\n  "): (typeof documents)["\n    mutation UpdateTerritory ($territoryId: uuid!, $updates: territories_set_input) {\n      update_territories_by_pk(pk_columns: { id: $territoryId }, _set: $updates) {\n        id\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query FetchTerritories($mapId: uuid!) {\n        territories(where: { map_id: { _eq: $mapId }}) {\n          id\n          name\n          color\n          note\n          updated_at\n          states {\n            id\n            name\n            state_map_id\n          }\n        }\n      }\n    "): (typeof documents)["\n      query FetchTerritories($mapId: uuid!) {\n        territories(where: { map_id: { _eq: $mapId }}) {\n          id\n          name\n          color\n          note\n          updated_at\n          states {\n            id\n            name\n            state_map_id\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation CreateTerritory ($name: String!, $color: String!, $mapId: uuid!)  {\n        insert_territories_one(object: { name: $name, color: $color, map_id: $mapId }) {\n          id\n        }\n      }\n    "): (typeof documents)["\n      mutation CreateTerritory ($name: String!, $color: String!, $mapId: uuid!)  {\n        insert_territories_one(object: { name: $name, color: $color, map_id: $mapId }) {\n          id\n        }\n      }\n    "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
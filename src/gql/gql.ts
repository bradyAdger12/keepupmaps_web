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

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
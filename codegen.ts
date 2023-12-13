import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      [(process.env.VITE_HASURA_BASE_URL || 'http://localhost:8080') + '/v1/graphql']: {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET || 'mydevsecret',
        }
      },
    }
  ],
  documents: ["src/**/*.ts?(x)"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
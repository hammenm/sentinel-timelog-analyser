import { GraphQLClient } from 'graphql-request';

require('dotenv').config();

export default () => {
  const options = {
    headers: {
      authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    },
  };
  return new GraphQLClient(process.env.BACKEND_URL, options);
};

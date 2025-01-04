import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

let apolloClient = null;

const getClient = (uri) => {
  if (!apolloClient) {
    apolloClient = new ApolloClient({
      link: new HttpLink({
        uri: uri,
        fetchOptions: { cache: "no-store" },
      }),
      cache: new InMemoryCache(),
    });
  }
  return apolloClient;
};

const FetchGql = {
  /**
   * @param {string} uri - The GraphQL endpoint URI
   * @param {object} param - The GraphQL mutation (in the form of gql template literal)
   * @param {object} variables - The variables to pass to the mutation
   * @param {function} onSuccess - Callback to handle the data when the mutation is successful (optional)
   * @param {function} onError - Callback to handle errors (optional)
   */
  Query: async (uri, param, variables, onSuccess= null, onError= null) => {
    const client = getClient(uri);

    try {
      const { data } = await client.mutate({
        mutation: param,
        variables: variables,
      });

      if(onSuccess) onSuccess(data);
      else return data;
    } catch (error) {
      if (onError) {
        onError(error);
      } else {
        console.log("GraphQL Error: ", error);
      }
    }
  },
};

export default FetchGql;

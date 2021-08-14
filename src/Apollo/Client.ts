import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://110.13.55.116:3000/graphql",
  cache: new InMemoryCache(),
});

export { client };

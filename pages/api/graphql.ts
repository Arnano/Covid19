import { ApolloServer } from "apollo-server-micro";
import CovidAPI from "../../client/CovidApi";
import { typeDefs } from "../../client/typeDefs";
import { resolvers } from "../../client/resolvers";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    covidAPI: new CovidAPI()
  })
});

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false
  }
};

export default handler;

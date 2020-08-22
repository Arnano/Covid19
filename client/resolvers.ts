export const resolvers = {
  Query: {
    getCountries: (_, __, { dataSources: { covidAPI } }) =>
      covidAPI.getCountries(),
    getSummary: (_, __, { dataSources: { covidAPI } }) => covidAPI.getSummary()
  }
};

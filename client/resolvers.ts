export const resolvers = {
  Query: {
    getCountries: (_, __, { dataSources: { covidAPI } }) =>
      covidAPI.getCountries(),
    getSummary: (_, __, { dataSources: { covidAPI } }) => covidAPI.getSummary(),
    getDayOneDataPerCountry: (
      _,
      { country, status },
      { dataSources: { covidAPI } }
    ) => covidAPI.getDayOneDataPerCountry(country, status),
    getDayOneTotalPerCountry: (_, { country }, { dataSources: { covidAPI } }) =>
      covidAPI.getDayOneTotalPerCountry(country)
  }
};

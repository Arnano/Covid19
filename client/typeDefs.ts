import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  enum Status {
    confirmed
    recovered
    deaths
  }

  type Countries {
    Country: String
    Slug: String
    ISO2: String
  }

  type SummaryDetails {
    cases: Int
    deaths: Int
    recovered: Int
  }

  type Summary {
    newConfirmed: SummaryDetails
    total: SummaryDetails
  }

  type CountryDayOne {
    Country: String
    Lat: String
    Lon: String
    Date: String
    Cases: Int
    Status: Status
  }

  type TotalDayOne {
    Country: String
    Confirmed: Int
    Deaths: Int
    Recovered: Int
    Date: String
  }

  type Query {
    getCountries: [Countries!]
    getSummary: Summary
    getDayOneDataPerCountry(country: String!, status: Status!): [CountryDayOne]
    getDayOneTotalPerCountry(country: String!): [TotalDayOne]
  }
`;

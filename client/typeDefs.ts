import { gql } from "apollo-server-micro";

export const typeDefs = gql`
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

  type Query {
    getCountries: [Countries!]
    getSummary: Summary
  }
`;

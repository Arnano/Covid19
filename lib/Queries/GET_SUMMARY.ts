import gql from "graphql-tag";

export const GET_SUMMARY = gql`
  query {
    getSummary {
      newConfirmed {
        cases
        deaths
        recovered
      }
      total {
        cases
        deaths
        recovered
      }
    }
  }
`;

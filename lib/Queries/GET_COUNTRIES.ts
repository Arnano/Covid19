import gql from "graphql-tag";

export const GET_COUNTRIES = gql`
  query {
    getCountries {
      Country
      Slug
      ISO2
    }
  }
`;

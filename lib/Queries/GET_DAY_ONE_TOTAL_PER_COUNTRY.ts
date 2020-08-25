import gql from "graphql-tag";

export const GET_DAY_ONE_TOTAL_PER_COUNTRY = gql`
  query getDayOneTotalPerCountry($country: String!) {
    getDayOneTotalPerCountry(country: $country) {
      Country
      Confirmed
      Recovered
      Deaths
      Date
    }
  }
`;

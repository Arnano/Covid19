import gql from "graphql-tag";

export const GET_DAY_ONE_PER_COUNTRY = gql`
  query getDayOnePerCountry($country: String!, $status: Status!) {
    getDayOneDataPerCountry(country: $country, status: $status) {
      Country
      Status
      Lat
      Lon
      Cases
      Date
    }
  }
`;

import { GET_SUMMARY } from "../lib/Queries/GET_SUMMARY";
import { GET_COUNTRIES } from "../lib/Queries/GET_COUNTRIES";
import withApollo from "../lib/withApollo";
import { Image } from "../components/Image";
import { Logo } from "../components/Logo";
import { Stack } from "@chakra-ui/core";
import Card from "../components/Card";
import Router from "next/router";
import { getDataFromTree } from "@apollo/react-ssr";

const cardsMotionProps = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 }
};

const Home = ({
  summaryLoading,
  summaryData,
  countriesLoading,
  countriesData
}) => {
  if (summaryLoading || !summaryData) return <Logo />;

  const onHandleClick = value => {
    Router.push(`/country/${value}`);
  };

  return (
    <>
      <Image
        onHandleClick={onHandleClick}
        countriesLoading={countriesLoading}
        countriesData={countriesData}
      />

      <Stack
        isInline
        spacing={8}
        align="center"
        maxWidth="960px"
        margin="0 auto"
        justifyContent="space-between"
      >
        <Card
          motionProps={cardsMotionProps}
          title="Cases: "
          newData={summaryData.getSummary.newConfirmed.cases.toFixed(2)}
          totalData={summaryData.getSummary.total.cases.toFixed(2)}
          percentageText="Woldwide percentage infected: "
          label="New cases"
        />

        <Card
          motionProps={cardsMotionProps}
          title="Recovered: "
          newData={summaryData.getSummary.newConfirmed.recovered.toFixed(2)}
          totalData={summaryData.getSummary.total.recovered.toFixed(2)}
          percentageText="Percentage recovered: "
          label="Newly recovered: "
        />

        <Card
          motionProps={cardsMotionProps}
          title="Deaths: "
          newData={summaryData.getSummary.newConfirmed.deaths.toFixed(2)}
          totalData={summaryData.getSummary.total.deaths.toFixed(2)}
          percentageText="Percentage deceased: "
          label="New deceased: "
        />
      </Stack>
    </>
  );
};

Home.getInitialProps = async ctx => {
  const apolloClient = ctx.apolloClient;
  const {
    loading: summaryLoading,
    data: summaryData
  } = await apolloClient.query({
    query: GET_SUMMARY
  });

  const {
    loading: countriesLoading,
    data: countriesData
  } = await apolloClient.query({
    query: GET_COUNTRIES
  });

  return {
    pageProps: {},
    summaryLoading,
    summaryData,
    countriesLoading,
    countriesData
  };
};

export default withApollo(Home, { getDataFromTree });

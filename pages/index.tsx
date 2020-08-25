import { GET_SUMMARY } from "../lib/Queries/GET_SUMMARY";
import { GET_DAY_ONE_TOTAL_PER_COUNTRY } from "../lib/Queries/GET_DAY_ONE_TOTAL_PER_COUNTRY";
import withApollo from "../lib/withApollo";
import { Image } from "../components/Image";
import { useApolloClient } from "@apollo/client";
import {
  Spinner,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from "@chakra-ui/core";
import { useState } from "react";
import Card from "../components/Card";
import DayOnePerCountry from "../components/Results";

const cardsMotionProps = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 }
};

const cardMotionProps = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 }
};

const Home = ({ summaryLoading, summaryData }) => {
  const client = useApolloClient();
  const [loading, setLoading] = useState(false);
  const [getData, setData] = useState([]);
  const [country, setCountry] = useState("");

  if (summaryLoading || !summaryData)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );

  const onHandleClick = async value => {
    setLoading(true);
    const { data } = await client.query({
      query: GET_DAY_ONE_TOTAL_PER_COUNTRY,
      variables: { country: value }
    });

    setData(data);
    setCountry(value);
    setLoading(false);
  };

  return (
    <>
      <Image
        src={"covid19.png"}
        onHandleClick={onHandleClick}
        isLoading={loading}
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

      {!!country && (
        <Tabs
          variant="solid-rounded"
          width="960px"
          margin="20px auto"
          padding={"1.25rem"}
          boxShadow={
            "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)"
          }
          borderWidth="1px"
          borderRadius="0.25rem"
        >
          <TabList>
            <Tab _selected={{ color: "orange", bg: "orange.50" }}>
              Confirmed
            </Tab>
            <Tab _selected={{ color: "green", bg: "green.50" }}>Recovered</Tab>
            <Tab _selected={{ color: "red", bg: "red.50" }}>Deaths</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <DayOnePerCountry
                status="Confirmed"
                data={getData}
                motionProps={cardMotionProps}
              />
            </TabPanel>

            <TabPanel>
              <DayOnePerCountry
                status="Recovered"
                data={getData}
                motionProps={cardMotionProps}
              />
            </TabPanel>

            <TabPanel>
              <DayOnePerCountry
                status="Deaths"
                data={getData}
                motionProps={cardMotionProps}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
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

  return { pageProps: {}, summaryLoading, summaryData };
};

export default withApollo(Home);

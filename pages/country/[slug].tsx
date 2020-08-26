import { GET_DAY_ONE_TOTAL_PER_COUNTRY } from "../../lib/Queries/GET_DAY_ONE_TOTAL_PER_COUNTRY";
import withApollo from "../../lib/withApollo";
import { Logo } from "../../components/Logo";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/core";
import { useState } from "react";
import DayOnePerCountry from "../../components/Results";

const graphsMotionProps = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 }
};

const Country = ({ loading, data }) => {
  const [index, setIndex] = useState(0);

  if (loading || !data) return <Logo />;

  return (
    <>
      {!!data && (
        <Tabs
          onChange={index => setIndex(index)}
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
              {index === 0 && (
                <DayOnePerCountry
                  status="Confirmed"
                  data={data}
                  motionProps={graphsMotionProps}
                />
              )}
            </TabPanel>

            <TabPanel>
              {index === 1 && (
                <DayOnePerCountry
                  status="Recovered"
                  data={data}
                  motionProps={graphsMotionProps}
                />
              )}
            </TabPanel>

            <TabPanel>
              {index === 2 && (
                <DayOnePerCountry
                  status="Deaths"
                  data={data}
                  motionProps={graphsMotionProps}
                />
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      )}
    </>
  );
};

Country.getInitialProps = async ctx => {
  const queryPath = await ctx.query;
  const apolloClient = ctx.apolloClient;
  const { loading, data } = await apolloClient.query({
    query: GET_DAY_ONE_TOTAL_PER_COUNTRY,
    variables: { country: queryPath.slug }
  });

  return { loading, data };
};

export default withApollo(Country);

import { GET_SUMMARY } from "../lib/Queries/GET_SUMMARY";
import { useQuery } from "@apollo/react-hooks";
import withApollo from "../lib/withApollo";
import { Image } from "../components/Image";
import {
  Spinner,
  Stat,
  StatNumber,
  StatHelpText,
  StatArrow,
  Stack,
  Box,
  Heading
} from "@chakra-ui/core";

const getPercentage = data => ((data / 7800000000) * 100).toFixed(2);

const Feature = ({ title, children, ...rest }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      {children}
    </Box>
  );
};

const Home = () => {
  const { loading, data } = useQuery(GET_SUMMARY);

  if (loading || !data)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );

  return (
    <>
      <Image src={"covid19.png"} />
      <Stack isInline spacing={8} align="center">
        <Feature title="Total cases: ">
          <Stat>
            <StatNumber>{data.getSummary.total.cases.toFixed(2)}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              Woldwide percentage infected:{" "}
              {getPercentage(data.getSummary.total.cases)}%
            </StatHelpText>
            <StatHelpText>
              <StatArrow type="increase" />
              New cases {data.getSummary.newConfirmed.cases.toFixed(2)}
            </StatHelpText>
          </Stat>
        </Feature>
        <Feature title="Total recovered: ">
          <Stat>
            <StatNumber>
              {data.getSummary.total.recovered.toFixed(2)}
            </StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              Newly recovered{" "}
              {data.getSummary.newConfirmed.recovered.toFixed(2)}
            </StatHelpText>
          </Stat>
        </Feature>
        <Feature title="Total deaths: ">
          <Stat>
            <StatNumber>{data.getSummary.total.deaths.toFixed(2)}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              New deceased {data.getSummary.newConfirmed.deaths.toFixed(2)}
            </StatHelpText>
          </Stat>
        </Feature>
      </Stack>
    </>
  );
};

export default withApollo(Home);

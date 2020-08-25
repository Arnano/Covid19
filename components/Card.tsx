import { getPercentage } from "../lib/calculs";
import { Stat, StatHelpText, StatArrow, Box, Heading } from "@chakra-ui/core";
import { withMotion } from "../lib/withMotion";

const Feature = ({ title, children, ...rest }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      {children}
    </Box>
  );
};

const Card = ({ title, newData, totalData, percentageText, label }) => (
  <Feature title={`${title}${totalData}`}>
    <Stat>
      <StatHelpText>
        <StatArrow type="increase" />
        {percentageText}: {getPercentage(totalData, 7800000000)}%
      </StatHelpText>
      <StatHelpText>
        <StatArrow type="increase" />
        {label} {newData}
      </StatHelpText>
    </Stat>
  </Feature>
);

export default withMotion(Card);

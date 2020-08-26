import { withAnimatePresence } from "../lib/withAnimatePresence";
import { Logo } from "../components/Logo";
import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from "victory";
import moment from "moment";

const color = {
  Confirmed: "orange",
  Recovered: "green",
  Deaths: "red"
};

const DayOnePerCountry = ({ status, data }) => {
  if (!data.getDayOneTotalPerCountry) return <Logo />;

  const stuff = data.getDayOneTotalPerCountry.map(item => ({
    cases: item[status],
    date: moment(item.Date).format("MMM D, YYYY")
  }));

  return (
    <>
      <p>
        Total {status}: {Math.max(...stuff.map(item => item.cases))}
      </p>
      <VictoryChart
        theme={VictoryTheme.material}
        width={960}
        domain={{
          y: [stuff[0].cases, Math.max(...stuff.map(item => item.cases))]
        }}
      >
        <VictoryAxis crossAxis tickCount={5} />
        <VictoryAxis
          dependentAxis
          style={{ tickLabels: { angle: -45 } }}
          tickCount={5}
        />
        <VictoryBar
          data={stuff}
          x="date"
          y="cases"
          style={{ data: { fill: `${color[status]}` } }}
        />
      </VictoryChart>
    </>
  );
};

export default withAnimatePresence(DayOnePerCountry);

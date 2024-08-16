import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BasicCalculator from "./BasicCalculator/BasicCalculator";
import ScientificCalculator from "./ScientificCalculator/ScientificCalculator";
import GraphingCalculator from "./GraphingCalculator/GraphingCalculator";
import FinancialCalculator from "./FinancialCalculator/FinancialCalculator";
import ProgrammableCalculator from "./ProgrammableCalculator/ProgrammableCalculator";
import PrintingCalculator from "./PrintingCalculator/PrintingCalculator";

const Home = () => {
  return (
    <div className="pt-2">
      <Tabs>
        <TabList className={"text-black bg-gray-300"}>
          <Tab>Basic Calculator</Tab>
          <Tab>Scientific Calculator</Tab>
          <Tab>Graphing Calculator</Tab>
          <Tab>Financial Calculator</Tab>
          <Tab>Programmable Calculator</Tab>
          <Tab>Printing Calculator</Tab>
          <Tab>Online Calculator</Tab>
          <Tab>Desktop Calculator</Tab>
          <Tab>Pocket Calculator</Tab>
          <Tab>Construction Calculator</Tab>
          <Tab>Matrix Calculator</Tab>
          <Tab>Unit Converter Calculator</Tab>
          <Tab>Currency Converter Calculator</Tab>
          <Tab>BMI Calculator</Tab>
          <Tab>Mortgage Calculator</Tab>
          <Tab>Date Calculator</Tab>
          <Tab>Hexadecimal Calculator</Tab>
          <Tab>Fraction Calculator</Tab>
          <Tab>Algebra Calculator</Tab>
          <Tab>Calories Calculator</Tab>
          <Tab>Loan Calculator</Tab>
          <Tab>Percentage Calculator</Tab>
        </TabList>

        <TabPanel>
          <BasicCalculator></BasicCalculator>
        </TabPanel>
        <TabPanel>
          <ScientificCalculator></ScientificCalculator>
        </TabPanel>
        <TabPanel>
          <GraphingCalculator></GraphingCalculator>
        </TabPanel>
        <TabPanel>
          <FinancialCalculator></FinancialCalculator>
        </TabPanel>
        <TabPanel>
          <ProgrammableCalculator></ProgrammableCalculator>
        </TabPanel>
        <TabPanel>
          <PrintingCalculator></PrintingCalculator>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Home;

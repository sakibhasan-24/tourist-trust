import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Overviews from "./Overview/Overviews";
import Packages from "./Packages/Packages";
import TourGuides from "../TourGuide/TourGuides";
export default function ItemsTab() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <div className="my-20 flex items-center justify-center gap-6">
        <Tabs>
          <TabList>
            <Tab>OverView</Tab>
            <Tab>Our Package</Tab>
            <Tab>Meet Our Tour Guide </Tab>
          </TabList>
          <TabPanel>
            <Overviews />
          </TabPanel>
          <TabPanel>
            <Packages />
          </TabPanel>
          <TabPanel>
            <TourGuides />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

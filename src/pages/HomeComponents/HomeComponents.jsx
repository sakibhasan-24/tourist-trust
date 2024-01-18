import React from "react";
import Banner from "../Home/Banner";
import Slider from "../Home/Slider";
import { Helmet } from "react-helmet-async";

import ItemsTab from "../Caregories/ItemsTab";

export default function HomeComponents() {
  return (
    <div>
      <Helmet>
        <title>tourist|Home</title>
      </Helmet>
      <Banner />
      {/* <Slider /> */}
      <ItemsTab />
    </div>
  );
}

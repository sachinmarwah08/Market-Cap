import React, { useState } from "react";
import MarketCap from "./MarketCap/MarketCap";
import Earnings from "./Earnings/Earnings";
import Revenue from "./Revenue/Revenue";
import SearchBar from "../SearchBar/SearchBar";
import Buttons from "../Buttons/Buttons";
import "./SwitchCase.scss";
import Employees from "./Employees/Employees";
import PEratio from "./PEratio/PEratio";
import Dividend from "./Dividend/Dividend";
import OperatingMargin from "./OperatingMargin/OperatingMargin";

const SwtchCase = () => {
  const [screen, setScreen] = useState("MarketCap");

  const handleChange = (screenType) => {
    setScreen(screenType);
  };

  const renderComponents = () => {
    switch (screen) {
      case "MarketCap":
        return <MarketCap />;
      case "Earnings":
        return <Earnings />;
      case "Revenue":
        return <Revenue />;
      case "Employees":
        return <Employees />;
      case "PEratio":
        return <PEratio />;
      case "Dividend":
        return <Dividend />;
      case "OperatingMargin":
        return <OperatingMargin />;
    }
  };
  return (
    <div className="main-wrappper">
      <SearchBar />
      <Buttons screen={screen} handleChange={handleChange} />
      {renderComponents()}
    </div>
  );
};

export default SwtchCase;

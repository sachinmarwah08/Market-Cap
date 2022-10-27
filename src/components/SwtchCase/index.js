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
import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";

const SwtchCase = () => {
  const [screen, setScreen] = useState("Market Cap");
  const [heading, setHeading] = useState("Market Cap");

  const handleChange = (screenType) => {
    setScreen(screenType);
    setHeading(screenType);
  };

  const renderComponents = () => {
    switch (screen) {
      case "Market Cap":
        return <MarketCap heading={heading} />;
      case "Earnings":
        return <Earnings heading={heading} />;
      case "Revenue":
        return <Revenue heading={heading} />;
      case "Employees":
        return <Employees heading={heading} />;
      case "P/E ratio":
        return <PEratio heading={heading} />;
      case "Dividend %":
        return <Dividend heading={heading} />;
      case "Operating Margin":
        return <OperatingMargin heading={heading} />;
    }
  };
  return (
    <>
      <Header heading={heading} />
      <div className="main-wrappper">
        <SearchBar />
        <Buttons screen={screen} handleChange={handleChange} />
        {renderComponents()}
      </div>
      <Footer />
    </>
  );
};

export default SwtchCase;

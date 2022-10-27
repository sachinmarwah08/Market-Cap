import React from "react";
import "./Buttons.scss";

const Buttons = ({ handleChange, screen }) => {
  return (
    <div className="button-container">
      <div className="buttons-wrapper">
        <button
          onClick={() => handleChange("Market Cap")}
          className={`${
            screen === "Market Cap" ? "btn-group-colored " : "btn-group"
          } `}
        >
          Market Cap
        </button>
        <button
          onClick={() => handleChange("Earnings")}
          className={`${
            screen === "Earnings" ? "btn-group-colored " : "btn-group"
          } `}
        >
          Earnings
        </button>
        <button
          onClick={() => handleChange("Revenue")}
          className={`${
            screen === "Revenue" ? "btn-group-colored " : "btn-group"
          } `}
        >
          Revenue
        </button>
        <button
          onClick={() => handleChange("Employees")}
          className={`${
            screen === "Employees" ? "btn-group-colored " : "btn-group"
          } `}
        >
          Employees
        </button>
        <button
          onClick={() => handleChange("P/E ratio")}
          className={`${
            screen === "P/E ratio" ? "btn-group-colored " : "btn-group"
          } `}
        >
          P/E ratio
        </button>
        <button
          onClick={() => handleChange("Dividend %")}
          className={`${
            screen === "Dividend %" ? "btn-group-colored " : "btn-group"
          } `}
        >
          Dividend %
        </button>
        <button
          onClick={() => handleChange("Operating Margin")}
          className={`${
            screen === "Operating Margin" ? "btn-group-colored " : "btn-group"
          } `}
        >
          Operating Margin
        </button>
      </div>
    </div>
  );
};

export default Buttons;

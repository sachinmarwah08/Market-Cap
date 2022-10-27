import React from "react";
import Pagination from "../../Pagination/Pagination";
import Table from "../../Table/Table";
import { data } from "./data";

const MarketCap = ({ heading }) => {
  return (
    <div>
      <Table data={data} heading={heading} />
      <Pagination />
    </div>
  );
};

export default MarketCap;

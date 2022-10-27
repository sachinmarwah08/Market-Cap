import React from "react";
import Pagination from "../../Pagination/Pagination";
import Table from "../../Table/Table";
import { data } from "./data";

const PEratio = () => {
  return (
    <div>
      <Table data={data} />
      <Pagination />
    </div>
  );
};

export default PEratio;

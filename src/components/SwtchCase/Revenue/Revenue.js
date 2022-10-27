import React from "react";
import Pagination from "../../Pagination/Pagination";
import Table from "../../Table/Table";
import { data } from "./data";

const Revenue = () => {
  return (
    <div>
      <Table data={data} />
      <Pagination />
    </div>
  );
};

export default Revenue;

import React from "react";
import Pagination from "../../Pagination/Pagination";
import Table from "../../Table/Table";
import { data } from "../Employees/data";

const Employees = () => {
  return (
    <div>
      <Table data={data} />
      <Pagination />
    </div>
  );
};

export default Employees;

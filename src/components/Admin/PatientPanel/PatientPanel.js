import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { heading } from "../../Common/Table";
import TotalPageCounter from "../../Utils/TotalPageCounter";
import { AiFillEye, AiOutlineDownload } from "react-icons/ai";
import axios from "axios";
import { BaseUrl } from "../../APi/api";
import PatientPanelView from "./PatientPanelView";

const PatientPanel = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  
  
  

  const TableHeader = () => {
    return (
      !isEmpty(heading) &&
      heading.map((name, index) => (
        <th key={index} scope="col" className="px-6 py-3">
          {name}
        </th>
      ))
    );
  };

  const TableRowData = () => {
  };
  const totalPage = TotalPageCounter(limit);

  let props = {
    page,
    setPage,
    TableRowData,
    TableHeader,
    totalPage,
  };

  return (
    <>
      <PatientPanelView props={props} />
    </>
  );
};

export default PatientPanel;

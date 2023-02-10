import React from "react";
import SearchBar from "../../Common/SearchBar";
import Table from "../../Common/Table";

const DoctorPanelView = ({props}) => {
  return (
    <>
    <p className="text-xl mb-2 uppercase font-[500]">Upcoming</p>
      <Table props={props}>
        {/* <SearchBar /> */}
      </Table>
    </>
  );
};

export default DoctorPanelView;

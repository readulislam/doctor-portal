import React from "react";
import SearchBar from "../../Common/SearchBar";
import Table from "../../Common/Table";

const PreviousAppointmentView = ({props}) => {
  return (
    <>
     <p className="text-xl mb-2 uppercase font-[500]">Previous</p>
      <Table props={props}>
        <SearchBar />
      </Table>
    </>
  );
};

export default PreviousAppointmentView;

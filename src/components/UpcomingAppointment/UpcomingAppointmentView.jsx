import React from "react";
import SearchBar from "../../Common/SearchBar";
import Table from "../../Common/Table";
const data =['Last 30 days','Last 7 days','Last day','Last month','Last year']
const UpcomingAppointmentView = ({props}) => {
  return (
    <>
    <p className="text-xl mb-2 uppercase font-[500]">Upcoming</p>
      <Table props={props}>
        <SearchBar data={data}/>
      </Table>
    </>
  );
};

export default UpcomingAppointmentView;

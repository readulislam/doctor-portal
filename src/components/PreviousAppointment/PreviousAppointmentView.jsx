import React, { useState } from "react";
import SearchBar from "../../Common/SearchBar";
import Table from "../../Common/Table";
const data =['Last 30 days','Last 7 days','Last day','Last month','Last year']
const PreviousAppointmentView = ({props}) => {
  const [selectedMenu,setSelectedMenu] = useState('');
  return (
    <>
     <p className="text-xl mb-2 uppercase font-[500]">Previous</p>
      <Table props={props}>
        <SearchBar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} data={data} />
      </Table>
    </>
  );
};

export default PreviousAppointmentView;

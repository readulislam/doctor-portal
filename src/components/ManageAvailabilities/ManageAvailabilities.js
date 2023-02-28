import React, { useEffect, useState } from "react";
import { deleteOverrideDate, getAllOverrideDate } from "../../APi/api";
import ManageAvailabilitiesView from "./ManageAvailabilitiesView";

const ManageAvailabilities = () => {
  const [overrideList, setOverrideList] = useState([]);
  const [reloadOverride, setReloadOverride] = useState(false);
  const [overrideDate, setOverrideDate] = useState([])

  useEffect(() => {
    const fetching = async () => {
      const data = await getAllOverrideDate();
      setOverrideDate(data)
      if (data) {
        const newFormat = data.map((info) => {
          const date = new Date(info.date);
          const splitting = date.toString().split(" ");
          const newDate =
            splitting[0] +
            " " +
            splitting[1] +
            " " +
            splitting[2] +
            " " +
            splitting[3];

          return { ...info, date: newDate };
        });
        setOverrideList(newFormat);
      }
    };
    fetching();
  }, [reloadOverride]);
  // console.log(overrideList);

  const deleteOverrideDateHandler = async (doctorId,id) => {
    const deletedDate = await deleteOverrideDate(doctorId,id)
    console.log(deletedDate);
    setReloadOverride(!reloadOverride)
  }
  return (
    <>
      <p className="text-xl font-semibold uppercase pb-2">
        Set your availability
      </p>
      <p className="text-sm">
        Choose a schedule below to edit or create a new one that you can apply
        to your{" "}
      </p>
      <ManageAvailabilitiesView
      overrideDate={overrideDate}
        setReloadOverride={setReloadOverride}
        reloadOverride={reloadOverride}
        overrideList={overrideList}
        deleteOverrideDateHandler={deleteOverrideDateHandler}
      />
    </>
  );
};

export default ManageAvailabilities;

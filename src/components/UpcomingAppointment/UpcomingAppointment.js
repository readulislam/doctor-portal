import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { heading } from '../../Common/Table';
import { getAllAppointment } from '../../Store/Doctor-Slice';
import TotalPageCounter from '../../Utils/TotalPageCounter';
import TreatmentDetail from '../TreatmentDetail';
import UpcomingAppointmentView from './UpcomingAppointmentView'
import { AiFillEye ,AiOutlineDownload} from 'react-icons/ai';

const UpcomingAppointment = () => {
  const [open,setOpen] = useState(false);
    const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const[selectedPatient, setSelectedPatient] = useState({})
  const { doctorId, doctorInfo, appointments, appointmentCount } = useSelector(
    (state) => state.Doctor
  );
  useEffect(() => {
    if (doctorId) {
      dispatch(
        getAllAppointment({
          doctorId: parseInt(doctorId),
          page: page,
          status: false,
          limit
        })
      );
    }
  }, [doctorId, dispatch, page,limit]);
const TableHeader =()=>{
 
return  !isEmpty(heading) && heading.map((name,index)=><th key={index} scope="col" className="px-6 py-3">
{name}
</th>)
}
console.log(appointments)

const TableRowData =()=>{
    return !isEmpty(appointments) && appointments.map((data)=><>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 uppercase font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {data.patient.firstName + " " + data.patient.lastName}
                </th>
                <td className="px-6 py-4">
                  {data.patient.contact}
                </td>
                <td className="px-6 py-4">
                    {data.time}
                </td>
                <td className="px-6 py-4">
                   {data.date}
                </td>
                <td className="px-6 py-4">
                    <p onClick={()=>{setSelectedPatient(data);setOpen(true)}} className=" text-[#499AFA] flex items-center  dark:text-blue-500 hover:underline">
               <AiFillEye className="hover:text-red-400 cursor-pointer" size={23}/> 
              </p>
                </td>
            </tr>
    </>)
}
const totalPage = TotalPageCounter(appointmentCount, limit)

  const props = {
    page,
    setPage,
    TableRowData,
    TableHeader,
    totalPage,
    
    appointments
   
  }




  return (
    <>
    <UpcomingAppointmentView props={props}/>
     {(selectedPatient && open) &&  <TreatmentDetail selectedPatient={selectedPatient} setOpen={setOpen} open={open}/>}
    </>
  )
}

export default UpcomingAppointment
import axios from 'axios';
export const BaseUrl = 'http://ec2-43-205-124-238.ap-south-1.compute.amazonaws.com:4000'
 // take end point 
const END_POINTS = {
ADD_DEPARTMENT: () =>'/add-department',
GET_DEPARTMENTS: () =>'/get-departments',
ADD_HOSPITAL:() =>'/add-hospital',
GET_HOSPITALS:() =>'/add-hospitals',
ADD_DOCTOR:() =>'/add-doctor',
GET_DOCTORS:() =>'/get-doctors',
ADD_PATIENT:() =>'/patient-registration',
ADD_DATE_OVERRIDE:() =>'/add-dateOverride',
ADD_WEEKLY_AVAILABILITY:() =>'/add-weeklyAvailability',
GET_WEEKLY_AVAILABILITY:() =>'/get-weeklyAvailabilityByDoctorId', // query doctorId
GET_STATES:() =>'/get-states',
GET_CITIES:() =>'/get-citiesByStateId', //  query stateId
GET_SLOTS:() =>'/get-slots', //  query date(8/12/2022) and doctorId
ADD_EVENT_TYPE:() =>'/add-eventType',


}
const URL =(End_Point) => `${BaseUrl}${End_Point}`


//get all Departments
export const ListDepartments = async()=>{
    const {data} = await axios.get(URL(END_POINTS.GET_DEPARTMENTS()))
    return  data
}
  

//get all Departments
export const ListHospitals = async()=>{
    const {data} = await axios.get(URL(END_POINTS.GET_HOSPITALS()))
    return  data
}
  
export const addDoctor = async() =>{

}
export const getDoctors = async() =>{
    const {data} = await axios.get(URL(END_POINTS.GET_DOCTORS()))
    return  data
}
export const patientRegister = async(patientInfo) =>{
    const {data} = await axios.get(URL(END_POINTS.ADD_PATIENT()),{
        ...patientInfo
    })
    return  data
}
/* it takes some info as like below
"date":"17/12/2022",
"doctorId":2,
"overall_Availability":"",
"current_Availability":""
*/
export const addDateOverride = async(info) =>{
    const {data} = await axios.get(URL(END_POINTS.ADD_DATE_OVERRIDE()),{
       ...info
    })
    return  data
}



/* it takes more info as like below
"doctorId":16,
"eventTypeId":8,
"monday":"9.00-17.00",
"tuesday":"9.00-17.00",
"wednesday":"10.00-17.00",
"thursday":"9.00-15.00",
"friday":"9.00-12.00",
"saturday":"Unavailable",
"sunday":"Unavailable",
"startDate":"6/12/2022",
"endDate":"6/12/2023"
Note: time format 24 hours as like 13:00 or 17:00
*/
export const addWeeklyAvailability = async(availabilityINfo) =>{
    const {data} = await axios.get(URL(END_POINTS.ADD_PATIENT()),{
        ...availabilityINfo
    })
    return  data
}
export const getWeeklyAvailability = async() =>{

}

/*  get slots by doctor availability ;
 it takes two query {date(data-format as like 8/12/2022)  and doctorId} */
export const slotsByDoctorAvailability = async(query) =>{
    const {data} = await axios.get(URL(END_POINTS.GET_SLOTS()),{
        query:{
            ...query
        }
    })
    return  data
}


// get all states 
export const ListStates = async()=>{
    const {data} = await axios.get(URL(END_POINTS.GET_STATES()))
    return  data
}
        


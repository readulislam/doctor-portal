import axios from 'axios';
// export const BaseUrl = 'http://ec2-65-2-177-179.ap-south-1.compute.amazonaws.com:4000'
//  export const BaseUrl = 'http://ec2-43-205-124-238.ap-south-1.compute.amazonaws.com:4000'
export const BaseUrl = 'http://localhost:4000'
 // take end point 
const END_POINTS = {
ADD_DEPARTMENT: () =>'/add-department',
GET_DEPARTMENTS: () =>'/get-departments',
ADD_HOSPITAL:() =>'/add-hospital',
GET_HOSPITALS:() =>'/get-hospitals',
ADD_DOCTOR:() =>'/add-doctor',
GET_DOCTORS:() =>'/get-doctors',
ADD_PATIENT:() =>'/patient-registration',
LOGIN_PATIENT:() =>'/patient-login',//  query CONTACT NUMBER
ADD_DATE_OVERRIDE:() =>'/add-dateOverride',
ADD_WEEKLY_AVAILABILITY:() =>'/add-weeklyAvailability',
GET_WEEKLY_AVAILABILITY:() =>'/get-weeklyAvailabilityByDoctorId', // query doctorId
GET_STATES:() =>'/get-states',
GET_CITIES:() =>'/get-citiesByStateId', //  query stateId
GET_SLOTS:() =>'/get-slots', //  query date(8/12/2022) and doctorId
UPDATE_SLOT:() =>'/update-slot', //  query doctorId, date, timeRange, slotId
ADD_EVENT_TYPE:() =>'/add-eventType',
GET_DOCTOR_BY_PHONE:() =>'/get-doctorByNumber',
GET_DOCTOR_APPOINTMENTS:() =>'/get-doctorAppointmentAll', // query doctorId
ADD_APPOINTMENT:() =>'/add-appointment',
UPDATE_APPOINTMENT:()=>'/patientAppointmentComplete',
ADD_PRESCRIPTION:() =>'/add-prescription',
GET_PRESCRIPTION:() =>'/get-prescription',
ADD_REPORT:() =>'/add-testReports',
GET_DISEASE:()=>'/get-diseases'



}
const URL =(End_Point) => `${BaseUrl}${End_Point}`


// get disease
export const ListDiseases = async(departmentId)=>{
    const data = await axios.get(URL(END_POINTS.GET_DISEASE()),{
        params:{departmentId}
    })
   
    return  data
}
/*------------------------
get all departments 
 */
export const ListDepartments = async()=>{
    const {data} = await axios.get(URL(END_POINTS.GET_DEPARTMENTS()))
   
    return  data
}
export const GetDoctorById = async(phone)=>{
   
    const {data} = await axios.get(URL(END_POINTS.GET_DOCTOR_BY_PHONE()),{
        params: { contactNo: phone } 
    })
    return  data
}
export const LoginPatient = async(phone)=>{
    
    const {data} = await axios.get(URL(END_POINTS.LOGIN_PATIENT()),{
        params: { contact: phone } 
    })
    return  data
}
export const DoctorAppointments = async(info)=>{
    console.log(info)
    const {data} = await axios.get(URL(END_POINTS.GET_DOCTOR_APPOINTMENTS()),{
        

        params: { doctorId:info.doctorId ,offset:info.page, limit:8,status:info.status} 

    })
    return  data
}
  
export const updateTimeSlot = async(query)=>{
   
    const {data} = await axios.put(URL(END_POINTS.UPDATE_SLOT()),{
         ...query 
    })
    return  data
}
export const updateAppointment = async(id)=>{
    console.log(id,'ddddddd')
   
    const data = await axios.put(URL(END_POINTS.UPDATE_APPOINTMENT()),{
       id
    })
    return  data
}
  

/*------------------------
get all hospitals 
 */
export const ListHospitals = async()=>{
    const {data} = await axios.get(URL(END_POINTS.GET_HOSPITALS()))
    return  data
}


/* it takes some info as like below

"name":"DR. INDARJEET GUPTA",
"eductaion":"PHD",
"departmentId":9,
"hospitalId":5,
"contactNo":"+969828044375",
"designation":"Nephrology",
"img":"https://api.parashospitals.com/storage/doctors/September2022/0gt3x16BfPMzFkP5UmDT.jpg    " 
*/
export const RegistrationDoctor = async(doctorInfo) =>{
    const {data} = await axios.post(URL(END_POINTS.ADD_DOCTOR()),{
        ...doctorInfo
    })
    return  data
}
export const PostPrescription=async(PrescriptionInfo)=>{
    const {data} = await axios.post(URL(END_POINTS.ADD_PRESCRIPTION()),
        PrescriptionInfo
    )
    return  data
}



export const ListPrescription=async(PrescriptionInfo)=>{
    const {data} = await axios.get(URL(END_POINTS.GET_PRESCRIPTION()),
       {
        params:{...PrescriptionInfo}
       }
    )
    return  data
}





export const PostReport=async(formData)=>{
    const {data} = await axios.post(URL(END_POINTS.ADD_REPORT()),
        formData
    )
    return  data
}
export const ListDoctors = async() =>{
    const {data} = await axios.get(URL(END_POINTS.GET_DOCTORS()))
    return  data
}

/*-------------------------
 it takes user or patient info as like below
 "title": "Mr",
"firstName": "himanshu",
"middleName": "readul",
"lastName": "islam",
"contact": "9876543210",
"dateOfBirth": "13/2/2000",
"address": "3216 ug cyii",
"location": "msmart,jaipur",
"gender": "male",
"country": "india",
"state": "delhi",
"stateId":9,
"cityId":1,
"city": "delhi",
"pinCode": "555555",
"martialStatus": "single"
 */
export const PatientRegister = async(patientInfo) =>{
    const {data} = await axios.post(URL(END_POINTS.ADD_PATIENT()),{
        ...patientInfo
    })
    return  data
}
export const AddDoctorAppointment = async(appointmentInfo) =>{
    const {data} = await axios.post(URL(END_POINTS.ADD_APPOINTMENT()),{
        ...appointmentInfo
    })
    return  data
}


/*------------------------ 
it takes some info as like below

"date":"17/12/2022",
"doctorId":2,
"overall_Availability":"",
"current_Availability":""
*/
export const AddDateOverride = async(info) =>{
    const {data} = await axios.get(URL(END_POINTS.ADD_DATE_OVERRIDE()),{
       ...info
    })
    return  data
}



/*------------------------ 
it takes more info as like below

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
export const AddWeeklyAvailability = async(availabilityINfo) =>{
    const {data} = await axios.get(URL(END_POINTS.ADD_PATIENT()),{
        ...availabilityINfo
    })
    return  data
}


/*  ------------------------
 get slots by doctor availability ;
 it takes two query {date(data-format as like 8/12/2022)  and doctorId} */
export const SlotsByDoctorAvailability = async(query) =>{
    const {data} = await axios.get(URL(END_POINTS.GET_SLOTS()),{
        query:{
            ...query
        }
    })
    return  data
}


/*-------------------------
get all states
 */ 
export const ListStates = async()=>{
    const {data} = await axios.get(URL(END_POINTS.GET_STATES()))
    return  data
}
export const ListCities = async(stateId)=>{
    const {data} = await axios.get(URL(END_POINTS.GET_CITIES()),{
        params:{stateId}
    })
    return  data
}


        


import { Button } from "flowbite-react";

export const slots = [
  { id: 1, slot: "9:15", status: true },
  { id: 2, slot: "9:15", status: true },
  { id: 3, slot: "9:15", status: true },
  { id: 4, slot: "9:15", status: true },
  { id: 5, slot: "9:15", status: true },
  { id: 6, slot: "9:15", status: true },
  { id: 7, slot: "9:15", status: true },
  { id: 8, slot: "9:15", status: true },
  { id: 9, slot: "9:15", status: true },
  { id: 10, slot: "9:15", status: true },
  { id: 11, slot: "9:15", status: true },
  { id: 12, slot: "9:15", status: false },
  { id: 13, slot: "9:15", status: false },
  { id: 14, slot: "9:15", status: false },
  { id: 15, slot: "11:00", status: false },
  { id: 16, slot: "11:00", status: false },
  { id: 17, slot: "11:00", status: false },
  { id: 18, slot: "9:15", status: false },
  { id: 19, slot: "10:45", status: false },
  { id: 20, slot: "10:45", status: false },
  { id: 21, slot: "10:45", status: false },
  { id: 22, slot: "10:45", status: false },
  { id: 23, slot: "10:45", status: false },
  { id: 24, slot: "10:45", status: false },
  { id: 25, slot: "10:45", status: false },
  { id: 26, slot: "10:45", status: false },
  { id: 27, slot: "10:45", status: false },
];

const doctors = [
  {
    "name": "DR. ABHIMANYU YADAV",
    "contactNo": "+919461096587",
    "education": "MBBS",
    "designation": "Director",
    "departmentId": 2,
    "hospitalId": 1,
    "img":"Images/sp-dentist@2x.jpg"
  },
  {
    "name": "DR. HIMANSHU YADAV",
    "contactNo": "+919828044375",
    "education": "MBBS",
    "designation": "Director of Oncology ",
    "departmentId": 4,
    "hospitalId": 2,
    "img":"Images/zefRYl6WURSP1FWJEEEY.jpg"
  },
  {
    "name": "DR. RUDRA PRATAP",
    "contactNo": "",
    "education": "MBBS",
    "designation": "Director of Gynecology",
    "departmentId": 11,
    "hospitalId": 4,
    "img":"Images/sp-gynecologist@2x.jpg"
  },
  {
    "name": "DR. SURESH SHARMA",
    "contactNo": "",
    "education": "MBBS",
    "designation": "ENT Specialist",
    "departmentId": 3,
    "hospitalId": 1,
    "img":"Images/bUQvygFvIjHfVhrus394.jpg"
  },
  {
    "name": "DR. PRADEEP SINGH",
    "contactNo": "",
    "education": "MBBS",
    "designation": "Chief of Orthopaedic surgeon",
    "departmentId": 5,
    "hospitalId": 3,
    "img":"Images/Pax3Hi843qgWaeZ4sMnF.jpg"
  },
  {
    "name": "DR. MUHAMMAD SHAHEEN",
    "contactNo": "",
    "education": "MBBS",
    "designation": "Paediatrician",
    "departmentId": 6,
    "hospitalId": 2,
    "img":"Images/xxBk2CUdtatkvf4ub26x.jpg"
  },
  {
    "name": "DR RUDRA ",
    "contactNo": "",
    "education": "MBBS",
    "designation": "Chairman of Psychiatrists",
    "departmentId": 7,
    "hospitalId": 4,
    "img":"Images/2BpjtH2fPMVEboCTnMHc.jpg"
  },
  {
    "name": "DR. SURUJ WADHWA",
    "contactNo": "",
    "education": "MBBS",
    "designation": "Director of Veterinarian",
    "departmentId": 8,
    "hospitalId": 2,
    "img":"Images/KOcv5cW2KImmOPtXQjJy.jpg"
  },
  {
    "name": "DR S R Rao",
    "contactNo": "",
    "education": "MBBS",
    "designation": "Radiologist",
    "departmentId": 9,
    "hospitalId": 4,
    "img":"Images/BicYlWjUe8sH7WnlfFD6.jpg"
  },
  {
    "name": "DR. V S SHARMA",
    "contactNo": "",
    "education": "MBBS",
    "designation": "Chairman of Neuro Surgery",
    "departmentId": 18,
    "hospitalId": 1,
    "img":"Images/7IKigx0IUWwlBe2DOx86.jpg"
  },
  {
    "name": "DR. HARSHIT KHANDELWAL",
    "contactNo": "",
    "education": "MBBS",
    "designation": "Director & HOD",
    "departmentId": 12,
    "hospitalId": 3,
    "img":"Images/nKvtlYvqtEUyIZg7M0cK.jpg"
  },
  {
    "name": "DR. R K SHARMA",
    "contactNo": "",
    "education": "MBBS",
    "designation": "Director & HOD - Gastroenterology ",
    "departmentId": 15,
    "hospitalId": 1,
    "img":"Images/0gt3x16BfPMzFkP5UmDT.jpg"
  },
  {
    "name": "DR. INDARJEET GUPTA",
    "contactNo": "",
    "education": "MBBS",
    "designation": "Urology",
    "departmentId": 14,
    "hospitalId": 4,
    "img":"Images/UqFjvxa0ipeGKjGKT3Im.jpg"
  }
];
// imgsrc: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg",
// imgsrc: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg",
// imgsrc: "https://api.parashospitals.com/storage/doctors/October2022/zefRYl6WURSP1FWJEEEY.jpg",
// imgsrc: "https://api.parashospitals.com/storage/doctors/October2022/bUQvygFvIjHfVhrus394.jpg",
// imgsrc: "https://api.parashospitals.com/storage/doctors/October2022/Pax3Hi843qgWaeZ4sMnF.jpg",
// imgsrc: "https://api.parashospitals.com/storage/doctors/October2022/xxBk2CUdtatkvf4ub26x.jpg",
// imgsrc: "https://api.parashospitals.com/storage/doctors/October2022/2BpjtH2fPMVEboCTnMHc.jpg",
// imgsrc: "https://api.parashospitals.com/storage/doctors/October2022/KOcv5cW2KImmOPtXQjJy.jpg",
// imgsrc: "https://api.parashospitals.com/storage/doctors/October2022/BicYlWjUe8sH7WnlfFD6.jpg",
// imgsrc: "https://api.parashospitals.com/storage/doctors/September2022/7IKigx0IUWwlBe2DOx86.jpg",
// imgsrc: "https://api.parashospitals.com/storage/doctors/September2022/nKvtlYvqtEUyIZg7M0cK.jpg",
// imgsrc: "https://api.parashospitals.com/storage/doctors/September2022/0gt3x16BfPMzFkP5UmDT.jpg",
// imgsrc: "https://api.parashospitals.com/storage/doctors/October2022/UqFjvxa0ipeGKjGKT3Im.jpg",
export const data = [
  {
    id: 2,
    name: "DR. RUDRA PRATAP",
    designation: "Director Surgical Oncology",
    location: "mSmart Hospital, Delhi",
    speciality: "Oncology",
    
    image:
      "https://api.parashospitals.com/storage/doctors/October2022/UqFjvxa0ipeGKjGKT3Im.jpg",
  },
  {
    id: 3,
    name: "DR. SURESH SHARMA",
    designation: "DIRECTOR-PLASTIC SURGEON",
    location: "mSmart Hospital, jaipur",
    speciality: "Plastic And Reconstructive Surgeries",
    
    image:
      "https://api.parashospitals.com/storage/doctors/October2022/zefRYl6WURSP1FWJEEEY.jpg",
  },
  {
    id: 4,
    name: "DR. PRADEEP SINGH",
    designation: "Chairman",
    location: "mSmart Hospital, Gurugram",
    speciality: "Orthopedics & Joint Replacement",
    
    image:
      "https://api.parashospitals.com/storage/doctors/October2022/bUQvygFvIjHfVhrus394.jpg",
    },
    {
      id: 5,
      name:'DR. MUHAMMAD SHAHEEN',
      designation:'Consultant',
      location:'mSmart Hospital, Ajmer',
      speciality:'Medical Oncology',
      
      image:
        "https://api.parashospitals.com/storage/doctors/October2022/Pax3Hi843qgWaeZ4sMnF.jpg",
    },
    {
      id: 6,
      name:'DR RUDRA ',
      designation:'Chairman',
      location:'mSmart Hospital, Delhi',
      speciality:'Cardiology',
      
      image:
        "https://api.parashospitals.com/storage/doctors/October2022/xxBk2CUdtatkvf4ub26x.jpg",
    },
    {
      id: 7,
      name:'DR. SURUJ WADHWA',
      designation:'Chairman',
      location:'mSmart Hospital, Gurugram',
      speciality:'Orthopedics & Joint Replacement',
      
      image:
        "https://api.parashospitals.com/storage/doctors/October2022/2BpjtH2fPMVEboCTnMHc.jpg",
    },
    {
      id: 8,
      name:'DR S R Rao',
      designation:'Chairman',
      location:'mSmart Hospital, jaipur',
      speciality:'Oncology',
      
      image:
        "https://api.parashospitals.com/storage/doctors/October2022/KOcv5cW2KImmOPtXQjJy.jpg",
    },
    {
      id: 9,
      name:'DR. V S SHARMA',
      designation:'Chairman Neurosciences',
      location:'mSmart Hospital, Ajmer',
      speciality:'Neuro Surgery',
      
      image:
        "https://api.parashospitals.com/storage/doctors/October2022/BicYlWjUe8sH7WnlfFD6.jpg",
    },
    {
      id: 10,
      name:'DR. HARSHIT KHANDELWAL',
      designation:'Director & HOD',
      location:'mSmart Hospital, Delhi',
      speciality:'Cardiology - Interventional',
      
      image:
        "https://api.parashospitals.com/storage/doctors/September2022/7IKigx0IUWwlBe2DOx86.jpg",
    },
    {
      id: 11,
      name:'DR. R K SHARMA',
      designation:'Director & HOD - Nephrology & Transplant Surgey ',
      location:'mSmart Hospital, Gurugram',
      speciality:'Nephrology',
      
      image:
        "https://api.parashospitals.com/storage/doctors/September2022/nKvtlYvqtEUyIZg7M0cK.jpg",
    },
    {
      id: 12,
      name:'DR. INDARJEET GUPTA',
      designation:'Consultant General & Laparoscopic Surgery',
      location:'mSmart Hospital, Ajmer',
      speciality:(<br/>),
      
      image:
        "https://api.parashospitals.com/storage/doctors/September2022/0gt3x16BfPMzFkP5UmDT.jpg",
    },
  ];
  export const doctorHeading=["Patient Name","Date","Time","Prescription"];
  export const doctorPastHeading=["Patient Name","Date","Time","Prescription","followUp","Test Report"];
  export const doctorPastData=[
    {
      name:'Prachi Bansal',
      date:'21/11/2022',
      time:'2:30 - 2:45',
      prescription:(<Button>View</Button>)
    },
    {
      name:'Hema Sharma',
      date:'14/11/2022',
      time:'11:15 - 11:30',
      prescription:(<Button>View</Button>)
    },
    {
      name:'Ritu Bhat',
      date:'7/11/2022',
      time:'2:00 - 2:15 PM',
      prescription:(<Button>View</Button>)
    },
    {
      name:'Rakesh Khatri',
      date:'1/11/2022',
      time:'1:20 - 1:35 PM',
      prescription:(<Button>View</Button>)
    }
  ];
  export const doctorUpComingData=[
    {
      name:'Umesh Bansal',
      date:'25/11/2022',
      time:'2:30 - 2:45',
      prescription:(<Button>upload</Button>)
    },
    {
      name:'Rekha Sharma',
      date:'27/11/2022',
      time:'11:15 - 11:30',
      prescription:(<Button>upload</Button>)
    },
    {
      name:'surbhi Goyal',
      date:'5/12/2022',
      time:'2:00 - 2:15 PM',
      prescription:(<Button>upload</Button>)
    },
  ]
  export const patientHeading=["Doctor Name","Date","Time","Prescription","followUp","Test Report"]
  export const patientUpComingHeading=["Doctor Name","Date","Time"]
  export const patientPastData=[
    {
      name:'DR. SURESH SHARMA',
      date:'21/11/2022',
      time:'2:30 - 2:45',
      prescription:(<Button>View</Button>)
    },
    {
      name:'DR. MUHAMMAD SHAHEEN',
      date:'14/11/2022',
      time:'11:15 - 11:30',
      prescription:(<Button>View</Button>)
    },
    {
      name:'DR. INDARJEET GUPTA',
      date:'7/11/2022',
      time:'2:00 - 2:15 PM',
      prescription:(<Button>View</Button>)
    },
    {
      name:'DR. HARSHIT KHANDELWAL',
      date:'1/11/2022',
      time:'1:20 - 1:35 PM',
      prescription:(<Button>View</Button>)
    }
  ];
  export const patientUpComingData=[
    {
      name:'DR. RUDRA PRATAP',
      date:'25/11/2022',
      time:'2:30 - 2:45',
      prescription:''
    },
    {
      name:'DR. PRADEEP SINGH',
      date:'27/11/2022',
      time:'11:15 - 11:30',
      prescription:''
    },
    {
      name:'DR RUDRA ',
      date:'5/12/2022',
      time:'2:00 - 2:15 PM',
      prescription:''
    },
  ]
  export const doctorExperience=[
    {
      name:'1 Years',
      value:1
    },
    {
      name:'2 Years',
      value:2
    },
    {
      name:'3 Years',
      value:3
    },
    {
      name:'4 Years',
      value:4
    },
    {
      name:'5 Years',
      value:5
    },
    {
      name:'6 Years',
      value:6
    },
    {
      name:'7 Years',
      value:7
    },
    {
      name:'8 Years',
      value:8
    },
    {
      name:'9 Years',
      value:9
    },
    {
      name:'10 Years',
      value:10
    },
    {
      name:'more than 10 Years',
      value:11
    },
  ]
  export const location=[{id:1,
    value:'mSmart Hospital,jaipur'},
    'mSmart Hospital,Delhi','mSmart Hospital,Delhi','mSmart Hospital,Gurugram']
  export const genderValue=['male','female','other']
  export const title=['Baby','Baby Of','Mr','Mrs']
  export const martial=["widowed","single","married","divorced","seperated"]
    
    export const hospital=[
      {
        "name":"mSmart Hospital",
        "address":"Gurugram"
      },   
      {
        "name":"mSmart Hospital",
        "address":"Delhi"
      },
      {
        "name":"mSmart Hospital",
        "address":"Ajmer"
      },
      {
        "name":"mSmart Hospital",
        "address":"jaipur"
      }
    ]
    export const department=[
      {
        "name":"Audiologist",
        "description":"As the name suggests, an audiologist treats and evaluates anything and everything to do with audio or hearing abilities of a person. Since hearing is a very important sense, it requires an expert to treat the same"
      },
      {
        "name":"Dentist",
        "description":"According to American Dental Association, a dentist is a doctor of oral health. Oral health includes teeth, tongue and gums. A dentist is known to diagnose and treat issues of these three areas."
      },
      {
        "name":"ENT specialist",
        "description":"ENT stands for ear, nose and throat. A specialist who treats and diagnoses the issues and troubles of these three areas. Also known as an otolaryngologist, an ENT specialist is a physician to trained to treat the disorders of ENT."
      },
      {
        "name":"Gynaecologist",
        "description":"A gynaecologist is trained to treat the female reproductive system which includes the vagina, uterus, ovaries and breasts."
      },
      {
        "name":"Orthopaedic surgeon",
        "description":"An orthopaedic surgeon is known to deal with issues relating to the musculoskeletal system. This means muscles and bones. Any fracture, pain or abnormality of these areas need to be consulted about with an orthopaedic surgeon."
      },
      {
        "name":"Paediatrician",
        "description":"Paediatricians are doctors who treat children. Since a child’s body functions in a different manner from ours, due to many factors like age and growing stages, their illness and health issues are different from an adult. "
      },
      {
        "name":"Psychiatrists",
        "description":"Mental health is a vast field which requires our uttermost attention. Therefore, to treat what goes inside a human brain is difficult, due to the uncertainty of it. A psychiatrist helps treat and diagnose issues of mental health. "
      },
      {
        "name":"Veterinarian",
        "description":"After the uniqueness of mental health, comes the issue of our furr buddies: animals. Treatment and diagnosis of issues in animals is done by a veterinarian. This includes mental and physical both as well."
      },
      {
        "name":"Radiologist",
        "description":"A radiologist for diagnosing diseases and internal & external injuries with the help of imaging techniques like x-rays, CT scan, MRI and ultrasound etc. They are the first step towards the diagnosis of any sort, which cannot be done without a machine."
      },
      {
        "name":"Nephrology",
        "description":""
      },
      {
        "name":"Oncology",
        "description":""
      },
      {
        "name":"Cardiology",
        "description":""
      },
      {
        "name":"Neurology",
        "description":""
      },
      {
        "name":"Urology",
        "description":""
      },
      {
        "name":"Gastroenterology",
        "description":""
      },
      {
        "name":"Radiaton Oncology",
        "description":""
      },
      {
        "name":"CTVS",
        "description":""
      },
      {
        "name":"Neuro Surgery",
        "description":""
      },
      {
        "name":"Orthopedics",
        "description":""
      },
      {
        "name":"Obstetrics & Gynaecology",
        "description":""
      },
      {
        "name":"Kidney Transplant",
        "description":""
      },
      {
        "name":"Plastic Surgery",
        "description":""
      },
      {
        "name":"Internal Medicine",
        "description":""
      },
      {
        "name":"Critical Care",
        "description":""
      },
      {
        "name":"Endocrinology",
        "description":""
      },
      {
        "name":"Emergency Medicine",
        "description":""
      },
      {
        "name":"Dermatology",
        "description":""
      },
      {
        "name":"Psychiatry",
        "description":""
      },
      {
        "name":"Rheumatology And Clinical Immunology",
        "description":""
      },
      {
        "name":"Opthalmollogy",
        "description":""
      },
      {
        "name":"Pediatrics",
        "description":""
      },
      {
        "name":"Respiratory Medicine",
        "description":""
      }
    ]

const disease=[
  {
    "departmentId":2,
    "name":"Tooth decay",
    "description":"damage to a tooth's surface, which can lead to cavities."
},
{
  "departmentId":2,
    "name":"Periodontal Disease",
    "description":"The buildup of plaque-causing bacteria eventually leads to the development of gingivitis or periodontitis."
},
{
  "departmentId":2,
    "name":"Oral Cancer",
    "description":" This disease usually manifests as a swollen or tingling sore with a red or white surface which can be caused by excess tobacco consumption or Human Papilloma Virus (HPV)."
},
{
  "departmentId":2,
    "name":"Cleft Lip or Palate",
    "description":"A cleft lip is not actually a disease; rather, it is a developmental issue."
},
{
  "departmentId":2,
    "name":"Oral Thrush",
    "description":"oral infections caused by the growth of harmful Candida fungus in the mouth."
},
{
  "departmentId":2,
    "name":"Halitosis",
    "description":"More commonly known as “bad breath”, halitosis is a chronic condition that can be caused by a number of risk factors, including smoking, poor dental hygiene, and existing respiratory tract infections."
}

]
    [
      {
        "doctorId":1,
"eventTypeId":1,
"monday":"9.00-17.00",
"tuesday":"9.00-17.00",
"wednesday":"10.00-17.00",
"thursday":"9.00-15.00",
"friday":"9.00-12.00",
"saturday":"Unavailable",
"sunday":"Unavailable",
"startDate":"6/12/2022",
"endDate":"6/12/2023"
      }, 
      {
        "doctorId":2,
"eventTypeId":2,
"monday":"9.00-17.00",
"tuesday":"9.00-17.00",
"wednesday":"10.00-17.00",
"thursday":"9.00-15.00",
"friday":"9.00-12.00",
"saturday":"Unavailable",
"sunday":"Unavailable",
"startDate":"6/12/2022",
"endDate":"6/12/2023"
    },
    {
      "doctorId":3,
"eventTypeId":3,
"monday":"9.00-17.00",
"tuesday":"9.00-17.00",
"wednesday":"10.00-17.00",
"thursday":"9.00-15.00",
"friday":"9.00-12.00",
"saturday":"Unavailable",
"sunday":"Unavailable",
"startDate":"6/12/2022",
"endDate":"6/12/2023"
  },
  {
    "doctorId":4,
"eventTypeId":4,
"monday":"9.00-17.00",
"tuesday":"9.00-17.00",
"wednesday":"10.00-17.00",
"thursday":"9.00-15.00",
"friday":"9.00-12.00",
"saturday":"Unavailable",
"sunday":"Unavailable",
"startDate":"6/12/2022",
"endDate":"6/12/2023"
},
{
  "doctorId":5,
"eventTypeId":5,
"monday":"9.00-17.00",
"tuesday":"9.00-17.00",
"wednesday":"10.00-17.00",
"thursday":"9.00-15.00",
"friday":"9.00-12.00",
"saturday":"Unavailable",
"sunday":"Unavailable",
"startDate":"6/12/2022",
"endDate":"6/12/2023"
},
{
  "doctorId":6,
"eventTypeId":6,
"monday":"9.00-17.00",
"tuesday":"9.00-17.00",
"wednesday":"10.00-17.00",
"thursday":"9.00-15.00",
"friday":"9.00-12.00",
"saturday":"Unavailable",
"sunday":"Unavailable",
"startDate":"6/12/2022",
"endDate":"6/12/2023"
},
{
  "doctorId":7,
"eventTypeId":7,
"monday":"9.00-17.00",
"tuesday":"9.00-17.00",
"wednesday":"10.00-17.00",
"thursday":"9.00-15.00",
"friday":"9.00-12.00",
"saturday":"Unavailable",
"sunday":"Unavailable",
"startDate":"6/12/2022",
"endDate":"6/12/2023"
},
{
  "doctorId":8,
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
},
{
  "doctorId":9,
"eventTypeId":9,
"monday":"9.00-17.00",
"tuesday":"9.00-17.00",
"wednesday":"10.00-17.00",
"thursday":"9.00-15.00",
"friday":"9.00-12.00",
"saturday":"Unavailable",
"sunday":"Unavailable",
"startDate":"6/12/2022",
"endDate":"6/12/2023"
},
{
  "doctorId":10,
"eventTypeId":10,
"monday":"9.00-17.00",
"tuesday":"9.00-17.00",
"wednesday":"10.00-17.00",
"thursday":"9.00-15.00",
"friday":"9.00-12.00",
"saturday":"Unavailable",
"sunday":"Unavailable",
"startDate":"6/12/2022",
"endDate":"6/12/2023"
},
{
  "doctorId":11,
"eventTypeId":11,
"monday":"9.00-17.00",
"tuesday":"9.00-17.00",
"wednesday":"10.00-17.00",
"thursday":"9.00-15.00",
"friday":"9.00-12.00",
"saturday":"Unavailable",
"sunday":"Unavailable",
"startDate":"6/12/2022",
"endDate":"6/12/2023"
},
{
  "doctorId":12,
"eventTypeId":12,
"monday":"9.00-17.00",
"tuesday":"9.00-17.00",
"wednesday":"10.00-17.00",
"thursday":"9.00-15.00",
"friday":"9.00-12.00",
"saturday":"Unavailable",
"sunday":"Unavailable",
"startDate":"6/12/2022",
"endDate":"6/12/2023"
},
{
  "doctorId":13,
"eventTypeId":13,
"monday":"9.00-17.00",
"tuesday":"9.00-17.00",
"wednesday":"10.00-17.00",
"thursday":"9.00-15.00",
"friday":"9.00-12.00",
"saturday":"Unavailable",
"sunday":"Unavailable",
"startDate":"6/12/2022",
"endDate":"6/12/2023"
}
    ]
    const defaultData =  [{id:1, startTime:'09:00', endTime:'12:00'}]

 export   const setDefaultAbailability = {
    
      eventTypeId:8,
      sunday: defaultData,
      monday: defaultData,
      tuesday: defaultData,
      wednesday: defaultData,
      thursday: defaultData,
      friday: defaultData,
      saturday: defaultData,
      startDate:'',
      endDate:""
    }
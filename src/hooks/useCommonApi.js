import React, { useEffect, useState } from 'react'
import { ListCities, ListHospitals, ListStates } from '../APi/api';

export default function useCommonApi({stateId}){
 const [states, setStates] = useState([]);
 const [cities, setCities] = useState([]);
 const [hospitals, setHospitals] = useState([]);
 const [departments, setDepartments] = useState([]);
 
 //
 useEffect(() => {
    const fetchData = async () => {
      const data = await ListStates();
      setStates(data);

      const hospitalList = await ListHospitals();
      setHospitals(hospitalList.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
    
      if (stateId) {
        const cities = await ListCities(stateId);
        setCities(cities);
      }
    };
    fetchData();
  }, [stateId]);




 
 
 
 
 
 
    return {
states,
cities,
hospitals,
departments
  }  
}


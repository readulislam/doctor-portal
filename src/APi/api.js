import axios from "axios";

export const BaseUrl = `http://ec2-43-205-124-238.ap-south-1.compute.amazonaws.com:4000`

export const ListStates=async()=>{
    const{data}=await axios.get(`${BaseUrl}/get-states`)
    return data
}
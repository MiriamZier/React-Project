import axios from 'axios'
const url='http://localhost:8080/user/'

export const addUser=(user)=>{
    // return axios.post("http://localhost:8080/user/addUser",user)
// }
// export const addUser=()=>{

    debugger
    return axios.post(`${url}addUser`,user)
}

export const addu=async(user)=>{
    debugger
    const u=await axios.post(`${url}addUser`,user)
    debugger
    return u
    
}
export const getallUsers=()=>{
    const data= axios.get('http://localhost:8080/user/getAllUsers')
    return data
}

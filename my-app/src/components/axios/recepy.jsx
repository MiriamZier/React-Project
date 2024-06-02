import axios from "axios"
const url='http://localhost:8080/recipy/'

export const getbyidr=(id)=>{
   return  axios.get(url+'/'+id)
}
export const toaddrecipy = (object) => {
    return axios.post(`${url}`, object)
}
export const getallRecipy=()=>{
    const data= axios.get('http://localhost:8080/recipy/getAllRecipy')
    return data
}
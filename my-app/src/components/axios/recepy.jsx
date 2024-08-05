import axios from "axios"
const url='http://localhost:8080/recipy/'

// פונקציה זו מקבלת מזהה (ID) ומבצעת בקשת GET לכתובת http://localhost:8080/recipy/{id}.
// היא מחזירה את התגובה (response) של הבקשה, שהיא אובייקט הבטחה (Promise) שמכיל את הנתונים מהשרת.
export const getbyidr=(id)=>{
   return  axios.get(url+'/'+id)
}
// פונקציה זו מקבלת אובייקט (object) שמכיל את פרטי המתכון החדש ומבצעת בקשת POST לכתובת הבסיסית http://localhost:8080/recipy/.
// היא שולחת את האובייקט כגוף הבקשה (body) לשרת.
// התגובה של הבקשה מוחזרת כאובייקט הבטחה (Promise) שמכיל את הנתונים מהשרת.
export const toaddrecipy = (object) => {
    return axios.post(`${url}`, object)
}
// פונקציה זו מבצעת בקשת GET לכתובת http://localhost:8080/recipy/getAllRecipy.
// היא מחזירה את התגובה (response) של הבקשה, שהיא אובייקט הבטחה (Promise) שמכיל את כל המתכונים מהשרת.
export const getallRecipy=()=>{
    const data= axios.get('http://localhost:8080/recipy/getAllRecipy')
    return data
}
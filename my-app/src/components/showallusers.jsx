import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { show_all_u } from "../redux/actn"
import { useNavigate } from "react-router-dom"
import { getallUsers } from "./axios/user"
require('./showallusers.css')

export const Listusers = () => {

    const nav = useNavigate()
    // הקומפוננטה משתמשת ב-useSelector לשליפת רשימת המשתמשים מ-Redux
    //  ושומרת אותה במצב מקומי (rusers). כמו כן, היא מגדירה את המשתנה myu כ-dispatch לפעולות Redux.
    const [rusers, setusers] = useState(useSelector(x=>x.listUsers))
    let listu=useSelector(i=>i.listUsers)
    let myu = useDispatch()
    // הפונקציה loudData נטענת פעם אחת כאשר הקומפוננטה נטענת.
    //  היא מבצעת בקשת HTTP לשרת ומעדכנת את המצב עם הנתונים שהתקבלו.
    //   במידה ורשימת המשתמשים (rusers) ריקה, היא מעדכנת את המצב המקומי ואת Redux עם הנתונים שהתקבלו.
    useEffect(() => {
        async function loudData() 
        {
            debugger
            if (rusers.length == 0) 
            {

                let respons = await getallUsers()

                setusers(respons.data)
                myu(show_all_u(respons.data))
            }
        } 
        loudData()

    }, [])
//     רכיב <div> ראשי שמכיל את הטבלה.
// <table> עם כותרות עמודות (thead) ושורות נתונים (tbody).
// כל משתמש מוצג בשורה חדשה בטבלה עם ארבעה עמודות: שם, סיסמה, מספר טלפון וכתובת.

    return <div className="container" id="alltd">
        <table className="table">
            <thead>
            <th>שם</th>
            <th>סיסמה</th>
            <th>מספר טלפון</th>
            <th>כתובת</th>
            </thead>
            <tbody>
            {listu.map(x =>(
                <tr>
            <td>{x.name}</td>
            <td>{x.password}</td>
            <td>{x.phone}</td>
            <td>{x.address}</td>
             <br></br>
             </tr>
             ))}
             </tbody>
             </table>
    </div>
}
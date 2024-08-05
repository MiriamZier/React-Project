import { useContext, useState } from "react"
import Persson from "../ourcontex"
import { addUser } from "./axios/user"
import { useDispatch } from "react-redux"
import { AddUserList, show_all_u } from "../redux/actn"
// import { useDispatch } from "react-redux"


// d - פונקציית Dispatch לשליחת פעולות ל-redux.
// setlist - פונקציה מהקונטקסט לניהול רשימת המשתמשים.
// add - פונקציה מהקונטקסט להוספת משתמש לרשימה.
// addu - פונקציה אסינכרונית שמבצעת
//  בקשה להוספת משתמש חדש ומעדכנת את המצב הגלובלי.
export const Myregister=()=>{
let d=useDispatch()
    const setlist=useContext(Persson).sellist
    const addu=async()=>{
       const res=await addUser(
            {tz:document.getElementById('tz').value,
           name:document.getElementById('fname').value,
           address:document.getElementById('addres').value,
            password:document.getElementById('pswrd').value,
            phone:document.getElementById('phone').value })
           alert("נוסף בהצלחה")
           d(show_all_u( res.data))
       
    }
//     הקוד מחזיר רכיב <div> עם מחלקת CSS "container" ומרווח למעלה (mt-3).
// <input> הראשון לוקח את תעודת הזהות של המשתמש ומעדכן את המצב המקומי.
// <input> השני לוקח את שם המשתמש ומעדכן את המצב המקומי.
// <input> השלישי לוקח את הכתובת של המשתמש ומעדכן את המצב המקומי.
// <input> הרביעי לוקח את הסיסמה של המשתמש ומעדכן את המצב המקומי.
// <input> החמישי לוקח את מספר הטלפון של המשתמש ומעדכן את המצב המקומי.
// כפתור <button> מפעיל את הפונקציה addu 
// כאשר לוחצים עליו, שמבצעת את בקשת ההוספה ומעדכנת את המצב הגלובלי.
// תיקון ושיפור הקוד
// שימוש ב-state במקום document.getElementById.
// הוספת ה-user החדש ישירות במצב המקומי במקום קריאה חוזרת ל-addUser.
    const add=useContext(Persson).add
  
        return <div className="container mt-3">
        <input id="tz" type="text" className="form-control" placeholder="הכנס תז" maxLength={9}/><br></br>

        <input id="fname" type="text" className="form-control" placeholder="הכנס שם " maxLength={15}></input><br></br>
        <input id="addres" type="text" className="form-control" placeholder="הכנס כתובת" maxLength={15}></input><br></br>
       <input id="pswrd" type="text" className="form-control" placeholder="הכנס סיסמה" maxLength={10}></input><br></br>
       <input id="phone" type="text" className="form-control" placeholder="הכנס מספר טלפון " maxLength={10}></input><br></br>
       <button onClick={(e)=>{addu({Fname:document.getElementById('fname').value,
       Lname:document.getElementById('addres').value, password:document.getElementById('pswrd').value,
       truepassword:document.getElementById('phone').value}, e)
       addUser()
      }} 
       className="btn btn-primary">sing in</button>
        
    </div>
}

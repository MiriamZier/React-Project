
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { set_all_r } from "../redux/actn"
import { getallRecipy } from "./axios/recepy"
// axios - ספרייה לביצוע בקשות HTTP.
// useEffect, useState מ-React - hooks לניהול מחזור חיי הקומפוננטה ולניהול מצב (state).
// useDispatch, useSelector מ-react-redux - hooks לניהול מצב גלובלי בעזרת Redux.
// useNavigate מ-react-router-dom - hook לניווט בין דפים.
// set_all_r מ-../redux/actn - פעולה (action) להגדרת כל המתכונים במצב הגלובלי.
// getallRecipy מ-./axios/recepy - פונקציה לביצוע בקשת HTTP לקבלת כל המתכונים.
require('./home.css')

export const ListRecipies = () => {
    // nav - פונקציית ניווט.
    // rlist ו-setrlist - מצב מקומי שמכיל את רשימת המתכונים.
    // list - בחירת רשימת המתכונים מהמצב הגלובלי.
    // myd - פונקציה לשליחת פעולות (dispatch) ל-redux.
    const nav = useNavigate()
   const [rlist, setrlist] = useState(useSelector(x=>x.listRecipes))
    let list=useSelector(i=>i.listRecipes)
    let myd = useDispatch()
// useEffect - משמש לביצוע פעולות בעת טעינת הקומפוננטה.
// loudData - פונקציה אסינכרונית שטוענת את הנתונים מהשרת ומעדכנת את המצב המקומי והגלובלי.
 
    useEffect(() => {
        async function loudData() 
        {
            if (rlist.length == 0) 
            {

                let respons = await getallRecipy()

                setrlist(respons.data)
                myd(set_all_r(respons.data))
            }
        } loudData()
    }, [])
    debugger
    
    // הקוד מחזיר רכיב <div> עם מחלקת CSS "container" ו-id "rpic".
    // מבצע מיפוי על רשימת המתכונים ומייצר עבור כל מתכון רכיב <div> 
    // המכיל את שם המתכון, תמונה וכפתור ניווט לפרטים נוספים.
    
    return <div className="container" id="rpic">
        {list.map(x => <div className="pic" >
            <h4 id="namecake">{x.name}</h4>
             <img id="picc" src={`http://localhost:8080/pic/${x.img}`}></img>
             <br></br>
             <button className="btn btn-outline-dark" id='addr' onClick={() => { nav(`../detlis/${x._id}`) }}>לפרטים נוספים</button></div>)}
    </div>
}
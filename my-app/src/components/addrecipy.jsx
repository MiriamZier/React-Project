import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toaddrecipy } from "./axios/recepy.jsx"
import { set_all_r } from "../redux/actn.jsx"

export const AddRecipycomponent = () => {

    const [recipy, setr] = useState({})

    const [arrc, setarrc] = useState([{ name: "", amount: "" }])


    let dispach=useDispatch()

    let navigate=useNavigate({})

    const editn=(val,index)=>{
        const arr=[...arrc]
        arr[index].name=val
        setarrc(arr)
    }
    const editc=(val,index)=>{
        const arr=[...arrc]
        arr[index].amount=val
        setarrc(arr)
    }

    async function nyadd(){
    const obj = { ...recipy }
    obj.ingredients = arrc
    debugger
    const res=await toaddrecipy(obj)
    dispach(set_all_r(res.data))
    // d(addrecipylist(obj))
    navigate('/listRecipes')
}
    return <div className="container">
        <input id="name" type="text" className="form-control" placeholder="הכנס שם מתכון"
            onChange={(e) => setr({ ...recipy, name: e.target.value })}></input>
        <br></br>
        {/* <input id="img" type="image" className="form-control"></input>
        <br></br> */}
        <input id="type" type="text" className="form-control" placeholder="הכנס סוג- חלבי/ פרווה/ בשרי" maxLength={9}
            onChange={(e) => setr({ ...recipy, type: e.target.value })}></input>

        <br></br>
        <input id="level" type="text" className="form-control" placeholder="הכנס רמה- קל/ בינוני/ קשה" maxLength={9}
            onChange={(e) => setr({ ...recipy, level: e.target.value })}></input>
        <br></br>
        <input id="time" type="text" className="form-control" placeholder=" הכנס זמן הכנה "
            onChange={(e) => setr({ ...recipy, time: e.target.value })}></input>
        <br></br>
        {/* <input id="code" type="text" className="form-control"   placeholder="הכנס קוד" maxLength={9}></input>
        <br></br> */}
        <input id="ingredients" type="text" className="form-control"   placeholder="הכנס מוצרים" maxLength={9}></input>
    <br></br>
    {/* <button className="btn btn-default btn-block" onClick={() => { setshow(true) }}>הוסף רכיבים למתכון</button>
        <br></br> */}

        

          { arrc.map((myi, index) => <div>
                <input id="time" type="text" className="form-control" placeholder="הכנס שם מוצר"
                  onChange={(e) => editn(e.target.value,index)}></input>
                <br></br>
                <input id="time" type="text" className="form-control" placeholder="הכנס כמות"
                  onChange={(e) => editc(e.target.value,index)}></input>
                <br></br>
            </div>)}

            <br></br>
                <button onClick={() => { setarrc(arrc.concat({ name: "", amount: "" })) }}>+</button>
                <br></br>
                <br></br>

                <button className="btn btn-default btn-block" onClick={() => nyadd()}>הוסף</button>
    </div>
 }

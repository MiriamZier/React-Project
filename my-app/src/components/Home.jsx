
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { set_all_r } from "../redux/actn"
import { getallRecipy } from "./axios/recepy"

require('./home.css')

export const ListRecipies = () => {

    const nav = useNavigate()

    const [rlist, setrlist] = useState(useSelector(x=>x.listRecipes))
    let list=useSelector(i=>i.listRecipes)
    let myd = useDispatch()

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
    return <div className="container" id="rpic">
        {list.map(x => <div className="pic" >
            <h4 id="namecake">{x.name}</h4>
             <img id="picc" src={`http://localhost:8080/pic/${x.img}`}></img>
             <br></br>
             <button className="btn btn-outline-dark" id='addr' onClick={() => { nav(`../detlis/${x._id}`) }}>לפרטים נוספים</button></div>)}
    </div>
}
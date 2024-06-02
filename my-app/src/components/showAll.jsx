import { useEffect, useState } from "react"
import { getbyidr } from "./axios/recepy"
import { useParams } from "react-router-dom"
require('./showall.css')

export const ShowAll=()=>{
    
    const param=useParams()
    const [r,setre]=useState({ingredients:[]})
    useEffect(()=>{
        async function load(){
            const res=await getbyidr(param.id)
            setre(res.data)
        }load()
    })
    return <div>
        <div className="div1"> 
        <h2 id="h2">{r.name}</h2>
        <img id="picr" src={`http://localhost:8080/pic/${r.img}`}></img>
        <p id="dtls">רמה:{r.level}  זמן הכנה: {r.time}  ,{r.type}</p>
        
        </div>
       <div className="div2" id="amntt">
       <p id="ping">:מצרכים</p> {
        
            r.ingredients.map((i)=><p id="amnt" >* {i.amount} *<br></br><label>{i.name}</label></p>)
        }</div>
    </div>

}

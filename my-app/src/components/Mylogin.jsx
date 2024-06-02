import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const MyLogin =()=>{
    let mynaviagte=useNavigate()
    const [list,setlist]=useState([
        // {name: "rivky", password: "1234"},
        // {name: "yael", password: "3456"},
        // {name: "michal", password: "789"},
        // {name: "sara", password: "9098"},
        // {name: "miriam", password: "3234"}
    ])
    const [user, setuser]= useState({})
        function check(){
            let isuser=true
            if(user.password=='1234' && user.name=="מנהל")
            mynaviagte('/Myregister')
        else if (user.name=="1234" || user.password==null)
        alert ("לא הכנסתה את אחד מהנתונים")
    else 
    {
        for (let i = 0; i < list.length; i++) {
            debugger
        if(list[i].name==user.name && list[i].password==user.password)
        {
            isuser=false
             mynaviagte('/Home')
        }
        }
        debugger
        if(isuser==true)
    mynaviagte('/Myregister')
    }
  
    }
    return <div className="container mt-3">
        <input type="text"className="form-control" placeholder="שם משתמש"onChange={(e)=>setuser({...user,name:e.target.value})}/> <br></br>
        <input type="password" className="form-control" placeholder="הכנס סיסמה" onChange={(me)=>setuser({...user,password:me.target.value})}/> <br></br>
      {/* name:{user.name} password:{user.password} */}
        <button className="btn btn-primary" onClick={()=>check()}>התחבר</button>
    </div>
}
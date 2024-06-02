import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Myregister } from "./Myregister"
import { MyLogin } from "./Mylogin"
import { ListRecipies } from "./Home"
import { About } from "./About"
import { Menu } from "./Menu"
import { ShowAll } from "./showAll"
import { AddRecipy, AddRecipycomponent } from "./addrecipy"
import { Listusers } from "./showallusers"

export const MyRouting=()=>
{
    return <BrowserRouter>
    <Menu></Menu>

        <Routes>
        <Route path="/" element={<ListRecipies></ListRecipies>}></Route>

            {/* <Route path="homelist" element={<ListRecipies></ListRecipies>}></Route> */}
            <Route path="home" element={<ListRecipies></ListRecipies>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route path="login" element={<MyLogin></MyLogin>}></Route>
            <Route path="Myregister" element ={<Myregister></Myregister>}></Route>
            <Route path="adduser" element ={<Myregister></Myregister>}></Route>
            <Route path="detlis/:id" element ={<ShowAll></ShowAll>}></Route>
            <Route path="sighnin" element={<Myregister></Myregister>}></Route>
            {/* <Route path="addr" element ={<AddRecipy></AddRecipy>}></Route> */}
            <Route path='addr' element={<AddRecipycomponent></AddRecipycomponent>}></Route>
            <Route path="showallusers" element={<Listusers></Listusers>}></Route>
            <Route path="users" element={<Listusers></Listusers>}></Route>
            {/* <Route path="/" element={<Menu></Menu>}></Route> */}
        </Routes>
        </BrowserRouter>
    
}
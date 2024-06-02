import { Link } from "react-router-dom"
require('./menu.css')

export const Menu =()=>{
    return <div>
        <nav className="navbar navbar-expand-sm bg-light navbar-light" id="navb">
        <div className="container mt-3">
            <ul className="nav nav-tabs">
                {/* <li className="nav-item">
                    <a className="nav-link active"><p>recipy</p></a>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link active" to="login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="sighnin">to register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="home">Home</Link>
                </li>
                
                <li className="nav-item">
                    <Link className="nav-link active" to="addr">add recipe</Link>
                </li>
                 <li className="nav-item">
                    <Link className="nav-link active" to="users">all users</Link>
                </li>
                
            </ul>
            </div>  
        </nav>
    </div>
}
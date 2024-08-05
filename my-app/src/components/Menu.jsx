import { Link } from "react-router-dom"
// Link מ-react-router-dom - רכיב המאפשר ניווט בתוך אפליקציית ה-React מבלי לטעון את הדף מחדש.
// require('./menu.css') - ייבוא קובץ ה-CSS לצורך עיצוב הקומפוננטה.
require('./menu.css')

// <div> - רכיב עוטף לתפריט.
// <nav> - רכיב הניווט עם המחלקות navbar, navbar-expand-sm, bg-light,
//  ו-navbar-light שמגיעות מ-Bootstrap לצורך עיצוב והתאמה 
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
// Login - קישור לדף ההתחברות.
// to register - קישור לדף הרישום.
// About - קישור לדף אודות.
// Home - קישור לדף הבית.
// add recipe - קישור לדף הוספת מתכון.
// all users - קישור לדף כל המשתמשים.
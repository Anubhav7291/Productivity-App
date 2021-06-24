import { Link } from "react-router-dom";

const Nav=()=>{
    return (
        <div>
             <div className="container-fliud d-flex justify-content-around">
       <div className="row">
           <div className="col">
               <ul className="nav">
                   <li className="nav-item">
                       <Link to="/" className="nav-link"><h1>Habits</h1></Link>
                   </li>
                   </ul>
                </div>
                <div className="col">
               <ul className="nav">
                   <li className="nav-item">
                       <Link to="/dailies" className="nav-link"><h1>Dailies</h1></Link>
                   </li>
                   </ul>
                </div>
                <div className="col">
               <ul className="nav">
                   <li className="nav-item">
                       <Link to="/todo" className="nav-link"><h1>Todo</h1></Link>
                   </li>
                   </ul>
                </div>
                <div className="col">
               <ul className="nav">
                   <li className="nav-item">
                       <Link to="/rewards" className="nav-link"><h1>Productivity</h1></Link>
                   </li>
                   </ul>
                </div>
                   
    
           </div>

       </div>
        </div>
    )
}
export default Nav;
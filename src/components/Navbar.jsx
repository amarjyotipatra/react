import {Link} from "react-router-dom"

export const Navbar=()=>{
    return(
      <div>
    <Link to="/">Home</Link>
    <Link to="/about" style={{margin:"10px"}}>About</Link>
    <Link to="/contact">Contact Us</Link>
    <Link to="/user/:userid" style={{margin:"10px"}}>User</Link>
      </div>
    )
    
}
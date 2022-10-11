import React, { useContext} from "react";
import { Link } from "react-router-dom";

import Cartbtn from "./Cartbtn";
import { AuthContext } from "../Context/AuthContext";
function Navbar() {
// const [name, setname] = useState("");

const{isAuth,toggleAuth} =useContext(AuthContext)

const getuserdata= localStorage.getItem("userData")

const userdata=JSON.parse(getuserdata)
console.log(userdata)


function handletoggle(){
 toggleAuth()
}

console.log(isAuth)

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid py-2">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link  to="/" className="nav-link active" aria-current="page" href="#"> Home </Link> </li>
              <li className="nav-item"> <Link  to="/product" className="nav-link" href="#">Products</Link> </li>
              <li className="nav-item"> <Link  to="about" className="nav-link" href="#">About </Link> </li>
              <li className="nav-item"> <Link  to="contact" className="nav-link" href="#">Contact</Link> </li>
               
            </ul> 
         <Link  to="/" className="navbar-brand mx-auto fw-bold" href="#">SHOPPING-MART</Link>




        {
          isAuth?<button onClick={handletoggle}style={{padding:"0.5% 3% 0.5% 3%",marginRight:"4%",backgroundColor:"green",color:"white",borderRadius:"20%"}}>Logout</button>:<Link  to="/login" className='btn btn-outline-primary ms-2'>
          <span className='fa fa-sign-in me-1'></span> LOGIN
         </Link>
        } 


{
    isAuth? <div>
   {
  userdata.map((e)=>{
   return <h4 style={{color:"teal",textTransform:"uppercase",marginRight:"8px"}}> hii ! {e.username}</h4>
  })
}
    
    </div>   :null  
  }



        {
          isAuth?<img style={{borderRadius:"100%",width:"50px",height:"50px"}}src="https://i.pinimg.com/736x/b2/e9/24/b2e9243d6b74fb54b84f11f2e8a55905.jpg" alt="profile"/>
        :  <Link  to="/Signup" className='btn btn-outline-primary ms-2'>
        <span className='fa fa-user-plus me-1'></span>Register
        </Link>
        }
       
        <Cartbtn/>

          
          </div>
        
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React, {useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'

import { AuthContext } from '../Context/AuthContext';
function Login() {

const{isAuth,toggleAuth} =useContext(AuthContext)

  const [input, setinput] = useState({

    email:"",
    password:""
  });

const navigate=useNavigate()
 const getdata=(e)=>{
    // console.log(e.target.value)
  
    const {value,name}=e.target
    setinput(()=>{
      return{
        ...input,[name]:value
      }
    })
  
  }


  const AddData=(e)=>{
    e.preventDefault();

const getuserdata= localStorage.getItem("userData")
console.log(getuserdata)
    const {email,password}=input;
    

    if(email===""){
      alert("email field is requird")
    }
    else if(password===""){
      alert("password field is requird")
    }else if(password<5){
      alert("password length greater five")
    }
  else{
if(getuserdata && getuserdata.length){
//parse ki maddat se humne json ko object mein change kar diya 

const userdata=JSON.parse(getuserdata)
const userlogin=userdata.filter((el,index)=>{
  return el.email===email && el.password===password
})
if(userlogin.length===0){
  alert("Invalid Credentiala")
}else{
alert("Login Succesfully")
localStorage.setItem("user_login",JSON.stringify(userlogin))
toggleAuth()
navigate("/")
}
}
  }
}
console.log(isAuth)

  return (
    <div className='main'>
      {/* <!-- Button trigger modal --> */}
{/* <button type="button" className="btn btn-outline-primary me-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
 <span className='fa fa-sign-in me-1'></span> LOGIN
</button> */}

{/* <!-- Modal --> */}
{/* <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <button className="btn btn-primary w-100 mb-2" > 
        <span className='fa fa-google me-2'></span> Sign in with Google
        </button>
        <button className="btn btn-primary w-100 mb-2" > 
        <span className='fa fa-facebook me-2'></span> Sign in with Facebook
        </button> */}

{/* // FOrm */}

  {/* <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" onChange={getdata} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"  name="password" onChange={getdata} id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" to="/product" onClick={AddData} className="btn btn-outline-primary w-100 mt-5">Submit</button>
</form>
  </div>
    </div>
  </div>
</div> */}



{/* //new Login-form */}


    <div className="container" style={{width:"60%",marginTop:"4%"}}>
        <div className="item-container">
            <h2 className="log-in">Log in</h2>
        </div>
        <div className="item-container">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" src="http://www.w3.org/1999/xlink" 
                aria-hidden="true" role="img" width="24" height="24" 
                preserveAspectRatio="xMidYMid meet" 
                viewBox="0 0 24 24"><path fill="#1e293b" d="M21.456 10.154c.123.659.19 1.348.19 2.067c0 5.624-3.764 9.623-9.449 9.623A9.841 9.841 0 0 1 2.353 12a9.841 9.841 0 0 1 9.844-9.844c2.658 0 4.879.978 6.583 2.566l-2.775 2.775V7.49c-1.033-.984-2.344-1.489-3.808-1.489c-3.248 0-5.888 2.744-5.888 5.993c0 3.248 2.64 5.998 5.888 5.998c2.947 0 4.953-1.685 5.365-3.999h-5.365v-3.839h9.26Z"/></svg>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" src="http://www.w3.org/1999/xlink" 
                aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" 
                viewBox="0 0 24 24"><path fill="#1e293b" d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"/></svg>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" src="http://www.w3.org/1999/xlink" 
                aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" 
                viewBox="0 0 486.037 1000"><path fill="#1e293b" d="M124.074 1000V530.771H0V361.826h124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555l-3.984 157.766s-51.564-.502-107.833-.502c-60.9 0-70.657 28.065-70.657 74.646v123.361h183.331l-7.977 168.945H302.706V1000H124.074"/></svg>
            </button>
        </div>
        <div className="item-container">
            <p>or login using email</p>
        </div>
        <form>
            <div className="form-input">
                <label for="email" className="label">Email</label>
                <input type="text"  name="email" onChange={getdata} placeholder="Enter Email"/>
            </div>
            <div className="form-input">
                <label for="password" className="label">Password</label>
                <input type="password" name="password" onChange={getdata} placeholder="Enter Password" />
            </div>
            <div className="display-space-between">
                <div>
                    <input type="checkbox" />
                    <label for="password" className="chekbox-label">Remember Me</label>
                </div>
                <div>
                    <a href="#">Forget password</a>
                </div>
            </div>
            <div>
            <button type="submit" to="/product" onClick={AddData} className="btn btn-outline-primary w-100 mt-5">Login</button>
            </div>
        </form>
        <div class="display-space-between">
            <Link to="#">Privacy policy</Link>
            <Link to="/Signup">Crerate-Account</Link>
            <Link t="#" >Terms & condition</Link>

        </div>
    </div>









    </div>
  );
}

export default Login;

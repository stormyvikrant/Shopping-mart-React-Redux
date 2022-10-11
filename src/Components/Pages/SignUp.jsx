import { database } from 'fontawesome';
import React, { useState } from 'react';

function SignUp() {
const [input, setinput] = useState({
  username:"",
  email:"",
  password:""
});

const [userdata, setuserdata] = useState([]);


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
const {username,email,password}=input;

if(username===""){
  alert("username field is requird")
}else if(email===""){
  alert("email field is requird")
}
else if(password===""){
  alert("password field is requird")
}else if(password<5){
  alert("password length greater five")
}
else{
  console.log("data add success fully")
  //localstorage.setItem("key",datain json([...emptydataarraye,inputvalues]))
localStorage.setItem("userData",JSON.stringify([...userdata,input]))
}


}


  return (
    <div>
    {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
<span className='fa fa-user-plus me-1'></span>Register
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <h1 className="modal-title fs-5" id="exampleModalLabel">SignUp</h1>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
      <button className="btn btn-primary w-100 mb-2" > 
      <span className='fa fa-google me-2'></span> Sign Up with Google
      </button>
      <button className="btn btn-primary w-100 mb-2" > 
      <span className='fa fa-facebook me-2'></span> Sign Up with Facebook
      </button>

{/* // FOrm */}

<form>
<div className="mb-3">
  <label htmlFor="exampleInput" className="form-label">Username</label>
  <input type="text" className="form-control" id="exampleInput" onChange={getdata}  name="username" />

</div>
<div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
  <input type="email"   onChange={getdata}  name="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<div className="mb-3">
  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
  <input type="password"  onChange={getdata}  name="password" className="form-control" id="exampleInputPassword1"/>
</div>
<div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
</div>
<button type="submit" onClick={AddData} className="btn btn-outline-primary w-100 mt-5">Register</button>
</form>
</div>
  </div>
</div>
</div>
  </div>
  );
}

export default SignUp;

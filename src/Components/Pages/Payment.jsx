import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './payment.css'
function Payment() {


const navigate=useNavigate()

const [input, setinput] = useState({
    cardnum:"",
    cardname:"",
    cardcvv:""
  });
    
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
    const {cardnum,cardname,cardcvv}=input;
    
    if(cardnum===""){
      alert("please enter card number")
    }else if(cardname===""){
      alert("Please Enter Card Name")
    }
    else if(cardcvv===""){
      alert("Please Enter Cvv")
    }else if(cardcvv<3){
      alert("cvv less than three")
    }
    else{
      alert("Your Orderd Succesfully Orderd")
      alert("Thank you ")
      //localstorage.setItem("key",datain json([...emptydataarraye,inputvalues]))
  
    navigate("/")
    }
    
    
    }





  return (
    <div>
     


  <div class="container1">
    <div class="form1">
      <form >
        <div class="flex-row" style={{width:"90%",margin:"auto"}}>
          <label for="card-number">Card Number</label>
          <input  type="text" onChange={getdata}  name="cardnum"style={{height: "40px",fontSize: "20px",border: "1px solid #ccc",borderRadius: "5px",outlineColor: "#4183f5"}}/>
        </div>
     
        <div  style={{width:"90%",margin:"auto"}}>
          <h6 >HolderName</h6>
          <input  type="text" onChange={getdata}  name="cardname" style={{height: "40px",fontSize: "20px",border: "1px solid #ccc",borderRadius: "5px",outlineColor: "#4183f5"}}/>
        </div>
         <h6>Expiration Date</h6>
       
        <div style={{display:"flex",justifyContent:"space-between" ,marginTop:"1%"}} >
        
               
                <div>
                     <select name="month" id="month-select" style={{padding:"1% 10% 1% 10%"}}>
                  <option value="Month" selected disabled>Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                </div>
               <div>
                <select name="year" id="year-select"  style={{padding:"1% 10% 1% 10%"}}>
                  <option value="Year" selected disabled>Year</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
               </div>
                
        <div style={{display:"flex",justifyContent:"space-between", marginBottom:"3%"}}>
          <label >CVV</label>
          <input  type="number" onChange={getdata}  name="cardcvv"  style={{height: "30px",fontSize: "10px",border: "1px solid #ccc",borderRadius: "5px",outlineColor: "#4183f5"}}/>
     
     
        </div>
           
      
        </div>
        <div class="flex-row">
          <input class="card-submit" onClick={AddData} type="submit"/>
        </div>
      </form>
      <img class="card-image" src="https://pngimg.com/uploads/credit_card/credit_card_PNG99.png" alt="Card image"/>
      <div class="card-image-shadow"></div>
    </div>
  </div>
</div>
  );
}

export default Payment;

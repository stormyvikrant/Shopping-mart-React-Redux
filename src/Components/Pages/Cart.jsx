

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { delItem } from '../Redux/Actions';

function Cart() {
const state=useSelector((state)=>state.addItems)

const dispatch=useDispatch()

const handleclose=(item)=>{
dispatch(delItem(item))
}

const emptyCart=()=>{
 return(
 <div style={{width:"80%" ,margin:"auto"  ,marginTop:"5%"}}>
  <img width="100%" height="100%" src='https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png' alt='empty img '/>
 
 <div>
  <Link to="/product" >Go To Shopping</Link>
 </div>
 </div>
 )
}

const procedButton=()=>{
  return(
    <div style={{textAlign:"end",marginTop:"3%"}}>
   <Link  to="/checkout" className='btn btn-primary '>
    <span className='fa me-1'></span>Proceed To CheckOut</Link>
    </div>
 
  )
}


console.log(state)
  return(
    
<div>
  {state.length===0 && emptyCart() }
  {state.length !==0 && procedButton() }

  {
    state.length !==0 && state.map((el)=>(
      <div className="px-4 my-5 bg-light rounded-3" key={el.id}style={{border:"1px solid green",maxWidth:"50rem",margin:"auto",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
               <div className="container py-4">
                 <button onClick={()=>handleclose(el)} className='btn-close float-end' aria-label='close'></button>
                 <div className="row justify-content-center" >
                   <div className="col-md-7">
                    <img src={el.image} alt={el.title} height="300px" width='300px' /> 
                   </div>
                   <div className="col-md-4 mt-4">
                     <h6>{el.title}</h6>

                     <p className='lead fw-bolder'>
                    Rating : {el.rating && el.rating.rate}
                    <i className='fa fa-star'></i>
                </p>
                 <h3 >Price : ${el.price}</h3>
                  </div>
                </div>
              </div>
             </div>
    ))
    }
    </div>
  )
}

export default Cart;

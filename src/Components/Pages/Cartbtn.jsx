import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"
function Cartbtn() {
//we get state of addItems
  const states=useSelector((state)=>state.addItems)
  console.log(states)
  return (
    <>
      <Link  to="/cart" className='btn btn-outline-primary ms-2'>
        <span className='fa fa-shopping-cart me-1'></span>Cart ({states.length})
      </Link>
    </>
  );
}

export default Cartbtn;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router'
import { useDispatch } from 'react-redux';
import {addItem} from"../Redux/Actions/index"
import { Link } from 'react-router-dom';
function ProductDetail() {
 
//   {/* //Now we need a product id which is paas from the product Page?  */}
 const [data, setdata] = useState([]);
 const [cartBtn, setcartBtn] = useState("Add to Cart");
 
 const prodId=useParams();

  function getdata(prodId){
    // console.log(prodId)
    axios.get(`https://fakestoreapi.com/products/${prodId.id}`).then((res)=>{
        setdata(res.data)
  })
  }
 useEffect(()=>{
 getdata(prodId)
 },[prodId])

// we need to store useDispatch in a variable
const dispatch=useDispatch()

const handleCart=(data)=>{
    console.log(data)
if(cartBtn==="Add to Cart"){
    dispatch(addItem(data))
  
}
else{
    dispatch(addItem(data))
    setcartBtn("Add to Cart")
}
}

    return (
        <>
<div style={{border:"1px solid black",width:"80%",margin:"auto",backgroundColor:"white",marginTop:"4%"}}>
<div style={{display:"flex",marginTop:"4%"}}>
<div className="img-div">
<img width={'100%'} height="80%" src={data.image} alt="productdetail img"/>
</div>

<div className="col-md-6 mt-2" style={{marginLeft:"20%"}}>
                 <h4 className='text-uppercase text-black-50'>{data.category}</h4>
                 <h3 className='display-7'>{data.title}</h3>
                <p className='lead fw-bolder'>
                    Rating {data.rating && data.rating.rate}
                    <i className='fa fa-star'></i>
                </p>
                 <h3 > ${data.price}</h3>
                 <p className='lead'>{data.description}</p>
                 <div className='buttons d-flex justify-content-center mb-3 pb-2'>
     <button className='btn btn-outline-primary me-3'onClick={()=>handleCart(data)}>{cartBtn}</button>
     <Link to="/cart" className='btn btn-outline-primary me-3'>Goto-Cart-Page</Link>
     </div>
             </div>

</div>






</div>
        </>

    // {/* <div className="container mt-5">
    //     <div className="row">
    //         <div className="col-md-6 d-flex justify-content-center mx-auto">
    //             <img  width={'50%'} src={data.image} alt="productdetail img"/>
    //         </div>
    //         <div className="col-md-6 mt-4">
    //             <h1>{data.title}</h1>
    //             <hr/>
    //               <p>{data.description}</p>
    //             <h3> ${data.price}</h3>
              
    //             <button onClick={()=>handleCart(data)} className='btn btn-outline-primary mt-4 my-5'>{cartBtn}</button>
    //             <Link to="/cart" className='btn btn-outline-primary mt-4 my-5'> Goto-Cart-Page</Link>
    //         </div>
    //     </div>
    // </div> */}





    

  );
}

export default ProductDetail;

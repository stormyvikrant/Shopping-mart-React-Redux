// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';



// function Products() {
// const [data, setData] = useState([]);

// function getdata(){
//   axios.get('https://fakestoreapi.com/products').then((res)=>{
//     setData(res.data)
//     console.log(res)
//   })
// }
// useEffect(() => {
// getdata()
// }, []);



//   return (
//     <div>
//       <div className="container py-5">
//         <div className="row">
//           <div className="col-12 text-center">
//             <h1>Latest Products</h1>
//             <hr/>
//           </div>
//         </div>
//         <div className="container">
//           <div className="row">

//      
//             {
//               data.map((el)=>(
//                 <div className="card  mb-5 ms-4 "  key={el.id}style={{width: "18rem",height:"29rem"}}>
//                 <img height={'50%'} src={el.image} className="card-img-top" alt="{item.title}"/>
//                 <div className="card-body text-center">
//                   <h5 className="card-title " >{el.title}</h5>
//                   <p className='lead'>${el.price}</p>
//                 </div>
//                 <Link to={`/products/${el.id}`} class="btn btn-primary">Buy Now</Link>
//               </div>
//               ))
//             }

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Products;


import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

function Products() {
const [data, setdata] = useState([]);
const [filter, setfilter] = useState(data);
const [loading, setloading] = useState(false);
const [text,settext]=useState("sort-By-Desc")
let componentMounted=true;

const getProducts=async()=>{
setloading(true)
const res= await fetch(`https://fakestoreapi.com/products?_sort=${'desc'}`);
if(componentMounted){
  setdata(await res.clone().json())
  setfilter(await res.json())
  setloading(false)
  console.log(filter)
}
return ()=>{
  componentMounted=false
}
}

useEffect(()=>{
  getProducts()
},[])


const Loading=()=>{
  return(
  <h3>loading.......</h3>
  )

  
}

const filterProduct=(cat)=>{

const updateList=data.filter((x)=>x.category===cat);
// const newsortlist=updateList.sort((a,b)=>a.price-b.price)
// setfilter(updateList)
setfilter(updateList)
}

const sortProduct=(data)=>{

  if (text === "sort-By-Asc") {
    const sortASCproducts=data.sort((a,b)=>a.price-b.price)
    settext("sort-By-Desc")
    setfilter(sortASCproducts)
  } else if(text==="sort-By-Desc"){

    const sortDESCproducts=data.sort((a,b)=>b.price-a.price)
    settext("sort-By-Asc")
    setfilter(sortDESCproducts)
  }




}
const ShowProducts=()=>{
  return(
    <div>
    <div className='buttons d-flex justify-content-center mb-5 pb-5'>
     <button className='btn btn-outline-dark me-3'onClick={()=>setfilter(data)}>All</button>
     <button className='btn btn-outline-dark me-3' onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
     <button className='btn btn-outline-dark me-3' onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
     <button className='btn btn-outline-dark me-3' onClick={()=>filterProduct("jewelery")}>Jewelery</button>
     <button className='btn btn-outline-dark me-3 ' onClick={()=>filterProduct("electronics")}>Electronics</button>
     <button className='btn btn-outline-dark ' onClick={()=>sortProduct(data)}>{text}</button>
  
    </div>
    
    <div className="container">
           <div className="row">
            {
               filter.map((el)=>(
               
                <div className="card  mb-4 ms-3 "  key={el.id}style={{width: "18rem",height:"29rem"}}>
                                 <img height={'50%'} src={el.image} className="card-img-top" alt="{item.title}"/>
                                 <div className="card-body text-center">
                                   <h5 className="card-title " >{el.title}</h5>
                                   <p className='lead'>${el.price}</p>
                                 </div>
                                 <Link to={`/products/${el.id}`} className="btn btn-primary">Buy Now</Link>
                               </div>

               
               ))
             }
</div>
 </div>



 

</div>
  )

}






  return (
    <div>
      <div className="container my-5 py-5 mt-0" >
         <div className="row">
           <div className="col-12  mb-5 text-center">
             <h1>Latest Products</h1>
             <hr/>
           </div>
         </div>
          <div className="row justify-content-center">
            {loading?<Loading/>:<ShowProducts/>}
          </div>
       </div>
    </div>
  );
}

export default Products;








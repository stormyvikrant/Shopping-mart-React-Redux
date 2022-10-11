import React from 'react';
import { Route, Routes} from 'react-router-dom';
import About from '../Pages/About';
import Cart from '../Pages/Cart';
import CheckoutPage from '../Pages/CheckoutPage';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import ProductDetail from '../Pages/ProductDetail';
import Products from '../Pages/Products';
// import SignUp from '../Pages/SignUp';
import Signup1 from '../Pages/Signup1';
import PrivateRoute from '../Context/PrivateRoute';
import Payment from '../Pages/Payment';
function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/product" element={<Products/>}></Route>
        <Route path="/products/:id" element={<PrivateRoute><ProductDetail/></PrivateRoute>}></Route>
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        {/* <Route path="/signup" element={<SignUp/>}></Route> */}
        <Route path="/signup" element={<Signup1/>}></Route>
        <Route path="/checkout" element={<CheckoutPage/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
        
      </Routes>
    </div>
  );
}

export default Allroutes;

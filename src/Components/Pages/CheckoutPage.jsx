import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';


function CheckoutPage() {
const state=useSelector((state)=>state.addItems)

const navigate=useNavigate()

var total=0
const itemslist=(items)=>{
    total=total+items.price
    return(
        <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{items.title}</h6>
       
        </div>
        <span className="text-muted">${items.price}</span>
      </li>
    )
}

const handlesubmit=()=>{
 
  navigate("/payment")
}
  return (
<div style={{width:"90%",margin:"auto",marginTop:"4%",backgroundColor:"whitesmoke"}} >
<div className="row g-5" style={{width:"90%",margin:"auto",border:"1px solid gray"}}>
      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">{state.length}</span>
        </h4>
        <ul className="list-group mb-3">
           
            {/* //map function  */}
         {state.map(itemslist)}
        
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${total}</strong>
          </li>
        </ul>
<button onClick={handlesubmit} >Proceed to payemnt</button>
      </div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" novalidate="">
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label for="username" className="form-label">Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="username" placeholder="Username" required=""/>
              <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="col-12">
              <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-12">
              <label for="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
            </div>

            <div className="col-md-5">
              <label for="country" className="form-label">Country</label>
              <select className="form-select" id="country" required="">
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div className="col-md-4">
              <label for="state" className="form-label">State</label>
              <select className="form-select" id="state" required="">
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className="col-md-3">
              <label for="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="zip" placeholder="" required=""/>
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr className="my-4"/>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="same-address"/>
            <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="save-info"/>
            <label className="form-check-label" for="save-info">Save this information for next time</label>
          </div>

          <hr className="my-4"/>

          <h4 className="mb-3">Payment</h4>

          <div className="my-3">
            <div className="form-check">
              <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required=""/>
              <label className="form-check-label" for="credit">Credit card</label>
            </div>
            <div className="form-check">
              <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required=""/>
              <label className="form-check-label" for="debit">Debit card</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required=""/>
              <label className="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-md-6">
              <label for="cc-name" className="form-label">Name on card</label>
              <input type="text" className="form-control" id="cc-name" placeholder="" required=""/>
              <small className="text-muted">Full name as displayed on card</small>
              <div className="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div className="col-md-6">
              <label for="cc-number" className="form-label">Credit card number</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" required=""/>
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-expiration" className="form-label">Expiration</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""/>
              <div className="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div className="col-md-3">
              <label for="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" required=""/>
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr className="my-4"/>
        </form>
        <button  onClick={handlesubmit}>Proceed to Payment</button>
      
      </div>
    </div>



    </div>


  );
}

export default CheckoutPage;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import "font-awesome/css/font-awesome.min.css";
import store from './Components/Redux/Store';
import { Provider } from 'react-redux';
import { AuthContextProvider } from './Components/Context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
      <BrowserRouter>
  <Provider store={store}>
       <App />
  </Provider>
 
  </BrowserRouter>
  </AuthContextProvider>

)
reportWebVitals();

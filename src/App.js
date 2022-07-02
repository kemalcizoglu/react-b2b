import React from 'react';
import {
  Routes,
  Route,
  useLocation,
  Navigate
} from "react-router-dom";

import { getToken, getAdminToken } from './helpers/useToken';

import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import AdminLogin from './Pages/AdminLogin';
import LogOut from './Pages/LogOut';
import Category from './Pages/Category';
import Cart from './Pages/Cart';
import CheckOut from './Pages/CheckOut';
import CheckOutSuccess from './Pages/CheckOutSuccess';
import AdminDashboard from './Pages/AdminDashboard';


const IsAuth = ({ children }) => {
  const token = getToken();
  let location = useLocation();
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}


const IsAdminAuth = ({ children }) => {
  const token = getAdminToken();
  let location = useLocation();
  if (!token) {
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }
  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<IsAuth><Home /></IsAuth>} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<IsAdminAuth><AdminDashboard /></IsAdminAuth>} />
      <Route
        path="/about"
        element={<IsAuth>
          <About />
        </IsAuth>} />
        <Route path="/logout" element={<LogOut />} />
      <Route path="/category/:categoryId" element={<IsAuth><Category /></IsAuth>} />
      <Route path="/cart" element={<IsAuth><Cart /></IsAuth>} />
      <Route path="/checkout" element={<IsAuth><CheckOut /></IsAuth>} />
      <Route path="/checkout/success" element={<IsAuth><CheckOutSuccess /></IsAuth>} />
    </Routes>
  );
}

export default App;

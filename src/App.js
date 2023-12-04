import Basket from "./pages/Basket";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

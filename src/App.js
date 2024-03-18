import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Products from "./Components/Products";
import SingleProduct from "./Components/SingleProduct";
import Footer from "./Components/Footer";
import AddCart from "./Components/AddCart";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
        <Route path="/addcart" element={<AddCart />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;

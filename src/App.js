import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import "./interceptors/axios";
import ScrollToTop from "./ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Shop from "./components/Shop";
import Register from "./components/Register";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        {/* Header */}
        <div className="sticky top-0 bg-white z-50">
          <Header />
          <hr className="mt-2" />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* Footer */}
        <div className="mt-20">
          <hr className="mt-2" />
          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;

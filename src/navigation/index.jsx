import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Register from "../pages/Register";
import PaymentSuccess from "../pages/PaymentSuccess";
import Header from "../components/Header";

const Navigation = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Cart />} />
            <Route path="/" element={<Login />} />
            <Route path="/" element={<Menu />} />
            <Route path="/" element={<Register />} />
            <Route path="/" element={<PaymentSuccess />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Navigation
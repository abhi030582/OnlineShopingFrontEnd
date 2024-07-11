import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Login from "../pages/login";

const RouterPage = (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
    </Routes>
);
export default RouterPage;
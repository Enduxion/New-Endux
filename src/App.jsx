import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import Cursor from "./components/Cursor/Cursor";

export default function App() {
    const [current, setCurrent] = useState('');

    return (
        <BrowserRouter>
            <NavBar current={current} />
            <Cursor key={current} />
            <Routes>
                <Route path="/" element={<Home setCurrent={setCurrent} />} />
                <Route path="/about" element={<About setCurrent={setCurrent} />} />
                <Route path="/contact" element={<Contact setCurrent={setCurrent} />} />
            </Routes>
        </BrowserRouter>
    );
}
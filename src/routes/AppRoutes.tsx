import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Projects from "../pages/projects";
import About from "../pages/about";
import NotFound from "../pages/notfound";
import Services from "../pages/services";

export const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);
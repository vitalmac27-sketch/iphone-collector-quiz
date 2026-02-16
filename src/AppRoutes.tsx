import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IPhone17ProMax from "./pages/IPhone17ProMax";
import IPhone17Pro from "./pages/IPhone17Pro";
import IPhone17Air from "./pages/IPhone17Air";
import IPhone17 from "./pages/IPhone17";
import IPhone16ProMax from "./pages/IPhone16ProMax";
import IPhone16Pro from "./pages/IPhone16Pro";
import IPhone16 from "./pages/IPhone16";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/iphone-17-pro-max" element={<IPhone17ProMax />} />
    <Route path="/iphone-17-pro" element={<IPhone17Pro />} />
    <Route path="/iphone-17-air" element={<IPhone17Air />} />
    <Route path="/iphone-17" element={<IPhone17 />} />
    <Route path="/iphone-16-pro-max" element={<IPhone16ProMax />} />
    <Route path="/iphone-16-pro" element={<IPhone16Pro />} />
    <Route path="/iphone-16" element={<IPhone16 />} />
    <Route path="/about" element={<About />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;

export const ALL_ROUTES = [
  "/",
  "/iphone-17-pro-max",
  "/iphone-17-pro",
  "/iphone-17-air",
  "/iphone-17",
  "/iphone-16-pro-max",
  "/iphone-16-pro",
  "/iphone-16",
  "/about",
  "/contacts",
];

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

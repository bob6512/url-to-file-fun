import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Agents from "./pages/Agents";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Calculators from "./pages/Calculators";
import BondCalculator from "./pages/BondCalculator";
import AffordabilityCalculator from "./pages/AffordabilityCalculator";
import TransferDutyCalculator from "./pages/TransferDutyCalculator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/calculators/bond" element={<BondCalculator />} />
          <Route path="/calculators/affordability" element={<AffordabilityCalculator />} />
          <Route path="/calculators/transfer-duty" element={<TransferDutyCalculator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

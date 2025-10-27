import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import QuickQuote from "./pages/QuickQuote";
import Programs from "./pages/Programs";
import Docs from "./pages/Docs";
// Agent Screen Implementation for future use
// import Agents from './pages/Agents';
import Summary from "./pages/Summary";
import UnderwritingGuidelines from "./pages/UnderwritingGuidelines";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/dashboard"
            element={
              <AppLayout>
                <Dashboard />
              </AppLayout>
            }
          />
          <Route
            path="/quickquote"
            element={
              <AppLayout>
                <QuickQuote />
              </AppLayout>
            }
          />
          <Route
            path="/programs"
            element={
              <AppLayout>
                <Programs />
              </AppLayout>
            }
          />
          <Route
            path="/docs"
            element={
              <AppLayout>
                <Docs />
              </AppLayout>
            }
          />
          {/* Agent Screen Implementation for future use */}
          {/* <Route path="/agents" element={<AppLayout><Agents /></AppLayout>} /> */}
          <Route
            path="/summary"
            element={
              <AppLayout>
                <Summary />
              </AppLayout>
            }
          />
          <Route
            path="/guidelines"
            element={
              <AppLayout>
                <UnderwritingGuidelines />
              </AppLayout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

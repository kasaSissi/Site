import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CozinhaInfantil from "./pages/CozinhaInfantil";
import MesaInfantil from "./pages/MesaInfantil";
import PrateleirasMDF from "./pages/PrateleirasMDF";
import MoveisGatos from "./pages/MoveisGatos";
import CaminhaGato from "./pages/CaminhaGato";
import BancadaInfantil from "./pages/BancadaInfantil";
import QuartoInfantil from "./pages/QuartoInfantil";
import WhatsAppButton from "./components/WhatsAppButton";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/galeria"} component={Gallery} />
      <Route path={"/sobre"} component={About} />
      <Route path={"/contato"} component={Contact} />
      <Route path={"/cozinha-infantil-mdf"} component={CozinhaInfantil} />
      <Route path={"/mesa-infantil-mdf"} component={MesaInfantil} />
      <Route path={"/prateleiras-mdf"} component={PrateleirasMDF} />
      <Route path={"/moveis-para-gatos-mdf"} component={MoveisGatos} />
      <Route path={"/caminha-para-gato-mdf"} component={CaminhaGato} />
      <Route path={"/bancada-infantil-mdf"} component={BancadaInfantil} />
      <Route path={"/quarto-infantil-mdf"} component={QuartoInfantil} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <WhatsAppButton />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

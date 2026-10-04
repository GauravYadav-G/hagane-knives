import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Ledger from "./components/Ledger";
import Process from "./components/Process";
import Makers from "./components/Makers";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function Hagane() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Ledger />
        <Process />
        <Makers />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

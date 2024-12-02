import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Header/Navbar';
import ProblemSection from './components/Problem/ProblemSection';
import ServiceSection from './components/Service/ServiceSection';
import SolutionSection from './components/Solution/SolutionSection';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ServiceSection />
      <Footer />
    </div>
  );
}

export default App;
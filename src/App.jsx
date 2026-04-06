import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import Resume from './components/sections/Resume';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full max-w-full overflow-x-hidden relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Resume />
          <Certificates />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

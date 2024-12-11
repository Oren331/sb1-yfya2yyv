import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Portfolio />
      <Services />
      <Pricing />
      <About />
      <Contact />
    </div>
  );
}

export default App;
import { React } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <Hero />
        <Services />
        <WhyChooseUs />
        <Contact />
        <Form />
        <Footer />
      </div>
    </>
  )
}

export default App

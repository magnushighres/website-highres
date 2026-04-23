import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('/content.json')
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((err) => console.error("Could not load content.json:", err));
  }, []);

  if (!content) {
    return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050505', color: '#fff' }}>Laster inn...</div>;
  }

  return (
    <div className="app-container">
      <Navbar data={content.navbar} />
      <Hero data={content.hero} />
      <Portfolio data={content.portfolio} />
      <About data={content.about} />
      <Contact data={content.contact} />
      <Footer data={content.footer} />
    </div>
  );
}

export default App;

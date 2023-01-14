import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Header/>
      <main>
        <About />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;

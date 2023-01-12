import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation'
import About from './components/About'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navigation />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Header/>
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;

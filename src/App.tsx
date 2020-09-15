import React from 'react';
import './App.scss';
import { Header } from './components/header';
import { Footer } from './components/footer';

function App() {
  return (
    <>
      <Header userFirstName='Aleksandr' 
        userLastName='Rudin' />
      <Footer />
    </>
  );
}

export default App;

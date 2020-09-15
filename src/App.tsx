import React from 'react';
import './App.scss';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Breadcrumbs } from './components/breadcrumbs';

function App() {
  return (
    <>
      <Header userFirstName='Aleksandr' 
        userLastName='Rudin' />
      <Breadcrumbs />
      <Footer />
    </>
  );
}

export default App;

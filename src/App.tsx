import React from 'react';
import './App.scss';
import { Header, Footer, Breadcrumbs } from './components';
import { Courses } from './pages/courses';

function App() {
  return (
    <>
      <Header userFirstName='Aleksandr' 
        userLastName='Rudin' />
      <Breadcrumbs />
      <Courses />
      <Footer />
    </>
  );
}

export default App;

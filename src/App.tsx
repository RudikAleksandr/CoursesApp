import React from 'react';
import './App.scss';
import { Header, Footer, Breadcrumbs } from './components';
import { Courses } from './pages/courses';

function App() {
  return (
    <>
      <Header userFirstName='Aleksandr' 
        userLastName='Rudin' />
      <main>
        <Breadcrumbs />
        <div className="content-min-height content-padding">
          <Courses />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

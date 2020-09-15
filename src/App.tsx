import React from 'react';
import './App.scss';
import {Header} from './components/header';

function App() {
  return (
    <>
      <Header 
        userFirstName='Aleksandr' 
        userLastName='Rudin' 
      />
    </>
  );
}

export default App;

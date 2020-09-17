import React from 'react';
import './App.scss';
import { Header, Footer, Breadcrumbs } from './components';
import { Courses } from './pages/courses';
import { EditCourse } from './pages/editCourse';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

function App() {
  return (
    <>
      <Header userFirstName='Aleksandr'
        userLastName='Rudin' />
      <main>
        <Breadcrumbs />
        <div className="content-min-height content-padding">
          <Router>
            <Switch>
              <Route exact path="/" component={Courses} />
              <Route path="/course/:id" component={EditCourse} />
            </Switch>
          </Router>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Widkt from './components/Widkt';
import Aop from './components/Aop';
import Demos from './components/Demos';
import About from './components/About';
import Contact from './components/Contact';
import Pdfs from './components/Pdfs';
import Footer from './components/Footer';
import Endorsements from './components/Endorsements';
import './App.scss';

export default () => {
  const [path, setPath] = useState('');

  return <div className='App'>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header path={path} setPath={setPath} />
      <Route exact path='/' component={() => <Home setPath={setPath} />} />
      <Route exact path='/widkt' component={() => <Widkt setPath={setPath} />} />
      <Route exact path='/aop' component={() => <Aop setPath={setPath} />} />
      <Route exact path='/demos' component={Demos} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/pdfs' component={Pdfs} />
      <Route exact path='/endorsements' component={Endorsements} />
      <Footer setPath={setPath} />
    </BrowserRouter>
  </div>
}

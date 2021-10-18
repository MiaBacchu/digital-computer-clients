import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Branches from './components/branches/Branches'
import Schedule from './components/schedule/Schedule';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Switch>
    <Route exact path='/'>
        <Banner></Banner>
        <Services></Services>
        <Schedule></Schedule>
        <Branches></Branches>
      </Route>
      <Route path='/home'>
        <Banner></Banner>
        <Services></Services>
        <Schedule></Schedule>
        <Branches></Branches>
      </Route>
      <Route path='/about'>
        <About></About>
      </Route>
      <Route path='/contact'>
        <Contact></Contact>
      </Route>
      <Route path='*'>
        <NotFound></NotFound>
      </Route>
    </Switch>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

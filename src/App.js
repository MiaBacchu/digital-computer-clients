import { Row } from 'react-bootstrap';
import { BrowserRouter ,Switch ,Route} from 'react-router-dom';
import About from './about/About';
import './App.css';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Header from './header/Header';
import Home from './home/Home';
import NotFound from './notfound/NotFound';
import Services from './services/Services';

function App() {
  return (
      <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route exact path='/'>
      <Row><Home></Home></Row>
      </Route>
      <Route path='/home'>
      <Row><Home></Home></Row>
      </Route>
      <Route path='/services'>
      <Row><Services></Services></Row>
      </Route>
      <Route path='/about'>
        <About></About>
      </Route>
      <Route path='/contact'>
        <Contact></Contact>
      </Route>
      <Route path='/*'>
        <NotFound></NotFound>
      </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
  );
}

export default App;

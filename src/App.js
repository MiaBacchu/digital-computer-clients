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
  const homeStyle = {
    display: 'flex',justifyContent: 'center'};
const servicesStyle = {
  display: 'grid',gridTemplateColumns: 'repeat(3, 1fr)'};
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route exact path='/'>
      <div style={homeStyle}><Home></Home></div>
      </Route>
      <Route path='/home'>
      <div style={homeStyle}><Home></Home></div>
      </Route>
      <Route path='/services'>
        <div style={servicesStyle}><Services></Services></div>
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
    </div>
  );
}

export default App;

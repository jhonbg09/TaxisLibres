
import './App.css';
//Components
import Nav from './components/Nav/Nav.jsx';
import Banner from './components/Banner/Banner.jsx'
import Presentation from './components/Presentation/Presentation.jsx';
import Benefits from './components/Benefits/Benefits.jsx'
import Form from './components/Form/Form.jsx'
import Footer from './components/Footer/Footer.jsx'



function App() {
  return (
    <div className="App">
      <Nav/>  
      <Banner/>     
      <Presentation/>
      <Benefits/>
      <Form/>
      <Footer/> 
    </div>
  );
}

export default App;

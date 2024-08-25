import './App.css';
import Navbar from './Nav';
import Slider from './Slider';
import Reviews from "./Rev";
import Benefits from "./Benefits"
import Recent from './Recent';
import Scope from './Scope';
import Slider2 from './Slider2';
import Pricing from './Pricing';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Reviews/>
      <Slider/>
      <Benefits/>
      <Recent/>
      <Scope/>
      <Slider2/>
      <Pricing/>
      <> 
    
     
        <h2 id="faq">
          Hi I'm FAQ
        </h2>
      </>
    </div>

  );
}

export default App;


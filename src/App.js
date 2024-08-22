import './App.css';
import Navbar from './Nav';
import Slider from './Slider';
import Reviews from "./Rev";
import Benefits from "./Benefits"

function App() {
  return (
    <div className="App" id='top'>
      <Navbar />
      <Reviews/>
      <Slider/>
      <Benefits/>
      <> 
      
        <h2 id="recentWork">
          Hi I'm Recent Work
        </h2>

        <h2 id="scope">
          Hi I'm Scope
        </h2>
        <h2 id="pricing">
          Hi I'm Pricing
        </h2>
        <h2 id="faq">
          Hi I'm FAQ
        </h2>
      </>
    </div>

  );
}

export default App;


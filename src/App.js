
import './App.css';
import FirstComponent from './components/FirstComponent';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import ShortCircuitEvaluation from './components/ShortCircuitEvaluation';
import HideordShowComponent from './components/HideordShowComponent';
import DM from './components/DM';
import ControlledInput from './components/ControlledInput';
import Scroll from './components/Scroll';
import Index from './components/Index';



function App() {


  
  return (
    <div className='App'>
      <FirstComponent />
      <ShortCircuitEvaluation />
      <FetchData/>
      <Counter />
      <HideordShowComponent />
      <DM/>
      <ControlledInput/>
      {/* <Scroll/> */}
      <Index/>
      
    </div>
  );
}


export default App;

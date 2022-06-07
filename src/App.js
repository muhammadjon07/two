import BasicCard from './Components/Card';
import ResponsiveAppBar from './Components/Navbar';
import './App.css'
import SimplePaper from './Components/BoxCard';
import Coments from './Components/BigCard';
import SimplePaper2 from './Components/BoxCard2';
import SimplePaper3 from './Components/TextComponent';


function App() {
  return (
    <div>
      <div className="back">
      <ResponsiveAppBar/>
      <BasicCard/>
      <SimplePaper/>
      </div>
      <Coments/>
      <div className="back2">
        <SimplePaper2/>
      </div>
      <SimplePaper3/>
      
      
    </div>
  );
}

export default App;

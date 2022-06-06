import './App.css';
import {Card} from './Components/card';
import {Bar} from './Components/bar'; 
import {Subject} from './Components/subject'; 
 
function App() {
  return (
    <div class="APP">
      <Subject />
      <div class="bars">
        <Bar/>
        <Bar/>
        <Bar/>
      </div>
      <div class="connector"></div>
      <Card/>
    </div>
  );
}

export default App;

import './App.css';

import Background1 from './assets/images/background1.png';
import Background2 from './assets/images/background2.png';
import Background3 from './assets/images/background3.png';
import Background4 from './assets/images/background4.png';

function App() {
  return (
      <div className="App">
        <img src={Background1} alt="" />
        <img src={Background2} alt="" />
        <img src={Background3} alt="" />
        <img src={Background4} alt="" />
      </div>
  );
}

export default App;

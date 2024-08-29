import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextControlsExample from './components/create'
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div class="Content">
      <TextControlsExample/>
      </div>
    </div>
  );
}

export default App;

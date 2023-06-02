import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import DetailCsv from './components/DetailCsv';
import { DataContextProvider } from './DataContext';

function App() {
  return (
    <div className="App">
      
      <DataContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/detail' element={<DetailCsv />} />
        </Routes>
      </Router>
      
      </DataContextProvider>

    </div>
  );
}

export default App;

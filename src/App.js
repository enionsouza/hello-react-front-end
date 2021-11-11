import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Greeting from './components/Greeting';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<h1 className="centralize">Home</h1>} />
        <Route path="/greetings" element={<Greeting />} />
      </Routes>
    </Router>
  );
}

export default App;

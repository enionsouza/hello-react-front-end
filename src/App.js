import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<h1 className="centralize">Home</h1>} />
        <Route
          path="/greetings"
          element={<h1 className="centralize">Greeting</h1>}
        />
      </Routes>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Homepage from './components/Homepage';
import Details from './components/Details';
import Nav from './components/Nav';

const App = () => (
  <Router>
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<Details />} />
      </Routes>
    </>
  </Router>
);

export default App;

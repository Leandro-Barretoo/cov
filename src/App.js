import {
  Routes,
  Route,
} from 'react-router-dom';
import Homepage from './components/Homepage';
import Details from './components/Details';
import Nav from './components/Nav';

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/*" element={<Details />} />
    </Routes>
  </>
);

export default App;

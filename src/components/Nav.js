import { Link } from 'react-router-dom';
import logo from '../assets/Covid.png';
import './Nav.css';

const Nav = () => (
  <>
    <div className="Navigation">
      <span className="Logo"><Link to="/" className="Link">CoronaWide</Link></span>
    </div>
    <div className="Slogan-Cont">
      <img className="Logo" src={logo} alt="covid logo" />
      <span className="Slogan">
        World&apos;s CoronaVirus Statistics
      </span>
    </div>
  </>
);

export default Nav;

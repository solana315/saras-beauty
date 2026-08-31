import '../App.css';
import { Link } from 'react-router-dom';
import LogoHorizontal from '../assets/LogoHorizontal.png';

function Topbar() {
  return (
    <div className="topbar">
      <div className="container d-flex align-items-center justify-content-between">

        <div className="d-flex gap-4">
          <Link to="/saras-beauty-store" className="nav-link">Store</Link>
          <a href="#" className="nav-link">Tutorials</a>
        </div>

        <Link to="/" className="brand text-center">
          <img src={LogoHorizontal} alt="Logo Sara's Beauty" />
        </Link>

        <div className="d-flex align-items-center">
          <a href="#" className="nav-link me-4">About</a>
          <a href="#" className="nav-link me-2">Contact</a>
          <a href="#" className="icon-link"><i className="fa-solid fa-magnifying-glass"></i></a>
          <a href="#" className="icon-link"><i className="fa-regular fa-heart"></i></a>
          <a href="#" className="icon-link"><i className="fa-solid fa-bag-shopping"></i></a>
        </div>

      </div>
    </div>
  );
}

export default Topbar;
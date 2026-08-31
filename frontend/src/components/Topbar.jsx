import '../App.css';
import LogoHorizontal from '../assets/LogoHorizontal.png';

function Topbar() {
  return (
    <div className="topbar">
      <div className="container d-flex align-items-center justify-content-between">

        <div className="d-flex gap-4">
          <a href="#" className="nav-link">Store</a>
          <a href="#" className="nav-link">Tutorials</a>
        </div>

        <a href="#" className="brand text-center">
          <img src={LogoHorizontal} alt="Logo Sara's Beauty" />
        </a>

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
function Footer() {
  return (
    <footer className="footer text-light py-5">
      <div className="container">
        <p className="footer-brand text-center">SARA'S BEAUTY</p>
        <div className="footer-cols row gx-4 gy-4 text-start">
          <div className="col-12 col-md-4">
            <h6>Shop</h6>
            <a href="#">MakeUp</a>
            <a href="#">Skincare</a>
            <a href="#">New Arrivals</a>
          </div>
          <div className="col-12 col-md-4">
            <h6>About</h6>
            <a href="#">The Brand</a>
            <a href="#">Contact</a>
            <a href="#">Tutorials</a>
          </div>
          <div className="col-12 col-md-4 footer-newsletter">
            <h6>Stay Updated</h6>
            <div className="input-group mt-3">
              <input
                type="email"
                className="form-control bg-transparent border-bottom border-white border-0 rounded-0 text-white"
                placeholder="Your email"
              />
              <button className="btn btn-outline-light rounded-0" type="button">→</button>
            </div>
          </div>
        </div>
        <p className="footer-copy text-center mt-4">© 2026 Sara's Beauty. Every right is reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
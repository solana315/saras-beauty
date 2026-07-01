function Footer() {
  return (
    <footer className="footer text-light py-5">
      <div className="container">
        <p className="footer-brand text-center">SARA'S BEAUTY</p>
        <div className="footer-cols row gx-4 gy-4 text-start">
          <div className="col-12 col-md-4">
            <h6>Loja</h6>
            <a href="#">Maquilhagem</a>
            <a href="#">Skincare</a>
            <a href="#">Novidades</a>
          </div>
          <div className="col-12 col-md-4">
            <h6>Sobre</h6>
            <a href="#">A marca</a>
            <a href="#">Contacto</a>
            <a href="#">Tutoriais</a>
          </div>
          <div className="col-12 col-md-4 footer-newsletter">
            <h6>Fica a par das novidades</h6>
            <div className="input-group mt-3">
              <input
                type="email"
                className="form-control bg-transparent border-bottom border-white border-0 rounded-0 text-white"
                placeholder="O teu email"
              />
              <button className="btn btn-outline-light rounded-0" type="button">→</button>
            </div>
          </div>
        </div>
        <p className="footer-copy text-center mt-4">© 2026 Sara's Beauty. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
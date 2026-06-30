function Footer() {
  return (
    <footer className="footer">
      <p className="footer-brand">SARA'S BEAUTY</p>
      <div className="footer-cols container">
        <div>
          <h6>Loja</h6>
          <a href="#">Maquilhagem</a>
          <a href="#">Skincare</a>
          <a href="#">Novidades</a>
        </div>
        <div>
          <h6>Sobre</h6>
          <a href="#">A marca</a>
          <a href="#">Contacto</a>
          <a href="#">Tutoriais</a>
        </div>
        <div className="footer-newsletter">
          <h6>Fica a par das novidades</h6>
          <div className="newsletter-input">
            <input type="email" placeholder="O teu email" />
            <button>→</button>
          </div>
        </div>
      </div>
      <p className="footer-copy">© 2026 Sara's Beauty. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
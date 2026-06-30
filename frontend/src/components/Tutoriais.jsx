import '../App.css';
function Tutoriais() {
  const tutoriais = [
    { title: 'Maquilhagem de Dia em 5 Min', desc: 'Look natural para o dia a dia' },
    { title: 'O Olhar Smokey Perfeito', desc: 'Passo a passo para uma noite especial' },
    { title: 'Pele de Vidro em Casa', desc: 'Rotina de skincare para um glow real' },
  ];

  return (
    <section className="container section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Aprende connosco</p>
          <h2 className="section-title">Tutoriais</h2>
        </div>
        <a href="#" className="link-ver-tudo">Ver tudo →</a>
      </div>

      <div className="row g-4">
        {tutoriais.map((t) => (
          <div className="col-12 col-md-4" key={t.title}>
            <div className="tutorial-card">
              <div className="tutorial-img" />
              <p className="tutorial-title">{t.title}</p>
              <p className="tutorial-desc">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tutoriais;
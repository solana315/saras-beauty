import '../App.css';
function StoryBanner() {
  return (
    <section className="story-banner">
      <div className="story-img" />
      <div className="story-content">
        <p className="eyebrow eyebrow-light">A nossa missão</p>
        <h2 className="story-title">Beleza que conta<br />a tua história</h2>
        <p className="story-text">
          Produtos pensados para realçar quem és, sem máscaras — só a tua versão mais autêntica.
        </p>
        <a href="#" className="btn-outline-light">Descobrir a marca</a>
      </div>
    </section>
  );
}

export default StoryBanner;

import '../App.css';
import minmakeup from '../assets/minmakeup.jpg';
import smokeyEye from '../assets/smokeyEye.jpeg';
import GlassSkin from '../assets/GlassSkin.jpeg';

function Tutoriais() {
  const tutoriais = [
    {
      title: 'Maquilhagem de Dia em 5 Min',
      desc: 'Look natural para o dia a dia',
      img: minmakeup,
      link: 'https://www.youtube.com/watch?v=2wfCX9P7NVM'
    },
    {
      title: 'Perfect Smokey Eyes',
      desc: 'Step by step for a special night out',
      img: smokeyEye,
      link: 'https://www.youtube.com/watch?v=VMVoxmO0xDk'
    },
    {
      title: 'Skin Glass At Home',
      desc: 'Skin care routine for a real skin glow',
      img: GlassSkin,
      link: 'https://www.sephora.pt/ideias-inspiracao/skin-glass-rotina.html'
    },
  ];

  return (
    <section className="container section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Learn with us</p>
          <h2 className="section-title">Tutorials</h2>
        </div>

        <a
          href="https://www.youtube.com/watch?v=GbZaOwh610U"
          className="link-ver-tudo"
          target="_blank"
          rel="noopener noreferrer"
        >
          See All →
        </a>
      </div>

      <div className="row g-4">
        {tutoriais.map((t) => (
          <div className="col-12 col-md-4" key={t.title}>
            <a
              href={t.link}
              target="_blank"
              rel="noopener noreferrer"
              className="tutorial-card"
            >
              <div className="tutorial-img">
                <img
                  src={t.img}
                  alt={t.title}
                  className="product-img-inner"
                />
              </div>

              <p className="tutorial-title">{t.title}</p>
              <p className="tutorial-desc">{t.desc}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tutoriais;

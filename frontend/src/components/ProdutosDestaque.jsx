import '../App.css';
import Paleta1 from '../assets/paleta1.jpg';
import glowhighlighter from '../assets/glowhighlighter.jpg';
import serumiluminador from '../assets/serumiluminador.jpg';
import contornocremoso from '../assets/contornocremoso.jpg';
import cremeolhos from '../assets/cremeolhos.jpg';

function ProdutosDestaque() {
  const produtos = [
    { name: 'Creamy Contour', cat: 'Face', img: contornocremoso },
    { name: 'Eye Cream', cat: 'Eyes', img: cremeolhos },
    { name: 'Glow Highlighter', cat: 'Face', img: glowhighlighter },
    { name: 'Lightning Serum', cat: 'Skincare', img: serumiluminador },
  ];

  return (
    <section id="destaques" className="container section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Selected just for you</p>
          <h2 className="section-title">Products in the spotlight</h2>
        </div>
        <a href="#" className="link-ver-tudo">See All →</a>
      </div>

      <div className="row g-4">
        {produtos.map((p) => (
          <div className="col-6 col-md-3" key={p.name}>
            <div className="product-card">
              <div className="product-img">
                {p.img && <img src={p.img} alt={p.name} className="product-img-inner" />}
              </div>
              <p className="product-name">{p.name}</p>
              <p className="product-cat">{p.cat}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProdutosDestaque;
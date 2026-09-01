import '../App.css';
import blushaveludado from '../assets/products/blushaveludado.jpg';
import lapisolhosideal from '../assets/products/lapisolhosideal.jpg';
import sombrasterrosas from '../assets/products/sombrasterrosas.jpg';

function Novidades() {
  const produtos = [
    { name: 'Soft Blush', img: blushaveludado},
    { name: 'Ideal Eye Pencil',img: lapisolhosideal },
    { name: 'Terracotta Shadows', img: sombrasterrosas},
  ];

  return (
    <section className="container section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Just Arrived</p>
          <h2 className="section-title">New Arrivals</h2>
        </div>
        <a href="#" className="link-ver-tudo">See All →</a>
      </div>

      <div className="row g-4">
        {produtos.map((p) => (
          <div className="col-12 col-md-4" key={p.name}>
            <div className="product-card product-card-lg">
              <div className="product-img product-img-lg">
                {p.img && <img src={p.img} alt={p.name} className="product-img-inner" />}
              </div>
              <p className="product-name">{p.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Novidades;
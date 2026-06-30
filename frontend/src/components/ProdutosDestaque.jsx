import '../App.css';
function ProdutosDestaque() {
  const produtos = [
    { name: 'Base Perfeita', cat: 'Rosto' },
    { name: 'Paleta Bronze', cat: 'Olhos' },
    { name: 'Glow Highlighter', cat: 'Rosto' },
    { name: 'Sérum Iluminador', cat: 'Skincare' },
  ];

  return (
    <section id="destaques" className="container section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Selecionados para ti</p>
          <h2 className="section-title">Produtos em Destaque</h2>
        </div>
        <a href="#" className="link-ver-tudo">Ver tudo →</a>
      </div>

      <div className="row g-4">
        {produtos.map((p) => (
          <div className="col-6 col-md-3" key={p.name}>
            <div className="product-card">
              <div className="product-img" />
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
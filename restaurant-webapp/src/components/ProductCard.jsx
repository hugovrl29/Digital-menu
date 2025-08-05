function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <p
        className="product-name"
        style={{fontWeight: 'bold'}}
        data-fulltext={product.name}
      >
        {product.name}
      </p>
      <p
        className="product-description"
        data-fulltext={product.description}
        style={{fontSize: '11px'}}
      >
        {product.description}
      </p>
      <h3 style={{fontSize: '14px'}}>{product.price}€</h3>
      <div className="card-actions">
        <button className="add-button" onClick={onAdd}>Ajouter +</button>
      </div>
    </div>
  );
}

export default ProductCard;

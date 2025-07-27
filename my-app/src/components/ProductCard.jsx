// src/components/ProductCard.jsx

function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p style={{fontSize: '10px'}}>{product.description}</p>
      <h3 style={{fontSize: '14px'}}>{product.price}€</h3>
      <div className="card-actions">
        <button onClick={onAdd}>Ajouter</button>
      </div>
    </div>
  );
}

export default ProductCard;

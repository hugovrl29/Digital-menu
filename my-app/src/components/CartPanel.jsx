function CartPanel({ cart, onUpdateQuantity, total, onCheckout }) {
    return (
      <div className="menu-hover-panel">
        <div className="cart-content">
          <div className="cart-scroll">
            <h2 className="cart-title">Panier</h2>
            {cart.length === 0 && <p>Panier vide</p>}
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-controls">
                  <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
                </div>
                <div className="cart-item-price">€{item.price}</div>
              </div>
            ))}
          </div>
          <div className="cart-actions">
            <button className="call-button">Appeler Serveur</button>
            <div className="cart-footer">
              <div className="cart-total">Total : €{total}</div>
              <button className="checkout-button" onClick={onCheckout}>Passer la commande</button>
            </div>
          </div>
        </div>
      </div>
    );
}
  
export default CartPanel;

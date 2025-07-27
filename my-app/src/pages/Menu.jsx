import { useNavigate } from 'react-router-dom';

const categories = ['Recommandation', 'Entrées', 'Plats', 'Desserts', 'Boissons'];
const mockProducts = [
  { id: 1, name: 'Sushi', price: '€12', image: '/placeholder.jpg' },
  { id: 2, name: 'Ramen', price: '€10', image: '/placeholder.jpg' },
];

function Menu() {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex' }}>
      <aside>
        <button onClick={() => navigate('/checkout')}>Commander</button>
        <button>Appeler Serveur</button>
        <div>Panier (0)</div>
      </aside>
      <main>
        {categories.map((cat) => (
          <section key={cat}>
            <h2>{cat}</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              {mockProducts.map((p) => (
                <div key={p.id}>
                  <img src={p.image} alt={p.name} width="100" />
                  <h3>{p.name}</h3>
                  <p>{p.price}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default Menu;
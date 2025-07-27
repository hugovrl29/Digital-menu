import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavbar from '../components/TopNavbar';
import ProductCard from '../components/ProductCard';
import CartPanel from '../components/CartPanel';

const categories = [
  { name: 'Recommandation' },
  { name: 'Entrées froides' },
  { name: 'Entrées chaudes' },
  { name: 'Plats' },
  { name: 'Boissons - Soft' },
  { name: 'Boissons - Alcool' },
  { name: 'Desserts' },
];

const mockProducts = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  name: `Produit ${i + 1}`,
  price: (i + 1) * 2,
  image: '/placeholder.jpg',
  category: categories[i % categories.length].name
}));

function Menu() {
  const navigate = useNavigate();
  const [categoryIndex, setCategoryIndex] = useState(null);
  const [page, setPage] = useState(0);
  const [cart, setCart] = useState([]);

  const currentCategory = categoryIndex !== null ? categories[categoryIndex].name : null;
  const productsInCategory = mockProducts.filter(p => p.category === currentCategory);
  const paginated = productsInCategory.slice(page * 8, (page + 1) * 8);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, amount) => {
    setCart(prev =>
      prev
        .map(item => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
        .filter(item => item.quantity > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const next = () => {
    if (categoryIndex === null) return;
    if ((page + 1) * 8 >= productsInCategory.length) {
      if (categoryIndex + 1 < categories.length) {
        setCategoryIndex(categoryIndex + 1);
        setPage(0);
      }
    } else {
      setPage(page + 1);
    }
  };

  const prev = () => {
    if (categoryIndex === null) return;
    if (page === 0) {
      if (categoryIndex > 0) {
        const newIndex = categoryIndex - 1;
        setCategoryIndex(newIndex);
        const prevCat = categories[newIndex].name;
        const count = mockProducts.filter(p => p.category === prevCat).length;
        setPage(Math.floor((count - 1) / 8));
      }
    } else {
      setPage(page - 1);
    }
  };

  return (
    <div className="menu-horizontal">
      <TopNavbar
        categories={categories}
        categoryIndex={categoryIndex}
        setCategoryIndex={setCategoryIndex}
        setPage={setPage}
      />

      <div className="product-strip fade-in">
        {(categoryIndex === null ? mockProducts : paginated).map((p) => (
          <ProductCard key={p.id} product={p} onAdd={() => addToCart(p)} />
        ))}
      </div>

      {categoryIndex !== null && (
        <div className="navigation-buttons">
          <button onClick={prev}>Previous</button>
          <button onClick={next}>Next</button>
        </div>
      )}

      <CartPanel
        cart={cart}
        onUpdateQuantity={updateQuantity}
        total={total}
        onCheckout={() => navigate('/checkout')}
      />
    </div>
  );
}

export default Menu;

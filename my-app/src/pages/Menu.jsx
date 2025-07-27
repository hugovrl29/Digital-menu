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

const realCategories = categories.slice(1)

const mockProducts = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    name: `Produit ${i + 1}`,
    description: 'Contient des ingrédients',
    price: (i + 1) * 2,
    image: '/placeholder.jpg',
    category: realCategories[i % realCategories.length].name,
    isRecommended: i % 5 === 0
}));

function Menu() {
    const navigate = useNavigate();
    const [categoryIndex, setCategoryIndex] = useState(null);
    const [page, setPage] = useState(0);
    const [cart, setCart] = useState([]);

    const currentCategory = categoryIndex !== null ? categories[categoryIndex].name : null;

    const productsInCategory =
        currentCategory === 'Recommandation'
        ? mockProducts.filter(p => p.isRecommended)
        : mockProducts.filter(p => p.category === currentCategory);
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

    const displayedProducts = categoryIndex === null ? mockProducts : paginated;
  
    const chunkedProducts = [];
  
    for (let i = 0; i < displayedProducts.length; i += 2) {
        chunkedProducts.push(displayedProducts.slice(i, i + 2));
    }

    return (
        <div className="menu-horizontal">
            <TopNavbar
                categories={categories}
                categoryIndex={categoryIndex}
                setCategoryIndex={setCategoryIndex}
                setPage={setPage}
            />

            <div
                className="product-scroll-wrapper"
                style={{
                overflowX: categoryIndex === null ? 'auto' : 'hidden',
                overflowY: 'hidden',
                padding: '4.5rem 1rem 2rem 1rem',
                height: 'calc(100vh - 6rem)',
                boxSizing: 'border-box',
                flexGrow: 1,
                }}
            >
                <div
                className="product-strip fade-in"
                style={{
                    display: 'grid',
                    gridAutoFlow: categoryIndex === null ? 'column' : 'row',
                    gridTemplateRows: 'repeat(2, 1fr)',
                    gridAutoColumns: categoryIndex === null ? '200px' : undefined,
                    gridTemplateColumns: categoryIndex !== null ? 'repeat(auto-fit, minmax(200px, 1fr))' : undefined,
                    gap: '.7rem 1.5rem',
                }}
                >
                {displayedProducts.map((p) => (
                    <ProductCard key={p.id} product={p} onAdd={() => addToCart(p)} />
                ))}
                </div>
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

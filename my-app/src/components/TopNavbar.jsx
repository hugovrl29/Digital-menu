function TopNavbar({ categories, categoryIndex, setCategoryIndex, setPage }) {
    return (
      <nav className="top-navbar">
        {categories.map((cat, idx) => (
          <button
            key={cat.name}
            className={idx === categoryIndex ? 'active' : ''}
            onClick={() => {
              setCategoryIndex(idx);
              setPage(0);
            }}
          >
            {cat.name}
          </button>
        ))}
      </nav>
    );
  }
  
  export default TopNavbar;
import React, { useState } from 'react';
import { STORE_INFO, CATEGORIES, PRODUCTS } from './storeConfig';

export default function App() {
  const [quantities, setQuantities] = useState({});
  const [activeCategory, setActiveCategory] = useState('TODOS');

  const updateQuantity = (id, change) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + change);
      return { ...prev, [id]: next };
    });
  };

  const filteredProducts = activeCategory === 'TODOS' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const totalItems = Object.values(quantities).reduce((acc, qty) => acc + qty, 0);
  const totalPrice = PRODUCTS.reduce((acc, p) => acc + (quantities[p.id] || 0) * p.price, 0);

  const handleCheckout = () => {
    if (totalItems === 0) return;
    
    let message = `*NOVO PEDIDO - ${STORE_INFO.name}*\n\n`;
    PRODUCTS.forEach(p => {
      if (quantities[p.id] > 0) {
        message += `• ${quantities[p.id]}x ${p.name} (R$ ${(p.price * quantities[p.id]).toFixed(2)})\n`;
      }
    });
    message += `\n*TOTAL:* R$ ${totalPrice.toFixed(2)}`;
    message += `\n\n_Desejo prosseguir com o pagamento e entrega._`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div style={styles.container}>
      {/* HEADER Persuasivo */}
      <header style={styles.header}>
        <div style={styles.badgeTop}>✨ FORNADA DO DIA PRONTA</div>
        <h1 style={styles.title}>{STORE_INFO.name}</h1>
        <p style={styles.subtitle}>{STORE_INFO.subtitle}</p>
        <p style={styles.info}>{STORE_INFO.info}</p>
        <div style={styles.socialProof}>
          🔥 <b>{STORE_INFO.socialProof}</b>
        </div>
      </header>

      {/* FILTROS DE CATEGORIA */}
      <nav style={styles.nav}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            style={{
              ...styles.filterBtn,
              ...(activeCategory === cat ? styles.filterBtnActive : {})
            }}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* LISTA DE PRODUTOS */}
      <main style={styles.grid}>
        {filteredProducts.map(product => {
          const qty = quantities[product.id] || 0;
          return (
            <div key={product.id} style={styles.card}>
              <div style={styles.imageContainer}>
                <img src={product.image} alt={product.name} style={styles.image} />
                <span style={styles.tag}>{product.tag}</span>
              </div>
              
              <div style={styles.cardBody}>
                <div style={styles.scarcityBadge}>⚠️ {product.scarcity}</div>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.description}>{product.description}</p>
                
                <div style={styles.cardFooter}>
                  <span style={styles.price}>R$ {product.price.toFixed(2)}</span>
                  
                  <div style={styles.counter}>
                    <button 
                      style={styles.counterBtn} 
                      onClick={() => updateQuantity(product.id, -1)}
                    >
                      -
                    </button>
                    <span style={styles.qtyText}>{qty}</span>
                    <button 
                      style={styles.counterBtn} 
                      onClick={() => updateQuantity(product.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </main>

      {/* BARRA FIXA DE CARRINHO / CHECKOUT */}
      {totalItems > 0 && (
        <div style={styles.cartBar}>
          <div>
            <span style={styles.cartCount}>{totalItems} {totalItems === 1 ? 'item' : 'itens'}</span>
            <div style={styles.cartTotal}>Total: R$ {totalPrice.toFixed(2)}</div>
          </div>
          <button style={styles.checkoutBtn} onClick={handleCheckout}>
            GARANTIR MEU PEDIDO AGORA 🚀
          </button>
        </div>
      )}

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>INSTAGRAM: {STORE_INFO.instagram}</p>
        <p>© {STORE_INFO.name} — Confeitaria Digital</p>
      </footer>
    </div>
  );
}

// Estilos Cyber-Gourmet limpos e integrados nativamente
const styles = {
  container: {
    backgroundColor: '#0a0a0c',
    color: '#e2e8f0',
    minHeight: '100vh',
    fontFamily: 'Inter, system-ui, sans-serif',
    paddingBottom: '90px'
  },
  header: {
    textAlign: 'center',
    padding: '40px 20px 20px',
    background: 'radial-gradient(circle at top, #1e1b4b 0%, #0a0a0c 100%)',
    borderBottom: '1px solid #1e293b'
  },
  badgeTop: {
    display: 'inline-block',
    backgroundColor: '#6366f1',
    color: '#fff',
    fontSize: '11px',
    fontWeight: 'bold',
    padding: '4px 12px',
    borderRadius: '20px',
    marginBottom: '10px',
    letterSpacing: '1px'
  },
  title: {
    fontSize: '32px',
    fontWeight: '900',
    letterSpacing: '2px',
    color: '#ffffff',
    margin: '0 0 5px 0'
  },
  subtitle: {
    fontSize: '12px',
    color: '#a855f7',
    letterSpacing: '2px',
    fontWeight: '600',
    margin: '0 0 10px 0'
  },
  info: {
    fontSize: '12px',
    color: '#64748b',
    margin: '0 0 15px 0'
  },
  socialProof: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    color: '#fca5a5',
    display: 'inline-block',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '13px'
  },
  nav: {
    display: 'flex',
    gap: '8px',
    overflowX: 'auto',
    padding: '15px 20px',
    borderBottom: '1px solid #1e293b'
  },
  filterBtn: {
    backgroundColor: '#1e293b',
    color: '#94a3b8',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  },
  filterBtnActive: {
    backgroundColor: '#a855f7',
    color: '#fff'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: '#13131a',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid #1e293b',
    display: 'flex',
    flexDirection: 'column'
  },
  imageContainer: {
    position: 'relative',
    height: '180px'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  tag: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: 'rgba(10, 10, 12, 0.85)',
    backdropFilter: 'blur(4px)',
    color: '#facc15',
    fontSize: '10px',
    fontWeight: 'bold',
    padding: '4px 8px',
    borderRadius: '6px',
    border: '1px solid rgba(250, 204, 21, 0.3)'
  },
  scarcityBadge: {
    fontSize: '11px',
    color: '#ef4444',
    fontWeight: '700',
    marginBottom: '4px'
  },
  cardBody: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  productName: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#fff',
    margin: '0 0 8px 0'
  },
  description: {
    fontSize: '13px',
    color: '#94a3b8',
    lineHeight: '1.4',
    margin: '0 0 16px 0',
    flex: 1
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #1e293b',
    paddingTop: '12px'
  },
  price: {
    fontSize: '20px',
    fontWeight: '800',
    color: '#a855f7'
  },
  counter: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    borderRadius: '8px',
    padding: '2px'
  },
  counterBtn: {
    backgroundColor: '#334155',
    color: '#fff',
    border: 'none',
    width: '28px',
    height: '28px',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  qtyText: {
    padding: '0 12px',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#fff'
  },
  cartBar: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 40px)',
    maxWidth: '500px',
    backgroundColor: '#1e1b4b',
    border: '1px solid #6366f1',
    borderRadius: '16px',
    padding: '12px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.5)',
    zIndex: 100
  },
  cartCount: {
    fontSize: '11px',
    color: '#a5b4fc',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  cartTotal: {
    fontSize: '18px',
    fontWeight: '800',
    color: '#fff'
  },
  checkoutBtn: {
    backgroundColor: '#22c55e',
    color: '#fff',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '10px',
    fontWeight: '800',
    fontSize: '13px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(34, 197, 94, 0.4)'
  },
  footer: {
    textAlign: 'center',
    padding: '30px 20px',
    color: '#475569',
    fontSize: '12px',
    borderTop: '1px solid #1e293b'
  }
};
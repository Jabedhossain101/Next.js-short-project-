import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our Product Store</h1>
        <p>Discover amazing products at great prices</p>
        <div style={{ marginTop: '2rem' }}>
          <Link
            href="/products"
            className="btn btn-primary"
            style={{ marginRight: '1rem' }}
          >
            Browse Products
          </Link>
          <Link href="/login" className="btn btn-secondary">
            Login
          </Link>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Featured Products
        </h2>
        <div className="products-grid">
          <div
            style={{
              padding: '1.5rem',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
            }}
          >
            <h3>Premium Headphones</h3>
            <p>Experience crystal clear sound with our premium headphones.</p>
            <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>$99.99</p>
          </div>
          <div
            style={{
              padding: '1.5rem',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
            }}
          >
            <h3>Wireless Keyboard</h3>
            <p>Type comfortably with our ergonomic wireless keyboard.</p>
            <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>$79.99</p>
          </div>
          <div
            style={{
              padding: '1.5rem',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
            }}
          >
            <h3>Smart Watch</h3>
            <p>Stay connected with our feature-rich smart watch.</p>
            <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>$199.99</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

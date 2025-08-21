import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import Link from 'next/link';

async function getProducts() {
  // In a real app, you would fetch from your API
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default async function Products() {
  const products = await getProducts();

  return (
    <div>
      <Header />

      <div
        className="container"
        style={{ padding: '2rem 0', minHeight: '70vh' }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          <h1>Our Products</h1>
          <Link href="/dashboard/add-product" className="btn btn-primary">
            Add Product
          </Link>
        </div>

        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

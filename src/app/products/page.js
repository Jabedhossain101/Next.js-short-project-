import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import ProductList from '../../components/ProductList';

export default function Products() {
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

        <ProductList />
      </div>

      <Footer />
    </div>
  );
}

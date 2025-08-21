import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

async function getProduct(id) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }

  return res.json();
}

export default async function ProductDetail({ params }) {
  const product = await getProduct(params.id);

  return (
    <div>
      <Header />

      <div
        className="container"
        style={{ padding: '2rem 0', minHeight: '70vh' }}
      >
        <Link
          href="/products"
          style={{ marginBottom: '2rem', display: 'inline-block' }}
        >
          &larr; Back to Products
        </Link>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginTop: '2rem',
          }}
        >
          <div>
            <img
              src={product.image || '/placeholder-product.jpg'}
              alt={product.name}
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>

          <div>
            <h1>{product.name}</h1>
            <p
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '1rem 0',
              }}
            >
              ${product.price}
            </p>
            <p>{product.description}</p>

            <div style={{ marginTop: '2rem' }}>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

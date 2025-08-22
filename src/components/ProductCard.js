import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div
      style={{
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.2s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <img
        src={product.image || '/placeholder-product.jpg'}
        alt={product.name || 'Product image'}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />

      <div
        style={{
          padding: '1.5rem',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h3 style={{ marginBottom: '0.5rem' }}>
          {product.name || 'Unnamed Product'}
        </h3>
        <p style={{ marginBottom: '1rem', flexGrow: 1 }}>
          {product.description?.substring(0, 100) || 'No description available'}
          ...
        </p>
        <p style={{ fontWeight: 'bold', marginBottom: '1rem' }}>
          ${product.price ?? 'N/A'}
        </p>

        <Link
          href={`/products/${product.id}`}
          className="btn btn-primary"
          style={{ marginTop: 'auto' }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

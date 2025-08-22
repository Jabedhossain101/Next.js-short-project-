// components/SimpleProductCard.js
import Link from 'next/link';

export default function SimpleProductCard({ product }) {
  return (
    <div
      style={{
        border: '1px solid #eaeaea',
        borderRadius: '8px',
        padding: '1.5rem',
        margin: '1rem',
      }}
    >
      <h3>{product.name}</h3>
      <p>{product.description.substring(0, 100)}...</p>
      <p style={{ fontWeight: 'bold' }}>${product.price}</p>
      <Link href={`/products/${product.id}`} className="btn btn-primary">
        View Details
      </Link>
    </div>
  );
}

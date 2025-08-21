import { NextResponse } from 'next/server';

// Mock products data
let products = [
  {
    id: 1,
    name: 'Premium Headphones',
    description: 'Experience crystal clear sound with our premium headphones.',
    price: 99.99,
    image: '/headphones.jpg',
  },
  {
    id: 2,
    name: 'Wireless Keyboard',
    description: 'Type comfortably with our ergonomic wireless keyboard.',
    price: 79.99,
    image: '/keyboard.jpg',
  },
  {
    id: 3,
    name: 'Smart Watch',
    description: 'Stay connected with our feature-rich smart watch.',
    price: 199.99,
    image: '/smartwatch.jpg',
  },
];

export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id);
    // In a real app, you would fetch from your database
    // const db = await getDb()
    // const product = await db.get('SELECT * FROM products WHERE id = ?', [id])

    const product = products.find(p => p.id === id);

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

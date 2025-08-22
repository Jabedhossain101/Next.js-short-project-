import { NextResponse } from 'next/server';

// Mock products data
let products = [
  {
    id: 1,
    name: 'Premium Headphones',
    description: 'Experience crystal clear sound with our premium headphones.',
    price: 99.99,
    image: 'https://i.ibb.co.com/zhnyLMQZ/image.png',
  },
  {
    id: 2,
    name: 'Wireless Keyboard',
    description: 'Type comfortably with our ergonomic wireless keyboard.',
    price: 79.99,
    image: 'https://i.ibb.co.com/KcBf8DV6/image.png',
  },
  {
    id: 3,
    name: 'Smart Watch',
    description: 'Stay connected with our feature-rich smart watch.',
    price: 199.99,
    image: 'https://i.ibb.co.com/pBR2dPjC/image.png',
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

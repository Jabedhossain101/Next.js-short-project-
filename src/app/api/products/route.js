import { getDb } from '../../../lib/db';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

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

export async function GET() {
  try {
    // In a real app, you would fetch from your database
    // const db = await getDb()
    // const products = await db.all('SELECT * FROM products')

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { name, description, price, image } = await request.json();

    // In a real app, you would save to your database
    // const db = await getDb()
    // const result = await db.run(
    //   'INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)',
    //   [name, description, price, image]
    // )

    const newProduct = {
      id: products.length + 1,
      name,
      description,
      price,
      image: image || '/placeholder-product.jpg',
    };

    products.push(newProduct);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}

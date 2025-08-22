import { NextResponse } from 'next/server';

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
    await new Promise(resolve => setTimeout(resolve, 100));
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
    const { name, description, price, image } = await request.json();

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

// {
//   id: 1,
//   name: 'Premium Headphones',
//   description: 'Experience crystal clear sound with our premium headphones.',
//   price: 99.99,
//   image: 'https://i.ibb.co.com/zhnyLMQZ/image.png',
// },
// {
//   id: 2,
//   name: 'Wireless Keyboard',
//   description: 'Type comfortably with our ergonomic wireless keyboard.',
//   price: 79.99,
//   image: 'https://i.ibb.co.com/KcBf8DV6/image.png',
// },
// {
//   id: 3,
//   name: 'Smart Watch',
//   description: 'Stay connected with our feature-rich smart watch.',
//   price: 199.99,
//   image: 'https://i.ibb.co.com/pBR2dPjC/image.png',
// },

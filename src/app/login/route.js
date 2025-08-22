import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (email === 'admin@example.com' && password === 'password123') {
      return NextResponse.json({
        success: true,
        user: {
          id: 1,
          email: 'admin@example.com',
          name: 'Admin User',
        },
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Invalid credentials',
      },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Authentication failed',
      },
      { status: 500 }
    );
  }
}

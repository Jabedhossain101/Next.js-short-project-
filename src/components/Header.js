'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <header
      style={{
        padding: '1rem 0',
        borderBottom: '1px solid var(--border-color)',
        marginBottom: '2rem',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          ProductStore
        </Link>

        <nav>
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '1.5rem',
              alignItems: 'center',
            }}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>

            {status === 'authenticated' ? (
              <>
                <li>
                  <Link href="/dashboard/add-product">Add Product</Link>
                </li>
                <li>
                  <button
                    onClick={() => signOut()}
                    className="btn btn-secondary"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link href="/login" className="btn btn-primary">
                  Login
                </Link>
              </li>
            )}

            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

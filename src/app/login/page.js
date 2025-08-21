'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    setIsLoading(false);

    if (result.ok) {
      router.push('/products');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div>
      <Header />
      <div
        className="container"
        style={{ padding: '2rem 0', minHeight: '70vh' }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Login</h1>

        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%' }}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p>Or login with:</p>
            <button
              onClick={() => signIn('google', { callbackUrl: '/products' })}
              className="btn btn-secondary"
              style={{ marginTop: '1rem' }}
            >
              Google
            </button>
          </div>

          <p style={{ textAlign: 'center', marginTop: '2rem' }}>
            Demo credentials: admin@example.com / password123
          </p>
        </div>
      </div>
    </div>
  );
}

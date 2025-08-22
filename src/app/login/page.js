'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/Header';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { signIn } = useAuth();

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const user = await signIn(email, password);
      if (user) {
        router.push('/products');
      } else {
        setError('Login failed. Please use: admin@example.com / password123');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
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
          {error && (
            <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>
          )}

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

          <p style={{ textAlign: 'center', marginTop: '2rem' }}>
            Demo credentials: admin@example.com / password123
          </p>
        </div>
      </div>
    </div>
  );
}

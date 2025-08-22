'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../contexts/AuthContext';
import Header from '../../../components/Header';
import Spinner from '../../../components/Spinner';
import { toast } from 'react-toastify';

export default function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <div>
        <Header />
        <div
          className="container"
          style={{
            padding: '2rem 0',
            minHeight: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spinner />
        </div>
      </div>
    );
  }

  if (!user) {
    router.push('/login');
    return null;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
          price: parseFloat(price),
          image,
        }),
      });

      if (res.ok) {
        toast.success('Product added successfully!');
        router.push('/products');
      } else {
        toast.error('Failed to add product');
      }
    } catch (error) {
      toast.error('An error occurred');
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
        <h1 style={{ marginBottom: '2rem' }}>Add New Product</h1>

        <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              rows="4"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              step="0.01"
              value={price}
              onChange={e => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="url"
              id="image"
              value={image}
              onChange={e => setImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? <Spinner size="small" /> : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  );
}

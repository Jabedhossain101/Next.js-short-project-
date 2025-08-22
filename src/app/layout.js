import { AuthProvider } from '../contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

export const metadata = {
  title: 'Product Management App',
  description: 'A simple product management application with authentication',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
          <ToastContainer position="bottom-right" />
        </AuthProvider>
      </body>
    </html>
  );
}

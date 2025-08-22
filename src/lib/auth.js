// Simple session management
let currentUser = null;

export const auth = {
  signIn: (email, password) => {
    if (email === 'admin@example.com' && password === 'password123') {
      currentUser = {
        id: 1,
        email: 'admin@example.com',
        name: 'Admin User',
      };
      return Promise.resolve(currentUser);
    }
    return Promise.resolve(null);
  },
  signOut: () => {
    currentUser = null;
    return Promise.resolve();
  },
  getSession: () => {
    return Promise.resolve(currentUser);
  },
};

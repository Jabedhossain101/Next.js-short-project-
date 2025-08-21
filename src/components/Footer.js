export default function Footer() {
  return (
    <footer
      style={{
        padding: '2rem 0',
        borderTop: '1px solid var(--border-color)',
        marginTop: '2rem',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <p>© {new Date().getFullYear()} ProductStore. All rights reserved.</p>
      </div>
    </footer>
  );
}

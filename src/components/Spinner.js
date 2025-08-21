export default function Spinner({ size = 'medium' }) {
  const sizeMap = {
    small: '1rem',
    medium: '2rem',
    large: '3rem',
  };

  return (
    <div
      style={{
        display: 'inline-block',
        width: sizeMap[size],
        height: sizeMap[size],
        border: '2px solid #f3f3f3',
        borderTop: '2px solid var(--primary-color)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }}
    ></div>
  );
}

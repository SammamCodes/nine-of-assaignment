// src/components/NotFound.jsx

import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2 className='font-bold text-lg'>Error Page</h2>
      <p>The page you are looking for doesn't exist.</p>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
};

export default NotFound;

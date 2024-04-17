import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center' }}>
      <Link to="/newreading">
        <button style={{ padding: '0.5rem 1rem', fontSize: '1rem', borderRadius: '5px', backgroundColor: 'darkgrey', color: 'white', border: 'none', cursor: 'pointer' }}>
          Go to New Reading
        </button>
      </Link>
    </div>
  );
};

export default QuickLinks;

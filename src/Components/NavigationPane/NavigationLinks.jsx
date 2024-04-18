import { Link } from 'react-router-dom';

const NavigationLinks = () => {
  return (
    <nav style={{ height: '100%', width: '150px', backgroundColor: 'grey', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
      <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center', marginBottom: '20px' }}>
        <li>
          <Link to="/dashboard" style={{ textDecoration: 'none', color: 'darkslategrey' }}>Dashboard</Link>
        </li>
        <li>
          <Link to="/profile" style={{ textDecoration: 'none', color: 'darkslategrey' }}>Profile</Link>
        </li>
      </ul>
      <Link to="/" style={{ textDecoration: 'none', color: 'darkslategrey', backgroundColor: 'lightgrey', padding: '10px', textAlign: 'center', borderRadius: '5px', width: '100px',marginBottom: '.5rem' }}>Logout</Link>
    </nav>
  );
};

export default NavigationLinks;

import { Link } from 'react-router-dom';

const NavigationLinks = () => {
  return (
    <nav style={{ height: '100%', width: '150px', backgroundColor: 'grey' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to="/dashboard" style={{ textDecoration: 'none', color: 'darkslategrey' }}>Dashboard</Link>
        </li>
        <li>
          <Link to="/profile" style={{ textDecoration: 'none', color: 'darkslategrey' }}>Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationLinks;

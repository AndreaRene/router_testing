import { useLocation } from 'react-router-dom';
import NavIcons from '../NavigationPane/NavigationIcons';
import NavLinks from '../NavigationPane/NavigationLinks';

const routeToNavComponents = {
  '/dashboard': () => (
    <div>
      <NavLinks />
      <NavIcons />
    </div>
  ),
  '/profile': () => (
    <div>
      <NavLinks />
      <NavIcons />
    </div>
  ),
  '/newreading': NavIcons
};

const NavContainer = () => {
  const location = useLocation();
  const NavComponents = routeToNavComponents[location.pathname];

  return <div>{NavComponents && <NavComponents />}</div>;
};

export default NavContainer;

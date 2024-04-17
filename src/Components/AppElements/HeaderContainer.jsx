import { useLocation } from 'react-router-dom';

import LargeHeader from '../HeaderPane/LargeHeader';
import SimpleHeader from '../HeaderPane/SimpleHeader';

const routeToHeader = {
  '/dashboard': LargeHeader,
  '/profile': LargeHeader,
  '/newreading': SimpleHeader,
};

const Header = () => {
  const location = useLocation();
  const HeaderComponent = routeToHeader[location.pathname];

  return <div style={ { display: 'flex' } }>{ HeaderComponent && <HeaderComponent /> }</div>;
};

export default Header;

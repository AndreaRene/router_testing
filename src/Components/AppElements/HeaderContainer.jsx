import { useLocation } from 'react-router-dom';

import LargeHeader from '../HeaderPane/LargeHeader';
import SimpleHeader from '../HeaderPane/SimpleHeader';

const routeToHeader = {
  '/dashboard': LargeHeader,
  '/profile': LargeHeader,
  '/newreading': SimpleHeader,
  '/community': LargeHeader,
  '/browseSpreads': LargeHeader,
  '/browseDecks': LargeHeader,
  '/appShop': LargeHeader,
  '/aboutUs': LargeHeader,
  '/contactUs': LargeHeader,
  '/faqs': LargeHeader,
  '/terms': LargeHeader,
  '/privacy': LargeHeader,
};

const Header = () => {
  const location = useLocation();
  const HeaderComponent = routeToHeader[location.pathname];

  return <div style={ { width: '100vw', backgroundColor: 'darkslategrey' } }>{ HeaderComponent && <HeaderComponent /> }</div>;
};

export default Header;

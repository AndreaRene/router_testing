import { useLocation } from 'react-router-dom';

import QuickUserInfo from '../AsidePane/QuickUserInfo';
import QuickLinks from '../AsidePane/QuickLinks';
import DeckCarousel from '../AsidePane/DeckCarousel';
import SpreadCarousel from '../AsidePane/SpreadCarousel';

const routeToAsideComponents = {
  '/dashboard': () => (
    <div>
      <QuickUserInfo />
      <QuickLinks />
    </div>
  ),
  '/profile': () => (
    <div>
      <QuickUserInfo />
      <QuickLinks />
    </div>
  ),
  '/newreading': () => (
    <div>
      <DeckCarousel />
      <SpreadCarousel />
    </div>
  ),
};

const AsideContainer = () => {
  const location = useLocation();
  const AsideComponents = routeToAsideComponents[location.pathname];

  return <div>{AsideComponents && <AsideComponents />}</div>;
};

export default AsideContainer;

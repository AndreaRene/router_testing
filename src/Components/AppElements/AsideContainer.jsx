import { useLocation } from 'react-router-dom';

import QuickUserInfo from '../AsidePane/QuickUserInfo';
import QuickLinks from '../AsidePane/QuickLinks';
import DeckCarousel from '../AsidePane/DeckCarousel';
import SpreadCarousel from '../AsidePane/SpreadCarousel';

const routeToAsideComponents = {
    '/dashboard': () => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <QuickUserInfo style={{ flex: '1' }} />
        <QuickLinks style={{ flex: '1' }} />
      </div>
    ),
    '/profile': () => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <QuickUserInfo style={{ flex: '1' }} />
        <QuickLinks style={{ flex: '1' }} />
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

    return (
        <aside style={ { display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'lightslategrey' } }>
            { AsideComponents && <AsideComponents /> }
        </aside>
    );
};

export default AsideContainer;

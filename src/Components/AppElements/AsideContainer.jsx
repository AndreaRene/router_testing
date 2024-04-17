import { useLocation } from 'react-router-dom';

import QuickUserInfo from '../AsidePane/QuickUserInfo';
import QuickLinks from '../AsidePane/QuickLinks';
import AppUpdates from '../AsidePane/AppUpdates';
import DeckCarousel from '../AsidePane/DeckCarousel';
import SpreadCarousel from '../AsidePane/SpreadCarousel';

const routeToAsideComponents = {
    '/dashboard': () => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '200px', justifyContent: 'space-around' }}>
            <QuickUserInfo />
            <QuickLinks />
            <AppUpdates />
        </div>
    ),
    '/profile': () => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '200px', justifyContent: 'space-around' }}>
            <QuickUserInfo />
            <QuickLinks />
            <AppUpdates />
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
        <aside style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: 'lightslategrey' }}>
            {AsideComponents && <AsideComponents />}
        </aside>
    );
};

export default AsideContainer;

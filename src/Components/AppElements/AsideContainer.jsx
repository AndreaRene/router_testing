import { useLocation } from 'react-router-dom';
import React from 'react';
import QuickUserInfo from '../AsidePane/QuickUserInfo';
import QuickLinks from '../AsidePane/QuickLinks';
import AppUpdates from '../AsidePane/AppUpdates';
import AccordionSection from '../AsidePane/AccordionSection'; // Ensure this is imported correctly

const AsideContainer = () => {
    const location = useLocation();

    const routeToAsideComponents = {
        '/dashboard': () => (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '200px' }}>
                <QuickUserInfo />
                <QuickLinks />
                <AppUpdates />
            </div>
        ),
        '/profile': () => (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '200px' }}>
                <QuickUserInfo />
                <QuickLinks />
                <AppUpdates />
            </div>
        ),
        '/reading': () => (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '200px' }}>
                <QuickUserInfo />
                <QuickLinks />
                <AppUpdates />
            </div>
        ),
        '/newreading': () => (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '200px' }}>
                <AccordionSection title="Spreads" />
                <AccordionSection title="Decks" />
            </div>
        ),
        '/community': () => (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '200px' }}>
                <QuickUserInfo />
                <QuickLinks />
                <AppUpdates />
            </div>
        )
    };

    const AsideComponents = routeToAsideComponents[location.pathname];

    return (
        <aside style={{ backgroundColor: 'grey' }}>
            {AsideComponents && <AsideComponents />}
        </aside>
    );
};

export default AsideContainer;

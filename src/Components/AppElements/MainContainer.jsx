import { useLocation } from 'react-router-dom';

import DashboardLeft from '../../Pages/Dashboard/DashboardLeft';
import DashboardRight from '../../Pages/Dashboard/DashboardRight';
import ProfileLeft from '../../Pages/Profile/ProfileLeft';
import ProfileRight from '../../Pages/Profile/ProfileRight';
import NewReading from '../../Pages/NewReading/NewReading';

const routeToMainComponents = {
    '/dashboard': () => (
        <div>
            <DashboardLeft />
            <DashboardRight />
        </div>
    ),
    '/profile': () => (
        <div>
            <ProfileLeft />
            <ProfileRight />
        </div>
    ),
    '/newreading': NewReading
};

const MainContainer = () => {
    const location = useLocation();
    const MainComponents = routeToMainComponents[location.pathname];

    return <div style={ { display: 'flex' } }>{ MainComponents && <MainComponents /> }</div>;
};

export default MainContainer;

import { useLocation } from 'react-router-dom';

import DashboardLeft from '../../Pages/Dashboard/DashboardLeft';
import DashboardRight from '../../Pages/Dashboard/DashboardRight';
import ProfileLeft from '../../Pages/Profile/ProfileLeft';
import ProfileRight from '../../Pages/Profile/ProfileRight';
import NewReading from '../../Pages/NewReading/NewReading';

const routeToMainComponents = {
  '/dashboard': () => (
    <div style={{ display: 'flex' }}>
      <DashboardLeft />
      <DashboardRight />
    </div>
  ),
  '/profile': () => (
    <div style={{ display: 'flex' }}>
      <ProfileLeft style={{ width: '50%'}}/>
      <ProfileRight style={{ width: '50%'}}/>
    </div>
  ),
  '/newreading': NewReading
};

const MainContainer = () => {
  const location = useLocation();
  const MainComponent = routeToMainComponents[location.pathname];

  return (
    <div style={{ flex: '1'}}>
      {MainComponent && <MainComponent />}
    </div>
  );
};

export default MainContainer;

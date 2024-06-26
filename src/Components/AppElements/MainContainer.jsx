import { useLocation } from 'react-router-dom';

import DashboardLeft from '../../Pages/Dashboard/DashboardLeft';
import DashboardRight from '../../Pages/Dashboard/DashboardRight';
import ProfileLeft from '../../Pages/Profile/ProfileLeft';
import ProfileRight from '../../Pages/Profile/ProfileRight';
import NewReading from '../../Pages/NewReading/NewReading';
import Community from '../../Pages/Community/Community';
import BrowseSpreads from '../../Pages/BrowseSpreads/BrowseSpreads';
import BrowseDecks from '../../Pages/BrowseDecks/BrowseDecks';
import AppShop from '../../Pages/AppShop/AppShop';
import Terms from '../../Pages/InfoPages/Terms';
import Privacy from '../../Pages/InfoPages/Privacy'
import FAQs from '../../Pages/InfoPages/FAQs';
import Landing from '../../Pages/Landing/Landing';
import AboutUs from '../../Pages/InfoPages/AboutUs';
import ContactUs from '../../Pages/InfoPages/ContactUs';
import JournalLeft from '../../Pages/JournalEntry/JournalLeft';
import JournalRight from '../../Pages/JournalEntry/JournalRight';

const routeToMainComponents = {
  '/dashboard': () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <DashboardLeft style={{ width: '50%' }} />
      <DashboardRight style={{ width: '50%' }} />
    </div>
  ),
  '/profile': () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <ProfileLeft style={{ width: '50%' }} />
      <ProfileRight style={{ width: '50%' }} />
    </div>
  ),  
  '/reading': () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <JournalLeft style={{ width: '50%' }} />
      <JournalRight style={{ width: '50%' }} />
    </div>
  ),
  '/newreading': NewReading,
  '/community': Community,
  '/browseSpreads': BrowseSpreads,
  '/browseDecks': BrowseDecks,
  '/appShop': AppShop,
  '/aboutUs': AboutUs,
  '/terms': Terms,
  '/privacy': Privacy,
  '/faqs': FAQs,
  '/contactUs': ContactUs,
  '/landing': Landing,
  '/': Landing,
};

const MainContainer = () => {
  const location = useLocation();
  const MainComponent = routeToMainComponents[location.pathname];

  return (
    <div style={ { flex: '1' } }>
      { MainComponent && <MainComponent /> }
    </div>
  );
};

export default MainContainer;
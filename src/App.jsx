import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/AppElements/HeaderContainer';
import Aside from './Components/AppElements/AsideContainer';
import Main from './Components/AppElements/MainContainer';
import Nav from './Components/AppElements/NavContainer';
import Footer from './Components/AppElements/FooterContainer';

const App = () => (
  <Router>
    <div style={ { display: 'flex', flexDirection: 'column', height: '100vh' } }>
      <Header />
      <section style={ { display: 'flex', flexGrow: 1 } }>
        <Aside />
        <Main />
        <Nav />
      </section>
      <Footer />
    </div>
  </Router>
);

export default App;

import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/AppElements/HeaderContainer';
import Aside from './Components/AppElements/AsideContainer';
import Main from './Components/AppElements/MainContainer';
import Nav from './Components/AppElements/NavContainer';
import Footer from './Components/AppElements/NavContainer';

const App = () => (
  <Router>
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Aside />
        <Main />
        <Nav />
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
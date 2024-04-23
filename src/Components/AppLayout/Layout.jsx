import Header from '../AppElements/HeaderContainer';
import Aside from '../AppElements/AsideContainer';
import Main from '../AppElements/MainContainer';
import Nav from '../AppElements/NavContainer';
import Footer from '../AppElements/FooterContainer';

const Layout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header />
            <section style={{ display: 'flex', flexGrow: 1 }}>
                <Aside />
                <Main />
                <Nav />
            </section>
            <Footer />
        </div>
    );
};

export default Layout;
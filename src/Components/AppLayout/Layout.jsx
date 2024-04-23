import Header from '../AppElements/HeaderContainer';
import Aside from '../AppElements/AsideContainer';
import Main from '../AppElements/MainContainer';
import Nav from '../AppElements/NavContainer';
import Footer from '../AppElements/FooterContainer';

const Layout = ({ content }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header content={content} />
            <section style={{ display: 'flex', flexGrow: 1 }}>
                <Aside content={content} />
                <Main content={content} />
                <Nav content={content} />
            </section>
            <Footer content={content} />
        </div>
    );
};

export default Layout;
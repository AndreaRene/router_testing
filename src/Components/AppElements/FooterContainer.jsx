import { useLocation } from 'react-router-dom';

import LargeFooter from '../FooterPane/LargeFooter';
import SimpleFooter from '../FooterPane/SimpleFooter';

const routeToFooter = {

};

const Footer = () => {
    const location = useLocation();
    const FooterComponent = routeToFooter[location.pathname];

    return <div style={ { display: 'flex' } }>{ FooterComponent && <FooterComponent /> }</div>;
};

export default Footer;

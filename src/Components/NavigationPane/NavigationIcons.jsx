import { Link } from 'react-router-dom';

const NavigationIcons = () => {
    return (
        <nav style={ { height: '100%', width: '50px', backgroundColor: 'lightgrey', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' } }>
            <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
                <Link to="/dashboard" style={ { textDecoration: 'none', color: 'darkslategrey', margin: '0.6rem 0  0.2rem 0' } }>
                    <i className="fa fa-home fa-lg"></i>
                </Link>
                <Link to="/profile" style={ { textDecoration: 'none', color: 'darkslategrey', margin: '0.3rem 0' } }>
                    <i className="fa fa-user fa-lg"></i>
                </Link>
            </div>
            <Link to="/" style={ { textDecoration: 'none', color: 'darkslategrey', marginBottom: '1.1rem' } }>
                <i className="fas fa-sign-out-alt fa-lg"></i>
            </Link>
        </nav>
    );
};

export default NavigationIcons;

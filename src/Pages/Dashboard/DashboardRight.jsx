import { Link } from 'react-router-dom';

const DashboardRight = () => {
    return (
        <section style={ { width: '50%', height: '95%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeft: '1px solid whitesmoke' } }>
            <section style={ { width: '65%', textAlign: 'center', padding: '20px' } }>
                <h2 style={ { textAlign: 'center' } }>Reading Journal</h2>
                <hr style={ { width: '60%' } } />
                <div>
                    <h3 style={ { textAlign: 'left' } }>
                        <Link to="/reading" style={ { color: 'inherit', textDecoration: 'underline' } }>
                            User Notes Title
                        </Link>
                    </h3>
                    <div style={ { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' } }>
                        <span>Spread Name</span>
                        <span style={ { float: 'right' } }>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 style={ { textAlign: 'left' } }>User Notes Title</h3>
                    <div style={ { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' } }>
                        <span>Spread Name</span>
                        <span style={ { float: 'right' } }>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 style={ { textAlign: 'left' } }>User Notes Title</h3>
                    <div style={ { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' } }>
                        <span>Spread Name</span>
                        <span style={ { float: 'right' } }>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 style={ { textAlign: 'left' } }>User Notes Title</h3>
                    <div style={ { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' } }>
                        <span>Spread Name</span>
                        <span style={ { float: 'right' } }>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 style={ { textAlign: 'left' } }>User Notes Title</h3>
                    <div style={ { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' } }>
                        <span>Spread Name</span>
                        <span style={ { float: 'right' } }>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 style={ { textAlign: 'left' } }>User Notes Title</h3>
                    <div style={ { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' } }>
                        <span>Spread Name</span>
                        <span style={ { float: 'right' } }>04/17/2024</span>
                    </div>
                    <hr />
                </div>
                <div style={ { textAlign: 'center', marginTop: '20px' } }>
                    <span style={ { textDecoration: 'none', marginBottom: '1.1rem' } }><i className="fas fa-chevron-down"></i></span>
                </div>
            </section>
        </section>
    );
};

export default DashboardRight;

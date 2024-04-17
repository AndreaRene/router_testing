import ProfilePicture from '../../assets/08_Strength.jpg'

const QuickUserInfo = () => {
    // Sample user data (replace with actual data)
    const user = {
        username: 'JohnDoe',
        message: 'Welcome back, John!'
    };

    return (
        <section style={ { display: 'flex', flexDirection: 'column', width: '200px', alignItems: 'center' } }>
            <div>{ user.username }</div>
            <img src={ ProfilePicture } alt="Profile" style={ { width: '100px', borderRadius: '50%', border: '6px solid slategrey' } } />
            <div>{ user.message }</div>
        </section>
    );
};

export default QuickUserInfo;

const Landing = () => {


    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
<button onClick={() => window.location.href = '/dashboard'} style={{margin: '5rem'}}>Go to Dashboard</button>

</div>
    );
};

export default Landing;

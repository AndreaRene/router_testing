import CardFront from '../../assets/00_Cursed_Fool.jpg'

const DeckInterview = () => {
    return (
        <>
            <div id='interviewSpread'>
                <img src={ CardFront } style={ { height: '75px', margin: '10px' } } />
                <img src={ CardFront } style={ { height: '75px', margin: '10px 10px 50px 10px' } } />
                <img src={ CardFront } style={ { height: '75px', margin: '10px' } } />
            </div>
            <div style={ { display: 'flex', justifyContent: 'center' } }>
                <img src={ CardFront } style={ { height: '75px', margin: '10px' } } />
                <img src={ CardFront } style={ { height: '75px', margin: '50px 10px 10px 10px' } } />
                <img src={ CardFront } style={ { height: '75px', margin: '10px' } } />
            </div>
        </>
    )
}

export default DeckInterview
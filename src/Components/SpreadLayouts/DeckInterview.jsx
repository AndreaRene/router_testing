import PropTypes from 'prop-types';
import CardFront from '../../assets/00_Cursed_Fool.jpg';

const DeckInterview = ({ imgHeight = '200px' }) => { // Default height is 200px if not provided
    return (
        <section id='interviewSpread'>
            <div style={ { display: 'flex', justifyContent: 'center', alignItems: 'self-end'} }>
                <img src={ CardFront } style={ { height: imgHeight, margin: '50px 10px 10px 10px', borderRadius: '10%' } } className='position_one' />
                <img src={ CardFront } style={ { height: imgHeight, margin: '10px 10px 50px 10px', borderRadius: '10%' } } className='position_two' />
                <img src={ CardFront } style={ { height: imgHeight, margin: '50px 10px 10px 10px', borderRadius: '10%' } } className='position_three' />
            </div>
            <div style={ { display: 'flex', justifyContent: 'center', alignItems: 'self-start' } }>
                <img src={ CardFront } style={ { height: imgHeight, margin: '10px 10px 50px 10px', borderRadius: '10%' } } className='position_four' />
                <img src={ CardFront } style={ { height: imgHeight, margin: '50px 10px 10px 10px', borderRadius: '10%' } } className='position_five' />
                <img src={ CardFront } style={ { height: imgHeight, margin: '10px 10px 50px 10px', borderRadius: '10%' } } className='position_six' />
            </div>
        </section>
    )
};

DeckInterview.propTypes = {
    imgHeight: PropTypes.string // Validates that imgHeight is a string
};

export default DeckInterview;

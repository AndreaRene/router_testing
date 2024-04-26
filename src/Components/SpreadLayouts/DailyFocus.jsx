import PropTypes from 'prop-types';
import CardFront from '../../assets/01_The_Fool_Edited.png';

const DailyFocus = ({ imgHeight = '250px', Margin = '100px' }) => {

    return (
        <section id='interviewSpread'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={CardFront} style={{ height: imgHeight, margin: Margin }} className='position_one' />
            </div>
        </section>
    )
};

DailyFocus.propTypes = {
    imgHeight: PropTypes.string,
    Margin: PropTypes.string,
};

export default DailyFocus;


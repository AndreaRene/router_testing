import DeckInterview from '../../Components/SpreadLayouts/DeckInterview.jsx';
import DailyFocus from '../../Components/SpreadLayouts/DailyFocus.jsx';

const NewReading = () => {

    return (
        <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            {/* <DeckInterview  imgHeight = '250px' lgMargin = '100px' smMargin = '20px'  /> */}
            <DailyFocus imgHeight = '350px' Margin = '100px' />
        </section>
    );
};

export default NewReading;


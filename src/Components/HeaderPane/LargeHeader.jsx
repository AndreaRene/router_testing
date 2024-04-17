import { Link } from 'react-router-dom';
import Icon from '../../assets/Crystals_wh.png'
import ProfilePicture from '../../assets/08_Strength.jpg'
const LargeHeader = () => {


    return (
        <header style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center', } }>
            <div>
                <Link to="/">
                    <img src={ Icon } /> {/* Example icon */ }
                </Link>
            </div>
            <div>
                <img src={ ProfilePicture } alt="Profile" style={ { width: '100px', borderRadius: '50%' } } />
            </div>
        </header>
    );
};

export default LargeHeader;

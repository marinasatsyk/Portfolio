import { Modal, useModal } from '../../Modal';
import ReactDOM from 'react-dom/client';
import gitHubLogo from '../../../../assets/github-brands.svg';
import netLogo from '../../../../assets/globe-solid.svg';

import './card.css';
import ModalPart from '../modalPart';
// const root = ReactDOM.createRoot(document.getElementById('root'));
const Card = ({ item }) => {
    const { isModalOpened: isCardOpened, toggle: toggleCardOpened } =
        useModal();
    console.log(isCardOpened);
    function handleClick() {
        return toggleCardOpened();
    }
    return (
        <>
            <div
                className="wrap-cover-proj"
                key={item.id}
                onClick={handleClick}
            >
                <img src={item.localLink} alt="" className="cover-proj" />
                {/* <div className="btn-details">Détailles</div> */}
            </div>
            <ModalPart
                item={item}
                isCardOpened={isCardOpened}
                handleClick={handleClick}
            />
        </>
    );
};

export default Card;

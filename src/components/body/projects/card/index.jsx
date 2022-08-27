import { Modal, useModal } from '../../Modal';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';

import './card.css';
import ModalPart from '../modalPart';
// const root = ReactDOM.createRoot(document.getElementById('root'));

const cardVariants = {
    visible: {
        opacity: 1,
        transition: { delay: 0.2 },
    },
    hover: {
        scale: 1.2,
        boxShadow: '0px 0px 8px rgb(255, 255, 255)',
        transition: { type: 'spring', stiffness: 400 },
    },
};

const Card = ({ item, index }) => {
    const { isModalOpened: isCardOpened, toggle: toggleCardOpened } =
        useModal();
    console.log(isCardOpened);
    function handleClick() {
        return toggleCardOpened();
    }
    return (
        <>
            <motion.div
                className="wrap-cover-proj"
                key={item.id}
                onClick={handleClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // transition={{ delay: (index + 10) / 10 }}
                variants={cardVariants}
                whileHover="hover"
            >
                <img src={item.localLink} alt="" className="cover-proj" />
            </motion.div>
            <ModalPart
                item={item}
                isCardOpened={isCardOpened}
                handleClick={handleClick}
            />
        </>
    );
};

export default Card;

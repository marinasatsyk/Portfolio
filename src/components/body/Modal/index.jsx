import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ReactDOM from 'react-dom';

import './modal.css';

export const useModal = () => {
    const [isModalOpened, setModalOpened] = useState(false);

    function toggle() {
        setModalOpened(!isModalOpened);
    }

    return {
        isModalOpened,
        toggle,
    };
};
export const Modal = ({ isModalOpened, hide, ...props }) => (
    <AnimatePresence>
        {isModalOpened && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                className="modalBackground"
                onClick={() => hide()}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                        scale: 1,
                        transition: { duration: 0.3 },
                    }}
                    exit={{ scale: 0, transition: { duration: 0.3 } }}
                    className="modalContainer"
                >
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            transition: { delay: 0.1 },
                        }}
                        exit={{
                            scale: 0,
                            opacity: 0,
                            transition: { delay: 0.1 },
                        }}
                        className="modal-body"
                    >
                        {props.children}
                    </motion.div>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);

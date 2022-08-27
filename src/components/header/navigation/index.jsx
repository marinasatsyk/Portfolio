import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { useModal, Modal } from '../../body/Modal';
import DARDE_Marina_CV from '../../../assets/cv.pdf';
import { motion } from 'framer-motion';
import logo from '../../../assets/LogoLight.png';
import './navigation.css';

const jumpVariants = {
    visible: {
        y: ['-100vh', 0, -10, 0, -10],
    },
};
const Navigation = () => {
    // const [isModalOpened, setModalOpened] = useModal(false);
    let activeStyle = {
        textDecoration: 'underline',
        color: '#ffc600',
    };

    let activeClassName = 'underline';
    return (
        <div className="wrap-nav">
            <div className="logo-wrap">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <nav className="header-nav">
                <ul className="wrap-options">
                    <motion.li
                        whileHover={{
                            scale: 1.3,
                            textShadow: '0px 0px 8px rgb(255, 255, 255)',
                            y: -10,
                        }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Page d'accueil
                        </NavLink>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            scale: 1.3,
                            textShadow: '0px 0px 8px rgb(255, 255, 255)',
                            y: -10,
                        }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <NavLink
                            to="/cv"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            CV
                        </NavLink>
                    </motion.li>
                    {/* <motion.li>
                        <NavLink
                            to="/skills"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Competences
                        </NavLink>
                    </motion.li> */}
                    <motion.li
                        whileHover={{
                            scale: 1.3,
                            textShadow: '0px 0px 8px rgb(255, 255, 255)',
                            y: -10,
                            // originY: 0,
                        }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <NavLink
                            to="/projects"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Mes projets
                        </NavLink>
                    </motion.li>
                </ul>
            </nav>
            <motion.div
                className="contact-me"
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                whileHover={{
                    scale: 1.1,
                    boxShadow: '0px 0px 8px rgb(255, 255, 255)',
                }}
            >
                <a href={DARDE_Marina_CV} download="DARDE_Marina_CV.pdf">
                    Télécharger mon CV
                </a>
            </motion.div>
        </div>
    );
};

export default Navigation;

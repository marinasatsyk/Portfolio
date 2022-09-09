import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { useModal, Modal } from '../../body/Modal';
import DARDE_Marina_CV from '../../../assets/cv.pdf';
import { motion } from 'framer-motion';
import logo from '../../../assets/LogoLight.png';
import useWindowDimensions from '../screenDimension';
import { ReactComponent as Download } from '../../../assets/download.svg';
import { ReactComponent as Home } from '../../../assets/home.svg';
import { ReactComponent as CVlogo } from '../../../assets/cv.svg';
import { ReactComponent as ProjetsLogo } from '../../../assets/projects.svg';

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

    const dimension = useWindowDimensions();
    return (
        <div className="wrap-nav">
            {console.log(dimension)}
            {dimension.width > 768 && (
                <div className="logo-wrap">
                    <img src={logo} alt="logo" className="logo" />
                </div>
            )}

            <nav className="header-nav">
                <ul className="wrap-options">
                    {dimension.width <= 768 && (
                        <li className="logo-wrap">
                            <img src={logo} alt="logo" className="logo" />
                        </li>
                    )}

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
                            {dimension.width > 768 ? (
                                `Home`
                            ) : (
                                <Home className="home-logo mobile" />
                            )}
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
                        {/* <NavLink
                            to="/cv"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            {dimension.width > 768 ? (
                                `CV`
                            ) : (
                                <CVlogo className="cv-logo mobile" />
                            )}
                        </NavLink> */}
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
                            {dimension.width > 768 ? (
                                `Mes projets`
                            ) : (
                                <ProjetsLogo className="projects-logo mobile" />
                            )}
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
                    transition: {
                        duration: 0.3,
                        yoyo: Infinity,
                        ease: 'easeInOut',
                    },
                }}
            >
                <a href={DARDE_Marina_CV} download="DARDE_Marina_CV.pdf">
                    {dimension.width > 768 ? (
                        `Télécharger mon CV`
                    ) : (
                        <Download className="download mobile" />
                    )}
                </a>
            </motion.div>
        </div>
    );
};

export default Navigation;

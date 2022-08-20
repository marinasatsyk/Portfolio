import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { useModal, Modal } from '../../body/Modal';

import logo from '../../../assets/LogoLight.png';
import './navigation.css';

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
                    <li>
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Page d'accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/cv"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            CV
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/skills"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Competences
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Mes projets
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="contact-me">Contactez-moi</div>
        </div>
    );
};

export default Navigation;

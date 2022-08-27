import './footer.css';
import { ReactComponent as Inlogo } from '../../assets/linkedin-brands.svg';
import { ReactComponent as GitHubLogo } from '../../assets/github-brands.svg';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <>
            <footer className="footer-main">
                <nav>
                    <ul className="footer-nav">
                        <li>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.linkedin.com/in/marinadarde/"
                            >
                                <Inlogo className="inlogo svg" />
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://github.com/marinasatsyk?tab=repositories"
                            >
                                <GitHubLogo className="gitHubLogo svg" />
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="http://videezy.com/"
                                className="licence"
                            >
                                Images d’archives gratuites par Videezy
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    );
};

export default Footer;

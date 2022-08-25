import './footer.css';
import { ReactComponent as Inlogo } from '../../assets/linkedin-brands.svg';
import { ReactComponent as GitHubLogo } from '../../assets/github-brands.svg';
const Footer = () => {
    return (
        <>
            <footer className="footer-main">
                <nav>
                    <ul className="footer-nav">
                        <li
                            onClick={() =>
                                window.open(
                                    'https://www.linkedin.com/in/marinadarde/'
                                )
                            }
                        >
                            <Inlogo className="inlogo svg" />
                            <div>Mon profil LinkedIn</div>
                        </li>
                        <li
                            onClick={() =>
                                window.open(
                                    'https://github.com/marinasatsyk?tab=repositories'
                                )
                            }
                        >
                            <GitHubLogo className="gitHubLogo svg" />
                            <div>Mon profil GitHub</div>
                        </li>
                        <li>
                            <a
                                rel="nofollow"
                                target="_blank"
                                href="http://videezy.com/"
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

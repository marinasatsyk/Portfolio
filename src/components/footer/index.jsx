import './footer.css';
import inlogo from '../../assets/linkedin-brands.svg';
import gitHubLogo from '../../assets/github-brands.svg';
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
                            <img src={inlogo} alt="" className="inlogo" />
                            <div>Mon profil LinkedIn</div>
                        </li>
                        <li
                            onClick={() =>
                                window.open(
                                    'https://github.com/marinasatsyk?tab=repositories'
                                )
                            }
                        >
                            <img
                                src={gitHubLogo}
                                alt=""
                                className="gitHubLogo"
                            />
                            <div>Mon profil GitHub</div>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    );
};

export default Footer;

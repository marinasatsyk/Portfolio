import './footer.css';
import inlogo from '../../assets/linkedin-brands.svg';
import gitHubLogo from '../../assets/github-brands.svg';
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <img src={inlogo} alt="" className="inlogo" />
                <img src={gitHubLogo} alt="" className="gitHubLogo" />
            </footer>
        </>
    );
};

export default Footer;

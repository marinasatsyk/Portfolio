import logo from '../../../assets/LogoLight.png';
import './navigation.css';

const Navigation = () => {
    return (
        <div className="wrap-nav">
            <nav>
                <div className="logo-wrap">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="wrap-options">
                    <div>A propos de moi</div>
                    <div>CV</div>
                    <div>Competences</div>
                    <div>Mes projets</div>
                </div>
                <div className="contact-me">Contactez-moi</div>
            </nav>
        </div>
    );
};

export default Navigation;

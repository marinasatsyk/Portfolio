// import background from '../../assets/header.svg';
import background from '../../assets/svg/ellipses/Frame_ellipses.svg';
// import bg1 from '../../assets/svg/ellipses/Ellips_52.svg';

import './info.css';

import Typewriter from 'typewriter-effect';
const InfoBlock = () => {
    const text1 = `Bonjour, je m'appelle Marina DARDE. `;
    const text2 = `Je suis Développeuse Front-End`;
    return (
        <div className="info">
            {/* <img
                src={background}
                alt="bacground"
                style={{ width: '100%', objectFit: 'cover' }}
            /> */}

            <div className="wrap-about">
                <div className="about">
                    <Typewriter
                        options={{
                            strings: [
                                `Bonjour, je m'appelle Marina DARDÉ.`,
                                `Je suis Développeuse Front-End`,
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default InfoBlock;

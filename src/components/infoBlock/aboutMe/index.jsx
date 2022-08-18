import myPhoto from '../../../assets/photos_CV_2.png';
import './aboutMe.css';

const AboutMe = () => {
    return (
        <div className="wrap-aboutMe">
            <div className="wrap-photo">
                <div className="photo-container">
                    <img src={myPhoto} alt="" />
                </div>
            </div>
            <div className="aboutMe">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                totam ea in, voluptas, pariatur voluptatum quis est praesentium
                ut quasi aliquid! Aspernatur officiis beatae impedit soluta sed
                doloribus eveniet debitis.
            </div>
        </div>
    );
};

export default AboutMe;

import myPhoto from '../../../assets/photos_CV_2.png';
import { data_about_me } from '../../data_about';
import ellipses from '../../../assets/svg/ellipses/Frame_ellipses.svg';
import quote_l from '../../../assets/quote-left.svg';
import quote_r from '../../../assets/quote-right.svg';
import pc from '../../../assets/pc.png';
import question from '../../../assets/circle_question.svg';
import action from '../../../assets/person_chalkboard.svg';
import proposition from '../../../assets/bullhorn.svg';
import idea from '../../../assets/lightbulb.svg';
import enthousiasme from '../../../assets/briefcase.svg';
import hand from '../../../assets/handshake.svg';
import './aboutMe.css';
import { useLocation } from 'react-router';
const AboutMe = () => {
    let url = useLocation();
    console.log(url);

    return (
        <div id="wrapper-aboutMe-main">
            {/* <img src={pc} alt="" className="pc" /> */}
            <article className="wrap-aboutMe">
                <article className="aboutMe">
                    <section className="about_me">
                        <div className="quote_block">
                            <span className="wrap_quote l">
                                <img src={quote_l} alt="" className="quote" />
                            </span>

                            <h3 className="content-quote">
                                {data_about_me.quote.text}
                            </h3>
                            <span className="wrap_quote r">
                                <img src={quote_r} alt="" className="quote" />
                            </span>

                            <div className="author">
                                {data_about_me.quote.author}
                            </div>
                        </div>
                    </section>

                    <section id="wrap-content">
                        <div className="presentation">
                            <div className="wrap-photo">
                                <div className="photo-container">
                                    <img src={myPhoto} alt="" />
                                </div>
                            </div>
                            <div className="presentation-content">
                                <h4>{data_about_me.about[0][0]}</h4>
                                <div className="content-label">
                                    {data_about_me.about[0][1]}
                                </div>
                                <div className="content-content">
                                    {data_about_me.about[0][2]}
                                </div>
                            </div>
                        </div>

                        <div className="wrap-all-description">
                            {data_about_me.about[1].map((item, index) => (
                                <div
                                    className="wrarp-description-item"
                                    key={index}
                                >
                                    <div
                                        className="description-item-title wrarp-description"
                                        key={`${index}-title`}
                                    >
                                        {item.id === 1 && (
                                            <div
                                                className="img_about_wrap"
                                                key={`${index}-${item.id}-wrap`}
                                            >
                                                <img
                                                    src={question}
                                                    alt=""
                                                    key={`${index}-${item.id}`}
                                                    className="about_icon"
                                                />
                                            </div>
                                        )}
                                        {item.id === 2 && (
                                            <div
                                                className="img_about_wrap"
                                                key={`${index}-${item.id}-wrap`}
                                            >
                                                <img
                                                    src={idea}
                                                    alt=""
                                                    key={`${index}-${item.id}`}
                                                    className="about_icon"
                                                />
                                            </div>
                                        )}
                                        {item.id === 3 && (
                                            <div
                                                className="img_about_wrap"
                                                key={`${index}-${item.id}-wrap`}
                                            >
                                                <img
                                                    src={enthousiasme}
                                                    alt=""
                                                    key={`${index}-${item.id}`}
                                                    className="about_icon"
                                                />
                                            </div>
                                        )}
                                        {item.id === 4 && (
                                            <div
                                                className="img_about_wrap"
                                                key={`${index}-${item.id}-wrap`}
                                            >
                                                <img
                                                    src={proposition}
                                                    alt=""
                                                    key={`${index}-${item.id}`}
                                                    className="about_icon"
                                                />
                                            </div>
                                        )}
                                    </div>
                                    {/* <div className="border-line"></div> */}
                                    <div
                                        className="description-item-content wrarp-description"
                                        key={`${index}-content`}
                                    >
                                        {item.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="wrarp-description-item conclusion">
                            <div className="img_about_wrap conclusion">
                                <img src={hand} alt="" className="about_icon" />
                            </div>
                            <div className="description-item-content wrarp-description">
                                {data_about_me.conclusion}
                            </div>
                        </div>
                    </section>
                </article>
            </article>
        </div>
    );
};

export default AboutMe;

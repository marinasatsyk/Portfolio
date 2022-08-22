import { cv } from '../../data_cv';
import RatingScale from './ratingScale';
import myPhoto from '../../../assets/photos_CV_2.png';
import filecv from '../../../assets/cv.pdf';

import './cv.css';
const CV = () => {
    return (
        <div className="wrap-cv">
            {/* <div className="telecharger">
                <a href={filecv} download></a>
            </div> */}
            <article className="cv">
                <header className="cv">
                    <div className="presentation-group">
                        <h1 className="nom">{cv.nom}</h1>
                        <div className="phone">{cv.phone}</div>
                        <div className="mail">{cv.mail}</div>
                        <div className="location">{cv.location}</div>
                    </div>
                    <div className="wrap-photo cv">
                        <div className="photo-container cv">
                            <img src={myPhoto} alt="" />
                        </div>
                    </div>
                </header>
                <section className="post">
                    <h1>{cv.post}</h1>
                    <div className="slogan">
                        {cv.intro.map((item, index) => (
                            <div key={`${index}-slogan`}>{item}</div>
                        ))}
                    </div>
                </section>
                <div className="wrap-content-cv">
                    <div className="left-side-cv">
                        <section className="hard-skills">
                            <h4>Compétences techniques</h4>
                            <div className="wrap-list-hard-skills">
                                <ul>
                                    {cv.hardSkills.map((skill, index) => (
                                        <li key={`${index}-skill`}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                        <section className="languages">
                            <h4>Langages, librairies</h4>
                            <div className="wrap-list-languages">
                                <ul>
                                    {cv.languages.map((group, index) => (
                                        <li key={`${index}-language`}>
                                            {group.map((item) => (
                                                <span
                                                    key={item}
                                                    className={item}
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                        <section className="applications">
                            <h4>Logiciels et environnements</h4>
                            <div className="wrap-list-applications">
                                <ul>
                                    {cv.applications.map(
                                        (application, index) => (
                                            <li key={`${index}-application`}>
                                                {application}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </section>
                        <section className="skills-pro">
                            <h4>
                                Compétences professionnelles et linguistiques
                            </h4>
                            <div className="wrap-list-skills-pro">
                                <ul>
                                    {cv.skillsPro.map((skill, index) => (
                                        <li
                                            key={`${index}-skillPro`}
                                            className="skillPro"
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="wrap-foreign-languages">
                                <ul className="foreign-languages">
                                    {cv.skillsLang.map((item, index) => (
                                        <li
                                            key={`${index}-language`}
                                            className="item-language"
                                        >
                                            <div className="foreign-language">
                                                <span
                                                    key={`${index}-title-language`}
                                                    className="title-language"
                                                >
                                                    {item.language}
                                                </span>
                                                <span
                                                    key={`${index}-level-language`}
                                                    className="level-language"
                                                >
                                                    {`(${item.level})`}
                                                </span>
                                            </div>
                                            <div
                                                key={`${index}-rank-language-wrap`}
                                                className="rank-language-wrap"
                                            >
                                                <RatingScale
                                                    scaleValue={item.points}
                                                    key="rank-language"
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className="right-side-cv">
                        <section className="wrap-list-education">
                            <h4>Formation</h4>

                            {cv.education.map((item, index) => (
                                <div
                                    key={`${index}-institution-wrap`}
                                    className={`${item.class}-institution-wrap`}
                                >
                                    <div
                                        key={`${index}-institution`}
                                        className="institution"
                                    >
                                        <span
                                            key={`${index}-institution-year`}
                                            className="year-education"
                                        >
                                            {item.period}
                                        </span>
                                        <span
                                            key={`${index}-institution-title`}
                                            className="title-education"
                                        >
                                            {item.name}
                                        </span>
                                    </div>
                                    <div
                                        key={`${index}-institution-profession`}
                                        className="profession-eductation"
                                    >
                                        {item.profession}
                                    </div>
                                    <div
                                        key={`${index}-degree`}
                                        className="degree"
                                    >
                                        {item.degree}
                                    </div>
                                    {item.note && (
                                        <div key={`${index}-note`}>
                                            {item.note}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </section>

                        <section className="experience-pro">
                            <h4>Expériences Professionnelles</h4>

                            {cv.experience.map((item, index) => (
                                <div className="wrap-exprience">
                                    {item.employer ? (
                                        <>
                                            <div
                                                key={`${index}-title-experience`}
                                                className="title-experience"
                                            >
                                                {item.title}
                                            </div>
                                            <div
                                                key={`${index}-employer-experience`}
                                                className="employer-experience"
                                            >
                                                <span
                                                    key={`${index}-employer-title`}
                                                >
                                                    {' '}
                                                    {item.employer}
                                                </span>
                                                <span
                                                    key={`${index}-employer-period`}
                                                >
                                                    {' '}
                                                    {item.period}
                                                </span>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                key={`${index}-title-experience`}
                                                className="title-experience"
                                            >
                                                <span
                                                    key={`${index}-employer-title`}
                                                >
                                                    {item.title}
                                                </span>
                                                <span
                                                    key={`${index}-employer-period`}
                                                >
                                                    {item.period}
                                                </span>
                                            </div>
                                        </>
                                    )}
                                    <ul
                                        key={`${index}-list-experience`}
                                        className="list-experience"
                                    >
                                        {item.list.map((item, index) => (
                                            <li
                                                key={`${index}-list-experience-item`}
                                                className="list-experience-item"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </section>
                        <section className="wrap-list-skills-soft">
                            <h4>Soft Skills</h4>

                            <ul>
                                {cv.skillsSoft.map((skill, index) => (
                                    <li
                                        key={`${index}-skillSoft`}
                                        className="skillSoft"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>
            </article>
        </div>
    );
};
export default CV;

import { cv } from '../../data_cv';
import RatingScale from './ratingScale';
import './cv.css';
const CV = () => {
    return (
        <div className="wrap-cv">
            <article className="cv">
                <header className="cv" style={{ height: '100px' }}>
                    <div className="presentation-group">
                        <h1 className="nom">{cv.nom}</h1>
                        <div className="phone">{cv.phone}</div>
                        <div className="mail">{cv.mail}</div>
                        <div className="location">{cv.location}</div>
                    </div>
                    <div className="wrap-img">
                        <img src="" alt="" />
                    </div>
                </header>
                <section className="post">
                    <h1>{cv.post}</h1>
                    <div className="slogan">{cv.intro}</div>
                </section>
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
                                        <span key={item} className={item}>
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
                            {cv.applications.map((application, index) => (
                                <li key={`${index}-application`}>
                                    {application}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section className="skills-pro">
                    <h4>Compétences professionnelles et linguistiques</h4>
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
                                <li key={`${index}-language`}>
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
                                            ({item.level})
                                        </span>
                                        <span
                                            key={`${index}-rank-language-wrap`}
                                            className="rank-language-wrap"
                                        >
                                            <RatingScale
                                                scaleValue={item.points}
                                                key="rank-language"
                                            />
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
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

                <section className="wrap-list-education">
                    <h4>Formation</h4>

                    {cv.education.map((item, index) => (
                        <>
                            <div
                                key={`${index}-institution`}
                                className="institution"
                            >
                                <span
                                    key={`${index}-institution-year`}
                                    className="year-eductation"
                                >
                                    {item.period}
                                </span>
                                <span
                                    key={`${index}-institution-title`}
                                    className="title-eductation"
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
                            <div key={`${index}-degree`} className="degree">
                                {item.degree}
                            </div>
                            {item.note && (
                                <div key={`${index}-note`}>{item.note}</div>
                            )}
                        </>
                    ))}
                </section>

                <section className="experience-pro">
                    <h4>Expériences Professionnelles</h4>
                    {cv.experience.map((item, index) => (
                        <>
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
                                        <span key={`${index}-employer-title`}>
                                            {' '}
                                            {item.employer}
                                        </span>
                                        <span key={`${index}-employer-period`}>
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
                                        <span key={`${index}-employer-title`}>
                                            {item.title}
                                        </span>
                                        <span key={`${index}-employer-period`}>
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
                        </>
                    ))}
                </section>
            </article>
        </div>
    );
};
export default CV;

import { cv } from '../../data_cv';
import RatingScale from './ratingScale';
import myPhoto from '../../../assets/photos_CV_2.png';
import { motion } from 'framer-motion';

import './cv.css';
const CV = () => {
    return (
        <motion.div className="wrap-cv">
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
                        <motion.section className="hard-skills">
                            <motion.h4
                                style={{ originX: 0 }}
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                Compétences
                            </motion.h4>
                            <motion.div
                                className="wrap-list-hard-skills"
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                <ul>
                                    {cv.hardSkills.map((skill, index) => (
                                        <li key={`${index}-skill`}>{skill}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.section>
                        <motion.section className="languages">
                            <motion.h4
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                Langages, librairies
                            </motion.h4>
                            <motion.div
                                className="wrap-list-languages"
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                <ul>
                                    {cv.languages.map((group, index) => (
                                        <li key={`${index}-language`}>
                                            {group.map((item, index) => (
                                                <span
                                                    key={`${item}-${index}`}
                                                    className={item}
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.section>
                        <motion.section className="applications">
                            <motion.h4
                                style={{ originX: 0 }}
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                Logiciels et environnements
                            </motion.h4>
                            <motion.div
                                className="wrap-list-applications"
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                <ul>
                                    {cv.applications.map(
                                        (application, index) => (
                                            <li key={`${index}-application`}>
                                                {application}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </motion.div>
                        </motion.section>
                    </div>
                    <div className="right-side-cv">
                        <motion.section className="wrap-list-education">
                            <motion.h4
                                style={{ originX: 0 }}
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                Formations
                            </motion.h4>

                            {cv.education.map((item, index) =>
                                item.class === 'first' ? (
                                    <motion.div
                                        key={`${index}-institution-wrap`}
                                        className={`${item.class}-institution-wrap`}
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1, duration: 0.5 }}
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
                                                key={`${index}-institution-profession`}
                                                className="profession-eductation"
                                            >
                                                {item.profession}
                                            </span>
                                        </div>

                                        <div
                                            key={`${index}-institution-title`}
                                            className="title-education"
                                        >
                                            {item.name}
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
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key={`${index}-institution-wrap`}
                                        className={`${item.class}-institution-wrap`}
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1, duration: 0.5 }}
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
                                                key={`${index}-degree`}
                                                className="degree"
                                            >
                                                {item.degree},{` `}
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
                                        {item.note && (
                                            <div key={`${index}-note`}>
                                                {item.note}
                                            </div>
                                        )}
                                    </motion.div>
                                )
                            )}
                        </motion.section>

                        <motion.section className="experience-pro">
                            <motion.h4
                                style={{ originX: 0 }}
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                Expériences
                            </motion.h4>

                            {cv.experience.map((item, index) => (
                                <motion.div
                                    className="wrap-exprience"
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                >
                                    {item.employer ? (
                                        <>
                                            <div
                                                key={`${index}-employer-period`}
                                            >
                                                {item.period}
                                            </div>

                                            <div
                                                key={`${index}-employer-experience`}
                                                className="employer-experience"
                                            >
                                                <span
                                                    key={`${index}-title-experience`}
                                                    className="title-experience"
                                                >
                                                    {item.title},
                                                </span>
                                                <span
                                                    key={`${index}-employer-title`}
                                                >
                                                    {' '}
                                                    {item.employer}
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
                                </motion.div>
                            ))}
                        </motion.section>
                        <motion.section className="wrap-list-skills-soft">
                            <motion.h4
                                style={{ originX: 0 }}
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                Qualités
                            </motion.h4>

                            <motion.ul
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                {cv.skillsSoft.map((skill, index) => (
                                    <li
                                        key={`${index}-skillSoft`}
                                        className="skillSoft"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </motion.ul>
                        </motion.section>

                        <motion.section className="skills-pro">
                            <motion.h4
                                style={{ originX: 0 }}
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                Compétences linguistiques
                            </motion.h4>
                            <motion.div
                                className="wrap-list-skills-pro"
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            ></motion.div>
                            <motion.div
                                className="wrap-foreign-languages"
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
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
                                                    Pkey="rank-language"
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.section>
                    </div>
                </div>
            </article>
        </motion.div>
    );
};
export default CV;

import { cv } from '../../data_cv';
import RatingScale from './ratingScale';
import myPhoto from '../../../assets/photos_CV_2.png';
import { motion } from 'framer-motion';

import './cv.css';
const CV = () => {
    return (
        <motion.div
            className="wrap-cv"
            // initial={{ opacity: 0, scale: 0 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ delay: 0.5, duration: 0.5 }}
        >
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
                        <motion.section
                            className="hard-skills"
                            // initial={{ opacity: 0, y: 50 }}
                            // animate={{ opacity: 1, y: 1 }}
                            // transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <motion.h4
                                style={{ originX: 0 }}
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                Compétences techniques
                            </motion.h4>
                            <motion.div
                                className="wrap-list-hard-skills"
                                style={{ originX: 0 }}
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                <ul>
                                    {cv.hardSkills.map((skill, index) => (
                                        <li key={`${index}-skill`}>{skill}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.section>
                        <motion.section
                            className="languages"
                            // initial={{ opacity: 0, y: 50 }}
                            // animate={{ opacity: 1, y: 1 }}
                            // transition={{ delay: 1, duration: 0.5 }}
                        >
                            <motion.h4
                                style={{ originX: 0 }}
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                Langages, librairies
                            </motion.h4>
                            <motion.div
                                className="wrap-list-languages"
                                style={{ originX: 0 }}
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
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
                            </motion.div>
                        </motion.section>
                        <motion.section
                            className="applications"
                            // initial={{ opacity: 0, y: 50 }}
                            // animate={{ opacity: 1, y: 1 }}
                            // transition={{ delay: 1.5, duration: 0.5 }}
                        >
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
                                style={{ originX: 0 }}
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
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
                        <motion.section
                            className="skills-pro"
                            // initial={{ opacity: 0, y: 50 }}
                            // animate={{ opacity: 1, y: 1 }}
                            // transition={{ delay: 1.5, duration: 0.5 }}
                        >
                            <motion.h4
                                style={{ originX: 0 }}
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                Compétences professionnelles et linguistiques
                            </motion.h4>
                            <motion.div
                                className="wrap-list-skills-pro"
                                style={{ originX: 0 }}
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
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
                            </motion.div>
                            <motion.div
                                className="wrap-foreign-languages"
                                style={{ originX: 0 }}
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
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
                                                    key="rank-language"
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.section>
                    </div>
                    <div className="right-side-cv">
                        <motion.section
                            className="wrap-list-education"
                            // initial={{ opacity: 0, y: 50 }}
                            // animate={{ opacity: 1, y: 1 }}
                            // transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <motion.h4
                                style={{ originX: 0 }}
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                Formation
                            </motion.h4>

                            {cv.education.map((item, index) => (
                                <motion.div
                                    key={`${index}-institution-wrap`}
                                    className={`${item.class}-institution-wrap`}
                                    style={{ originX: 0 }}
                                    initial={{
                                        opacity: 0,
                                        scaleX: 0,
                                    }}
                                    animate={{ opacity: 1, scaleX: 1 }}
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
                                </motion.div>
                            ))}
                        </motion.section>

                        <motion.section
                            className="experience-pro"
                            // initial={{ opacity: 0, y: 50 }}
                            // animate={{ opacity: 1, y: 1 }}
                            // transition={{ delay: 1, duration: 0.5 }}
                        >
                            <motion.h4
                                style={{ originX: 0 }}
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                Expériences Professionnelles
                            </motion.h4>

                            {cv.experience.map((item, index) => (
                                <motion.div
                                    className="wrap-exprience"
                                    style={{ originX: 0 }}
                                    initial={{
                                        opacity: 0,
                                        scaleX: 0,
                                    }}
                                    animate={{ opacity: 1, scaleX: 1 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                >
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
                                </motion.div>
                            ))}
                        </motion.section>
                        <motion.section
                            className="wrap-list-skills-soft"
                            // initial={{ opacity: 0, y: 50 }}
                            // animate={{ opacity: 1, y: 1 }}
                            // transition={{ delay: 1.5, duration: 0.5 }}
                        >
                            <motion.h4
                                style={{ originX: 0 }}
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                Soft Skills
                            </motion.h4>

                            <motion.ul
                                style={{ originX: 0 }}
                                initial={{
                                    opacity: 0,
                                    scaleX: 0,
                                }}
                                animate={{ opacity: 1, scaleX: 1 }}
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
                    </div>
                </div>
            </article>
        </motion.div>
    );
};
export default CV;

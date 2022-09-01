import './aboutMe.css';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <div id="wrapper-aboutMe-main">
            <article className="aboutMe">
                <section className="about_me">
                    <h1>
                        {' '}
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(150)
                                    .typeString(`DARDÉ `)
                                    .pauseFor(100)
                                    .typeString(`Marina`)
                                    .stop()
                                    .start();
                            }}
                        />
                    </h1>

                    <motion.div
                        style={{ fontFamily: 'Baloo Da 2' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.3, duration: 1 }}
                    >
                        Développeuse Front-End
                    </motion.div>
                </section>
            </article>
        </div>
    );
};

export default AboutMe;

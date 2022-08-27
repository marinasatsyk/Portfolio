import { useMemo } from 'react';
import { projects } from '../../data_projects';
import Card from './card';
import './projects.css';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
    const [...projCopy] = [...projects].reverse();
    return (
        <article className="proj">
            <h1 className="title">Mes projets</h1>
            <div className="wrap-projects">
                {projCopy.map((item, index) => (
                    // <motion.div
                    //     initial={{ opacity: 0 }}
                    //     animate={{ opacity: 1 }}
                    //     transition={{ delay: (index + 1) / 10 }}
                    // >
                    <Card item={item} index={index} key={index} />
                    // </motion.div>
                ))}
            </div>
        </article>
    );
};
export default Projects;

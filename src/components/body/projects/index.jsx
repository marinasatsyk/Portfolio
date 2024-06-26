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
                    <Card item={item} index={index} key={index} />
                ))}
            </div>
        </article>
    );
};
export default Projects;

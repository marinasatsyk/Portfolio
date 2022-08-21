import { useMemo } from 'react';
import { projects } from '../../data_projects';
import Card from './card';
import './projects.css';

const Projects = () => {
    const [...projCopy] = [...projects].reverse();
    return (
        <article className="proj">
            <h1 className="title">Mes projets</h1>
            <div className="wrap-projects">
                {projCopy.map((item, index) => (
                    // <div className="wrap-cover-proj" key={index}>
                    //     <img
                    //         src={item.localLink}
                    //         alt=""
                    //         className="cover-proj"
                    //     />

                    // </div>
                    <Card item={item} index={index} key={index} />
                ))}
            </div>
        </article>
    );
};
export default Projects;

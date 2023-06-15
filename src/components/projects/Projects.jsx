import './project.css';
import { projectsData } from '../../utils';
import { Card } from './Card';

export const Projects = () => {

    return (
        <div id="projects" className='projects'>
            <div className='faint-heading'>&lt; Projects /&gt;</div>
            <div className='projects-container'>
                {projectsData.map(item => <Card key={item.id} {...item} />)}
            </div>
        </div>
    );
};
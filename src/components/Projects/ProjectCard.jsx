import React from 'react';
import './Projects.css';

const ProjectCard = ({
    projectName,
    projectDescription,
    imageUrl,
    videoUrl,
    projectUrl,
}) => {
    return (
        <div className='project-card'>
            <div className='image-container'>
                <a href={projectUrl} className='project-external-link'>
                    <img
                        src={imageUrl}
                        alt='project'
                        className='project-image'
                        height='300px'
                        width='500px'
                    />
                </a>
            </div>

            <div className='project-details-container'>
                <h2 className='project-heading'>{projectName}</h2>
                <p className='project-details'>{projectDescription}</p>
                {videoUrl != ''?
                <a href={videoUrl} className='project-yt-link'>
                    Watch More!
                </a>:''}     
            </div>
        </div>
    );
};

export default ProjectCard;
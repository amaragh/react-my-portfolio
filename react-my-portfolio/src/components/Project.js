import React from 'react';


function Project() {
    const projects = [
        {
            name: 'Farmers Market',
            languages: 'Node',
            repoLink: 'https://github.com/fdeaquino/Farmers_Market'
        },
        {
            name: 'Tempo Run',
            languages: 'HTML CSS',
            repoLink: 'https://github.com/amaragh/tempo-run-songfinder'
        },
        {
            name: 'Run Buddy',
            languages: 'HTML CSS',
            repoLink: 'https://github.com/amaragh/run-buddy'
        },
        {
            name: 'Weather Dashboard',
            languages: 'HTML CSS',
            repoLink: 'https://github.com/amaragh/weather-dashboard'
        },
        {
            name: 'Note Taker',
            languages: 'Node',
            repoLink: 'https://github.com/amaragh/note-taker'
        },
        {
            name: 'Tech Blog',
            languages: 'HTML CSS',
            repoLink: 'https://github.com/amaragh/tech-blog-mvc'
        }
    ];

    return (
        <div className='row justify-content-center'>
            {projects.map((project) =>
                <section className='project col-md-10 col-lg-6' >
                    <img
                        src={require(`../assets/images/${project.name}.png`)}
                        alt={project.name}
                        key={project.name}
                        className='col-12'
                    />
                    <h4>{project.name}</h4>
                    <p>This is a description of the {project.name} project. Click <a href={project.repoLink} target="_blank" rel="noreferrer">here</a> to see Github repo.</p>
                </section>
            )}

        </div>
    )
};

export default Project;
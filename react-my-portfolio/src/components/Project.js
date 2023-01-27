import React from 'react';


function Project() {
    const projects = [
        {
            name: 'Farmers Market',
            languages: 'Node',
            repoLink: 'https://github.com/fdeaquino/Farmers_Market',
            appLink: 'https://byte-farmers-market.herokuapp.com/'
        },
        {
            name: 'Tempo Run',
            languages: 'HTML CSS',
            repoLink: 'https://github.com/amaragh/tempo-run-songfinder',
            appLink: 'https://amaragh.github.io/tempo-run-songfinder/'
        },
        {
            name: 'Brick Street',
            languages: 'MERN',
            repoLink: 'https://github.com/Steezy1416/brickstreet',
            appLink: 'https://brickstreet.herokuapp.com/'
        },
        {
            name: 'Run Buddy',
            languages: 'HTML CSS',
            repoLink: 'https://github.com/amaragh/run-buddy',
            appLink: 'https://amaragh.github.io/run-buddy/'
        },
        {
            name: 'Weather Dashboard',
            languages: 'HTML CSS',
            repoLink: 'https://github.com/amaragh/weather-dashboard',
            appLink: 'https://amaragh.github.io/weather-dashboard/'
        },
        {
            name: 'Note Taker',
            languages: 'Node',
            repoLink: 'https://github.com/amaragh/note-taker',
            appLink: 'https://note-taker-876.herokuapp.com/'
        },
        {
            name: 'Tech Blog',
            languages: 'HTML CSS',
            repoLink: 'https://github.com/amaragh/tech-blog-mvc',
            appLink: 'https://the-tech-blog-876.herokuapp.com/'
        }
    ];

    return (
        <div className='row justify-content-center'>
            {projects.map((project) =>
                <section className='project col-md-10 col-lg-6 text-center' >
                    <h4>{project.name}</h4>
                    <p>This is a description of the {project.name} project. Click <a href={project.repoLink} target="_blank" rel="noreferrer">here</a> to see Github repo. Click <a href={project.appLink} target="_blank" rel="noreferrer">here</a> to see the deployed application.</p>
                    <img
                        src={require(`../assets/images/${project.name}.png`)}
                        alt={project.name}
                        key={project.name}
                        className='col-11 '
                    />
                </section>
            )}

        </div>
    )
};

export default Project;
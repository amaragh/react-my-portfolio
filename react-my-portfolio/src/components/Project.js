import React from 'react';


function Project() {
    const projects = [
        {
            name: 'Farmers Market',
            languages: 'Node',
        },
        {
            name: 'Tempo Run',
            languages: 'HTML CSS',
        },
        {
            name: 'Run Buddy',
            languages: 'HTML CSS',
            appLink: '',
            repoLink: ''
        },
        {
            name: 'Weather Dashboard',
            languages: 'HTML CSS',
        },
        {
            name: 'Note Taker',
            languages: 'Node',
        },
        {
            name: 'Tech Blog',
            languages: 'HTML CSS',
        }
    ];
    let projectImages = projects.map((project) =>
        <img src={require(`../assets/images/${project.name}.png`)} alt={project.name} />
    )
    return (
        <div className='row'>
            {projects.map((project) =>
                <section className='project col-md-6' >

                    <img
                        src={require(`../assets/images/${project.name}.png`)}
                        alt={project.name}
                        key={project.name}
                        className='col-12'
                    />
                </section>



            )}

        </div>
    )
};

export default Project;
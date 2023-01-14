import React, { useState } from 'react';


function Project() {
    const projects = [
        {
            name: 'Run Buddy',
            languages: 'HTML CSS',
            appLink:'',
            repoLink:''
        },
        {
            name: 'Tempo Run',
            languages: 'HTML CSS',
        },
        {
            name: 'Farmers Market',
            languages: 'Node',
        },
        {
            name: '2Run Buddy',
            languages: 'HTML CSS',
        },
        {
            name: '2Tempo Run',
            languages: 'HTML CSS',
        },
        {
            name: '2Farmers Market',
            languages: 'Node',
        }
    ];
    let projectImages = projects.map((project) => 
    <img src={require(`../assets/images/${project.name}.png`)} alt={project.name}/>
    )
    return (
        <div>
            {projectImages}

            {/* {projects.map((project) =>
                <img
                    src={require(`../assets/images/${project.name}.png`)}
                    alt={project.name}
                    className="img-thumbnail mx-1"
                key={project.name}
                />
            )} */}
        </div>
    )
};

export default Project;
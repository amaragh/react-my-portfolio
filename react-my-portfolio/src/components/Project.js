import React, { useState } from 'react';


function Project() {
    const [projects] = [
        {
            name: 'Run Buddy',
            languages: 'HTML CSS',
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

    return (
        <div>
            {projects.map((image) => (
                    <img
                        src={require(`../../assets/small/${name}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                     
                    />
                ))}
        </div>
    )
};

export default Project;
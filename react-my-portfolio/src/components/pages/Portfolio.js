import React, { useState } from 'react'
import Project from '../Project';

function Portfolio() {

    return (
        <div>
            <h1>My Projects
                <a href='#'>Download Resume</a>
            </h1>
           
            <section>
                <Project/>
            </section>
        </div>
    )
}

export default Portfolio;
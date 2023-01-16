import React from 'react'
function Resume() {
    return (
        <div className='resume'>
            <div className='resume-header'>
                <h1>Resume</h1>
                <a href='https://drive.google.com/file/d/1Kpwn7Y7ALDPw1sfmwBot2wSswp77TKtP/view?usp=share_link'
                    target="_blank" rel="noreferrer"> Click here to download resume</a>
            </div>
            <div>
                <h2>Front-End Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Node.js</li>
                    <li>React.js</li>
                </ul>
            </div>
            <div>
                <h2>Back-End Proficiencies</h2>
                <ul>
                    <li>Node.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;
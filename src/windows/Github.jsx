import React from 'react'
import MacWimdow from './MacWimdow'
import githubData from "../Data/github.json"
import "./github.scss"

const Github = ({ windowName, setWindowsState }) => {
    return (
        <MacWimdow windowname={windowName} setWindowsState={setWindowsState}>
            <div className="cards">
                {githubData.map((project) => (
                    <div className="card" key={project.id}>
                        <img src={project.image} alt={project.title} />
                        <h1>{project.title}</h1>
                        <p className='description'>{project.description}</p>

                        <div className="tags">
                            {project.tags.map((tag, index) => (
                                <p className="tag" key={index}>{tag},</p>
                            ))}
                        </div>

                        <div className="urls">
                            <a href={project.repoLink} target="_blank" rel="noreferrer">
                                Repo
                            </a>
                            <a href={project.demoLink} target="_blank" rel="noreferrer">
                                Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </MacWimdow>
    )
}

export default Github

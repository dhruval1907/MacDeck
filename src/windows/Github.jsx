import React from 'react'
import MacWimdow from './MacWimdow'
import githubData from "../Data/github.json";
import "./github.scss"
const Github = () => {

    const GitCard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => {
        return <div className='card'>
            <img src={data.image} alt="" />
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <div className="tags">
                {data.tags.map((tag) => {
                    return <p className='tag'>{tag}</p>
                })}
            </div>

            <div className='urls'>
                <a href={data.repoLink}>Repos</a>
                <a href={data.demoLink}>DemoLink</a>
            </div>
        </div>
    }

    return (
        <div>
            <MacWimdow  >
                return (
                <div className='cards'>
                    {githubData.map((project) => (
                        <div key={project.id}>
                            <div className='card'>
                                <img src={project.image} alt="" />
                                <h1>{project.title}</h1>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                );

            </MacWimdow>
        </div >
    )
}

export default Github
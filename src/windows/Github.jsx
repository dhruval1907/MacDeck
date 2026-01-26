import React from 'react'
import MacWimdow from './MacWimdow'
import githubData from "../Data/github.json";
const Github = () => {

    const gitCard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => {
        return <div className='card'>
            <img src={data.image} alt="" />
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <div className="tags">
                {data.tags.map((tag)=>{
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
                h1llo
                {githubData.map((project) => {
                    return <gitCard data={project}/>
                })}
            </MacWimdow>
        </div>
    )
}

export default Github
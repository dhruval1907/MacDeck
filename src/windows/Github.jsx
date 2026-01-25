import React from 'react'
import MacWimdow from './MacWimdow'
import githubData from "../Data/github.json";
const Github = () => {

    

  return (
    <div>
        <MacWimdow  >
            h1llo
            {githubData.map(()=>{

            })}
        </MacWimdow>
    </div>
  )
}

export default Github
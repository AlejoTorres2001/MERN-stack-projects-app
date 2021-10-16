import React from 'react'

const Project = ({project}) => {
    return (
        <div>
            <h1>{project.name}</h1>
            <h2>{project.description}</h2>
            {project.coWorkers.map((cw)=><h3>cw</h3>)}


        </div>
    )
}

export default Project

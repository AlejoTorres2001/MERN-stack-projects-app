import React, { Suspense, useEffect, useState } from "react";
import useAuth from "../auth/useAuth";


const ProjectsPage = () => {
  const {getProjects} =useAuth()
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    const handleProjects = async()=>{
      const projects= await getProjects()
      setProjects(projects)

    }
    handleProjects()
  }, []);
  if(projects===null){
    return(
      <div>
        <h1>Loding projects...</h1>
      </div>
    )
  }
  return (
    <div>
    {projects.map(pro =><h1 key={pro._id}>{pro.name}</h1>)}
    </div>
  );
};

export default ProjectsPage;

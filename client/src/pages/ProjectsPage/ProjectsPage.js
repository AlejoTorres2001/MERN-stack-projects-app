import React, {  useEffect, useState } from "react";
import useAuth from "../../auth/useAuth";
import Project from "./components/Project";


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
      <h1>Loading...</h1>
    )
  }
  return (
    <div>
    {projects.map(pro =><Project key={pro._id} project={pro}></Project>)}
    </div>
  );
};

export default ProjectsPage;

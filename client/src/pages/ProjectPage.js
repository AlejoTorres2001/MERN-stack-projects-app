import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import useAuth from "../auth/useAuth";
const ProjectPage = () => {
  let { projectId } = useParams();
  const {getProject} = useAuth();
  const [project, setProject] = useState(null);
  useEffect(() => {
    const handleProjects = async()=>{
      const id = projectId.substring(1)
      const project= await getProject(id)
      setProject(project)
    }
    handleProjects()
  }, []);
  if(project===null){
    return(
      <h1>Loading...</h1>
    )
  }
  return (
    <div>
      <h1>{project.name}</h1>
    </div>
  );
};

export default ProjectPage;

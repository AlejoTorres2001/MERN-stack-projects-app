import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import useAuth from "../auth/useAuth";
const ProjectPage = () => {
  let { projectId } = useParams();
  const {getProject} = useAuth();
  const [project, setProject] = useState(null);
  useEffect(() => {
    const handleProjects = async()=>{
      const project= await getProject(projectId)
      setProject(project)
    }
    handleProjects()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);
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

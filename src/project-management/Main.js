import React,{ useState } from 'react';
import ProjectList from './ProjectList';
import tempData from "./tempProjectData"

function Main()
{
    function getProjectName(event)
    {
        setProjectName(event.target.value)
    }
    function getProjectType(event)
    {
        setProjectType(event.target.value)
    }
    function getProjectVersion(event)
    {
        setProjectVersion(event.target.value)
    }
    let addProject = () =>
    {
        console.log("ProjectName : ",projectName)
        console.log("Project Type : ",projectType)
        console.log("Project Version : ",projectVerion)
        let newProject = {
            key: (tempData.length + 1),
            name: projectName,
            type: projectType,
            version: projectVerion
        }
        console.log(newProject)
        tempData.push(newProject)
    }
    const [projectName,setProjectName] = useState("")
    const [projectType,setProjectType] = useState("")
    const [projectVerion,setProjectVersion] = useState("")

    return (
        <div className='projects-section'>
            <div className='project-list-section'>
                <ProjectList />
            </div>
            <div className='add-project-section'>
                <h1>Add New Project</h1>
                <div className='input-section'>
                    <input type="text" onChange={getProjectName} placeholder='Enter Project Name' value={projectName}></input>
                    <input type="text" onChange={getProjectType} placeholder='Enter Project Type'></input>
                    <input type="text" onChange={getProjectVersion} placeholder='Enter Project Version'></input>
                    <div className='add-files'>
                        <button >Add Files</button>
                    </div>
                    <div className='add-project-btn'>
                        <button onClick={addProject}>Add Project</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main
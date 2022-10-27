import React,{ useState } from 'react';
import Project from './Project';
import tempData from "./tempProjectData"



function ProjectList()
{
    let [projectsList,setProjectList] = useState([]);
    function reload()
    {

        setProjectList(tempData)
    }

    return (
        <div className='project-list-div'>

            {
                projectsList.map((ele) =>
                {
                    return (
                        <Project key={ele.key} name={ele.name} type={ele.type} version={ele.version} size={ele.size} />
                    )
                })
            }
            <hr />
            <button onClick={reload}>Reload</button>
        </div>

    )
}
export default ProjectList
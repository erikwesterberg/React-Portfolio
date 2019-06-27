    
import React from "react"

const ProjectCard = (props) => {
    let project = props.project
    let url = project.URL

    if (url == "") {
        return (
            <div key={project.id} className="overflow-hidden border">
                <img src={project.image} className="block h-auto w-full" style={{ height: '350px', objectFit: 'cover' }} />

            <div className="px-6 py-4" style={{ minHeight: '150px' }} >
                <div className="font-bold text-xl mb-2">{project.name}</div>
                
                <p className="text-grey-darker text-base">{project.description}</p>
            </div>

            <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <a href={project.GitHub} target="_blank"><button className="bg-blue-darkest hover:bg-blue-dark text-white text-xs py-1 px-2 rounded-full">GitHub Details</button></a>
                <a href={project.URL} target="_blank" hidden><button className="bg-blue-darkest hover:bg-blue-dark text-white text-xs py-1 px-2 rounded-full">Deployed Website</button></a>
            </div>
            </div>
            )
        }

    else {
        return (
            <div key={project.id} className="overflow-hidden border">
                <img src={project.image} className="block h-auto w-full" style={{ height: '350px', objectFit: 'cover' }} />

            <div className="px-6 py-4" style={{ minHeight: '150px' }} >
                <div className="font-bold text-xl mb-2">{project.name}</div>
       
                <p className="text-grey-darker text-base">{project.description}</p>
            </div>

            <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <a href={project.GitHub} target="_blank"><button className="bg-blue-darkest hover:bg-blue-dark text-white text-xs py-1 px-2 rounded-full">GitHub Details</button></a>
                <a href={project.URL} target="_blank"><button className="bg-blue-darkest hover:bg-blue-dark text-white text-xs py-1 px-2 rounded-full">Deployed Website</button></a>
            </div>
            </div>

            )
        }

}

export default ProjectCard

    
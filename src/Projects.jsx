import React, { Component } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"
import { UndrawBookLover } from 'react-undraw-illustrations';

class Projects extends Component {
    constructor () {
        super();
        this.state = {
            projects: [ ]
        };
    }

    componentDidMount() {
        axios.get('./src/data/projects.json')
            .then(response => {
                this.setState({
                    projects: response.data
                })
            })
    }

    render () {
        const projects = this.state.projects
        let projectsList

        if (projects.length > 0) {
            projectsList = projects.map(project => {
                return (
                    <div key={project.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <ProjectCard project={project} />
                    </div>
                )
            })
        }

        return (
            <div className="content-wrapper">
                <div className="flex mb-4">
                    <div className="w-1/4">
                        <UndrawBookLover primaryColor='#12283a' height='200px' />
                    </div>
                    <div className="w-3/4">
                        <h1>My Projects</h1>
                        <p>This is a selection of some of my projects I have been working on.</p>
                    </div>

                </div>

                <div>
                    <div className="flex flex-wrap mx-2 lg:-mx-4">
                    {projectsList}
                    </div>
                </div>
            </div>
        )
    }
};

export default Projects;
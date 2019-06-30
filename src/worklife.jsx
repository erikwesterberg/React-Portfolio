import React, { Component } from "react"
import axios from "axios"






class Worklife extends Component {
    constructor () {
        super();
        this.state = {
            projects: [ ]
        };
    }

    componentDidMount() {
        axios.get('./src/data/work.json')
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
                   <div key={project.id}>
                       <Worklife project={project}/>

                   </div>
                )
            })
        }

        return (
            <div className="content-wrapper">
            <div className="flex mb-4">
                
                <div className="w-3/4">
                    <h1>Worklife</h1>
                    <p>Previous work and education.</p>
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

export default Worklife;
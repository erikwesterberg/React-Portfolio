import axios from "axios"
import React, { Component } from "react"


const Study = (props) => {
    let study = props.study
    return(
        <div class="border-dashed border-4 border-black-600 ..." >
            <div key={study.id} class="flex md:flex-row-reverse flex-wrap">
                <div class="w-full md:w-3/4 bg-gray-500 p-4 text-center text-gray-200">{study.subject}</div>
                <div class="w-full md:w-1/4 bg-gray-400 p-4 text-center text-gray-700">{study.school} {study.dates}</div>
                <div class="w-full md:w-3/4 bg-gray-500 p-4 text-center text-gray-200">{study.description}</div>
            </div>
        </div>
    )
}

class StudyLife extends Component {
    constructor() {
        super();
        this.state={
            study: [ ]
        }
    }


componentDidMount(){
    axios.get('./src/data/education.json')
    .then(response => {
        this.setState({
            study: response.data
        })
    })
}

render() {
    let study = this.state.study
    let studyLife

    if(study.length>0) {
        studyLife = study.map(study => {
            return (
                <div key={study.id}>
                    <Study study={study} />
                </div>
            )
        })
    }


        return (
            <>
            <h3 style={fucker}>My Education</h3>
                {studyLife}
            
            </>
        )
    }
}

const fucker = {
    fontSize: "50px",
    textAlign: "center"
    
}

export default StudyLife

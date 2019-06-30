import axios from "axios"
import React, { Component } from "react"

const Study = (props) => {
    let study = props.study
    return(
        <div key={study.id}>
            <li>
            {study.subject}
            {study.school}
            {study.description}
            {study.date}
            </li>
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
            <div>
                {studyLife}
            </div>
            </>
        )
    }
}


export default StudyLife

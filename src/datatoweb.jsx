import axios from "axios"
import React, { Component } from "react"




const Work = (props) => {
    let work = props.work 
    return(
        <div key={work.id}>
            <div>
                {work.title}
                {work.company}
                {work.dates}
                {work.description}

            </div>

        </div>
    )
}



class DataToWeb extends Component {
    constructor () {
        super();
        this.state = {
            work: [ ]
        };
    }

    componentDidMount() {
        axios.get('./src/data/work.json')
            .then(response => {
                this.setState({
                    work: response.data
                })
            })
    }

    render() {
        let work = this.state.work
        let workList

        if(work.length>0) {
            workList = workmap(work => {
                return (
                    <div key={work.id}>
                        <Work work={work} />
                    </div>
                )
            })
        }
    
        return (
            <>
            <div>WorkLife</div>
            {workList}
            </>
        )
    }
}   

export default DataToWeb;
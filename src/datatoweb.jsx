import axios from "axios"
import React, { Component } from "react"


const Work = (props) => {
    let work = props.work
    return(
        <div class="border-dashed border-4 border-black-600 ..." >
            <div key={work.id} class="flex md:flex-row-reverse flex-wrap">
                <div class="w-full md:w-3/4 bg-gray-500 p-4 text-center text-gray-200">{work.title}</div>
                <div class="w-full md:w-1/4 bg-gray-400 p-4 text-center text-gray-700">{work.company} {work.dates}</div>
                <div class="w-full md:w-3/4 bg-gray-500 p-4 text-center text-gray-200">{work.description}</div>
            </div>
        </div>
    )
}

class DataToWeb extends Component {
    constructor() {
        super();
        this.state={
            work: [ ]
        }
    }


componentDidMount(){
    axios.get('./src/data/work.json')
    .then(response => {
        this.setState({
            work: response.data
        })
    })
}

render() {
    let work = this.state.work
    let workLife

    if(work.length>0) {
        workLife = work.map(work => {
            return (
                <div key={work.id}>
                    <Work work={work} />
                </div>
            )
        })
    }


        return (
            <>
            <h3 style={fucker}>My work experience</h3>
                {workLife}
            
            </>
        )
    }
}

const fucker = {
    fontSize: "50px",
    textAlign: "center"
    
}

export default DataToWeb;
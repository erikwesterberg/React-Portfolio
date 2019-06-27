import React from "react"
import { UndrawWebsiteSetup } from 'react-undraw-illustrations';


const About = () => {
    return (
        
        <div className="content-wrapper">
          <div className="flex flex-wrap mb-4">
                <div className="w-full lg:w-1/4 md:w-1/2">
                    <UndrawWebsiteSetup primaryColor='#12283a' height='200px' />
                </div>
                <div className="w-full lg:w-3/4 md:w-1/2">
                    <h1>About Me</h1>
                    <p>IM LEARNING EVERYDAY!</p>
                    <ul>
                        <li>Proffesional plumber and Welder</li>
                        <li>Im in need of new challanges.</li>
                        <li>Will become a junior web developer.</li>
                        <li>Efficient team leader and coach.</li>
                    </ul>
                </div>
                </div>
            </div>
        
    )
}

export default About

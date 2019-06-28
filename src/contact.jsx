import React from "react"
import { UndrawNewsletter } from "react-undraw-illustrations";
import cool from "./image/hacker.png"


const Contact = () => {
    return (
        <form action="POST" data-netlify="true">
								<div class="fields">
									<div class="field half">
										<input type="text" name="name" id="name" placeholder="Name" />
									</div>
									<div class="field half">
										<input type="email" name="email" id="email" placeholder="Email" />
									</div>
									<div class="field">
										<textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
									</div>
									<div class="field">
										<div data-netlify-recaptcha="true"></div>
									</div>
								</div>
								<ul class="actions">
									<li><input type="submit" value="Send Message" class="button primary" /></li>
								</ul>
							</form>
    
            
            
    
    )
}


export default Contact

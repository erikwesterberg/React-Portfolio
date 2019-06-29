import React from "react"



const Contact = () => {
    return (
        <form action="POST" data-netlify="true" style={motherDiv}>
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

const motherDiv = {
    marginLeft: '40%',
    marginTop: '5%',
    textAlign: 'left',
    fontFamily: 'karla',
    fontWeight: 'bold',
    fontSize: '15px',
    lineHeight: '122px',
    letterSpacing: '-0.10em',
    
    
}


export default Contact

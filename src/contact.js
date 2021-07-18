import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
const Contact =()=>{
	return(
		<div class=" pt-5 text-center" id="contact" style={{'backgroundColor': " #f2f2f2"}}>
 
            <div class="col-12" >
                <div class="text-center"> 
                <button type="button" class="btn btn-black btn-black-outline active" href="#">DOWNLOAD THE FULL CV as .PDF
                </button></div>
            </div>

        <div >
        	<div class="row pt-2">
        		<div class="footer col-12 col-md-3">
        			<img src="https://img.icons8.com/carbon-copy/144/000000/info.png"/>

        		</div>
        		<div class="footer col-12 col-md-3">
        			<p class=""><strong>Address</strong><br/>
						New Bank Colony, Shyamchak, chhapra<br/>
						Saran, Bihar, India</p>
        		</div>
        		<div class="footer col-12 col-md-3">
        			<p class=""><strong>Contacts</strong><br></br>
						Email: shivamkkr.583@gmail.com<br></br>
						Phone: +91 9334975502 <br></br></p>
        		</div>
        		<div class="footer col-12 col-md-3">
        			<p class=""><strong>Links</strong><br></br>
        				<a class="text-dark" href="#"> Github</a><br></br>
        				<a class="text-dark" href="#"> Hackerrank</a><br></br>
        				<a class="text-dark" href="#"> Codechef</a><br></br>
        				<a class="text-dark" href="#"> Codeforces</a><br></br>
        			</p>
        		</div>
        	</div>
        </div>
       
    </div>
	)
}

export default Contact;
import React from 'react';

const Education = ()=>{
	return(
			<div  id="education">
			<div class="px-5"><h2><u>Education:</u></h2></div>
	    <div class="row mx-auto text-black py-5 text-center">

	      <div class="col-lg-4 col-lg-offset-4 ">
	        <div class= "logoholder " >
	        		 <img class="rounded-circle" alt="100x100" src={require("./images/bhagwat.jpg")} data-holder-rendered="true"/>
          		</div>

	        <h2>Secondary Education</h2>
	        <p>Completed from Bhagwat vidyapeedth, chhapra, bihar <title>Bhagwat vidyapeedth</title></p>
	        <p>Board of Education: C.B.S.E</p>
	        <p>Score: 10 cgpa (equivalent: 95%)</p>
	        <p><a class="btn btn-secondary" href="https://bhagwatvidyapeethcpr.com/">View details »</a></p>
	      </div>
	      <div class="col-lg-4">
	        <div class= "logoholder">
	        		 <img class="rounded-circle" alt="100x100" src={require("./images/bhagwat.jpg")} data-holder-rendered="true"/>
          		</div>

	        <h2>Higher Secondary Education</h2>
	        <p>Completed from Bhagwat vidyapeedth, chhapra, bihar</p>
	        <p>Board of Education: C.B.S.E</p>
	        <p>Score: 88.2%</p>
	        <p><a class="btn btn-secondary" href="https://bhagwatvidyapeethcpr.com/">View details »</a></p>
	      </div>
	      <div class="col-lg-4">
	        	<div class= "logoholder">
	        		 <img class="rounded-circle" alt="100x100" src={require("./images/iiests.jpeg")}
          				data-holder-rendered="true"/>
          		</div>
	        <h2>Undergraduate</h2>
	        <p>Pursuing from Indian Institute of Engineering Science and Technology</p>
	        <p>Current CGPA: 8.29</p>
	        <p><a class="btn btn-secondary" href="https://www.iiests.ac.in/">View details »</a></p>
	      </div>
	    </div>
	    </div>
		)
}
export default Education;
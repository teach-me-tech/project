import React from 'react';


const Card = ()=>{
	function styles()
	{
		let styles = {
			width:'200px'
		}
	};
	return(
		<div id= "profile ">
		<div class="row py-5">
		<div class = "col-md-6 px-5" >
			<div class = "text-right pt-5" >
				<div class="display-3">Shivam Kumar</div>
				<p>I am currently pursuing my B.Tech degree in computer
				science from<br></br>
				Indian Institute of Engineering Science and Technology.<br></br>
				(Also recognised as NIT Shibpur, IIEST Shibpur and former Bengal Engineering college)
				<br></br>I have profiencies in c, c++, java, python, html5, css3, javascript.<br></br> I am currently getting some 
					experience in nodejs, reactjs and expressjs.
				</p>
					
				</div>
			</div>
			<div className ="col-md-6">
			<div className ="image">
					<div class="card-image-top " style={{'width': "70%", 'height':"90%",}}> <img src={require('./images/profilepic.jpg') }/> </div>
	
				</div>
			</div>
			</div>
		
		</div>
		)
}

export default Card;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


const Project = ()=>{
	return(
		<div id="projects" class="pt-3 " >
			<div class=" px-5"><h2><u>Projects:</u></h2></div>
		<div class="card px-5" >
			<Carousel >
			<Carousel.Item interval={1500} style={{'height':"63rem"}}>
			    <img
			      className="d-block w-100 "
			      src={require("./images/image1.png")}
			      alt="Second slide"
			    />

			    <Carousel.Caption>
			      <h2>First Project</h2>
			      <h1>Front-end designs based on bootstrap</h1>
			    </Carousel.Caption>
			  </Carousel.Item>

			  <Carousel.Item interval={1500} style={{'height':"63rem"}}>
			    <img
			      className="d-block w-100  "
			      src={require("./images/deeplearning.jpeg")}
			      alt="First slide"
			    />
			    <Carousel.Caption>
			      <h2>Second Project</h2>
			      <h1>Deep Learning</h1>
			    </Carousel.Caption>
			  </Carousel.Item>
			  
			  <Carousel.Item interval={1500} style={{'height':"63rem"}}>
			    <img
			      className="d-block w-100 "
			      src={require("./images/project1.jpeg")}
			      alt="Third slide"
			    />

			    <Carousel.Caption>
			      <h2>Third Project</h2>
			      <h1>Machine Learning</h1>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
		</div>
		</div>
			
		)
}
export default Project;
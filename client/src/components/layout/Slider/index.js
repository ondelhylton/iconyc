import React from 'react';
import { render } from 'react-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
// import 'normalize.css/normalize.css';
import './slider-animations.css';
import './styles.css';
import Buttons from '../Buttons';

const content = [
	{
		title: "Find the Most Scenic Locations in NYC",
		description:
		'Hundreds of elevated and photogenic spots include observations decks, rooftop bars and restaurants, and just spots with a good view.',
		image: 'https://i.ibb.co/pffgt8p/Manhattan-Bridge-22.jpg',
		location: 'Main Street, DUMBO',
		elevation: "4' Above Sea Level",
		floodyear: "2068"

	},
	{
		title: 'Visualize the Costly Effects of Sea Level Rise',
		description:
		"Mission to raise awareness on the dire effects of climate change by visualizing sea level rise at iconic locations",
		image: 'https://i.ibb.co/qYbyRNt/showcase.jpg',
		location: 'High Line @ 14th Street',
		elevation: "6' Above Sea Level",
		floodyear: "2075"

	},
	{
		title: 'Billions of Dollars of Historical Resources and Real Estate at Risk',
		description:
		"Many of the city's most iconic locations and cherished neighborhoods are in danger of being submerged within the next century",
		image: 'https://i.ibb.co/ZK7gFVk/Tudor-City2.jpg',
		location: '42nd St., Tudor City',
		elevation: "23' Above Sea Level",
		floodyear: "2150"
	},
	{
		title: "Guide to All NYC's Rooftop Bars and Elevated Restaturants",
		description:
		"Many of the city's most iconic locations and cherished neighborhoods are in danger of being submerged within the next century",
		image: 'https://i.ibb.co/g4NJstf/230-fifth-1.jpg',
		location: '230 Fifth Avenue Rooftop',
		elevation: "50' Above Sea Level",
		floodyear: ">2150"
	},

	{
		title: "Learn About the Icons and History of a Scene",
		description:
		"Many of the city's most iconic locations and cherished neighborhoods are in danger of being submerged within the next century",
		image: 'https://i.ibb.co/bgrvZ1T/Brooklyn-Bridg-cropped.jpg',
	},
];





const Slideshow = () => (

	

	<div>
		
		<Slider className="slider-wrapper">
			
			{content.map((item, index) => (
				
				
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
					
				>
					<section>
						<span>
							Location: <strong>{item.location}</strong>
							Elevation: <strong>{item.elevation}</strong>
							Estimated Floor Year: <strong>{item.floodyear}</strong>
						</span>
					</section>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<Buttons></Buttons>
					</div>

			
				</div>
			))}
		</Slider>
	</div>
);

render(<Slideshow />, document.getElementById('root'));
export default Slideshow;

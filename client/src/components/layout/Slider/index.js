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

	},
	{
		title: 'Visualize the Costly Effects of Sea Level Rise',
		description:
		"Mission to raise awareness on the dire effects of climate change by visualizing sea level rise at iconic locations",
		image: 'https://i.ibb.co/qYbyRNt/showcase.jpg',
	},
	{
		title: 'Billions of Dollars of Historical Resources and Real Estate at Risk',
		description:
		"Many of the city's most iconic locations and cherished neighborhoods are in danger of being submerged within the next century",
		image: 'https://i.ibb.co/ZK7gFVk/Tudor-City2.jpg',
	},
	{
		title: "Guide to All of NYC's Rooftop Bars and Elevated Restaturants",
		description:
		"Many of the city's most iconic locations and cherished neighborhoods are in danger of being submerged within the next century",
		image: 'https://i.ibb.co/ZK7gFVk/Tudor-City2.jpg',
	},

	{
		title: "NYC ViewFInder: Learn all the Buildings and Icons in a Scene",
		description:
		"Many of the city's most iconic locations and cherished neighborhoods are in danger of being submerged within the next century",
		image: 'https://i.ibb.co/ZK7gFVk/Tudor-City2.jpg',
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

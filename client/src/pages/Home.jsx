import React from "react";
import backgroundImage from "../assets/background.jpg";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="home-container relative h-screen overflow-hidden">
			<img
				className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
				src={backgroundImage}
				alt="Background"
			/>
			<div className="content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
				<h1 className="font-['Poppins'] text-4xl mb-4">
					Placement Tracking VIT Bhopal
				</h1>
				<h2 className="font-['Poppins'] text-2xl mb-4">
					Made By Team Synergy
				</h2>
				<div className="flex justify-center">
					<Link to="/staff_dashboard">
						<button className="bg-blue-500 text-white px-4 py-2 mr-4 rounded">
							Staff
						</button>
					</Link>
					<Link to="/student_dashboard">
						<button className="bg-green-500 text-white px-4 py-2 rounded">
							Student
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;

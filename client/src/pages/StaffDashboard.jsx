import React, { useState, useEffect } from "react";
import axios from "axios";

const StaffDashboard = () => {
	const [staffData, setStaffData] = useState([]);

	useEffect(() => {
		// Fetch staff data from the backend when the component mounts
		fetchStaffData();
	}, []);

	const fetchStaffData = async () => {
		try {
			// Make an HTTP GET request to your backend API endpoint
			const response = await axios.get(
				"http://localhost:3001/api/get-staff-data"
			);

			// Set the fetched data in the state
			setStaffData(response.data);
		} catch (error) {
			// Handle errors if the request fails
			console.error("Error fetching staff data:", error);
		}
	};

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Staff Dashboard</h1>
			<table className="min-w-full border border-gray-300">
				<thead>
					<tr>
						<th className="border border-gray-300 px-4 py-2">
							Registration Number
						</th>
						<th className="border border-gray-300 px-4 py-2">
							Batch
						</th>
						<th className="border border-gray-300 px-4 py-2">
							Languages
						</th>
						<th className="border border-gray-300 px-4 py-2">
							Domain Worked
						</th>
					</tr>
				</thead>
				<tbody>
					{staffData.map((staff, index) => (
						<tr key={index}>
							<td className="border border-gray-300 px-4 py-2">
								{staff.registrationNumber}
							</td>
							<td className="border border-gray-300 px-4 py-2">
								{staff.batch}
							</td>
							<td className="border border-gray-300 px-4 py-2">
								{staff.languages}
							</td>
							<td className="border border-gray-300 px-4 py-2">
								{staff.domainWorked}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default StaffDashboard;

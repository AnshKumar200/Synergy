import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StaffDashboard = () => {
	const [staffData, setStaffData] = useState([]);

	const notify = () => toast("Selected! Email Sent");

	useEffect(() => {
		fetchStaffData();
	}, []);

	const fetchStaffData = async () => {
		try {
			const response = await axios.get(
				"http://localhost:3001/api/get-staff-data"
			);

			setStaffData(response.data);
		} catch (error) {
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
							<select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
								<option>Registration Number</option>
								<option>20</option>
								<option>21</option>
								<option>22</option>
								<option>23</option>
							</select>
						</th>
						<th className="border border-gray-300 px-4 py-2">
							<select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
								<option>Branch</option>
								<option>CSE</option>
								<option>AIML</option>
								<option>Cyber</option>
							</select>
						</th>
						<th className="border border-gray-300 px-4 py-2">
							<select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
								<option>Languages</option>
								<option>C++</option>
								<option>Java</option>
								<option>React</option>
								<option>C#</option>
								<option>Ruby</option>
							</select>
						</th>
						<th className="border border-gray-300 px-4 py-2">
							<select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
								<option>Domian Worked</option>
								<option>Web Dev</option>
								<option>Cyber</option>
								<option>AIML</option>
								<option>App Dev</option>
								<option>Data Science</option>
							</select>
						</th>
						<th className="border border-gray-300 px-4 py-2">
							Select
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
							<td className="border border-gray-300 px-4 py-2">
								<button
									onClick={notify}
									className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
								>
									Select
								</button>
								<ToastContainer />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default StaffDashboard;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const StudentDashboard = () => {
	const [formData, setFormData] = useState({
		registrationNumber: "",
		batch: "",
		languages: "",
		domainWorked: "",
	});
	const showToastMessage = () => {
		toast.success("Success Notification !", {
			position: toast.POSITION.TOP_RIGHT,
		});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"http://localhost:3001/api/submit-form",
				formData
			);

			console.log("Backend response:", response.data);

			setFormData({
				registrationNumber: "",
				batch: "",
				languages: "",
				domainWorked: "",
			});
		} catch (error) {
			console.error("Error submitting form:", error);
		}
	};

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Registration Form</h1>
			<form onSubmit={handleSubmit} className="max-w-md">
				<div className="mb-4">
					<label className="block text-sm font-semibold text-gray-600">
						Registration Number:
						<input
							type="text"
							name="registrationNumber"
							value={formData.registrationNumber}
							onChange={handleChange}
							className="form-input mt-1 block w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
						/>
					</label>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-semibold text-gray-600">
						Batch:
						<input
							type="text"
							name="batch"
							value={formData.batch}
							onChange={handleChange}
							className="form-input mt-1 block w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
						/>
					</label>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-semibold text-gray-600">
						Languages:
						<input
							type="text"
							name="languages"
							value={formData.languages}
							onChange={handleChange}
							className="form-input mt-1 block w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
						/>
					</label>
				</div>
				<div className="mb-4">
					<label className="block text-sm font-semibold text-gray-600">
						Domain Worked:
						<input
							type="text"
							name="domainWorked"
							value={formData.domainWorked}
							onChange={handleChange}
							className="form-input mt-1 block w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
						/>
					</label>
				</div>
				<button
					type="submit"
					className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
				>
					Submit
				</button>
				<Link to={`/edit-form/${formData.registrationNumber}`}>
					<button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
						Edit
					</button>
				</Link>
			</form>
		</div>
	);
};

export default StudentDashboard;

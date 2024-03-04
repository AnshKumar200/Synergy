import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";
import EditDetails from "./pages/EditDetails";
import StaffDashboard from "./pages/StaffDashboard";
import SelectedStudents from "./pages/SelectedStudents";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path="/student_dashboard" element={<StudentDashboard />} />
			<Route path="/edit_details" element={<EditDetails />} />

			<Route path="/staff_dashboard" element={<StaffDashboard />} />
			<Route path="/selected_students" element={<SelectedStudents />} />
		</Routes>
	);
};

export default App;

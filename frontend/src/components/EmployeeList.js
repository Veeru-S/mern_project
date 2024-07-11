import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const username = 'Hukum Gupta'; // Fetch from context or localStorage

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await axios.get('http://localhost:5000/api/employees/list');
      setEmployees(res.data);
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/employees/delete/${id}`);
    setEmployees(employees.filter(emp => emp._id !== id));
  };

  return (
    <div className="employee-list-container">
      <Navbar username={username} />
      <Sidebar />
      <div className="employee-list-content">
        <h2>Employee List</h2>
        <div className="employee-list-header">
          <p>Total Count: {employees.length}</p>
          <Link to="/create-employee" className="create-employee-button">Create Employee</Link>
          <input
            type="text"
            placeholder="Enter Search Keyword"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <table className="employee-table">
          <thead>
            <tr>
              <th>Unique Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Designation</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Create Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.filter(emp => emp.f_Name.includes(search)).map(emp => (
              <tr key={emp._id}>
                <td>{emp.f_Id}</td>
                <td><img src={emp.f_Image} alt={emp.f_Name} /></td>
                <td>{emp.f_Name}</td>
                <td>{emp.f_Email}</td>
                <td>{emp.f_Mobile}</td>
                <td>{emp.f_Designation}</td>
                <td>{emp.f_gender}</td>
                <td>{emp.f_Course}</td>
                <td>{new Date(emp.f_Createdate).toLocaleDateString()}</td>
                <td>
                  <Link to={`/edit-employee/${emp._id}`}>Edit</Link>
                  <button onClick={() => handleDelete(emp._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateEmployee.css';

const CreateEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: 'HR',
    gender: 'M',
    course: [],
    image: null
  });

  const handleCourseChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setEmployee({ ...employee, course: [...employee.course, value] });
    } else {
      setEmployee({ ...employee, course: employee.course.filter((c) => c !== value) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', employee.name);
    formData.append('email', employee.email);
    formData.append('mobile', employee.mobile);
    formData.append('designation', employee.designation);
    formData.append('gender', employee.gender);
    formData.append('course', employee.course);
    formData.append('image', employee.image);

    try {
      await axios.post('http://localhost:5000/api/employees', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/employee-list');
    } catch (err) {
      alert('Failed to create employee');
    }
  };

  return (
    <div className="create-employee-container">
      <nav className="navbar">
        <div className="logo">Create Employee</div>
        <div className="nav-links">
          <a href="/dashboard">Home</a>
          <a href="/employee-list">Employee List</a>
          <a href="/login" onClick={() => localStorage.removeItem('token')}>Logout</a>
        </div>
      </nav>
      <div className="main-content">
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit} className="create-employee-form">
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              value={employee.name}
              onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={employee.email}
              onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
              required
            />
          </div>
          <div className="input-group">
            <label>Mobile No</label>
            <input
              type="text"
              value={employee.mobile}
              onChange={(e) => setEmployee({ ...employee, mobile: e.target.value })}
              required
            />
          </div>
          <div className="input-group">
            <label>Designation</label>
            <select
              value={employee.designation}
              onChange={(e) => setEmployee({ ...employee, designation: e.target.value })}
            >
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
          <div className="input-group">
            <label>Gender</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="M"
                  checked={employee.gender === 'M'}
                  onChange={(e) => setEmployee({ ...employee, gender: e.target.value })}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="F"
                  checked={employee.gender === 'F'}
                  onChange={(e) => setEmployee({ ...employee, gender: e.target.value })}
                />
                Female
              </label>
            </div>
          </div>
          <div className="input-group">
            <label>Course</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="MCA"
                  checked={employee.course.includes('MCA')}
                  onChange={handleCourseChange}
                />
                MCA
              </label>
              <label>
                <input
                  type="checkbox"
                  value="BCA"
                  checked={employee.course.includes('BCA')}
                  onChange={handleCourseChange}
                />
                BCA
              </label>
              <label>
                <input
                  type="checkbox"
                  value="BSC"
                  checked={employee.course.includes('BSC')}
                  onChange={handleCourseChange}
                />
                BSC
              </label>
            </div>
          </div>
          <div className="input-group">
            <label>Image Upload</label>
            <input
              type="file"
              accept=".jpg,.png"
              onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })}
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;

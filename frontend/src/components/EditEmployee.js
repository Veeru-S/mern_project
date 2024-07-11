import React, { useState, useEffect } from 'react';navigate
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './EditEmployee.css';

const EditEmployee = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [designation, setDesignation] = useState('HR');
  const [gender, setGender] = useState('M');
  const [course, setCourse] = useState([]);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      const res = await axios.get(`http://localhost:5000/api/employees/${id}`);
      const employee = res.data;
      setName(employee.name);
      setEmail(employee.email);
      setMobile(employee.mobile);
      setDesignation(employee.designation);
      setGender(employee.gender);
      setCourse(employee.course);
    };
    fetchEmployee();
  }, [id]);

  const handleCourseChange = (e) => {
    const value = e.target.value;
    setCourse((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('designation', designation);
    formData.append('gender', gender);
    formData.append('course', course);
    if (image) formData.append('image', image);

    try {
      await axios.put(`http://localhost:5000/api/employees/${id}`, formData);
      navigate('/employee-list');
    } catch (err) {
      alert('Failed to update employee');
    }
  };

  return (
    <div className="edit-employee-container">
      <nav className="navbar">
        <div className="logo">Edit Employee</div>
        <div className="nav-links">
          <a href="/dashboard">Home</a>
          <a href="/employee-list">Employee List</a>
          <a href="/login" onClick={() => localStorage.removeItem('token')}>Logout</a>
        </div>
      </nav>
      <div className="main-content">
        <h2>Edit Employee</h2>
        <form onSubmit={handleSubmit} className="edit-employee-form">
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Mobile No</label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Designation</label>
            <select
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
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
                  checked={gender === 'M'}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="F"
                  checked={gender === 'F'}
                  onChange={(e) => setGender(e.target.value)}
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
                  checked={course.includes('MCA')}
                  onChange={handleCourseChange}
                />
                MCA
              </label>
              <label>
                <input
                  type="checkbox"
                  value="BCA"
                  checked={course.includes('BCA')}
                  onChange={handleCourseChange}
                />
                BCA
              </label>
              <label>
                <input
                  type="checkbox"
                  value="BSC"
                  checked={course.includes('BSC')}
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
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;

# MERN-EmployeesProfileDatabase-website
Employee Management System
Description
This project is an Employee Management System built using the MERN (MongoDB, Express, React, Node.js) stack. It features functionalities for user authentication, employee data management, and a responsive user interface. The system allows users to log in, view a dashboard, and manage employee information through creating, editing, and deleting records.

Features
User Authentication (Login)
Dashboard with welcome message
CRUD operations for employee data
Responsive UI
Data validation (both frontend and backend)
State management using local storage for user session
Technologies Used
Frontend: React, Axios, React Router DOM
Backend: Node.js, Express
Database: MongoDB, Mongoose
Styling: CSS
Project Structure
java
Copy code
mern_project/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── User.js
│   │   └── Employee.js
│   ├── routes/
│   │   └── auth.js
│   │   └── employee.js
│   ├── .env
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Dashboard.js
│   │   │   ├── EmployeeList.js
│   │   │   ├── CreateEmployee.js
│   │   │   ├── EditEmployee.js
│   │   │   ├── Navbar.js
│   │   │   ├── Sidebar.js
│   │   │   └── styles/
│   │   │       └── Login.css
│   │   │       └── Dashboard.css
│   │   │       └── EmployeeList.css
│   │   │       └── CreateEmployee.css
│   │   │       └── EditEmployee.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── package.json
└── README.md
Setup Instructions
Prerequisites
Node.js
MongoDB
Backend Setup
Navigate to the backend directory:
bash
Copy code
cd mern_project/backend
Install dependencies:
bash
Copy code
npm install
Create a .env file in the backend directory with the following content:
plaintext
Copy code
MONGO_URI=mongodb://localhost:27017/mern_project
JWT_SECRET=your_jwt_secret
Start the backend server:
bash
Copy code
npm start
Frontend Setup
Navigate to the frontend directory:
bash
Copy code
cd mern_project/frontend
Install dependencies:
bash
Copy code
npm install
Start the frontend development server:
bash
Copy code
npm start
Usage
Open your browser and navigate to http://localhost:3000.
You should see the login page. Use the following default credentials to log in:
Username: admin
Password: password
After logging in, you will be redirected to the dashboard where you can view and manage employee data.
API Endpoints
Authentication
POST /api/auth/login - User login
Employees
GET /api/employees - Get all employees
POST /api/employees - Create a new employee
GET /api/employees/:id - Get employee by ID
PUT /api/employees/:id - Update employee by ID
DELETE /api/employees/:id - Delete employee by ID
Validation
Server-side validation using Mongoose
Client-side validation using JavaScript
License
This project is licensed under the MIT License.

Contact
For any questions or feedback, please contact [veerugandegudi@gmail.com].

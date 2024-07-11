# MERN Project- Employee Management System

This project is an Employee Management System built using the MERN stack (MongoDB, Express, React, Node.js). The system allows users to manage employee data through a web interface, including functionalities such as login, viewing employee lists, adding new employees, and editing existing employee details.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [License](#license)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Veeru-S/mern_project.git
    cd mern_project
    ```

2. **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up environment variables:**
    Create a `.env` file in the `backend` directory and add the following variables:
    ```
    MONGO_URI=mongodb://localhost:27017/your_database_name
    PORT=5000
    ```

## Usage

1. **Start the backend server:**
    ```bash
    cd backend
    npm run dev
    ```

2. **Start the frontend server:**
    ```bash
    cd ../frontend
    npm start
    ```

3. **Open your browser and visit:**
    ```
    http://localhost:3000
    ```

## Features

- **Login Page:** Allows users to log in with their username and password.
- **Dashboard:** Displays a welcome message and navigation options.
- **Employee List:** Shows a list of employees with options to add, edit, or delete employees.
- **Add Employee:** Provides a form to add a new employee.
- **Edit Employee:** Provides a form to edit existing employee details.

## Project Structure
employee-management-system
├── backend
│ ├── controllers
│ ├── models
│ ├── routes
│ ├── .env
│ ├── index.js
│ └── ...
├── frontend
│ ├── public
│ ├── src
│ │ ├── components
│ │ ├── App.js
│ │ └── ...
│ ├── package.json
│ └── ...
└── README.md



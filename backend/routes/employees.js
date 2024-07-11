const express = require('express');
const Employee = require('../models/Employee');
const router = express.Router();

router.post('/add', async (req, res) => {
  const employeeData = req.body;
  try {
    const employee = new Employee(employeeData);
    await employee.save();
    res.status(201).send('Employee added');
  } catch (err) {
    res.status(400).send('Error adding employee');
  }
});

router.get('/list', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(400).send('Error fetching employees');
  }
});

router.put('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    await Employee.findByIdAndUpdate(id, updatedData);
    res.status(200).send('Employee updated');
  } catch (err) {
    res.status(400).send('Error updating employee');
  }
});

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Employee.findByIdAndDelete(id);
    res.status(200).send('Employee deleted');
  } catch (err) {
    res.status(400).send('Error deleting employee');
  }
});

module.exports = router;

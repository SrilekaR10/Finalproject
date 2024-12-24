const express = require('express');
const Employee = require('../models/Employee');
const router = express.Router();

// CRUD operations for employees
router.post('/add', async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.send({ message: 'Employee added successfully' });
});

module.exports = router;

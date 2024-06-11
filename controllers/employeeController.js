const employeeService = require('../services/employeeService');

const createEmployee = async (req, res) => {
  try {
    const employeeData = req.body;
    const employee = await employeeService.createEmployee(employeeData);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employeeData = req.body;
    await employeeService.updateEmployee(id, employeeData);
    res.status(200).json({ message: 'Employee updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    await employeeService.deleteEmployee(id);
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await employeeService.getEmployee(id);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createEmployee, updateEmployee, deleteEmployee, getEmployee, getAllEmployees };

const Employee = require('../models/Employee');

const createEmployee = (employeeData) => Employee.create(employeeData);
const updateEmployee = (id, employeeData) => Employee.update(employeeData, { where: { id } });
const deleteEmployee = (id) => Employee.destroy({ where: { id } });
const getEmployee = (id) => Employee.findByPk(id);
const getAllEmployees = () => Employee.findAll();

module.exports = { createEmployee, updateEmployee, deleteEmployee, getEmployee, getAllEmployees };

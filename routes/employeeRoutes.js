const express = require('express');
const employeeController = require('../controllers/employeeController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware.verifyAdmin, employeeController.createEmployee);
router.put('/:id', authMiddleware.verifyAdmin, employeeController.updateEmployee);
router.delete('/:id', authMiddleware.verifyAdmin, employeeController.deleteEmployee);
router.get('/:id', authMiddleware.verifyUser, employeeController.getEmployee);
router.get('/', authMiddleware.verifyUser, employeeController.getAllEmployees);

module.exports = router;

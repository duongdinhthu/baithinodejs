const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Thêm sinh viên mới
router.post('/students', studentController.addStudent);

// Lấy danh sách sinh viên
router.get('/students', studentController.getStudents);

// Cập nhật sinh viên theo ID
router.put('/students/:id', studentController.updateStudent);

// Xóa sinh viên theo ID
router.delete('/students/:id', studentController.deleteStudent);

module.exports = router;

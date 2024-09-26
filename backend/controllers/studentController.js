const Student = require('../models/Student');

// Thêm sinh viên mới
exports.addStudent = async (req, res) => {
  try {
    const { name, age, gender, major } = req.body;
    if (!name || !age || !gender || !major) {
      return res.status(400).json({ message: 'Tất cả các trường đều bắt buộc.' });
    }

    const newStudent = new Student({ name, age, gender, major });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy danh sách sinh viên
exports.getStudents = async (req, res) => {
  try {
    const major = req.query.major;
    const filter = major ? { major } : {};
    const students = await Student.find(filter);
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật sinh viên theo ID
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, gender, major } = req.body;

    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Sinh viên không tồn tại.' });
    }

    student.name = name || student.name;
    student.age = age || student.age;
    student.gender = gender || student.gender;
    student.major = major || student.major;

    await student.save();
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa sinh viên
exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id); // Sử dụng findByIdAndDelete

        if (!student) {
            return res.status(404).json({ message: 'Sinh viên không tồn tại.' });
        }

        res.json({ message: 'Sinh viên đã được xóa thành công.' });
    } catch (error) {
        res.status(500).json({ message: 'Có lỗi xảy ra khi xóa sinh viên.', error: error.message });
    }
};

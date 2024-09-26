const API_URL = 'http://localhost:5000/api/students';

// Lấy danh sách sinh viên
const getStudents = async () => {
  const response = await fetch(API_URL);
  const students = await response.json();
  const studentList = document.getElementById('studentList');
  studentList.innerHTML = '';
  
  students.forEach(student => {
    studentList.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.gender}</td>
        <td>${student.major}</td>
        <td>
          <button onclick="deleteStudent('${student._id}')" class="btn btn-danger">Xóa</button>
        </td>
      </tr>
    `;
  });
};

// Thêm sinh viên mới
document.getElementById('studentForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const major = document.getElementById('major').value;

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, age, gender, major })
  });

  if (response.ok) {
    alert('Sinh viên đã được thêm thành công');
    getStudents();
  } else {
    alert('Có lỗi xảy ra khi thêm sinh viên');
  }
});

// Gọi hàm để lấy danh sách sinh viên ban đầu
getStudents();

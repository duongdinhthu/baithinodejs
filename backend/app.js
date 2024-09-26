const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// Kết nối MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Định tuyến API sinh viên
app.use('/api', studentRoutes);

// Khởi chạy server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});

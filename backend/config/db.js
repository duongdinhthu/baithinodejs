const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/studentDB', {
      useNewUrlParser: true,  // Nếu cảnh báo deprecation thì có thể bỏ các dòng này.
      useUnifiedTopology: true,  // Có thể bỏ dòng này nếu đang dùng MongoDB phiên bản 4.0 trở lên.
    });
    console.log('MongoDB đã kết nối!');
  } catch (error) {
    console.error('Lỗi kết nối MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

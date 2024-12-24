const mongoose = require('mongoose');
const AttendanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  date: { type: Date, default: Date.now },
  status: String // 'Present', 'Absent', etc.
});
module.exports = mongoose.model('Attendance', AttendanceSchema);
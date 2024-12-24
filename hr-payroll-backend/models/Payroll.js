const PayrollSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    month: String,
    amount: Number,
    status: String // 'Paid', 'Unpaid'
  });
  module.exports = mongoose.model('Payroll', PayrollSchema);
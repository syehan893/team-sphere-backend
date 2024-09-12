import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/user-route';
import authRoutes from './routes/auth-route';
import employeeRoutes from './routes/employee-route';
import departmentRoutes from './routes/department-route';
import leaveRequestRoutes from './routes/leave-route';
import reimbursementRequestRoutes from './routes/reimbursement-route';
import employeeRollCallRoutes from './routes/roll-call-route';
import companyNewsRoutes from './routes/news-route';
import employeeTaskRoutes from './routes/task-route';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/employees', employeeRoutes); 
app.use('/departments', departmentRoutes); 
app.use('/leave-requests', leaveRequestRoutes); 
app.use('/reimbursement-requests', reimbursementRequestRoutes); 
app.use('/employee-roll-calls', employeeRollCallRoutes); 
app.use('/company-news', companyNewsRoutes); 
app.use('/employee-tasks', employeeTaskRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

export default app;

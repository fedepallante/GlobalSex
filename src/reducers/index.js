import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import TaskFormReducer from './TaskFormReducer';
import EmployeeReducer from './EmployeeReducer';
import TaskReducer from './TaskReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer,
  taskForm: TaskFormReducer,
  tasks: TaskReducer
});

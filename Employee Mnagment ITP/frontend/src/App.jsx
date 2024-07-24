import React from 'react'
import {Routes , Route} from 'react-router-dom'
import { CreateEmployee } from './pages/CreateEmployee'
import { EditEmployee } from './pages/EditEmployee'
import  DeleteEmployee  from './pages/DeleteEmployee'
import { ViewEmployee } from './pages/ViewEmployee'
import SalaryEmployee from './pages/SalarayEmployee'
import MainDashboardEmployee from './pages/MainDashboardEmployee'
import UpdateSalaryEmployee from './pages/UpdateSalaryEmployee'
import PaysheetReportEmployee from './pages/PaysheetReportEmployee'
import LeaveEmployee from './pages/LeaveEmployee'
import EmployeeLogin from './pages/EmployeeLogin'
import EmployeeProfile from './pages/EmployeeProfile'
import LeaveFormEmployee from './pages/LeaveFormEmployee'
import EmployeeSalaryDashboard from './pages/EmployeeSalarayDashboard'
import HomePage from './pages/HomePage'


const App = () => {
  return (
    <Routes>
        <Route path='/Homepage' element={<HomePage></HomePage>}></Route>
        <Route path='/employee/login' element={<EmployeeLogin></EmployeeLogin>}></Route>
        <Route path='/employee/profile' element={<EmployeeProfile></EmployeeProfile>}></Route>
        <Route path='/employee/leaveForm' element={<LeaveFormEmployee></LeaveFormEmployee>}></Route>
        <Route path='/' element={<MainDashboardEmployee></MainDashboardEmployee>}></Route>
        <Route path='/employee/create' element={<CreateEmployee></CreateEmployee>}></Route>
        <Route path='/employee/edit/:id' element={<EditEmployee></EditEmployee>}></Route>
        <Route path='/employee/delete/:id' element={<DeleteEmployee></DeleteEmployee>}></Route>
        <Route path='/employee/view/:id' element={<ViewEmployee></ViewEmployee>}></Route>
        <Route path='/employee/salary/main' element={<EmployeeSalaryDashboard></EmployeeSalaryDashboard>}></Route>
        <Route path='/employee/salary/:id' element={<SalaryEmployee></SalaryEmployee>}></Route>
        <Route path='/employee/salary/update/:id' element={<UpdateSalaryEmployee></UpdateSalaryEmployee>}></Route>
        <Route path='/employee/salary/Paysheet' element={<PaysheetReportEmployee></PaysheetReportEmployee>}></Route>
        <Route path='/employee/leave' element={<LeaveEmployee></LeaveEmployee>}></Route>
    </Routes>
  )
}

export default App
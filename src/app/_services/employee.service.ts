import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employee;
  private employees:[
    {eid:1001,name:'Rahul',salary:9000,dept:'JAVA'},
    {eid:1002,name:'Vikas',salary:11000,dept:'ORAAPS'},
    {eid:1003,name:'Uma',salary:12000,dept:'JAVA'},
    {eid:1004,name:'Sachin',salary:11500,dept:'ORAAPS'},
    {eid:1005,name:'Amol',salary:7000,dept:'.NET'},
    {eid:1006,name:'Vishal',salary:17000,dept:'BI'},
    {eid:1007,name:'Rajita',salary:21000,dept:'BI'},
    {eid:1008,name:'Neelima',salary:81000,dept:'TESTING'},
    {eid:1009,name:'Daya',salary:1000,dept:'JAVA'}
]

  constructor() { }
  addEmployee(emp:Employee)
  {
    this.employee={eid:emp.eid,name:emp.name,salary:emp.salary,dept:emp.dept};
    this.employees.push(this.employee);
  }
  editEmployee(emp:Employee)
  {
      this.employee={eid:emp.eid,name:emp.name,salary:emp.salary,dept:emp.dept};
      this.employees.splice(emp.eid,1,this.employee);
  }
  deleteEmployee(eid:number)
  {
    this.employees.splice(eid);
  }
  getEmployees()
  {
    return this.employees;
  }

}

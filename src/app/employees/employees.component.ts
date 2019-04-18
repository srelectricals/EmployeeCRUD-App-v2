import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_services/employee.service';
import { Employee } from '../_services/employee';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employees:Employee[];
  eid:number;
  name:string;
  salary:number;
  dept:string;
  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this.employees=this._employeeService.getEmployees();
  }
  update(e:Employee)
  {
    this._employeeService.editEmployee(e);
  }
  delete(id:number)
  {
    this._employeeService.deleteEmployee(id);
  }
  add(e:Employee)
  {
    this._employeeService.addEmployee(e);
  }

}

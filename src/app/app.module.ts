import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';;
import { EmployeesComponent } from './employees/employees.component'
;
import { AddEmployeeComponent } from './add-employee/add-employee.component';;
import { EditEmployeeComponent } from './edit-employee/edit-employee.component'
;
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component'
import { EmployeeService } from './_services/employee.service';;
import { FilterPipe } from './employees/filter.pipe'
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        FormsModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
,
        EmployeesComponent ,
        AddEmployeeComponent ,
        EditEmployeeComponent ,
        DeleteEmployeeComponent,
        FilterPipe
    ],
        
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        EmployeeService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
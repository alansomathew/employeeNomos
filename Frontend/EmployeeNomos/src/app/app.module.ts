import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestNavbarComponent } from './Guest/guest-navbar/guest-navbar.component';
import { GuestHomeComponent } from './Guest/guest-home/guest-home.component';
import { EmployeeRegistrationComponent } from './Guest/employee-registration/employee-registration.component';
import { ClientRegistrationComponent } from './Guest/client-registration/client-registration.component';
import { LoginComponent } from './Guest/login/login.component';
import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import { ViewDesignationComponent } from './Admin/view-designation/view-designation.component';
import { ViewDepartmentComponent } from './Admin/view-department/view-department.component';
import { DepartmentComponent } from './Admin/department/department.component';
import { DesignationComponent } from './Admin/designation/designation.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SecurityqtnComponent } from './Admin/securityqtn/securityqtn.component';
import { ViewSecurityqtnComponent } from './Admin/view-securityqtn/view-securityqtn.component';
import { ProjectheadRegistrationComponent } from './Admin/projecthead-registration/projecthead-registration.component';
import { ViewProjectheadregistrationComponent } from './Admin/view-projectheadregistration/view-projectheadregistration.component';
import { ViewnewemployeeComponent } from './Admin/viewnewemployee/viewnewemployee.component';
import { ViewAcceptedemployeeComponent } from './Admin/view-acceptedemployee/view-acceptedemployee.component';
import { ViewRejectedemployeeComponent } from './Admin/view-rejectedemployee/view-rejectedemployee.component';
import { ClientNavComponent } from './Client/client-nav/client-nav.component';
import { EmployeeNavComponent } from './Employee/employee-nav/employee-nav.component';
import { GuestNavComponent } from './Guest/guest-nav/guest-nav.component';
import { ClientmyprofileComponent } from './Client/clientmyprofile/clientmyprofile.component';
import { EmpmyprofileComponent } from './Employee/empmyprofile/empmyprofile.component';
import { ProjectheadNavComponent } from './ProjectHead/projecthead-nav/projecthead-nav.component';
import { PhmyprofileComponent } from './ProjectHead/phmyprofile/phmyprofile.component';
import { PheditprofileComponent } from './ProjectHead/pheditprofile/pheditprofile.component';
import { ClienteditprofileComponent } from './Client/clienteditprofile/clienteditprofile.component';
import { EmpeditprofileComponent } from './Employee/empeditprofile/empeditprofile.component';
import { PhchangepasswordComponent } from './ProjectHead/phchangepassword/phchangepassword.component';
import { EmpchangePasswordComponent } from './Employee/empchange-password/empchange-password.component';


@NgModule({
  declarations: [
    AppComponent,
    GuestNavbarComponent,
    GuestHomeComponent,
    EmployeeRegistrationComponent,
    ClientRegistrationComponent,
    LoginComponent,
    AdminNavComponent,
    ViewDesignationComponent,
    ViewDepartmentComponent,
    DepartmentComponent,
    DesignationComponent,
    SecurityqtnComponent,
    ViewSecurityqtnComponent,
    ProjectheadRegistrationComponent,
    ViewProjectheadregistrationComponent,
    ViewnewemployeeComponent,
    ViewAcceptedemployeeComponent,
    ViewRejectedemployeeComponent,
    ClientNavComponent,
    EmployeeNavComponent,
    GuestNavComponent,
    ClientmyprofileComponent,
    EmpmyprofileComponent,
    ProjectheadNavComponent,
    PhmyprofileComponent,
    PheditprofileComponent,
    ClienteditprofileComponent,
    EmpeditprofileComponent,
    PhchangepasswordComponent,
    EmpchangePasswordComponent
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

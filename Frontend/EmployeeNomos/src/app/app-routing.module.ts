import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import { DepartmentComponent } from './Admin/department/department.component';
import { DesignationComponent } from './Admin/designation/designation.component';
import { ProjectheadRegistrationComponent } from './Admin/projecthead-registration/projecthead-registration.component';
import { SecurityqtnComponent } from './Admin/securityqtn/securityqtn.component';
import { ViewAcceptedemployeeComponent } from './Admin/view-acceptedemployee/view-acceptedemployee.component';
import { ViewDepartmentComponent } from './Admin/view-department/view-department.component';
import { ViewDesignationComponent } from './Admin/view-designation/view-designation.component';
import { ViewProjectheadregistrationComponent } from './Admin/view-projectheadregistration/view-projectheadregistration.component';
import { ViewRejectedemployeeComponent } from './Admin/view-rejectedemployee/view-rejectedemployee.component';
import { ViewSecurityqtnComponent } from './Admin/view-securityqtn/view-securityqtn.component';
import { ViewnewemployeeComponent } from './Admin/viewnewemployee/viewnewemployee.component';
import { ClientNavComponent } from './Client/client-nav/client-nav.component';
import { ClientmyprofileComponent } from './Client/clientmyprofile/clientmyprofile.component';
import { EmpchangePasswordComponent } from './Employee/empchange-password/empchange-password.component';
import { EmployeeNavComponent } from './Employee/employee-nav/employee-nav.component';
import { EmpmyprofileComponent } from './Employee/empmyprofile/empmyprofile.component';
import { ClientRegistrationComponent } from './Guest/client-registration/client-registration.component';
import { EmployeeRegistrationComponent } from './Guest/employee-registration/employee-registration.component';
import { GuestNavbarComponent } from './Guest/guest-navbar/guest-navbar.component';
import { LoginComponent } from './Guest/login/login.component';
import { PhchangepasswordComponent } from './ProjectHead/phchangepassword/phchangepassword.component';
import { PheditprofileComponent } from './ProjectHead/pheditprofile/pheditprofile.component';
import { PhmyprofileComponent } from './ProjectHead/phmyprofile/phmyprofile.component';
import { ProjectheadNavComponent } from './ProjectHead/projecthead-nav/projecthead-nav.component';

const routes: Routes = [
  {path:'',component:GuestNavbarComponent,
children:[{path:'client',component:ClientRegistrationComponent},
          {path:'employee',component:EmployeeRegistrationComponent},
          {path:'login',component:LoginComponent}]},
 {path:'admin',component:AdminNavComponent,
children:[{path:'viewdepartment',component:ViewDepartmentComponent},
          {path:'viewdesignation',component:ViewDesignationComponent},
          {path:'designation',component:DesignationComponent},
          {path:"department",component:DepartmentComponent},
          {path:"securityqtn",component:SecurityqtnComponent},
          {path:"viewsecurityqtn",component:ViewSecurityqtnComponent},
          {path:"headreg",component:ProjectheadRegistrationComponent},
          {path:"viewprojecthead",component:ViewProjectheadregistrationComponent},
          {path:'newemployee',component:ViewnewemployeeComponent},
          {path:'viewacceptedemployee',component:ViewAcceptedemployeeComponent},
          {path:'viewrejectedemployee',component:ViewRejectedemployeeComponent}]},
  {path:'client-nav',component:ClientNavComponent,
  children:[{path:'clientmyprofile',component:ClientmyprofileComponent}]},
  {path:'employee-nav',component:EmployeeNavComponent,
  children:[{path:'empmyprofile',component:EmpmyprofileComponent},
            {path:'empchange-password',component:EmpchangePasswordComponent}]},
  {path:'projecthead-nav',component:ProjectheadNavComponent,
  children:[{path:'phmyprofile',component:PhmyprofileComponent},
            {path:'pheditprofile',component:PheditprofileComponent},
            {path:'phchangepassword',component:PhchangepasswordComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TenantComponent } from '../tenant/tenant.component';
// import {FormComponent} from '../form/form.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import {EmployeeComponent} from '../employee/employee.component';
import {EditEmployeeComponent} from '../edit-employee/edit-employee.component';
import {EmployTicketsComponent} from '../employ-tickets/employ-tickets.component';
import {NavigationComponent} from '../navigation/navigation.component';





const routes: Routes = [
//   {path:'form',component:FormComponent},
// {path:'tenant',component:TenantComponent},

{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'employee',component:EmployeeComponent},
{path:'editEmployee/:id',component:EditEmployeeComponent},
{path:'employTickets',component:EmployTicketsComponent},
{path:'navigation',component:NavigationComponent},
{path:'', redirectTo:'/register', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }

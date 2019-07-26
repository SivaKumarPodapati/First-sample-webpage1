import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';




import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TenantComponent } from './tenant/tenant.component';
import {RoutingRoutingModule} from './routing/routing-routing.module';
import {MaterialModule} from './shared/material-module';
import { TenantService } from './service/tenant.service';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import {EmployTicketsComponent} from './employ-tickets/employ-tickets.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TenantComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    EmployeeComponent,
    EditEmployeeComponent,
    EmployTicketsComponent,
    NavigationComponent,
   
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    FormsModule,
    RoutingRoutingModule,
    MaterialModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [TenantService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

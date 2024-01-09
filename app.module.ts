import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { RouterModule,Routes } from '@angular/router';
import { PermissionDirectiveDirective } from './PermissionDirective/permission-directive.directive';

import { CompanyIdNameAddress } from './Company.services';
// import { MyPipePipe } from './my-pipe.pipe';
import { TestingComponentComponent } from './testing-component/testing-component.component';
import { CompanyNameFilterPipe } from './CompanyNameFilterPipe';
const routes:Routes=[
  
  {
    path:'',
    
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  
  {
    path:'signUp',
    component:SignupComponent
  },
  {
    path:'company',
    loadChildren: ()=>import('src/app/ComapanyFolder/company.module').then(x=>x.companyModule)
  }
  

]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    SignupComponent,
    PermissionDirectiveDirective,
    
    TestingComponentComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [  CompanyIdNameAddress],
  bootstrap: [AppComponent]
})
export class AppModule { }

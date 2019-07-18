import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { ValidateService } from "./services/validate.service";
import { AuthService } from "./services/auth.service";
import { DetailService } from "./services/detail.service";
import { AuthGuard } from "./guards/auth.guard";
import { FlashMessagesModule } from 'angular2-flash-messages';

import "@ui5/webcomponents/dist/Table";
import "@ui5/webcomponents/dist/Panel";
import "@ui5/webcomponents/dist/Title";
import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Input.js"; 
import "@ui5/webcomponents/dist/features/InputSuggestions.js";
import "@ui5/webcomponents/dist/Button";
"@ui5/webcomponents/dist/features/InputElementsFormSupport.js";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { DushboardComponent } from './components/dushboard/dushboard.component';
import { DetailComponent } from './components/detail/detail.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'dushboard', component: DushboardComponent, canActivate: [AuthGuard]},
  {path: 'detail', component: DetailComponent, canActivate: [AuthGuard]}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    RegisterComponent,
    DushboardComponent,
    DetailComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }

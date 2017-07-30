import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signIn', component: SignInComponent}
];

export const RoutesModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);

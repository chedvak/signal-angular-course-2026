import { Routes } from '@angular/router';
import { Registration } from './registration/registration';
import { RegisterForm } from './register-form/register-form';

export const routes: Routes = [
  { path: 'register', component: Registration },
  { path: 'register-form', component: RegisterForm },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];

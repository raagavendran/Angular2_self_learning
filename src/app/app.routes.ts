import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { CurdOperationsComponent } from './curd-operations/curd-operations.component';

export const Approute:Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'curd',
    component: CurdOperationsComponent
  }
];



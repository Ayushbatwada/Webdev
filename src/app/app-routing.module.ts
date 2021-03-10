import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService} from './shared/auth-guard.service'

const routes: Routes = [
    {
      path:'users',
      loadChildren:()=>import('./containers/transactions-log/transactions.module').then(m => m.TransactionsLogModule),
      canActivateChild: [AuthGuardService]
    },
    {
      path:'',
      redirectTo:'login',
      pathMatch:'full'
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'signup',
      component:SignupComponent
    }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes,{useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

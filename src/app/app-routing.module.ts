import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Com01Component } from './com01/com01.component';
import { AuthGuard } from './gurads/auth.guard';
import { RoleGuard } from './gurads/role.guard';

const routes: Routes = [
  {
    path: "com01", component: Com01Component, canActivate: [RoleGuard]
  },
  { path: "module01", loadChildren: () => import("./module01/module01.module").then(m => m.Module01Module),
  canActivate: [AuthGuard] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

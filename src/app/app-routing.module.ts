import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Com01Component } from './com01/com01.component';
import { Com03Component } from './com03/com03.component';
import { AuthGuard } from './gurads/auth.guard';
import { RoleGuard } from './gurads/role.guard';
import { PipesCommonComponent } from './pipes-common/pipes-common.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: "com01", component: Com01Component,
  },
  {
    path: "com03", component: Com03Component,
  },
  {
    path: "pipes", component: PipesCommonComponent,
  },
  { path: "module01", loadChildren: () => import("./module01/module01.module").then(m => m.Module01Module),
  
},
{ path: "task", loadChildren: () => import("./task/task.module").then(m => m.TaskModule),
  
},
{
  path: "**", component: ErrorComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

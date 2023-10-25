import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, 
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  
  {
    path: 'restablecer-pass',
    loadChildren: () => import('./restablecer-pass/restablecer-pass.module').then( m => m.RestablecerPassPageModule)
  },
  {
    path: 'er404',
    loadChildren: () => import('./er404/er404.module').then( m => m.Er404PageModule)
  },
  {
    path: 'miscursos',
    loadChildren: () => import('./miscursos/miscursos.module').then( m => m.MiscursosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

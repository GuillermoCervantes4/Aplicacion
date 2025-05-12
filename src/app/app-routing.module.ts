import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },  {
    path: 'filtro',
    loadChildren: () => import('./pages/filtro/filtro.module').then( m => m.FiltroPageModule)
  },
  {
    path: 'adoptar',
    loadChildren: () => import('./pages/adoptar/adoptar.module').then( m => m.AdoptarPageModule)
  },
  {
    path: 'perrito',
    loadChildren: () => import('./pages/perrito/perrito.module').then( m => m.PerritoPageModule)
  },
  {
    path: 'albergue',
    loadChildren: () => import('./pages/albergue/albergue.module').then( m => m.AlberguePageModule)
  },
  {
    path: 'alberguess',
    loadChildren: () => import('./pages/alberguess/alberguess.module').then( m => m.AlberguessPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

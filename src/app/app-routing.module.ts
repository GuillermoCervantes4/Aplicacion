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
  },
  {
    path: 'filtro',
    loadChildren: () => import('./pages/filtro/filtro.module').then( m => m.FiltroPageModule)
  },
  {
    path: 'adoptar',
    loadChildren: () => import('./pages/adoptar/adoptar.module').then( m => m.AdoptarPageModule)
  },
  {
    path: 'perrito/:perritoId',
    loadChildren: () => import('./pages/perrito/perrito.module').then( m => m.PerritoPageModule)
  },
  {
    path: 'albergue/:albergueId',
    loadChildren: () => import('./pages/albergue/albergue.module').then( m => m.AlberguePageModule)
  },
  {
    path: 'alberguess',
    loadChildren: () => import('./pages/alberguess/alberguess.module').then( m => m.AlberguessPageModule)
  },
  {
    path: 'perdidos',
    loadChildren: () => import('./pages/perdidos/perdidos.module').then( m => m.PerdidosPageModule)
  },
  {
    path: 'reportar',
    loadChildren: () => import('./pages/reportar/reportar.module').then( m => m.ReportarPageModule)
  },
  {
    path: 'apadrinar',
    loadChildren: () => import('./pages/apadrinar/apadrinar.module').then( m => m.ApadrinarPageModule)
  },
  {
    path: 'donacion1',
    loadChildren: () => import('./pages/donacion1/donacion1.module').then( m => m.Donacion1PageModule)
  },
  {
    path: 'donacion2',
    loadChildren: () => import('./pages/donacion2/donacion2.module').then( m => m.Donacion2PageModule)
  },
  {
    path: 'donacion3',
    loadChildren: () => import('./pages/donacion3/donacion3.module').then( m => m.Donacion3PageModule)
  },
  {
    path: 'donacion4',
    loadChildren: () => import('./pages/donacion4/donacion4.module').then( m => m.Donacion4PageModule)
  },
  {
    path: 'donacion5',
    loadChildren: () => import('./pages/donacion5/donacion5.module').then( m => m.Donacion5PageModule)
  },
  {
    path: 'donacion6',
    loadChildren: () => import('./pages/donacion6/donacion6.module').then( m => m.Donacion6PageModule)
  },
  {
    path: 'inicio1',
    loadChildren: () => import('./pages/inicio1/inicio1.module').then( m => m.Inicio1PageModule)
  },
  {
    path: 'inicio2',
    loadChildren: () => import('./pages/inicio2/inicio2.module').then( m => m.Inicio2PageModule)
  },
  {
    path: 'apadrinar1',
    loadChildren: () => import('./pages/apadrinar1/apadrinar1.module').then( m => m.Apadrinar1PageModule)
  },
  {
    path: 'apadrinar2',
    loadChildren: () => import('./pages/apadrinar2/apadrinar2.module').then( m => m.Apadrinar2PageModule)
  },
  {
    path: 'apadrinar3',
    loadChildren: () => import('./pages/apadrinar3/apadrinar3.module').then( m => m.Apadrinar3PageModule)
  },
  {
    path: 'apadrinar4',
    loadChildren: () => import('./pages/apadrinar4/apadrinar4.module').then( m => m.Apadrinar4PageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

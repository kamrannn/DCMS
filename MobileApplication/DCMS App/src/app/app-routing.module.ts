import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home-detail',
    loadChildren: () => import('./home-detail/home-detail.module').then( m => m.HomeDetailPageModule)
  },
  
  {
    path: 'homedetail2',
    loadChildren: () => import('./homedetail2/homedetail2.module').then( m => m.Homedetail2PageModule)
  },
  {
    path: 'homedetail3',
    loadChildren: () => import('./homedetail3/homedetail3.module').then( m => m.Homedetail3PageModule)
  },
  {
    path: 'homedetail4',
    loadChildren: () => import('./homedetail4/homedetail4.module').then( m => m.Homedetail4PageModule)
  },
  {
    path: 'homedetail5',
    loadChildren: () => import('./homedetail5/homedetail5.module').then( m => m.Homedetail5PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

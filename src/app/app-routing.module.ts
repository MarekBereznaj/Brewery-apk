import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'breweries',
    loadChildren: () => import('./pages/breweries/breweries.module').then( m => m.BreweriesPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/brewery-detail/brewery-detail.module').then( m => m.BreweryDetailPageModule)
  },
  {
    path: 'city',
    loadChildren: () => import('./pages/brewery-city/brewery-city.module').then( m => m.BreweryCityPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

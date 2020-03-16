import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ItemComponent } from './pages/item/item.component';


const routes: Routes = [
  {
    path: 'inicio',
    component: PortafolioComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'portafolio',
    component: PortafolioComponent
  },
  {
    path: 'item',
    component: ItemComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

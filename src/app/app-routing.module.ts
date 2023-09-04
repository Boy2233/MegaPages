import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingComponent } from './pending/pending.component';

const routes: Routes = [

  {
    path: 'pending',
    loadChildren: () => import('./pending/pending.module').then(m => m.PendingModule)
  },

  {
    path: 'complete',
    loadChildren: () => import('./complete/complete.module').then(m => m.CompleteModule)
  },

  {
    path: 'order-details',
    loadChildren: () => import('./order-details/order-details.module').then(m => m.OrderDetailsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

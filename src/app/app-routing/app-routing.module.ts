import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from '../child/child.component';
import { ParentComponent } from '../parent/parent.component';
import { ParentChildComponent } from '../parent-child/parent-child.component';

const routes: Routes = [
  {path: '', redirectTo: '/parents', pathMatch: 'full'}, // redirect only if full url is empty
  {path: 'children', component: ChildComponent},
  {path: 'parents', component: ParentComponent},
  {path: 'parent/:id', component:ParentChildComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ChildComponent, ParentChildComponent]

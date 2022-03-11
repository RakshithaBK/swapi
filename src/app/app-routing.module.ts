import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleDashboardComponent } from './people/people-dashboard/people-dashboard.component';
import { PeopleDetailsComponent } from './people/people-details/people-details.component';

const routes: Routes = [
  {path:'people', component: PeopleDashboardComponent},
  {path:'details', component: PeopleDetailsComponent},
  {path: '', redirectTo:'people', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

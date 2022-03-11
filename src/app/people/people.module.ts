import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleDashboardComponent } from './people-dashboard/people-dashboard.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { AddPeopleComponent } from './add-people/add-people.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox'


@NgModule({
  declarations: [
    PeopleDashboardComponent,
    PeopleDetailsComponent,
    AddPeopleComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ]
})
export class PeopleModule { }

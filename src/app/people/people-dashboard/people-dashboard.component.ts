import { Component, OnInit, ViewChild, Output, EventEmitter  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { People } from '../models/people';
import { PeopleserviceService } from '../services/peopleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-dashboard',
  templateUrl: './people-dashboard.component.html',
  styleUrls: ['./people-dashboard.component.css'],
  providers: [PeopleserviceService]
})
export class PeopleDashboardComponent implements OnInit {
  displayedColumns = ['Id','Name','Birth Year','Height','No. of films','Favorite']
  dataSource!: MatTableDataSource<People>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  peoplelist: any;

  constructor(private peopleservice: PeopleserviceService, private route: Router) { }

  ngOnInit(): void {
    this.peopleservice.getAllPeople().subscribe(data => {
      
      let results: any = data;
      this.peoplelist = results.results;
      this.dataSource = new MatTableDataSource(this.peoplelist); 
      this.dataSource.paginator = this.paginator;
      
    })
  }

  selectRow(row: any){
    this.route.navigate(['/details',row])

  }

}

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { People } from '../models/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleserviceService {
  baseurl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllPeople(){
   return this.http.get(this.baseurl + '/people');
  }

}

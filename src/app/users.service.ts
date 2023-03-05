import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getAllData() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
}

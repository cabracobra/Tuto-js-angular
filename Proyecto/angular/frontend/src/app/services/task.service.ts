import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private URL = "http://localhost:3000";
  constructor(private http:HttpClient) { }

  getTask()
  {
    return this.http.get<any>(this.URL + '/public');
  }
  getPrivateTask()
  {
    return this.http.get<any>(this.URL + '/private');
  }
}

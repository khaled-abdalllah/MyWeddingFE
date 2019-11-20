import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClosedDay } from '../Models/closed-day';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {URL} from '../../shared/url'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClosedDayService {

  constructor(private http: HttpClient) { }

  getAll():Observable<ClosedDay[]>
  {
     return this.http.get<ClosedDay[]>(URL.GetAllOffers)
  }

  post(closedDayModel: ClosedDay): Observable<ClosedDay> {
    return this.http.post<ClosedDay>(URL.SaveClosedDay, closedDayModel, httpOptions);
  }

  getByID(id :string):Observable<ClosedDay>{
    return this.http.get<ClosedDay>(URL.getClosedDayById+id);
  }

  delete (id:string){
    return this.http.delete<number>(URL.DeleteClosedDay  +id,  
      httpOptions);
  }
}

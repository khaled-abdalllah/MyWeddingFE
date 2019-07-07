import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventType } from '../../Models/EventType';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AddEventTypeService {

  private addEventypeURL = 'http://localhost:34294/api/EventType/AddEventType';
  private GetAllEventTypesURL='http://localhost:34294/api/EventType/GetAllEventTypes'; 
  constructor(private http: HttpClient) {

  }

   post(eventTypeModel: EventType): Observable<EventType> {
    return this.http.post<EventType>(this.addEventypeURL, eventTypeModel, httpOptions)
    // .pipe(
    //   tap((eventTypeModel: EventType) => this.log(`added event Type w/ id=${eventTypeModel.id}`)),
    //   catchError(this.handleError<EventType>('addHero'))
    // );
  }

  getAll():Observable<EventType[]>{
      return this.http.get<EventType[]>(this.GetAllEventTypesURL)
  }
}
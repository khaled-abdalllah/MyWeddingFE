import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventType } from '../../Models/EventType';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {URL} from '../../../shared/url'



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AddEventTypeService {


  
  constructor(private http: HttpClient) {

  }

   post(eventTypeModel: EventType): Observable<EventType> {
    return this.http.post<EventType>(URL.addEventypeURL, eventTypeModel, httpOptions)
    // .pipe(
    //   tap((eventTypeModel: EventType) => this.log(`added event Type w/ id=${eventTypeModel.id}`)),
    //   catchError(this.handleError<EventType>('addHero'))
    // );
  }

  getAll():Observable<EventType[]>{
      return this.http.get<EventType[]>(URL.GetAllEventTypesURL)
  }

  getById(id :string):Observable<EventType>{
    return this.http.get<EventType>(URL.GetEventTypebyIdURl+id);
  }

  // deleteEventType(id:string)
  // {
  //     return this.http.get(this.DeleteEventTypeURL+id);
  // }

  deleteEventType(id: string): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(URL.DeleteEventTypeURL  +id,  
 httpOptions);  
  }  

}
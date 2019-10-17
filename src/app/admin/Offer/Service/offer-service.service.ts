import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Offer } from '../../Models/offer';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {URL} from '../../../shared/url'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {

  constructor(private http: HttpClient) 
  {

  }

  getAll():Observable<Offer[]>
  {
     return this.http.get<Offer[]>(URL.GetAllOffers)
  }

  post(OffferModel: Offer): Observable<Offer> {
    return this.http.post<Offer>(URL.SaveOffer, OffferModel, httpOptions);
  }

  getByID(id :string):Observable<Offer>{
    return this.http.get<Offer>(URL.getOfferById+id);
  }

  delete (id:string){
    return this.http.delete<number>(URL.DeleteOffer  +id,  
      httpOptions);
  }
  
}

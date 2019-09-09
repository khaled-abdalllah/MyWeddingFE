import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Items } from '../../Models/items';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {URL} from '../../../shared/url'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class ItemServiceService {

  constructor(private http: HttpClient) {

  }

   post(ItemsModel: Items): Observable<Items> {
    return this.http.post<Items>(URL.addItemsURL, ItemsModel, httpOptions);
  }
  
  getAll():Observable<Items[]>{
      return this.http.get<Items[]>(URL.GetAllItemsURL)
  }

  getById(id :string):Observable<Items>{
    return this.http.get<Items>(URL.GetItemsbyIdURl+id);
  }

  delete(id: string): Observable<number> {  
    return this.http.delete<number>(URL.DeleteItemsURL  +id,  
 httpOptions);  
  }  
}

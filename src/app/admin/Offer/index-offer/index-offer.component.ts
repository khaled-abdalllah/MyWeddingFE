import { Component, OnInit,ViewChild } from '@angular/core';
import {OfferServiceService} from '../Service/offer-service.service'
import { MatTableDataSource } from '@angular/material';
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Offer} from '../../../admin/Models/offer'

@Component({
  selector: 'app-index-offer',
  templateUrl: './index-offer.component.html',
  styleUrls: ['./index-offer.component.css']
})
export class IndexOfferComponent implements OnInit {

  constructor(private OfferService:OfferServiceService,private router: Router,private _snackBar: MatSnackBar) 
  { }

  Offer:Offer[];
  massage = null;
  displayedColumns: string[] = ['Id', 'OfferName','Price','Details','Update','Delete'];


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  public dataSource = new MatTableDataSource<Offer>();

  ngOnInit() 
  {
    this.getAllOffers();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  getAllOffers()
  {
    this.OfferService.getAll().subscribe(x=>this.dataSource.data=x as Offer[] );
  }

  applyFilter(filterValue: string) 
  {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

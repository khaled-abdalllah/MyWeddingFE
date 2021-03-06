import { Component, OnInit,ViewChild } from '@angular/core';
import {ItemServiceService} from '../service/item-service.service'
import { MatTableDataSource } from '@angular/material';
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Items} from '../../../admin/Models/items'

@Component({
  selector: 'app-index-item',
  templateUrl: './index-item.component.html',
  styleUrls: ['./index-item.component.css']
})
export class IndexItemComponent implements OnInit {

  constructor(private ItemsService:ItemServiceService,private router: Router,private _snackBar: MatSnackBar) { }

  Items:Items[];
  massage = null;
  displayedColumns: string[] = ['Id', 'ItemName','ItemPrice','Update','Delete'];


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  public dataSource = new MatTableDataSource<Items>();


  ngOnInit() 
  {
    this.getAllItems();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  getAllItems()
  {
    this.ItemsService.getAll().subscribe(x=>this.dataSource.data=x as Items[] );
  }

  public redirectToUpdate (id: string)  
  {
    this.router.navigate(['/itemSave', id]);
  }


  applyFilter(filterValue: string) 
  {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  redirectToDelete(id: string) 
  {  
    if (confirm("Are you sure you want to delete this ?")) 
    {   
          this.ItemsService.delete(id).subscribe(() => 
          {  
             this.massage = 'Record Deleted Succefully';  
             this.getAllItems();
             this.openSnackBar();
        }); 
    } 
  } 
  
    openSnackBar() 
    {
      this._snackBar.open(this.massage, 'Success', 
      {
        duration: 10000,
      });
    }


}

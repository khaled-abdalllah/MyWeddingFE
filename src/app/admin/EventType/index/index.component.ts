import { Component, OnInit,ViewChild } from '@angular/core';
import {AddEventTypeService} from '../services/add-event-type.service'
import {EventType} from '../../../admin/Models/EventType';
import { MatTableDataSource } from '@angular/material';
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private addEventTypeSerivce:AddEventTypeService,private router: Router,
    private _snackBar: MatSnackBar) { }
  EventTypes:EventType[];
  massage = null;  

  displayedColumns: string[] = ['id', 'EventName','Update','Delete'];


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  public dataSource = new MatTableDataSource<EventType>();
  ngOnInit() {
    this.GetAllEventTypes();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
   
  GetAllEventTypes(){
    this.addEventTypeSerivce.getAll().subscribe(x=>this.dataSource.data=x as EventType[] );
  }

  public redirectToUpdate (id: string)  {
    this.router.navigate(['/addEventType', id]);
  }


  redirectToDelete(id: string) 
  {  
    if (confirm("Are you sure you want to delete this ?")) 
    {   
          this.addEventTypeSerivce.deleteEventType(id).subscribe(() => {  
          this.massage = 'Record Deleted Succefully';  
          this.GetAllEventTypes();
          this.openSnackBar();
        }); 
      } 
  } 
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
    openSnackBar() {
      this._snackBar.open(this.massage, 'Success', {
        duration: 10000,
      });
    }


}

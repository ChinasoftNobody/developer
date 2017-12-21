/**
 * Created by Administrator on 2017/12/17.
 */
import {Component, EventEmitter, OnInit} from '@angular/core';
import {MatTableDataSource, PageEvent} from '@angular/material';
import {HttpService} from "../../common/http/http.service";

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{
  ngOnInit(): void {
    this.httpService.post("/developer/project/queryProjects",{
      account:'2339542185',
      pageSize:10,
      pageNumber:1
    },result => {
      this.data = result;
      console.log(this.data);
    })
  }
  constructor(private httpService: HttpService){}
  displayedColumns = ['account', 'name', 'url', 'projectType'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  data:any={};

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  changePage(e : PageEvent){
    console.log(e.length + e.pageIndex + e.pageSize)

  }
}
export interface Project {
  id: number;
  name: string;
  account: string;
  url: string;
  urlType: string;
  projectType: string;
}

const ELEMENT_DATA: Project[] = [
  {id: 1, name: 'Hydrogen', account: '1.0079', url:'', urlType:'',projectType:''}
];

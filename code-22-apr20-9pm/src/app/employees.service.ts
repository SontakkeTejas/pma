import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees=[
    {id:1,name:'Chandan Kumar'},
    {id:2,name:'Ajeet KUmar'},
    {id:3,name:'MOhan KUmar'},
    {id:4,name:'Soni KUmari'},
    {id:5,name:'Rakesh Gupta'},
    {id:6,name:'Mahesh KUmar'},
    {id:7,name:'Rohit KUmar'},
    {id:8,name:'Mohit KUmar'},
    {id:9,name:'OM KUmar'},

  ];
  constructor() { }
  getallemployees():Promise<any>{
    return new Promise(resolve=>resolve(this.employees));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnInit {
  all_student:any;
  constructor( private http:HttpClient) { 
    this.http.get('http://localhost:3000/all_students').subscribe(data => 
    this.all_student = data
  )}
  ngOnInit(): void {
    
    
    
    
  }
}

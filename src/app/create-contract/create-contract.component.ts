import { Component, OnInit } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  public choix!:any;
  public user:any= null;
  
  constructor(private route: Router){}
  ngOnInit(): void {
    
  
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.user = localStorage.getItem('user');
        this.user = JSON.parse(this.user);
        if(!this.user){
          this.route.navigate['/login'];
        }

      }
    });
  }
  
  

  
}

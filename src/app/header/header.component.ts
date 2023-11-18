import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public user: any = null;
  activePath: string = '';
  
  constructor(private route: Router) {
   
    
  }

  ngOnInit(): void {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activePath = event.url;    
        console.log(this.route.url);   
        this.user = localStorage.getItem('user');
        this.user = JSON.parse(this.user);

        if(!this.user && (this.route.url =='/verify_contract' || this.route.url =='/create_contract')){
          this.route.navigate(['/login']);
        }
        
        if(this.user && (this.route.url =='/login' || this.route.url =='/inscription')){
          this.route.navigate(['/verify_contract']);
        }

      }
    });
  }
  logout() {
    localStorage.removeItem('user');
    location.replace('/login')
  }
  printData(test: any) {
    console.log(test);
  }
}

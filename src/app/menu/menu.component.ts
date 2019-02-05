import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 
  
@ViewChild('navbar') navbar :ElementRef;
@ViewChild('mainBar') mainbar :ElementRef;
@ViewChild('toggler') toggler :ElementRef;
@ViewChild('navbaricons') mainnavbar :ElementRef;
openarstatus = false;
  constructor() { }

  ngOnInit(){
  //  this.opennav();
    console.log(this.toggler);
    this.openarstatus = false;
  }

  opennav = ()=>{
    this.mainnavbar.nativeElement.style.width = '0';
     this.navbar.nativeElement.style.width = '250px'
     this.mainbar.nativeElement.style.marginLeft = '250px'
   //  this.navbar.nativeElement.style.marginTop = '50px'
    
  }
  
  iconsnavbar(){
    this.mainnavbar.nativeElement.style.display = 'block';
    this.mainnavbar.nativeElement.style.width = '100px';
    this.mainbar.nativeElement.style.marginLeft = '100px'
  
  }
  
   closeNav = ()=>{
    this.navbar.nativeElement.style.width = '0';
    this.mainbar.nativeElement.style.marginLeft = '0';
    this.openarstatus = true;
    this.iconsnavbar();
  }
  


}

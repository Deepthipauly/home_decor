import { Component } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchTerm:any

  constructor( private ps : ProductService){}
  ngOnInit():void{

  }


  searchData(event:any){
    console.log(event);
    this.searchTerm=event.target.value;
    //search data to behaviour subject
    this.ps.search.next(this.searchTerm)

  }

}

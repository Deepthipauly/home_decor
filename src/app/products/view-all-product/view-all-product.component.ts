import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  productData: any
  filterCategory: any
  searchString:any=''
  constructor(private ps: ProductService) { }


  ngOnInit(): void {

    this.ps.viewAllProduct().subscribe((data: any) => {
      console.log("data",data);
      this.productData = data;
    })

//access data from behaviour object\

this.ps.search.subscribe((data:any)=>{
  this.searchString=data
})

  }

  filter(category: any) {

    this.filterCategory = this.productData.filter((i: any) => i.categoryId == category || category == "")

  }


}

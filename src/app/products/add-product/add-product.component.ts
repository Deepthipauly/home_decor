import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent {

  constructor(private fb:FormBuilder, private ps:ProductService, private router:Router) { }

  addProductForm = this.fb.group({

    id: [''],
    productName: [''],
    categoryId: [''],
    description: [''],
    productImg: [''],
    isavailable: [''],
    rating: [''],
    review: [''],
    vendorName: [''],
    warrenty: ['']
  })

  ngOnInit(): void { }

addProduct(){

let pdata ={

  id: this.addProductForm.value.id,
  productName: this.addProductForm.value.productName,
  categoryId:this.addProductForm.value.categoryId,
  description:this.addProductForm.value.description,
  productImg:this.addProductForm.value.productImg,
  isavailable: this.addProductForm.value.isavailable,
  rating: this.addProductForm.value.rating,
  review: this.addProductForm.value.review,
  vendorName: this.addProductForm.value.vendorName,
  warrenty: this.addProductForm.value.warrenty

}

this.ps.addNewProduct(pdata).subscribe((item:any)=>{

  alert('new productadded')
  this.router.navigateByUrl("products")

})


}

}

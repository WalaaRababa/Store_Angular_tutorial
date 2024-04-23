import { Product } from './../../type';
import { Products } from '../../type';
import { ProductsService } from './../services/products.service';
import { Component,OnInit } from '@angular/core';
import { ProductComponent } from '../component/product/product.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent,CommonModule,PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
constructor(private productsService:ProductsService){}
products:Product[]=[];
rows:number=5;
first:number=5;
totalRecords:number=0;
fetchData(page:number,perPage:number)
{
  this.productsService.getProducts('http://localhost:3000/clothes',{page,perPage}).subscribe(
    (products:Products)=>
  {
    console.log(products.items);
    this.products=products.items
    this.totalRecords=products.total
  },err=>
  {
    console.log(err);
    
  })

}
ngOnInit():void
{
  this.fetchData(0,this.rows)
}
onPageChange(event:any)
{
this.fetchData(event.page,event.rows)
}
}

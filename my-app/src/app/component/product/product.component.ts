import { Component, Input, EventEmitter, Output ,OnInit} from '@angular/core';
import { Product } from '../../../type';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, RatingModule,ButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() productOutput: EventEmitter<Product> = new EventEmitter<Product>();
  // rate(value: number) {}
  onProductOutput(product:Product)
  {
console.log('product',product);

  }
  ngOnInit():void{
    this.productOutput.emit(this.product)
  }
}

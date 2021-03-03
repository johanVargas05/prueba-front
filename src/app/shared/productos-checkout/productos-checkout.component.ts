import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';


  export interface IProducto{
    name:string;
    price:string;
    image:string;
  };

@Component({
  selector: 'app-productos-checkout',
  templateUrl: './productos-checkout.component.html',
  styleUrls: ['./productos-checkout.component.scss']
})
export class ProductosCheckoutComponent implements OnInit {
  productos:[IProducto];
  total:number=0;
  constructor(private productService:ProductosService) { }

  ngOnInit(): void {
    this.productService.getProductos().subscribe((data:[IProducto])=>{
      this.productos=data;
      data.forEach(item => {
        this.total+=parseInt(item.price);
      });
    })
  }

}

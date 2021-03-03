import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { ProductosCheckoutComponent } from './productos-checkout/productos-checkout.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormularioComponent, ProductosCheckoutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[FormularioComponent,ProductosCheckoutComponent]
})
export class SharedModule { }

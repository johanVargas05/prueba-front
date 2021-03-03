import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formInfo:FormGroup;
  deshabilitar:boolean=true;
  colonies:[string]=[''];

  constructor(private formBuilder: FormBuilder, private service: FormularioService) { }

  ngOnInit(): void {
    this.construirForm();
  }


  construirForm(){
    this.formInfo = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo:['', [Validators.required, Validators.email]],
      telefono:['', Validators.required],
      codigo:['', [Validators.required, Validators.maxLength(5),Validators.minLength(5)]],
      colonia:['', Validators.required],
      estado:['', Validators.required],
      ciudad:['', Validators.required],
      delegacion:['', Validators.required],
      calle:['',Validators.required]
    });
  }

  submitForm(){
    if(this.formInfo.valid){
      this.service.enviarInformacion(this.formInfo.value).subscribe(()=>{
        alert('Se recibio su información correctamente');
        this.formInfo.reset();
      })
    }else{
      alert('Formulario no valido revisa cada uno de los campos');
    }
  }

  buscarCodigo(codigo:string){
    if(codigo.length==5){  
     this.service.direccionCodigoPostal(codigo).subscribe((data:{state:string,city:string,town:string,colonies:[string]})=>{
        if(data.city!=undefined){
          this.deshabilitar=false;
          this.colonies=data.colonies;
          this.formInfo.patchValue({
            estado:data.state,
            ciudad:data.city,
            delegacion:data.town,
            colonia:data.colonies[0]
          });
        }else{
          this.deshabilitar=true;
          this.colonies=[''];
          this.formInfo.patchValue({
            estado:null,
            ciudad:null,
            colonia:null,
            delegacion:null
          });
          alert('El codigo postal ingresado no se encontro, intente con uno nuevo');
        }
     })


    }else{
      this.deshabilitar=true;

      this.formInfo.patchValue({
        estado:null,
        ciudad:null,
        colonia:null,
        delegacion:null
      });
    }
    
  }

 
}



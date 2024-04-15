import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

//OTRA FORMA DE INYECTAR
  // private fbo = inject(FormBuilder);

  constructor(private fb: FormBuilder){}
  public colorpadre:string = 'green';

  // public formulario: FormGroup = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)]),
  // })

  public formulario: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
  });

  changeColor(){
     this.colorpadre = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

}

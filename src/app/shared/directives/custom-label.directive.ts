import { IfStmt } from '@angular/compiler';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement? : ElementRef<HTMLElement>;
  private _color : string = 'red';
  private _errors?: ValidationErrors | null | undefined;

   @Input() set color (value : string){
    this._color = value;
    this.setStyle();
   }

   @Input() set errors(value: ValidationErrors | undefined | null){
    this._errors= value;
    this.setErrorMessage();
    // console.log({value} );
   }


  constructor(private el : ElementRef<HTMLElement>) {
    // console.log('constructor de la directiva ');
    console.log(el);

    this.htmlElement = el;

    this.htmlElement.nativeElement.innerHTML = 'Hola Ivanna';
  }

  ngOnInit(): void {
    console.log('Directiva - OnInit');
    this.setStyle();
  }

  setStyle(){
    if(!this.htmlElement) return;
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void{
    if(!this.htmlElement)return;

    if(!this._errors){
      this.htmlElement.nativeElement.innerText='';
      return;
    }

    const errors = Object.keys(this._errors);

    if(errors.includes('required')){
      this.htmlElement.nativeElement.innerText='Este campo es requerido';
      return
        }

  // if(errors.includes('minlength')){
  //   this.htmlElement.nativeElement.innerText='Minimo 4 letras';
  // }
  // if(errors.includes('email')){
  //   // this.htmlElement.nativeElement.innerText='Insertar un correo electronico correcto';
  //   console.log('email invalido');
  // }

  if(errors[errors.length-1].includes('minlength')){
    const {minlength} = this._errors;
    const {requiredLength, actualLength} = minlength;
    this.htmlElement.nativeElement.innerText=`${actualLength} caracteres de ${requiredLength}`;
  }
  if(errors[errors.length-1].includes('email')){
    this.htmlElement.nativeElement.innerText='email invalido';
  }

  }

}

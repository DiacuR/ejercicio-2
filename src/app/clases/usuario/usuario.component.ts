import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  nombre: string;
  clave: string;

  constructor() {
    this.nombre = ''
    this.clave = ''
   }

  ngOnInit(): void {
  }

}

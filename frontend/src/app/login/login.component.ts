import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import { Router } from '@angular/router';

import {BackendService} from "../backend.service";
import {Empleado} from "../empleado";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  empleados: Empleado[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private servicios: BackendService) {
  }

  ngOnInit() {
    this.servicios.getEmpleados().subscribe(empleados => this.empleados = empleados);
  }


  iniciarSesion (usuario : string, clave: string){
    console.log(this.empleados)
  }

}

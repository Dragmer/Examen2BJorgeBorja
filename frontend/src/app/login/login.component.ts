import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {Empleado} from "../empleado";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  empleados: Empleado;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get("http://localhost:1337/empleado")
      .subscribe((data: any[]) =>
      {
        this.empleados = data[0];
      }
    )
  }
  iniciarSesion (usuario : string, clave: string){
    if (this.empleados.usuario == usuario && this.empleados.clave == clave)
    {
      const url = ["/factura"];
      this.router.navigate(url);
      console.log("Si vale")
    }
    else {
      var x = document.getElementById("alerta")
      x.style.display = "block";
    }
  }

}

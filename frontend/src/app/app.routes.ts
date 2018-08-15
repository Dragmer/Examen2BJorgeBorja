import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";

const RUTAS_APP: Routes = [
  {
    path: "inicio",
    component: LoginComponent
  },
  {
    path: "",
    redirectTo: "/inicio",
    pathMatch: "full"
  }
]

export {RUTAS_APP}

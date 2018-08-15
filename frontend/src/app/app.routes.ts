import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {MainMenuComponent} from "./main-menu/main-menu.component";

const RUTAS_APP: Routes = [
  {path: "", redirectTo: "inicio", pathMatch: "full"},
  {path: "inicio",component: LoginComponent},
  {path: "factura",component: MainMenuComponent}
]

export {RUTAS_APP}

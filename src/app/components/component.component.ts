import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterOutlet, HomeComponent, HeaderComponent],
    templateUrl:'component.component.html'
  })
  export class ComponenentComponent {

  }
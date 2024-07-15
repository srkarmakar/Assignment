import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="col-12 div-design py-3 my-2">
  <a class="text-violet-800 font-bold p-3" routerLink=''>Comer*AmiGos</a>
  </div>
  `,
  styles: `
  a{
    width: 100%;
    font-size: 40px;
    font-family: "Lucida Console", "Courier New", monospace;
    
  }
  .div-design {
    border-bottom: 3px solid red;
    border-style: double;
  }`
})
export class HeaderComponent {

}

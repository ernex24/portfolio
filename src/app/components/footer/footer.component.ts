import { Component  } from '@angular/core';
import {TextosWebService} from '../../services/textos-web.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {

  anio: number = new Date().getFullYear();

    constructor( public _tws: TextosWebService ) {}

}

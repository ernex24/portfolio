import { Component } from '@angular/core';
import {TextosWebService} from '../../services/textos-web.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

    constructor( public _tws: TextosWebService ) {}

}

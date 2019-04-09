import {Component} from '@angular/core';
@Component({
    selector : 'app-body',
    templateUrl : 'body.component.html'
})
export class BodyComponent {

    mensaje:string = 'Un gran poder requiere una gran responsabilidad';
    autor:string = 'Ben Parker';
    mostrar = true;

    personajes:string[] = ['Spiderman', 'Venom', 'Dr. Octupus'];
   
}
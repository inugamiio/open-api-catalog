import { Component } from '@angular/core';
import { INU_ICON } from './commons/components/icon/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inugami-open-api-catalog';

     icon : any = {
        inugami : INU_ICON.inugami
    };

}

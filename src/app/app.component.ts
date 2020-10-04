import { Component } from '@angular/core';
import { StateService } from './core/services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  constructor(private stateService: StateService){
    $(document).foundation();
  }
}

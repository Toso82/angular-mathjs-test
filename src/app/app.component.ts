import { Component } from '@angular/core';
import { evaluate } from 'mathjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  expression = 'sqrt(-4)';
  result = evaluate(this.expression).toString();
}

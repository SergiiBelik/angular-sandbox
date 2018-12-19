import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myHero = ''
  display = ''
  title = 'angular-sandbox';

  onClick(){
    this.myHero = 'You my hero!!!'
  }
  print(event){
    this.display += event.key +'|'
  }
}

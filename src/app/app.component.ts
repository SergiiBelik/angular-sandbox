import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  heroes: string[] = []
  title = 'angular-sandbox'

  addHero(value:string){
    if(value){
      this.heroes.push(value)
    }
  }


}

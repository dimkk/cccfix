/*
 * Angular 2 decorators and services
 */
import { Component } from '@angular/core';

//import { cccfixService } from '../cccfix.service';
// import { Home } from './home';
// import { RouterActive } from './router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'video-container',
  pipes: [ ],
  providers: [  ],
  directives: [ ],
  styles: [
    require('./videoContainer.css')
  ],
  template:require('./videoContainer.html')
})
export class videoContainer {
  loading = true;

  constructor(
    ) {

  }

  ngOnInit() {
    console.log('hello from cccfix videocontainer');
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */

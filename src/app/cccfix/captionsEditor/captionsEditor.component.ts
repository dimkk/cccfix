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
  selector: 'captions-editor',
  pipes: [ ],
  providers: [  ],
  directives: [ ],
  styles: [
    require('./captionsEditor.css')
  ],
  template:require('./captionsEditor.html')
})
export class captionsEditor {
  loading = true;

  constructor(
    ) {

  }

  ngOnInit() {
    console.log('hello from cccfix captions editor');
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */

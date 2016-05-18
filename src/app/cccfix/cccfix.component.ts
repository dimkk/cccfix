/*
 * Angular 2 decorators and services
 */
import { Component } from '@angular/core';

import { cccfixData } from './services/cccfix.data';
import { cccfixState } from './services/cccfix.state';

import { videoContainer } from './videoContainer/videoContainer.component';
import { captionsEditor } from './captionsEditor/captionsEditor.component';
// import { Home } from './home';
// import { RouterActive } from './router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'cccfix',
  pipes: [ ],
  providers: [ cccfixData ],
  directives: [ videoContainer, captionsEditor ],
  styles: [
    require('./cccfix.css')
  ],
  template:require('./cccfix.html')
})
export class cccfixApp {
  loading = true;

  constructor(
    public state: cccfixState,
    public data: cccfixData
    ) {

  }

  ngOnInit() {
    console.log('hello from cccfix21');
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */

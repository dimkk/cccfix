import { Component, Input } from '@angular/core';
import { ytVideo } from './ytVideo/ytVideo.component';

@Component({
  selector: 'video-container',
  pipes: [ ],
  providers: [  ],
  directives: [ ytVideo ],
  styles: [
    require('./videoContainer.css')
  ],
  template: require('./videoContainer.html')
})
export class videoContainer {
  @Input() code: string;
  videoLoading = false;
  ytCode: string;
  constructor(
    ) { }

  ngOnInit() {
    console.log('hello from cccfix videocontainer');
  }
  ngOnChanges() {
    console.log('videoContainer change');
    this.ytCode = this.code;
  }
  processYtCode(code: string) {
    this.ytCode = code;
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */

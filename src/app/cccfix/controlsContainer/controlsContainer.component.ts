/*
 * Angular 2 decorators and services
 */
import { Component, Input, ChangeDetectionStrategy,
  ChangeDetectorRef, AfterViewInit } from '@angular/core';

import { cccfixData } from '../services/cccfix.data';
import { cccfixState } from '../services/cccfix.state';

// import { Home } from './home';
// import { RouterActive } from './router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'controls-container',
  pipes: [],
  providers: [],
  directives: [],
  styles: [
    require('flexboxgrid')
  ],
  template: require('./controlsContainer.html'),
  changeDetection: ChangeDetectionStrategy.CheckAlways
})


export class controlsContainer implements AfterViewInit {
  currentSecond: number;
  playbackPause: boolean;
  constructor(
    private state: cccfixState,
    private ref: ChangeDetectorRef
  ) {
    this.state.currentTime$.subscribe((newTime) => {
      this.currentSecond = newTime;
      this.ref.markForCheck();
    });
    setInterval(() => {
      // stupid hack?!
    }, 100);
  }

  ngOnInit() {
    console.log('hello from contronsContainer');
    setTimeout(() => {
      // $('#controlTooltip').tooltip({ delay: 50 });
      // console.log($('#controlTooltip'));
      // console.log($('#controlTooltip')).tooltip;
    }, 0);
  }
  ngOnChanges() {
  }
  ngAfterViewInit() {

  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */

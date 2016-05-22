/*
 * Angular 2 decorators and services
 */
declare var $: any;
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { cccfixState } from '../services/cccfix.state';
import { currentCap } from './pipes/currentCap.pipe';
// import { RouterActive } from './router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'captions-editor',
  pipes: [currentCap],
  providers: [],
  directives: [],
  styles: [
    require('./captionsEditor.css')
  ],
  template: require('./captionsEditor.html'),
  changeDetection: ChangeDetectionStrategy.CheckAlways
})
export class captionsEditor {
  @Input() subs: ROP.IXmlTranslation;
  currentSubs: ROP.IXmlTranslation;
  texts: ROP.IXmlTranslationTextString[];
  currentTime: { time: number } = { time: 0 };
  prevST: number = 0;
  constructor(
    private state: cccfixState,
    private ref: ChangeDetectorRef
  ) {
    const self = this;
    this.state.currentTime$.subscribe((newTime) => {
      this.currentTime.time = newTime;
      this.ref.markForCheck();
      if (document.getElementsByClassName('subActive').length > 0) {
        $('#captions').scrollTo($('.subActive'), 150);
      };
    });
    setInterval(() => {
      // stupid hack?!
    }, 500);
  }

  ngOnInit() {
    console.log('hello from cccfix captions editor');
  }
  ngOnChanges() {
    this.currentSubs = this.subs;
    if (this.currentSubs) {
      console.log(this.currentSubs.transcript.text.length);
      this.texts = this.currentSubs.transcript.text;
    }
  }

  isSubActive(text: ROP.IXmlTranslationTextString): boolean {
    let s = parseFloat(text['@start'].toString());
    let e = parseFloat(text['@dur'].toString()) + s;
    let v = parseFloat(this.currentTime.time.toString());
    return v >= s && v <= e;
  }
  goToSubChunk(text: ROP.IXmlTranslationTextString): void {
    this.state.clickedSubtitlesChunk$.emit(text['@start']);
    this.currentTime.time = text['@start'];
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */

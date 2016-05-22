/*
 * Angular 2 decorators and services
 */
declare var $: any;
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { cccfixState } from '../services/cccfix.state';
import { getEnd } from './pipes/currentCap.pipe';
// import { RouterActive } from './router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'captions-editor',
  pipes: [getEnd],
  providers: [],
  directives: [],
  styles: [
    require('./captionsEditor.css'),
    require('font-awesome/css/font-awesome.css'),
    require('materialize-css/dist/css/materialize.css'),
    require('../mzd/email.css')
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
  currentEditIndex: any = -1;
  editModePlayback: boolean = false;
  editModePlaybackPause: boolean = false;

  constructor(
    private state: cccfixState,
    private ref: ChangeDetectorRef
  ) {
    this.state.editModePlaybackPause$.subscribe((mode) => {
      this.editModePlaybackPause = mode;
      ref.markForCheck();
    });
    this.state.currentTime$.subscribe((newTime) => {
      this.handleTimeTick(newTime);
    });
    setInterval(() => {
      // stupid hack?!
    }, 100);
  }

  finishEdit(text: ROP.IXmlTranslationTextString, $event) {
    console.log($event);
  }

  turnOffEdit(text: any, index) {
    this.texts[this.currentEditIndex].edit = false;
    this.currentEditIndex = -1;
    if (!this.editModePlaybackPause) this.editModePlayback = false;

  }

  editCaption(text: ROP.IXmlTranslationTextString, $event, index) {
    if ($event) {
      $event.preventDefault();
      $event.stopPropagation();
    }

    if (this.currentEditIndex !== -1) {
      this.texts[this.currentEditIndex].edit = false;
    }
    this.currentEditIndex = index;
    text.edit = true;

    let getInputInterval = setInterval(() => {
      if (document.getElementsByClassName('inp-' + index).length > 0) {
        document.getElementsByClassName('inp-' + index)[0].focus();
        clearInterval(getInputInterval);
      }
    }, 100);
  }

  handleEnter(index, $event, text) {
    console.log('enter');
    if (!this.editModePlaybackPause) {
      if (text.edit) {
        this.turnOffEdit(text, index);
      } else {
        this.editCaption(text, null, index);
      }
    } else {
      this.state.currentYTPlayer.playVideo();
      this.handleTimeTick(this.currentTime);
    }
  }

  checkChunkTime(value) {
    let result = false;
    let s = parseFloat(value['@start'].toString());
    let e = parseFloat(value['@dur'].toString()) + s;
    let v = parseFloat(this.currentTime.time.toString());
    result = (v >= s && v < e);
    return result;
  }

  handleTimeTick(newTime) {
    this.currentTime.time = newTime;
    let activeIndex = -1;

    let chunkWillChange = false;
    let currentIndex = this.texts.findIndex(value => value.active === true);
    let nextIndex = currentIndex + 1;
    chunkWillChange = this.checkChunkTime(this.texts[nextIndex]);

    let toPause = chunkWillChange && this.editModePlaybackPause && this.editModePlayback;
    if (toPause) {
      this.state.currentYTPlayer.pauseVideo();
      return;
    }

    this.texts.forEach((value) => {
      value.active = false;
    });
    let activeText = this.texts.filter((value: ROP.IXmlTranslationTextString, index) => {
      let result = this.checkChunkTime(value);
      if (result) {
        activeIndex = index;
      }
      return result;
    });
    if (activeText.length > 0) {
      activeText[0].active = true;
      if (this.editModePlayback) {
        this.editCaption(activeText[0], null, activeIndex);
      }
      if (activeText[0].edit) {
        this.editModePlayback = true;
      } else {
        this.editModePlayback = false;
      }



    }

    this.ref.markForCheck();
    if (document.getElementsByClassName('subActive').length > 0) {
      $('#captions').scrollTo($('.subActive'), 50);
    };
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

  // isSubActive(text: ROP.IXmlTranslationTextString, index: number): boolean {
  //   let s = parseFloat(text['@start'].toString());
  //   let e = parseFloat(text['@dur'].toString()) + s;
  //   let v = parseFloat(this.currentTime.time.toString());
  //   let result = v >= s && v < e;
  //   if (result) {
  //     this.turnOffPreviousTextEditMode(index);

  //   }

  //   return result;
  // }

  // turnOffPreviousTextEditMode(index: number) {
  //   if (index > 0) {
  //     this.texts[index].edit = this.texts[index - 1].edit ? true : false;
  //     console.log(this.texts[index].edit);
  //     if (this.texts[index - 1].edit) this.texts[index - 1].edit = false;
  //   }

  // }

  goToSubChunk(text: ROP.IXmlTranslationTextString): void {
    if (!text.edit) {
      this.state.clickedSubtitlesChunk$.emit(text['@start']);
      this.currentTime.time = text['@start'];
    } else {
      text.edit = false;
    }
    this.state.currentYTPlayer.playVideo();

  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */

/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';
import { cccfixApp } from './cccfix';

import { appMockData } from './app.MockData';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ appMockData ],
  directives: [ cccfixApp ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    require('./app.css')
  ],
  template: `
    <md-content>
      <md-toolbar color="primary">
          <span>{{ name }}</span>
          <span class="fill"></span>
          <button md-button (click)="selectPyh()">
           Pyh
           </button>
           <button md-button (click)="selectYak()">
           Yak
           </button>
           <button md-button (click)="selectYakS()">
           Yak S
           </button>
           <button md-button (click)="selectYul()">
           Yul
           </button>
           <button md-button (click)="selectYulS()">
           Yul S
           </button>
      </md-toolbar>

      <cccfix
         (subUpdated)=handleSubUpdate($event) 
         style="height:93%;width:99%"
         code="{{currentYtVideo?.code}}"
         [subs]="translation"></cccfix>     
      
  `
})
export class App {
  currentYtVideo: ROP.IYouTubeVideo;
  translation: ROP.IXmlTranslation;
  errorMessage: any;
  private yak = '/assets/yak.json';
  private yaks = '/assets/yak.s.json';
  private yul = '/assets/yul.json';
  private yuls = '/assets/yul.s.json';
  private pyh = '/assets/pyhal.json';
  constructor(
    private data: appMockData
    ) { }
  handleSubUpdate(text: ROP.IXmlTranslationTextString) {
    console.log('got updated chunk - ' + text);
  }
  selectPyh() {
    this.data.getMockData(this.pyh)
      .subscribe(
        video => this.currentYtVideo = video,
        error => this.errorMessage = <any>error,
        () => {
          console.log(this.currentYtVideo.code);
          this.translation = this.currentYtVideo.translations[0].translation;
        }
      );
  }
  selectYak() {
    this.data.getMockData(this.yak)
      .subscribe(
        video => this.currentYtVideo = video,
        error => this.errorMessage = <any>error,
        () => {
          console.log(this.currentYtVideo.code);
          this.translation = this.currentYtVideo.translations[0].translation;
        }
      );
  }
  selectYakS() {
    this.data.getMockData(this.yaks)
      .subscribe(
        video => this.currentYtVideo = video,
        error => this.errorMessage = <any>error,
        () => {
          console.log(this.currentYtVideo.code);
          this.translation = this.currentYtVideo.translations[0].translation;
        }
      );
  }
  selectYul() {
    this.data.getMockData(this.yul)
      .subscribe(
        video => this.currentYtVideo = video,
        error => this.errorMessage = <any>error,
        () => {
          console.log(this.currentYtVideo.code);
          this.translation = this.currentYtVideo.translations[0].translation;
        }
      );
  }
  selectYulS() {
    this.data.getMockData(this.yuls)
      .subscribe(
        video => this.currentYtVideo = video,
        error => this.errorMessage = <any>error,
        () => {
          console.log(this.currentYtVideo.code);
          this.translation = this.currentYtVideo.translations[0].translation;
        }
      );
  }

  ngOnInit() {
    this.selectPyh();
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */

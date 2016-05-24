
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { cccfixState } from '../../services/cccfix.state';
@Component({
  selector: 'yt-video',
  template: require('./ytVideo.html'),
  styles: [
    require('materialize-css/dist/css/materialize.css')
  ]
})
export class ytVideo {
  @Input() code: string;
  playerTimeInterval: any;
  @Output() currentTime: EventEmitter<number> = new EventEmitter<number>();
  // player: YT.Player;
  ngOnInit() {
    console.log('hello from cccfix yt video');
    this.showPlayer();
    this.state.clickedSubtitlesChunk$.subscribe((time) => {
      this.state.currentYTPlayer.seekTo(time, true);
    });
  }
  ngOnChanges() {
    console.log('ytVideo change');
    if (this.state.currentYTPlayer) {
      this.state.currentYTPlayer.loadVideoById(this.code);
      this.state.currentYTPlayer.stopVideo();
    } else {
      this.showPlayer();
    }
  }
  showPlayer = () => {
    if (this.code) {
      let player: YT.Player;
      window.onYouTubeIframeAPIReady = () => {
        this.state.currentYTPlayer = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: this.code,
          events: {
            'onReady': this.onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      };
      function onPlayerStateChange(event) {
        // if (event.data === YT.PlayerState.PLAYING && !done) {
        //   setTimeout(stopVideo, 6000);
        //   done = true;
        // }
      }
    }
  }
  onPlayerReady = (event) => {
    if (!this.playerTimeInterval) {
      this.playerTimeInterval = window.setInterval(() => {
        if (this.state.currentYTPlayer.getPlayerState() === 1) {
          let time = this.state.currentYTPlayer.getCurrentTime();
          this.state.currentTime$.emit(time);
        }
      }, 100);
    }
  }
  constructor(
    private state: cccfixState
  ) {
    let tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
}

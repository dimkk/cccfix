
import { Component, Input } from '@angular/core';

import { cccfixState } from '../../services/cccfix.state';
@Component({
  selector: 'yt-video',
  template: require('./ytVideo.html')
})
export class ytVideo {
  @Input() code: string;
  player: YT.Player;
  ngOnInit() {
    console.log('hello from cccfix yt video');
    this.showPlayer();
  }
  ngOnChanges() {
    console.log('ytVideo change');
    if (this.player) {
       this.player.loadVideoById(this.code);
    } else {
      this.showPlayer();
    }
  }
  showPlayer = () => {
    if (this.code) {
      // 2. This code loads the IFrame Player API code asynchronously.
      let tag = document.createElement('script');

      tag.src = 'https://www.youtube.com/iframe_api';
      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      let player: YT.Player;
      window.onYouTubeIframeAPIReady = () => {
        this.player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: this.code,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      };

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      let done = false;
      function onPlayerStateChange(event) {
        if (event.data === YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
    }
  }
  constructor() {}
}

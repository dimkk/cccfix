
import { Component, Input } from '@angular/core';
/*
 * Directive
 * XLarge is a simple directive to show how one is made
 */
@Component({
  selector: 'yt-video', // using [ ] means selecting attributes
  template: require('./ytVideo.html')
})
export class ytVideo {
  @Input() code:string;
  player:YT.Player;
  
  
  ngOnInit() {
    console.log('hello from cccfix yt video');
    this.showPlayer();
  }
  
  ngOnChanges() {
    console.log('change1');
    if (this.player) {
       //this.player.clearVideo();
       this.player.loadVideoById(this.code);
    } else {
      this.showPlayer();
    }
   
  }
  
  showPlayer = ()=>{
    if (this.code){
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player:YT.Player;
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
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        //event.target.playVideo();
        
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
    }
  }
  
  constructor() {
    
  }
}

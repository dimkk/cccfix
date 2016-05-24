import { Injectable, EventEmitter } from '@angular/core';
// import { Observable } from 'rxjs/Rx';

export interface ICccfixState {
    ytVideo: ROP.IYouTubeVideo;
    currentYTPlayer: YT.Player;
    currentTime$: EventEmitter<number>;
    clickedSubtitlesChunk$: EventEmitter<number>;
}

@Injectable()
export class cccfixState implements ICccfixState {
    /**
     *  This is basic state container for app
     */
    public ytVideo: ROP.IYouTubeVideo;
    public currentYTPlayer: YT.Player;
    public currentTime$:  EventEmitter<number> = new EventEmitter<number>();
    public clickedSubtitlesChunk$:  EventEmitter<number> = new EventEmitter<number>();
    public editModePlaybackPause$: EventEmitter<boolean> = new EventEmitter<boolean>();
    public subtitleChunkUpdated$: EventEmitter<ROP.IXmlTranslationTextString> 
        = new EventEmitter<ROP.IXmlTranslationTextString>();
    public captionsEditorDivHeight = 500; 
        
    constructor() {

    }
}

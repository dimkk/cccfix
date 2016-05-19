import { Injectable } from '@angular/core';

export interface ICccfixState {
    ytVideo: ROP.IYouTubeVideo;
    currentYTPlayer: YT.Player;
}

@Injectable()
export class cccfixState implements ICccfixState {
    /**
     *  This is basic state container for app
     */
    public ytVideo: ROP.IYouTubeVideo;
    public currentYTPlayer: YT.Player;
    constructor() {

    }
}

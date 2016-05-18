import { Injectable } from '@angular/core';

export interface ICccfixState{
    currentYtCode:string;
}

@Injectable()
export class cccfixState implements ICccfixState {
    /**
     *  This is basic state container for app
     */
    public currentYtCode:string;
    constructor() {
        
    }
}

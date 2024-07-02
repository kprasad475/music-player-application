import { Injectable } from '@angular/core';
import { Howl  } from 'howler';


@Injectable({
  providedIn: 'root'
})
export class AudioServiceService {
  private player:Howl;

  constructor() { }

  play(src:string){
    this.player = new Howl({
      src:[src],
      html5:true
    });
    this.player.play();
  }

  pause(){
    if(this.player){
      this.player.pause();
    }
  }

  stop(){
    if(this.player){
      this.player.stop();
    }
  }

  duration():number{
    return this.player ? this.player.duration():0;
  }

  currentTime():number{
   return this.player ? this.player.seek() as number : 0
  }
  
}

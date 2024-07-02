import { Component } from '@angular/core';
import { AudioServiceService } from '../audio-service.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent {

  tracks = [{title:'Track 1',src :'/assets/ringtone1.mp3'},
            {title:'Track 2',src :'/assets/ringtone2.mp3'},
            {title:'Track 3',src :'/assets/ringtone3.mp3'}
  ]

  constructor(private service :AudioServiceService){}

  playTrack(track: {title:string,src :string}){
this.service.play(track.src)
  }
}

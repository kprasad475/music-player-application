import { Component } from '@angular/core';
import { AudioServiceService } from '../audio-service.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css'
})
export class ControlsComponent {

  constructor(private service :AudioServiceService){}
  play(){
    this.service.play('/assets/bourne_extreme_ways.mp3');
      }
        pause(){
    this.service.pause();
        }
    
        stop(){
    this.service.stop();
        }
}

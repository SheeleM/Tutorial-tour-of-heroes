import { Component ,Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  // Este componente solo recibe un objeto héroe a través de su heropropiedad
  @Input() hero?: Hero;

}

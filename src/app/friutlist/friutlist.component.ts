import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlistdataService } from '../shared/services/fruitlistdata.service';

@Component({
  selector: 'app-friutlist',
  standalone: true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './friutlist.component.html',
  styleUrl: './friutlist.component.scss'
})



export class FriutlistComponent {
  fruitlistdata = inject(FruitlistdataService);


  addCommentToFruit(comment: string, index: number) {
    this.fruitlistdata.addCommentToFruit(comment, index);
  }
}

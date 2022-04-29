import { Component, OnInit } from '@angular/core';
import { GameEngineLibService } from '../../../game-engine-lib/src/public-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'tetris';
constructor(private engineService: GameEngineLibService) {
    // console.info(engineService.testing);

  }
  async ngOnInit() {}
}

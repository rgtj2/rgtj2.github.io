import {Component} from 'angular2/core';
import {Trump} from './actors/trump';
declare var Phaser;
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html'
})
export class AppComponent { 
  constructor(){
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
    var trump = new Trump(game);
    var boot = {
      create: function(){
        console.log("boot");
        game.state.start("preload");
      }
    };
    var preload = {
      preload: function(){
        trump.preload();
      },
      create: function(){
        game.state.start("start");
      }
    };
    var start = {
      create: function(){
        console.log("start create");
        game.stage.backgroundColor = "#ffffff";
        trump.create();
      },
      update: function(){
        trump.update();
      }
    };
    game.state.add("boot", boot);
    game.state.add("preload", preload);
    game.state.add("start", start);
    game.state.start("boot");
  }
}

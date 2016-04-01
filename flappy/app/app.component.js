System.register(['angular2/core', './actors/trump'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, trump_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (trump_1_1) {
                trump_1 = trump_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
                    var trump = new trump_1.Trump(game);
                    var boot = {
                        create: function () {
                            console.log("boot");
                            game.state.start("preload");
                        }
                    };
                    var preload = {
                        preload: function () {
                            trump.preload();
                        },
                        create: function () {
                            game.state.start("start");
                        }
                    };
                    var start = {
                        create: function () {
                            console.log("start create");
                            game.stage.backgroundColor = "#ffffff";
                            trump.create();
                        },
                        update: function () {
                            trump.update();
                        }
                    };
                    game.state.add("boot", boot);
                    game.state.add("preload", preload);
                    game.state.add("start", start);
                    game.state.start("boot");
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '/app/app.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
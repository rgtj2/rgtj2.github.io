export class Trump {
  game;
  sprite;
  cursors;
  tween;
   
  constructor(game){
    this.game = game;
  }

  preload(){
   this.game.load.spritesheet("trump", "app/images/trump.png", 64, 100);  
  }

  create(){
    this.sprite = this.game.add.sprite(0,0, 'trump');
    this.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.frame = 1;
    this.sprite.scale.y = 2;
    this.sprite.scale.x = 2;
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.game.camera.follow(this.sprite);

    this.sprite.body.bounce.y = 0.2;
    this.sprite.body.gravity.y = 300;
    this.tween = this.game.add.tween(this.sprite);
  }

  update(){
    this.sprite.body.velocity.x = 0;
    if (this.cursors.left.isDown) {
      this.sprite.body.velocity.x = -150;
      this.sprite.frame = 0;
    } else if (this.cursors.right.isDown ) {
      this.sprite.body.velocity.x = 150;
      this.sprite.frame = 1;
    }

    if (this.cursors.up.isDown && this.sprite.body.velocity.y > -10) {
      this.sprite.body.velocity.y = -250;
    }

    if (this.cursors.up.isDown && this.cursors.right.isDown) {
      this.sprite.frame = 3;
    } else if (this.cursors.up.isDown && this.cursors.left.isDown) {
      this.sprite.frame = 2;
    }

    if (this.cursors.down.isDown) {
      this.sprite.body.gravity.y = 1200;
    } else {
      this.sprite.body.gravity.y = 300;
    }
  }
}

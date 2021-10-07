import { Component, OnInit } from '@angular/core';
import 'phaser';



@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})


export class GameComponent   implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  constructor() {
    this.config = {
      type: Phaser.AUTO,
      width: 800, // Width of the game in pixels
      height: 800, // Height of the game in pixels
      backgroundColor: '#3498db', // The background color (blue)

      scene: MainScene, // The name of the scene we created
      physics: { default: 'arcade' }, // The physics engine to use
    };
    this.phaserGame = new Phaser.Game(this.config  );

  }
  ngOnInit(): void {


  }



}
class MainScene extends Phaser.Scene {
  arrow:any;
  drag:any;
  drag2:any;
  go:any;
  drop:any;
  drop2:any; drop3:any; drop4:any;
  player:any;
  coin:any;
  score:any;
  scoreText:any;
  image:any;
  up:any; up2:any;
  i:number=0;



  constructor() {
    super({ key: 'main' });
  }

  preload() {

    console.log('preload method');
   // this.load.spritesheet('ryuk', 'assets/animations/ryuk.png', 37, 45);
    // this.load.spritesheet('brawler', 'assets/animations/ryuk.png', { frameWidth: 48, frameHeight: 48 });
    this.load.image('player', 'assets/player.png');
    this.load.image('go', 'assets/go.png');
    this.load.image('coin', 'assets/coin.png');
    this.load.image('background', 'assets/sahara.jpg');
    this.load.image('drop', 'assets/drop.png');
    this.load.image('drop2', 'assets/drop.png');
    this.load.image('drop3', 'assets/drop.png');
    this.load.image('drop4', 'assets/drop.png');
    this.load.image('drag', 'assets/arrow.png');
    this.load.image('drag2', 'assets/arrow.png');
    this.load.image('up', 'assets/arrowUp.png');
    this.load.image('up2', 'assets/arrowUp.png');
  }
  create() {
    console.log('create method');
    this.anims.create({

      frames: this.anims.generateFrameNumbers('brawler', { frames: [ 0, 1, 2, 3 ] }),
      frameRate: 8,
      repeat: -1
    });
    //this.add.image(0, 0, 'brawler', '__BASE').setOrigin(0, 0);
   //this.add.image( 380, 300, 'background');
    this.player = this.physics.add.sprite(100, 100, 'player');
    this.go= this.physics.add.sprite(700, 500, 'go').setInteractive();
    this.drop = this.physics.add.sprite(500, 500, 'drop').setDepth(-1).setInteractive();
    this.drop.input.dropZone=true;
    this.drop2 = this.physics.add.sprite(400, 500, 'drop2').setDepth(-1).setInteractive();
    this.drop2.input.dropZone=true;
    this.drop3 = this.physics.add.sprite(300, 500, 'drop3').setDepth(-1).setInteractive();
    this.drop3.input.dropZone=true;
    this.drop4 = this.physics.add.sprite(200, 500, 'drop4').setDepth(-1).setInteractive();
    this.drop4.input.dropZone=true;
    this.drag = this.physics.add.sprite(520, 120, 'drag').setInteractive().setName("go");

    this.input.setDraggable(this.drag);
    this.drag2 = this.physics.add.sprite(720, 120, 'drag').setInteractive().setName("go");

    this.input.setDraggable(this.drag2);

    this.up = this.physics.add.sprite(620, 120, 'up').setInteractive().setName("up");
    this.input.setDraggable(this.up);
    this.up2 = this.physics.add.sprite(820, 120, 'up').setInteractive().setName("up");
    this.input.setDraggable(this.up2);

    this.coin = this.physics.add.sprite(300, 300, 'coin');



    const  event = Phaser.Input.Events;
    this.input.on(event.DRAG_START,(pointer,obj, dragX,dragY)=>{
obj.setScale(.9);

    });
    this.input.on(event.DRAG_END,(pointer,obj,dropzone)=>{
      if(!dropzone){
        obj.x=obj.input.dragStartX;
        obj.y=obj.input.dragStartY;
      }
obj.setScale(1);
    });
    this.input.on(event.DRAG,(pointer,obj,dragX,dragY)=>{

      obj.x=dragX;
      obj.y=dragY;

    });

    this.input.on(event.DRAG_ENTER,(pointer,obj,dropzone)=>{
    dropzone.setTint(0xff0000);


    });
this.input.on(event.DRAG_LEAVE,(pointer,obj,dropzone)=>{
    dropzone.clearTint();


    });
//t7oth fla zone nichan ta3ha
    let b=[];
this.input.on(event.DROP,(pointer,obj:Phaser.GameObjects.Image,dropzone)=>{
  obj.x=dropzone.x;
  obj.y=dropzone.y;
  //remove this
//b[this.i]=obj.name;
//console.log(b[this.i]);
//this.i++;



});


    this.go.on(event.POINTER_DOWN ,(image) => {
      this.test(b);
    });



    //this.go.on('pointerdown', function (pointer) {

     // this.setTint(0xff0000);



   // });
    //this.go.event.onPointerDown.add(this.listner(),this);

  //  this.go.on('pointerout', function (pointer) {

    //  this.clearTint();

    //});

//    this.go.on('pointerup', function (pointer) {

  //    this.clearTint();

    //});


    // Store the score in a variable, initialized at 0
    this.score = 0;

// The style of the text
// A lot of options are available, these are the most important ones
    let style = { font: '20px Arial', fill: '#fff' };

// Display the score in the top left corner
// Parameters: x position, y position, text, style
    this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style);
//Move the player
    this.arrow = this.input.keyboard.createCursorKeys();


   // this.image = this.add.sprite( this.phaserGame.world.centerX, this.world.centerY, 'einstein');

  }

  update() {
    console.log('update method');
    // This method is called 60 times per second after create()
    // It will handle all the game's logic, like movements
    // Handle horizontal movements







    if (this.arrow.right.isDown) {
      // If the right arrow is pressed, move to the right
      this.player.x += 3;
    } else if (this.arrow.left.isDown) {
      // If the left arrow is pressed, move to the left
      this.player.x -= 3;
    }

// Do the same for vertical movements
    if (this.arrow.down.isDown) {
      this.player.y += 3;
    } else if (this.arrow.up.isDown) {
      this.player.y -= 3;
    }
    //when the player and the coin overlap
    if (this.physics.overlap(this.player, this.coin)) {
      // Call the new hit() method
      this.hit();
    }

  }

  listner(obj){
    if (obj=="go"){ var k = 0;
      var inte = setInterval(() => {
        this.gofunction();

        if (k == 1) clearInterval(inte);
        k++;
      }, 1000);
    }
    switch (obj) {

      case "up":{
        var k = 0;
        var inte = setInterval(() => {

          this.player.y -= 30;
          console.log("done up");

          if (k == 1) clearInterval(inte);
          k++;
        }, 1000);

        break;
      }

    }

  };
  gofunction(){
    this.player.x += 30;
    console.log("done go");}
    upfunction(){
      this.player.y -= 30;
    console.log("done go");}

waitfunction(ms){

    return new Promise(resolve => {
      setTimeout(()=>resolve(''),ms)
    });
}





async test(b){

  console.log(b.length);

  for (let j=0;j<b.length;j++){
    await this.waitfunction(500);
    console.log(b[j]);
    if (b[j]=="go"){
      this.gofunction();

    }else if (b[j]=="up"){this.upfunction()}

    /*var k = 0;
    var inte = setInterval(() => {
      this.gofunction();

      if (k == 1) clearInterval(inte);
      k++;
    }, 1000);
  }*/
    console.log("listner"+j)
}}
  hit(){
    // Change the position x and y of the coin randomly
    this.coin.x = Phaser.Math.Between(100, 600);
    this.coin.y = Phaser.Math.Between(100, 300);

    // Increment the score by 10
    this.score += 10;

    // Display the updated score on the screen
    this.scoreText.setText('score: ' + this.score);

    // Create a new tween Ykbr ki yakol
    this.tweens.add({
      targets: this.player, // on the player
      duration: 200, // for 200ms
      scaleX: 1.2, // that scale vertically by 20%
      scaleY: 1.2, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });
  }
}

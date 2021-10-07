import { Component, OnInit } from '@angular/core';
declare let FontFace: any;
import 'phaser';
import Tween = Phaser.Tweens.Tween;
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {Router} from '@angular/router';

let phaserGame;
let ok;
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  existingScreenOrientation: string;
  config: Phaser.Types.Core.GameConfig;
  constructor(private so: ScreenOrientation, private router1: Router,) {
    this.existingScreenOrientation = this.so.type;
    this.config = {
      type: Phaser.AUTO,
      width: 800, // Width of the game in pixels
      height: 400, // Height of the game in pixels
      // The background color (blue)

      parent: 'gameContainer',
      scene: [Scene1, Scene2, Scene3, GameOver], // The name of the scene we created
      physics: { default: 'arcade' }, // The physics engine to use

    };
  }
  lockToLandscape() {
    this.so.lock(this.so.ORIENTATIONS.LANDSCAPE);
  }
  ngOnInit(): void {
    ok=this;
    this.lockToLandscape();
    phaserGame = new Phaser.Game(this.config );
    console.log('ni hna f oninit');
  }
  BLoop() {

    this.router1.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router1.navigate(['blocklyloop']);
    });
  } BCondition() {

    this.router1.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router1.navigate(['blocklycondition']);
    });
  }

}

export  class Scene3 extends Phaser.Scene {
  go: any;
  up: any;
  score1: any;
  lettuce: any;
  score: any;
  run: any;
  drop: any;
  arrow: any;
  arrow2: any;
  arrow3: any;
  arrow4: any;
  player: any;
  player2: any;
  i = 0;
  scoreText: any;
  right2: any;
  right3: any;
  right4: any;
  right5: any;
  constructor() {
    super('game1');

  }
  preload() {
    this.load.image('sahara', 'assets/sahara.jpg');
    this.load.image('player', 'assets/turtle.png');
    this.load.image('happy', 'assets/hqppy.png');
    this.drop = this.load.image('drop', 'assets/drop.png');
    this.arrow = this.load.image('right', 'assets/arrow.png');
    this.arrow2 = this.load.image('down', 'assets/arrowDown.png');
    this.arrow3 = this.load.image('left', 'assets/arrowleft.png');
    this.arrow4 = this.load.image('up', 'assets/arrowUp.png');
    this.load.image('title', 'assets/title.png');
    this.load.image('run', 'assets/run.png');
    this.load.image('lettuce', 'assets/lettuce.png');
    this.load.image('score1', 'assets/score.png');
    this.load.image('block', 'assets/block.png');
    this.load.image('blockk', 'assets/blockk.png');
  }
  resize() {
    const canvas = phaserGame.canvas, width = window.innerWidth, height = window.innerHeight;
    const wratio = width / height, ratio = canvas.width / canvas.height;
    if (wratio < ratio) {
      canvas.style.width = width  + 'px';
      canvas.style.height = (width / ratio) + 'px';
    } else {
      canvas.style.width = (height * ratio) + 260  + 'px';
      canvas.style.height = height  - 30 + 'px';
    }
  }
  create() {
    console.log('hello lila azul fillawen f scene3');
   // window.addEventListener('resize', this.resize);
    //this.resize();

    this.scene.stop('gameOver');


    this.anims.create({

      frames: this.anims.generateFrameNumbers('brawler', { frames: [ 0, 1, 2, 3 ] }),
      frameRate: 8,
      repeat: -1
    });
    // this.add.text(20, 20, 'Loading..');
    const  event = Phaser.Input.Events;
    const sahara = this.add.image( 350,  250, 'sahara');
    sahara.scale = 1.5;
    const sahara2 = this.add.image( 350,  200, 'sahara');
    sahara2.scale = 1.5;

    // const right = this.add.image( 300,  500, 'right');
    // right.scale = 0.7;

    // dropZone
    const drop0 = this.add.image( 130,  500, 'drop').setInteractive().setName('drop');
    drop0.scale = 0.75;
    drop0.input.dropZone = true;
    const drop = this.add.image( 215,  500, 'drop').setInteractive().setName('drop');
    drop.scale = 0.75;
    drop.input.dropZone = true;
    const drop2 = this.add.image( 300,  500, 'drop').setInteractive().setName('drop');
    drop2.scale = 0.75;
    drop2.input.dropZone = true;
    const drop3 = this.add.image( 385,  500, 'drop').setInteractive().setName('drop');
    drop3.scale = 0.75;
    drop3.input.dropZone = true;
    const drop4 = this.add.image( 470,  500, 'drop').setInteractive().setName('drop');
    drop4.scale = 0.75;
    drop4.input.dropZone = true;

    // const right2 = this.add.image( 470,  500, 'right');
    // right2.scale = 0.7;
// blocks
    const block = this.add.image( 570,  417, 'block');
    block.scale = 0.246;
    const blockk = this.add.image( 490,  407, 'blockk');
    blockk.scale = 0.22;

    const run = this.physics.add.sprite(650, 500, 'run').setInteractive();

    run.scale = 0.25;

    run.on(event.POINTER_DOWN , (image) => {

        this.test(b);
      // this.scene.start('game')
    });
    this.lettuce = this.physics.add.sprite(492, 328, 'lettuce');
    this.lettuce.setScale(.1);
    this.tweens.add({
      targets: this.lettuce, // on the player
      duration: 400, // for 200ms
      scaleX: .3, // that scale vertically by 20%
      scaleY: .3, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });
    this.score1 = this.physics.add.sprite(400, 50, 'score1');

    this.score1.setScale(0.3);
    this.player = this.physics.add.sprite(200, 410, 'player');
    this.player.scale = 0.2;


    this.right2 = this.add.image( 700,  44, 'right').setInteractive().setName('go1');
    this.right2.scale = 0.7;
    this.input.setDraggable(this.right2);
    this.right3 = this.add.image( 700,  122, 'right').setInteractive().setName('go2');
    this.right3.scale = 0.7;
    this.input.setDraggable(this.right3);
    this.right4 = this.add.image( 700,  200, 'right').setInteractive().setName('go3');
    this.right4.scale = 0.7;
    this.input.setDraggable(this.right4);
    this.right5 = this.add.image( 700,  278, 'right').setInteractive().setName('go4');
    this.right5.scale = 0.7;
    this.input.setDraggable(this.right5);
    this.up = this.add.image( 700,  356, 'up').setInteractive().setName('up');
    this.up.scaleX = 0.75388;
    this.up.scaleY = 0.65;
    this.input.setDraggable(this.up);

    this.input.on(event.DRAG_START, (pointer, obj, dragX, dragY) => {
      obj.setScale(.9);
      console.log('dragstart');

    });

    this.input.on(event.DRAG_END, (pointer, obj, dropzone) => {
      if (!dropzone) {
        obj.x = obj.input.dragStartX;
        obj.y = obj.input.dragStartY;
      }
      obj.setScale(0.7);
      console.log('dragend');
    });
    this.input.on(event.DRAG, (pointer, obj, dragX, dragY) => {

      obj.x = dragX;
      obj.y = dragY;
      console.log('drag');

    });

    this.input.on(event.DRAG_ENTER, (pointer, obj, dropzone) => {
      dropzone.setTint(0xff0000);
      console.log('enter');

    });

    // t7oth fla zone nichan ta3ha
    const b = [] as any;
    this.input.on(event.DROP, (pointer, obj: Phaser.GameObjects.Image, dropzone) => {
      obj.x = dropzone.x;
      obj.y = dropzone.y;
      console.log('drop');
      // remove this
      b[this.i] = obj.name;
      console.log(b[this.i]);
      console.log('b is' + b[this.i]);
      this.i++;
    });


// coin
    this.score = 0;
    const style = { font: '30px Arial', fill: '#00000' };
    // Parameters: x position, y position, text, style
    this.scoreText = this.add.text(385, 50,   this.score, style);








    const title = this.add.image( 100,  300, 'title');
    title.scale = 1.5;
    loadFont('font');
    this.add.text(25, 198, 'Take me ', {
      fontFamily: 'cursive', color: '#00000', fontSize: '24px', });
    this.add.text(5, 219, 'to my broccoli!', {
      fontFamily: 'cursive', color: '#00000', fontSize: '24px', });


    this.arrow = this.input.keyboard.createCursorKeys();



  }


  update() {
    console.log('update method');
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

    if (this.physics.overlap(this.player, this.lettuce)) {
      // Call the new hit() method
      this.hit();

    }

  }
  closeGameOve() {
    this.scene.stop('gameOver');
  }
  gofunction() {
    this.player.x += 70;
    console.log('done go'); }
  upfunction() {
    this.tweens.add({
      targets: this.up, // on the player
      duration: 200, // for 200ms
      scaleX: .3, // that scale vertically by 20%
      scaleY: .3, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });
    this.player.y -= 90;
    console.log('done go'); }

  waitfunction(ms) {

    return new Promise(resolve => {
      setTimeout(() => resolve(''), ms);
    });
  }

async  test2(b) {
  for (let j = 0; j < 2; j++) {
    for (let j = 0; j < b.length; j++) {


      await this.waitfunction(500);
      console.log(b[j]);
      if (b[j] == 'go') {
        this.gofunction();

      } else if (b[j] == 'up') {this.upfunction(); }
      console.log('listner' + j);
    }
    await this.waitfunction(500);

  }

}
correct(b) {
    if (b[0] == 'go1' || b[1] == 'go2' || b[2] == 'go3' && b[3] == 'up' || b[4] == 'go4' ) {
      this.time.addEvent({
        delay: 500,
        callback : this.gameOver,
        callbackScope : this
      });
    }
}
  go1() {

    this.tweens.add({
      targets: this.right2, // on the player
      duration: 200, // for 200ms
      scaleX: .3, // that scale vertically by 20%
      scaleY: .3, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });
    this.player.x += 70;


    console.log('done go'); }
  go2() {

    this.tweens.add({
      targets: this.right3, // on the player
      duration: 200, // for 200ms
      scaleX: .3, // that scale vertically by 20%
      scaleY: .3, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });
    this.player.x += 70;


    console.log('done go'); }
    go3() {

    this.tweens.add({
      targets: this.right4, // on the player
      duration: 200, // for 200ms
      scaleX: .3, // that scale vertically by 20%
      scaleY: .3, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });
    this.player.x += 70;


    console.log('done go'); }
    go4() {

    this.tweens.add({
      targets: this.right5, // on the player
      duration: 200, // for 200ms
      scaleX: .3, // that scale vertically by 20%
      scaleY: .3, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });
    this.player.x += 70;


    console.log('done go'); }

  async test(b) {

    console.log(b.length);

    for (let j = 0; j < b.length; j++) {


      await this.waitfunction(500);
      console.log(b[j]);
      if (b[j] == 'go1') {this.go1(); } else if (b[j] == 'go2') {this.go2(); } else if (b[j] == 'go3') {this.go3(); } else if (b[j] == 'go4') {this.go4(); } else if (b[j] == 'up') {this.upfunction(); }
      console.log('listner' + j);
    }
    await this.waitfunction(500);
    this.correct(b);
  }
  gameOver() {
    // hide elements
    // this.scoreText.setVisible(false);
    // this.score.setVisible(false);
    // score
    // show game over scene as overlay
    this.scene.launch('gameOver', {name: 'scene3'});
    this.score1.setVisible(false);
    this.scoreText.setVisible(false);
    // let panel = this.scene.get('gamrOver');

    // listen to events from the game over
    // panel.events.on('goNext',this.goNext, this);
    // panel.events.on('retry',this.retry, this);
  }
  hit() {
    // Change the position x and y of the coin randomly
    // this.lettuce.x = Phaser.Math.Between(100, 600);
    // this.lettuce.y = Phaser.Math.Between(100, 300);
    this.lettuce.destroy(true);
    this.player.destroy(true);
    // Increment the score by 10

    this.player2 = this.physics.add.sprite(500, 338, 'happy');
    this.player2.scale = 0.3;
    this.score += 10;
    // Display the updated score on the screen
    this.scoreText.setText( this.score);

    // Create a new tween Ykbr ki yakol
    this.tweens.add({
      targets: this.player, // on the player
      duration: 200, // for 200ms
      scaleX: 0.5, // that scale vertically by 20%
      scaleY: 0.5, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });
  }

}











export  class Scene1 extends Phaser.Scene {
  go: any;
  score1: any;
  lettuce: any;
  score: any;
  run: any;
  drop: any;
  left: any;
  arrow: any;
  player: any;
  player2: any;
  i = 0;
  scoreText: any;
  constructor() {
    super('welcome');
  }
  preload() {
    this.load.image('sahara', 'assets/sahara.jpg');
    this.load.image('player', 'assets/turtle.png');
    this.drop = this.load.image('drop', 'assets/drop.png');
    this.arrow = this.load.image('right', 'assets/arrow.png');
    this.load.image('right3', 'assets/arrow2.png');
    this.left = this.load.image('right2', 'assets/arrowleft.png');
    this.load.image('title', 'assets/title.png');
    this.load.image('run', 'assets/run.png');
    this.load.image('lettuce', 'assets/lettuce.png');
    this.load.image('score1', 'assets/score.png');
    this.load.image('happy', 'assets/hqppy.png');
  }
  closeGameOve() {
    this.scene.stop('home2');
    this.scene.stop('home');
  }
  resize() {
    // tslint:disable-next-line:one-variable-per-declaration
    const canvas = phaserGame.canvas, width = window.innerWidth, height = window.innerHeight;
    console.log(' canva is here: ' + canvas);
    // tslint:disable-next-line:one-variable-per-declaration
    const wratio = width / height, ratio = canvas.width / canvas.height;
    if (wratio < ratio) {
      canvas.style.width = width  + 'px';
      canvas.style.height = (width / ratio) + 'px';
    } else {
      canvas.style.width = (height * ratio) + 260  + 'px';
      canvas.style.height = height  - 30 + 'px';
    }
  }

  create() {

    this.closeGameOve();
    console.log('hello lila azul fillawen f scene3');
    // window.addEventListener('resize', this.resize);
   // this.resize();
    const  event = Phaser.Input.Events;




    // colling sprites
    this.anims.create({

      frames: this.anims.generateFrameNumbers('brawler', { frames: [ 0, 1, 2, 3 ] }),
      frameRate: 8,
      repeat: -1
    });
    const sahara = this.add.image( 350,  250, 'sahara');
    sahara.scale = 1.5;
    const sahara2 = this.add.image( 350,  200, 'sahara');
    sahara2.scale = 1.5;
    this.player = this.physics.add.sprite(200, 400, 'player');
    this.player.scale = 0.2;
    this.lettuce = this.physics.add.sprite(450, 425, 'lettuce');

    this.lettuce.setScale(.1);

    this.tweens.add({
      targets: this.lettuce, // on the player
      duration: 300, // for 200ms
      scaleX: .3, // that scale vertically by 20%
      scaleY: .3, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });
    const right = this.add.image( 300,  500, 'right').setInteractive().setName('r1');
    right.scale = 0.7;
    const right2 = this.add.image( 379,  500, 'right2').setInteractive().setName('r2');
    right2.scale = 0.7;
    const right3 = this.add.image( 459,  500, 'right3').setInteractive().setName('r3');
    right3.scale = 0.7;
    const title = this.add.image( 100,  300, 'title');
    title.scale = 1.5;
    this.add.text(30, 203, 'find the bug!', {
      fontFamily: 'cursive', color: '#00000', fontSize: '24px', });
    this.score1 = this.physics.add.sprite(400, 50, 'score1');

    this.score1.setScale(0.3);
    this.score = 0;
    const style = { font: '30px Arial', fill: '#00000' };
    // Parameters: x position, y position, text, style
    this.scoreText = this.add.text(385, 50,   this.score, style);


    right.on(event.POINTER_DOWN, (image) => {
      this.tweens.add({
        targets: right, // on the player
        duration: 300, // for 200ms
        scaleX: .3, // that scale vertically by 20%
        scaleY: .3, // and scale horizontally by 20%
        yoyo: true,
        test(tween) {
          const value = 0xff0000;

          right.setTint(Phaser.Display.Color.GetColor(value, value, value));
        },

      });

    });


    right2.on(event.POINTER_DOWN , (image) => {
      this.tweens.add({
        targets: right2, // on the player
        duration: 300, // for 200ms
        scaleX: .3, // that scale vertically by 20%
        scaleY: .3,
        yoyo: true, // at the end, go back to original scale
        color(tween: Tween) {
          const value = 0x00B000;

          right2.setTint(Phaser.Display.Color.GetColor(value, value, value));

        }
      });

      this.score += 10;

      // Display the updated score on the screen
      this.scoreText.setText( this.score);
      this.player.destroy(true);
      this.player2 = this.physics.add.sprite(200, 400, 'happy');
      this.player2.scale = 0.3;

      this.time.addEvent({
        delay: 500,
        callback : this.gameOver,
        callbackScope : this
      });

    });
    right3.on(event.POINTER_DOWN , (image) => {

      this.tweens.add({
        targets: right3, // on the player
        duration: 300, // for 200ms
        scaleX: .3, // that scale vertically by 20%
        scaleY: .3, // and scale horizontally by 20%
        onUpdate(tween) {
          const value = 0xff0000;

          right3.setTint(Phaser.Display.Color.GetColor(value, value, value));
        },
        yoyo: true, // at the end, go back to original scale
      });







     // right.setTint(0xff0000);
      // this.test(b);

      // this.scene.start('game')


    });
   /* const run= this.physics.add.sprite(650, 500, 'run').setInteractive();

    run.scale = 0.25;

    run.on(event.POINTER_DOWN ,(image) => {

      //this.test(b);
     this.scene.launch('gameOver', {name:"scene3"});
      this.scene.start('game')


    });*/

  }



  update() {


}
  gameOver() {
    // hide elements
    // this.scoreText.setVisible(false);
    // this.score.setVisible(false);
    // score
    // show game over scene as overlay
    this.scene.launch('gameOver', {score: this.score, name: 'scene1'});
    this.score1.setVisible(false);
    this.scoreText.setVisible(false);
   // let panel = this.scene.get('gamrOver');

    // listen to events from the game over
  // panel.events.on('goNext',this.goNext, this);
  // panel.events.on('retry',this.retry, this);
  }

  goNext() {
    console.log('goNext');
  }
  retry() {
    console.log('retry');
  }

}





























export  class Scene2 extends Phaser.Scene {
  go: any;
  score1: any;
  lettuce: any;
  score: any;
  run: any;
  drop: any;
  arrow: any;
  player: any;
  player2: any;
  i = 0;
  scoreText: any;
  constructor() {
    super('game');

  }
  preload() {
    this.load.image('sahara', 'assets/sahara.jpg');
    this.load.image('player', 'assets/turtle.png');
    this.load.image('happy', 'assets/hqppy.png');
    this.drop = this.load.image('drop', 'assets/drop.png');
    this.arrow = this.load.image('right', 'assets/arrow.png');
    this.load.image('title', 'assets/title.png');
    this.load.image('run', 'assets/run.png');
    this.load.image('lettuce', 'assets/lettuce.png');
    this.load.image('score1', 'assets/score.png');
  }
  resize() {
    // tslint:disable-next-line:one-variable-per-declaration
    const canvas = phaserGame.canvas, width = window.innerWidth, height = window.innerHeight;
    const wratio = width / height, ratio = canvas.width / canvas.height;
    if (wratio < ratio) {
      canvas.style.width = width   + 'px';
      canvas.style.height = (width / ratio) + 'px';
    } else {
      canvas.style.width = (height * ratio) + 270 + 'px';
      canvas.style.height = height - 20 + 'px';
    }
  }
  create() {
    console.log('hello lila azul fillawen');
    //window.addEventListener('resize', this.resize);
   // this.resize();
    this.closeGameOve();

    this.anims.create({

      frames: this.anims.generateFrameNumbers('brawler', { frames: [ 0, 1, 2, 3 ] }),
      frameRate: 8,
      repeat: -1
    });
    // this.add.text(20, 20, 'Loading..');
    const  event = Phaser.Input.Events;
    const sahara = this.add.image( 350,  250, 'sahara');
    sahara.scale = 1.5;
    const sahara2 = this.add.image( 350,  200, 'sahara');
    sahara2.scale = 1.5;
    this.player = this.physics.add.sprite(200, 400, 'player');
    this.player.scale = 0.2;
    const right = this.add.image( 300,  500, 'right');
    right.scale = 0.7;
    const drop = this.add.image( 385,  500, 'drop').setInteractive().setName('drop');
    drop.scale = 0.75;
    drop.input.dropZone = true;

    const right2 = this.add.image( 470,  500, 'right');
    right2.scale = 0.7;

    const run = this.physics.add.sprite(650, 500, 'run').setInteractive();

    run.scale = 0.25;

    run.on(event.POINTER_DOWN , (image) => {
      this.test(b);
      this.time.addEvent({
        delay: 1500,
        callback : this.gameOver,
        callbackScope : this
      });
     //  this.waitfunction(500);

      // this.scene.start('game1')


    });
    this.lettuce = this.physics.add.sprite(450, 425, 'lettuce');

    this.lettuce.setScale(.1);

    this.tweens.add({
      targets: this.lettuce, // on the player
      duration: 300, // for 200ms
      scaleX: .3, // that scale vertically by 20%
      scaleY: .3, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });
    this.score1 = this.physics.add.sprite(400, 50, 'score1');

    this.score1.setScale(0.3);
    const right3 = this.add.image( 700,  200, 'right').setInteractive().setName('go');
    right3.scale = 0.7;
    this.input.setDraggable(right3);
    this.input.on(event.DRAG_START, (pointer, obj, dragX, dragY) => {
      obj.setScale(.9);
      console.log('dragstart');

    });

    this.input.on(event.DRAG_END, (pointer, obj, dropzone) => {
      if (!dropzone) {
        obj.x = obj.input.dragStartX;
        obj.y = obj.input.dragStartY;
      }
      obj.setScale(0.7);
      console.log('dragend');
    });


    this.input.on(event.DRAG, (pointer, obj, dragX, dragY) => {

      obj.x = dragX;
      obj.y = dragY;
      console.log('drag');

    });

    this.input.on(event.DRAG_ENTER, (pointer, obj, dropzone) => {
      dropzone.setTint(0xff0000);
      console.log('enter');

    });

    // t7oth fla zone nichan ta3ha
    const b = [] as any;
    this.input.on(event.DROP, (pointer, obj: Phaser.GameObjects.Image, dropzone) => {
      obj.x = dropzone.x;
      obj.y = dropzone.y;
      console.log('drop');
      // remove this
      b[this.i] = obj.name;
      console.log(b[this.i]);
      console.log('b is' + b[this.i]);
      this.i++;
    });






// coin
    this.score = 0;
    const style = { font: '30px Arial', fill: '#00000' };
    // Parameters: x position, y position, text, style
    this.scoreText = this.add.text(385, 50,   this.score, style);








    const title = this.add.image( 100,  300, 'title');
    title.scale = 1.5;
    loadFont('font');
    this.add.text(5, 203, 'the missing arrow!', {
      fontFamily: 'cursive', color: '#00000', fontSize: '24px', });


    this.arrow = this.input.keyboard.createCursorKeys();



  }


  update() {
    console.log('update method');
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

    if (this.physics.overlap(this.player, this.lettuce)) {
      // Call the new hit() method
      this.hit();

    }

  }
  gameOver() {
    // hide elements
    // this.scoreText.setVisible(false);
    // this.score.setVisible(false);
    // score
    // show game over scene as overlay
    this.scene.launch('gameOver', {score: this.score, name: 'scene2'});
    this.score1.setVisible(false);
    this.scoreText.setVisible(false);
    // let panel = this.scene.get('gamrOver');

    // listen to events from the game over
    // panel.events.on('goNext',this.goNext, this);
    // panel.events.on('retry',this.retry, this);
  }
  closeGameOve() {
    this.scene.stop('gameOver');
  }
  gofunction() {
    this.player.x += 70;

    console.log('done go'); }
  upfunction() {
    this.player.y -= 40;
    console.log('done go'); }

  waitfunction(ms) {

    return new Promise(resolve => {
      setTimeout(() => resolve(''), ms);
    });
  }


  async test(b) {

    console.log(b.length);

    for (let j = 0; j < b.length; j++) {
      this.player.x += 70;
      await this.waitfunction(500);

      console.log(b[j]);
      if (b[j] == 'go') {
        this.gofunction();
      } else if (b[j] == 'up') {this.upfunction(); }
      console.log('listner' + j);
    }
    await this.waitfunction(500);
    this.player.x += 70;
    await this.waitfunction(1500);
    // this.scene.start('game1')
  }
 async wait(ms) {
    await this.waitfunction(ms);
  }
 async hit() {
    // Change the position x and y of the coin randomly
    // this.lettuce.x = Phaser.Math.Between(100, 600);
    // this.lettuce.y = Phaser.Math.Between(100, 300);

    this.lettuce.destroy(true);
    this.player.destroy(true);
    // Increment the score by 10
    this.score += 10;
    this.player2 = this.physics.add.sprite(450, 400, 'happy');
    this.player2.scale = 0.3;

    // Display the updated score on the screen
    this.scoreText.setText( this.score);

    // Create a new tween Ykbr ki yakol
    this.tweens.add({
      targets: this.player, // on the player
      duration: 200, // for 200ms
      scaleX: 0.5, // that scale vertically by 20%
      scaleY: 0.5, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });

  }

  }



function loadFont(name) {
  const newFont = new FontFace(name, `url(phaser-angular-app/src/assets/font.ttf)`);
  newFont.load().then(function(loaded) {
   // document.fonts.add(loaded);
  }).catch((error) => {
    console.log(error);
  });
}



export class GameOver extends Phaser.Scene {
  score: any;
  run: any;
  CONFIG: any;
  title: any;
  player: any;
  background: any;
  textScore: any;
  tryAgain: any;
  texttry: any;
  textgo: any;
  goNext: any;
  btn: any;
  name: any;
  hitbtn: any;
  constructor() {
    super({key: 'gameOver', active: false});

    }
  init(data) {
    // get score
    this.score = data.score;
    this.name = data.name;
    // constants

    this.CONFIG = this.sys.game.config;



  }


  preload() {
    this.load.image('sahara', 'assets/sahara.jpg');
    this.load.image('player', 'assets/turtle.png');
    this.load.image('happy', 'assets/hqppy.png');
    this.load.image('complete', 'assets/complet.png');

    this.load.image('title', 'assets/title.png');
    this.load.image('run', 'assets/run.png');
    this.load.image('lettuce', 'assets/lettuce.png');
    this.load.image('score1', 'assets/score.png');
    this.load.image('next', 'assets/nextWithBack.png');
    this.load.image('replay', 'assets/replay.png');
    this.load.image('course', 'assets/course.png');
    this.load.image('win', 'assets/youWin.png');
    this.load.image('next2', 'assets/next.png');
    this.load.image('try', 'assets/try2.png');
    this.load.image('yes', 'assets/yes.png');
    this.load.image('no', 'assets/No.png');
  }
  create() {

    this.anims.create({

      frames: this.anims.generateFrameNumbers('brawler', { frames: [ 0, 1, 2, 3 ] }),
      frameRate: 8,
      repeat: -1
    });
    // this.add.text(20, 20, 'Loading..');
    const  event = Phaser.Input.Events;

    if (this.name == 'scene1') {
      const complete = this.add.image( 390,  220, 'complete');
      complete.scale = 0.9;
      this.add.text(400, 289, this.score, {fontFamily: 'cursive', color: '#00000', fontSize: '24px', });


      const next = this.physics.add.sprite( 450,  360, 'next').setInteractive();

      const replay = this.physics.add.sprite( 315,  360, 'replay').setInteractive();

      next.on(event.POINTER_DOWN , (image) => {

        // this.test(b);
        //  this.waitfunction(500);

        this.scene.start('game');


      });

      replay.on(event.POINTER_DOWN , (image) => {

        // this.test(b);
        //  this.waitfunction(500);

        this.scene.start('welcome');


      });


    } else if (this.name == 'scene2') {
      const complete = this.add.image( 390,  220, 'complete');
      complete.scale = 0.9;
      this.add.text(400, 289, this.score, {fontFamily: 'cursive', color: '#00000', fontSize: '24px', });


      const next = this.physics.add.sprite( 450,  360, 'next').setInteractive();

      const replay = this.physics.add.sprite( 315,  360, 'replay').setInteractive();


      next.on(event.POINTER_DOWN , (image) => {

        // this.test(b);
        //  this.waitfunction(500);

        this.scene.start('game1');


      }
      );

      replay.on(event.POINTER_DOWN , (image) => {

        // this.test(b);
        //  this.waitfunction(500);

        this.scene.start('game');


      });



    } else if (this.name == 'scene3') {

      const course = this.add.image( 420,  220, 'course');
      course.scale = 1.1;



    } else if (this.name == 'game4') {

      const course2 = this.add.image( 420,  220, 'win');
      course2.scale = 1.1;
      const next2 = this.physics.add.sprite( 421,  220, 'next2').setInteractive();
      next2.scale = 1.1;
      next2.on(event.POINTER_DOWN , (image) => {

        //  this.player = this.physics.add.sprite(0, 0, 'player');
         // this.player.scale = 0.2;

        this.scene.start('repeat');
        //  ok.BLoop();

        }
      );


    } else if (this.name == 'repeat') {
      const course2 = this.add.image( 420,  220, 'win');
      course2.scale = 1.1;
      const next2 = this.physics.add.sprite( 421,  220, 'next2').setInteractive();
      next2.scale = 1.1;
      next2.on(event.POINTER_DOWN , (image) => {

          //  this.player = this.physics.add.sprite(0, 0, 'player');
          // this.player.scale = 0.2;

          this.scene.start('game6');


        }
      );


    } else if (this.name == 'gameLose') {


      const course = this.add.image( 420,  220, 'try');
      course.scale = 0.8;
      const yes = this.physics.add.sprite( 305,  325, 'yes').setInteractive();
      yes.scale = 0.46;
      yes.on(event.POINTER_DOWN , (image) => {

        this.scene.start('repeat');


      });
      const no = this.physics.add.sprite( 472,  325, 'no').setInteractive();
      no.scale = 0.46;
      no.on(event.POINTER_DOWN , (image) => {

        // this.test(b);
        //  this.waitfunction(500);

        this.scene.start('repeat');


      });
     // const next= this.physics.add.sprite( 423,  314, 'next2').setInteractive();
      // next.scale = 1.1;
      // next.on(event.POINTER_DOWN ,(image) => {

        // this.test(b);
        //  this.waitfunction(500);

       // this.scene.start('game')


     // });


    } else if (this.name == 'game6') {
      const course2 = this.add.image( 420,  220, 'win');
      course2.scale = 1.1;
      const next2 = this.physics.add.sprite( 421,  220, 'next2').setInteractive();
      next2.scale = 1.1;
      next2.on(event.POINTER_DOWN , (image) => {

          //  this.player = this.physics.add.sprite(0, 0, 'player');
          // this.player.scale = 0.2;

          this.scene.start('game7');


        }
      );


    }     else if (this.name == "game7") {
      console.log('33333333333');
      const course2 = this.add.image(420, 220, "win");
      course2.scale = 1.1;
      const next2 = this.physics.add.sprite(421, 220, "next2").setInteractive();
      next2.scale = 1.1;
      next2.on(event.POINTER_DOWN, (image) => {
        course2.destroy(true);
        const course = this.add.image(420, 220, "course2");

        const goloop = this.add.image(422, 390, "goLoop").setInteractive();

        course.scale = 1.1;
        goloop.on(event.POINTER_DOWN, (image) => {
          //  this.player = this.physics.add.sprite(0, 0, 'player');
          // this.player.scale = 0.2;
          course.destroy(true);
          goloop.destroy(true);
          this.add.image(420, 220, "gift2");
          /*  const next=  this.add.image( 422,  360, 'next').setInteractive();

            next.on(event.POINTER_DOWN , (image) => {

                //  this.player = this.physics.add.sprite(0, 0, 'player');
                // this.player.scale = 0.2;

                angularLink2.navigate2();
                //this.scene.start('MainScene');


              }
            );*/
        });
      });
    } else if (this.name == 'gameLose3') {


      const course = this.add.image( 420,  220, 'try');
      course.scale = 0.8;
      const yes = this.physics.add.sprite( 305,  325, 'yes').setInteractive();
      yes.scale = 0.46;
      yes.on(event.POINTER_DOWN , (image) => {

        this.scene.start('game6');


      });
      const no = this.physics.add.sprite( 472,  325, 'no').setInteractive();
      no.scale = 0.46;
      no.on(event.POINTER_DOWN , (image) => {

        // this.test(b);
        //  this.waitfunction(500);

        this.scene.start('repeat');


      });



    } else if (this.name == 'gameLose4') {


      const course = this.add.image( 420,  220, 'try');
      course.scale = 0.8;
      const yes = this.physics.add.sprite( 305,  325, 'yes').setInteractive();
      yes.scale = 0.46;
      yes.on(event.POINTER_DOWN , (image) => {

        this.scene.start('game7');


      });
      const no = this.physics.add.sprite( 472,  325, 'no').setInteractive();
      no.scale = 0.46;
      no.on(event.POINTER_DOWN , (image) => {

        // this.test(b);
        //  this.waitfunction(500);

        this.scene.start('repeat');


      });



    } else if (this.name == 'gameLose2') {
      const course = this.add.image( 420,  220, 'try');
      course.scale = 0.8;
      const yes = this.physics.add.sprite( 305,  325, 'yes').setInteractive();
      yes.scale = 0.46;
      yes.on(event.POINTER_DOWN , (image) => {

        this.scene.start('repeat');


      });
      const no = this.physics.add.sprite( 472,  325, 'no').setInteractive();
      no.scale = 0.46;
      no.on(event.POINTER_DOWN , (image) => {

        // this.test(b);
        //  this.waitfunction(500);

        this.scene.start('game4');


      });


    }
  }





}





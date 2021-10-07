import {Component, OnInit} from '@angular/core';
import 'phaser';
import * as Blockly from 'blockly';

import block = Blockly.Tooltip.block;
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {GameOver, Scene1, Scene2, Scene3} from '../employee/employee-list/employee-list.component';
import {Router} from '@angular/router';
import {Scene4, Scene5, Scene6} from '../blockly/blockly.component';
import {Scene7} from '../blockly/game6';
import {TokenStorageService} from '../_services/token-storage.service';

declare let FontFace: any;

let routinga;

let phaserGame;


const pad = Phaser.Utils.String.Pad;
// tslint:disable-next-line:no-unused-expression
'use strict';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  existingScreenOrientation: string;
  config: Phaser.Types.Core.GameConfig;
  constructor(private so: ScreenOrientation, private router1: Router) {
    this.existingScreenOrientation = this.so.type;
    this.config = {
      type: Phaser.AUTO,
      width: 800, // Width of the game in pixels
      height: 550, // Height of the game in pixels
      // The background color (blue)

      parent: 'gameContainer',
      scene: [Home, Home2, Home3, Scene1,  Scene2, Scene3, Scene4, Scene5,  Scene6,  Scene7, GameOver], // The name of the scene we created
      physics: { default: 'arcade' }, // The physics engine to use

    };
 }
  lockToLandscape() {
    this.so.lock(this.so.ORIENTATIONS.LANDSCAPE);
  }
  ngOnInit(): void {
    routinga = this;
    console.log('ni fi log lowla');
    this.lockToLandscape();
    phaserGame = new Phaser.Game(this.config, );
    //window.addEventListener('resize', this.resize);
    //this.resize();

  }

  sequencing() {

    this.router1.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router1.navigate(['sequencing']);
  });
  }
  tro() {

    this.router1.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router1.navigate(['leaderboard']);
  });
  }
  loop() {

    this.router1.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router1.navigate(['aicha']);
  });
  }
  BSequencing() {

    this.router1.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router1.navigate(['game2']);
  });
  } BLoop() {

    this.router1.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router1.navigate(['blocklyloop']);
  });
  } BCondition() {

    this.router1.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router1.navigate(['blocklycondition']);
  });
  }
 scenr1() {
  this.router1.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router1.navigate(['game2']);
  });
  // this.router1.navigate(['game2']);
}
  resize() {
    // tslint:disable-next-line:one-variable-per-declaration
    const canvas = phaserGame.canvas, width = window.innerWidth, height = window.innerHeight;
    // tslint:disable-next-line:one-variable-per-declaration
    const wratio = width / height, ratio = canvas.width / canvas.height;
    if (wratio < ratio) {
      canvas.style.width = width  + 'px';
      canvas.style.height = (width / ratio) + 'px';
    } else {
      canvas.style.width = (height * ratio) + 260  + 'px';
      canvas.style.height = height   + 'px';
    }
  }
}

export  class Home extends Phaser.Scene {
   startX: any;
   velocity: any;
  now: any;
  private img: any;
scroller: any;
  private scrollerState: any;
  x = 0;
  constructor(    private router: Router,

                  private tokenStorageService: TokenStorageService) {
    super('home');

  }
  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(["login"]);

    //window.location.reload();
  }
  rectangles: any;
  drop: any;
  text: any;
  dragging: any;
print: any;
button: any;
  autoScroll: any;
  timeConstant: any;
  text2: any;

   amplitude: any;
  rexGestures: any;
  swipeInput: any;
  elapsed: any;
  back: any;
   timestamp: any;
   target: any;
   level1: any;
  level2: any;
  level3: any;
  level4: any;
  level5: any;
  imgg1: any;
  imgg2: any;
  imgg3: any;
  imgg4: any;
  imgg5: any;
  img0: any;
  img00: any;
 preload() {
   this.load.scenePlugin({
     key: 'rexgesturesplugin',
     url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexgesturesplugin.min.js',
     sceneKey: 'rexGestures'
   });
   this.load.image('sahara', 'assets/sahara.jpg');
   this.drop = this.load.image('drop', 'assets/drop.png');
   this.level1 = this.load.image('level1', 'assets/levels/level1a.png');
 //
   this.level2 = this.load.image('level2', 'assets/levels/level2a.png');
   this.level3 = this.load.image('level3', 'assets/levels/level3a.png');
   this.level4 = this.load.image('level4', 'assets/levels/level4a.png');
   this.level5 = this.load.image('level5', 'assets/levels/level5a.png');
   this.load.image('back2', 'assets/levels/back.jpg');
   this.load.image('cap', 'assets/levels/cap.png');
   this.load.image('log', 'assets/lila/animations/logout.png');
   this.load.image('tro', 'assets/lila/animations/trophy1.png');


 }
  resize() {
    // tslint:disable-next-line:one-variable-per-declaration
    const canvas = phaserGame.canvas, width = window.innerWidth, height = window.innerHeight;
    console.log(canvas);
    // tslint:disable-next-line:one-variable-per-declaration
    const wratio = width / height, ratio = canvas.width / canvas.height;
    if (wratio < ratio) {
      canvas.style.width = width  + 'px';
      canvas.style.height = (width / ratio) + 'px';
    } else {
      canvas.style.width = (height * ratio) + 260  + 'px';
      canvas.style.height = 400 + 'px';
    }
  }


  image(x= 0) {
    const  event = Phaser.Input.Events;
    // tslint:disable-next-line:no-non-null-assertion
    this.imgg1!.destroy(true);
    // tslint:disable-next-line:no-non-null-assertion
    this.imgg2!.destroy(true);
    // tslint:disable-next-line:no-non-null-assertion
    this.imgg3!.destroy(true);
    this.imgg4!.destroy(true);
    this.imgg5!.destroy(true);
    this.imgg1 = this.physics.add.sprite( x + 360, 350, 'level1').setInteractive().setName('drop');
    this.imgg1.scale = 0.6;
    this.imgg2 = this.physics.add.sprite(  x + 580,   350, 'level2').setInteractive().setName('drop');
    this.imgg2.scale = 0.6;
    this.imgg3 = this.physics.add.sprite(  x + 800,   350, 'level3').setInteractive().setName('drop');
    this.imgg3.scale = 0.6;
    this.imgg4 = this.physics.add.sprite(  x + 1020,   350, 'level4').setInteractive().setName('drop');
    this.imgg4.scale = 0.6;
    this.imgg5 = this.physics.add.sprite(  x + 1252,   350, 'level5').setInteractive().setName('drop');
    this.imgg5.scale = 0.6;
    this.imgg1.on(event.POINTER_DOWN , (image) => {

      this.scene.start('home2');


    });
    this.imgg2.on(event.POINTER_DOWN , (image) => {
       this.scene.start('home3');
      // routinga.scenr1();

    });
  }
  create() {
    const  event = Phaser.Input.Events;
    console.log('hello lila azul fillawen');
    window.addEventListener('resize', this.resize);
    this.resize();
    const sahara = this.add.image( 350,  250, 'cap');
    sahara.scale = 1.5;
   // this.back = this.add.image( 0, 0, 'back');
    // this.back = this.add.image( 347, 270, 'back');
   // this.back.scale = 0.16;
    this.button = this.physics.add.sprite(400, 350, 'drop').setInteractive();
    const value = 0x66000000;
    this.button.scale = 0.01;
    this.button.setTint(Phaser.Display.Color.GetColor(value, value, value));

    this.img0 = this.add.image( 28, 508, 'log').setInteractive();
    this.img0.scale = 0.3;
    this.img00 = this.add.image( 94, 508, 'tro').setInteractive();
    this.img00.scale = 0.16;
    this.imgg1 = this.add.image( 360, 350, 'level1').setInteractive().setName('drop');
    this.imgg1.scale = 0.7;
    this.imgg2 = this.add.image(  583,   350, 'level2').setInteractive().setName('drop');
    this.imgg2.scale = 0.6;
    this.imgg3 = this.add.image(  800,   350, 'level3').setInteractive().setName('drop');
    this.imgg3.scale = 0.6;
    this.imgg4 = this.add.image(  1020,   350, 'level4').setInteractive().setName('drop');
    this.imgg4.scale = 0.6;
    this.imgg5 = this.add.image(  1260,   350, 'level5').setInteractive().setName('drop');
    this.imgg5.scale = 0.6;

    this.imgg1.on(event.POINTER_DOWN , (image) => {

     this.scene.start('home2');


   });
    this.img00.on(event.POINTER_DOWN , (image) => {

    routinga.tro();


   });
    this.img0.on(event.POINTER_DOWN , (image) => {

    this.logout();


   });
    this.imgg2.on(event.POINTER_DOWN , (image) => {


      this.scene.start('home3');
      // routinga.scenr1();

    });
   //  this.print = print = this.add.text(0, 0, '');

    this.text2 = ' ' ;
    this.swipeInput = this.rexGestures.add.swipe({ velocityThreshold: 1000 })
      // tslint:disable-next-line:only-arrow-functions
      .on('swipe', function(swipe) {

        // print.text += `swipe, v = ${swipe.dragVelocity}\n`;
       // print.text += this.text2 + '\n';
      }, this);


    // tslint:disable-next-line:prefer-const

    this.button.input.alwaysEnabled = true;
    // tslint:disable-next-line:no-shadowed-variable
 /*  this.button.on('pointerover', function(event) {
      this.setAlpha(0);
      console.log('helohelo a lila kharya');
    });*/
    function over(item) {
      console.log('over');
    }
    function out(item) {
      console.log('out');  }

    // tslint:disable-next-line:prefer-const
  }

  update() {
    if (this.physics.overlap( this.imgg1, this.button)) {
      // Call the new hit() method
      this.tweens.add({
        targets: this.imgg1, // on the player
       // duration: 200, // for 200ms
        scaleX: 0.75, // that scale vertically by 20%
        scaleY: 0.75, // and scale horizontally by 20%
       // yoyo: true, // at the end, go back to original scale
      });
      console.log('image');
// this.text2 = 'Sequencing';

      // tslint:disable-next-line:align
    } if (this.physics.overlap( this.imgg2, this.button)) {
      // Call the new hit() method
      this.tweens.add({
        targets: this.imgg2, // on the player
       // duration: 200, // for 200ms
        scaleX: 0.7, // that scale vertically by 20%
        scaleY: 0.7, // and scale horizontally by 20%
       // yoyo: true, // at the end, go back to original scale
      });
    //  console.log('image');

// this.text2 = 'Sequencing';

      // tslint:disable-next-line:align
    }if (this.physics.overlap( this.imgg3, this.button)) {
      // Call the new hit() method
      this.tweens.add({
        targets: this.imgg3, // on the player
       // duration: 200, // for 200ms
        scaleX: 0.7, // that scale vertically by 20%
        scaleY: 0.7, // and scale horizontally by 20%
       // yoyo: true, // at the end, go back to original scale
      });
      console.log('image');
// this.text2 = 'Sequencing';

    }if (this.physics.overlap( this.imgg4, this.button)) {
      // Call the new hit() method
      this.tweens.add({
        targets: this.imgg4, // on the player
       // duration: 200, // for 200ms
        scaleX: 0.7, // that scale vertically by 20%
        scaleY: 0.7, // and scale horizontally by 20%
       // yoyo: true, // at the end, go back to original scale
      });
      console.log('image');
// this.text2 = 'Sequencing';

    }if (this.physics.overlap( this.imgg5, this.button)) {
      // Call the new hit() method
      this.tweens.add({
        targets: this.imgg5, // on the player
       // duration: 200, // for 200ms
        scaleX: 0.7, // that scale vertically by 20%
        scaleY: 0.7, // and scale horizontally by 20%
       // yoyo: true, // at the end, go back to original scale
      });
      console.log('image');
// this.text2 = 'Sequencing';

    }

    if (this.swipeInput.isSwiped) {

  console.log(this.dumpDirectionStates(this.swipeInput));
  if (this.dumpDirectionStates(this.swipeInput) === ' left') {
        this.x = this.x + 220;
        this.image(this.x);
      }
  if (this.dumpDirectionStates(this.swipeInput) === ' right') {
        this.x = this.x - 220;
        this.image(this.x);
      }

    }
  }

  dumpDirectionStates(swipe) {
    let s = '';
    let dir;
    const directions = ['left', 'right', 'up', 'down'];
    for (let i = 0, cnt = directions.length; i < cnt; i++) {
      dir = directions[i];
      if (swipe[dir]) {
        s += ' ' + dir;
      }
    }
    return s;
  }




}

export  class Home2 extends Phaser.Scene {
   startX: any;
   velocity: any;
  now: any;
  private img: any;
scroller: any;
  private scrollerState: any;
  x = 0;
  constructor() {
    super('home2');

  }
  rectangles: any;
  drop: any;
  text: any;
  dragging: any;
print: any;
button: any;
  autoScroll: any;
  timeConstant: any;
  text2: any;

   amplitude: any;
  rexGestures: any;
  swipeInput: any;
  elapsed: any;
  back: any;
   timestamp: any;
   target: any;
   level1: any;
  level2: any;
  level3: any;
  level4: any;
  level5: any;
  imgg1: any;
  imgg2: any;
  imgg3: any;
  imgg4: any;
  imgg5: any;
 preload() {
   this.load.scenePlugin({
     key: 'rexgesturesplugin',
     url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexgesturesplugin.min.js',
     sceneKey: 'rexGestures'
   });
   this.load.image('sahara', 'assets/sahara.jpg');
   this.load.image('course1', 'assets/levels/sequencing.png');
   this.load.image('course2', 'assets/levels/loop.png');
   this.load.image('course3', 'assets/levels/condition.png');
   this.load.image('course4', 'assets/levels/function.png');
   this.load.image('course5', 'assets/levels/quiz.png');
   this.drop = this.load.image('drop', 'assets/drop.png');
   this.level1 = this.load.image('level1', 'assets/levels/level1a.png');
 //
   this.level2 = this.load.image('level2', 'assets/levels/level2a.png');
   this.level3 = this.load.image('level3', 'assets/levels/level3a.png');
   this.level4 = this.load.image('level4', 'assets/levels/level4a.png');
   this.level5 = this.load.image('level5', 'assets/levels/level5a.png');
   this.load.image('back2', 'assets/levels/back.jpg');
   this.load.image('cap', 'assets/levels/cap.png');


 }
resize() {
    // tslint:disable-next-line:one-variable-per-declaration
    const canvas = phaserGame.canvas, width = window.innerWidth, height = window.innerHeight;
    console.log(canvas);
    // tslint:disable-next-line:one-variable-per-declaration
    const wratio = width / height, ratio = canvas.width / canvas.height;
    if (wratio < ratio) {
      canvas.style.width = width  + 'px';
      canvas.style.height = (width / ratio) + 'px';
    } else {
      canvas.style.width = (height * ratio) + 260  + 'px';
      canvas.style.height = 400 + 'px';
    }
  }

  image(x= 0) {
    const  event = Phaser.Input.Events;
    // tslint:disable-next-line:no-non-null-assertion
    this.imgg1!.destroy(true);
    // tslint:disable-next-line:no-non-null-assertion
    this.imgg2!.destroy(true);
    // tslint:disable-next-line:no-non-null-assertion
    this.imgg3!.destroy(true);
    this.imgg4!.destroy(true);
    this.imgg5!.destroy(true);
    this.imgg1 = this.physics.add.sprite( x + 360, 350, 'course1').setInteractive().setName('drop');
    this.imgg1.scale = 0.6;
    this.imgg2 = this.physics.add.sprite(  x + 580,   350, 'course2').setInteractive().setName('drop');
    this.imgg2.scale = 0.6;
    this.imgg3 = this.physics.add.sprite(  x + 800,   350, 'course3').setInteractive().setName('drop');
    this.imgg3.scale = 0.6;
    this.imgg4 = this.physics.add.sprite(  x + 1020,   350, 'course4').setInteractive().setName('drop');
    this.imgg4.scale = 0.6;
    this.imgg5 = this.physics.add.sprite(  x + 1252,   350, 'course5').setInteractive().setName('drop');
    this.imgg5.scale = 0.6;
    this.imgg1.on(event.POINTER_DOWN , (image) => {

      // this.test(b);
      // this.scene.launch('gameOver', {name:"scene3"});
      // this.scene.start('welcome');
    routinga.sequencing();

    });
    this.imgg2.on(event.POINTER_DOWN , (image) => {

      // this.test(b);
      // this.scene.launch('gameOver', {name:"scene3"});
      // this.scene.start('welcome');
    routinga.loop();

    });
  }
  create() {
   console.log('hello lila azul fillawen ni jit hnaya ');
   window.addEventListener('resize', this.resize);
   this.resize();
   const sahara = this.add.image( 350,  250, 'cap');
   sahara.scale = 1.5;
   // this.back = this.add.image( 0, 0, 'back');
    // this.back = this.add.image( 347, 270, 'back');
   // this.back.scale = 0.16;
   this.button = this.physics.add.sprite(400, 350, 'drop').setInteractive();
   const value = 0x66000000;
   this.button.scale = 0.01;
   this.button.setTint(Phaser.Display.Color.GetColor(value, value, value));

   this.imgg1 = this.add.image( 360, 350, 'course1').setInteractive().setName('drop');
   this.imgg1.scale = 0.7;
   this.imgg2 = this.add.image(  583,   350, 'course2').setInteractive().setName('drop');
   this.imgg2.scale = 0.6;
   this.imgg3 = this.add.image(  800,   350, 'course3').setInteractive().setName('drop');
   this.imgg3.scale = 0.6;
   this.imgg4 = this.add.image(  1020,   350, 'course4').setInteractive().setName('drop');
   this.imgg4.scale = 0.6;
   this.imgg5 = this.add.image(  1260,   350, 'cours5').setInteractive().setName('drop');
   this.imgg5.scale = 0.6;
   const  event = Phaser.Input.Events;
   this.imgg1.on(event.POINTER_DOWN , (image) => {

      // this.test(b);
      // this.scene.launch('gameOver', {name:"scene3"});
    //  this.scene.start('welcome');
     routinga.sequencing();

    });
   this.imgg2.on(event.POINTER_DOWN , (image) => {


      routinga.loop();

    });

   this.text2 = ' ' ;
   this.swipeInput = this.rexGestures.add.swipe({ velocityThreshold: 1000 })
      // tslint:disable-next-line:only-arrow-functions
      .on('swipe', function(swipe) {

        // print.text += `swipe, v = ${swipe.dragVelocity}\n`;
       // print.text += this.text2 + '\n';
      }, this);


    // tslint:disable-next-line:prefer-const

   this.button.input.alwaysEnabled = true;

   // tslint:disable-next-line:prefer-const

  }

  update() {
    if (this.physics.overlap( this.imgg1, this.button)) {
      // Call the new hit() method
      this.tweens.add({
        targets: this.imgg1, // on the player
       // duration: 200, // for 200ms
        scaleX: 0.75, // that scale vertically by 20%
        scaleY: 0.75, // and scale horizontally by 20%
       // yoyo: true, // at the end, go back to original scale
      });
      console.log('image');
// this.text2 = 'Sequencing';

      // tslint:disable-next-line:align
    } if (this.physics.overlap( this.imgg2, this.button)) {
      // Call the new hit() method
      this.tweens.add({
        targets: this.imgg2, // on the player
       // duration: 200, // for 200ms
        scaleX: 0.7, // that scale vertically by 20%
        scaleY: 0.7, // and scale horizontally by 20%
       // yoyo: true, // at the end, go back to original scale
      });
      console.log('image');
// this.text2 = 'Sequencing';

      // tslint:disable-next-line:align
    }if (this.physics.overlap( this.imgg3, this.button)) {
      // Call the new hit() method
      this.tweens.add({
        targets: this.imgg3, // on the player
       // duration: 200, // for 200ms
        scaleX: 0.7, // that scale vertically by 20%
        scaleY: 0.7, // and scale horizontally by 20%
       // yoyo: true, // at the end, go back to original scale
      });
      console.log('image');
// this.text2 = 'Sequencing';

    }if (this.physics.overlap( this.imgg4, this.button)) {
      // Call the new hit() method
      this.tweens.add({
        targets: this.imgg4, // on the player
       // duration: 200, // for 200ms
        scaleX: 0.7, // that scale vertically by 20%
        scaleY: 0.7, // and scale horizontally by 20%
       // yoyo: true, // at the end, go back to original scale
      });
      console.log('image');
// this.text2 = 'Sequencing';

    }if (this.physics.overlap( this.imgg5, this.button)) {
      // Call the new hit() method
      this.tweens.add({
        targets: this.imgg5, // on the player
       // duration: 200, // for 200ms
        scaleX: 0.7, // that scale vertically by 20%
        scaleY: 0.7, // and scale horizontally by 20%
       // yoyo: true, // at the end, go back to original scale
      });
      console.log('image');
// this.text2 = 'Sequencing';

    }

    if (this.swipeInput.isSwiped) {

  console.log(this.dumpDirectionStates(this.swipeInput));
  if (this.dumpDirectionStates(this.swipeInput) === ' left') {
        this.x = this.x + 220;
        this.image(this.x);
      }
  if (this.dumpDirectionStates(this.swipeInput) === ' right') {
        this.x = this.x - 220;
        this.image(this.x);
      }
     // this.print.text += `update(): swipe ${this.dumpDirectionStates(this.swipeInput)}\n`;
      // this.x = this.x + 20;
      // this.image(this.x);
    }
  }

  dumpDirectionStates(swipe) {
    let s = '';
    let dir;
    const directions = ['left', 'right', 'up', 'down'];
    for (let i = 0, cnt = directions.length; i < cnt; i++) {
      dir = directions[i];
      if (swipe[dir]) {
        s += ' ' + dir;
      }
    }
    return s;
  }




}

export  class Home3 extends Phaser.Scene {
   startX: any;
   velocity: any;
  now: any;
  private img: any;
scroller: any;
  private scrollerState: any;
  x = 0;
  constructor() {
    super('home3');

  }
  rectangles: any;
  drop: any;
  text: any;
  dragging: any;
print: any;
button: any;
  autoScroll: any;
  timeConstant: any;
  text2: any;

   amplitude: any;
  rexGestures: any;
  swipeInput: any;
  elapsed: any;
  back: any;
   timestamp: any;
   target: any;
   level1: any;
  level2: any;
  level3: any;
  level4: any;
  level5: any;
  imgg1: any;
  imgg2: any;
  imgg3: any;
  imgg4: any;
  imgg5: any;
 preload() {
   this.load.scenePlugin({
     key: 'rexgesturesplugin',
     url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexgesturesplugin.min.js',
     sceneKey: 'rexGestures'
   });
   this.load.image('sahara', 'assets/sahara.jpg');
   this.load.image('course1', 'assets/levels/sequencing2.png');
   this.load.image('course2', 'assets/levels/loop2.png');
   this.load.image('course3', 'assets/levels/condition2.png');
   this.load.image('course4', 'assets/levels/function.png');
   this.load.image('course5', 'assets/levels/quiz.png');
   this.drop = this.load.image('drop', 'assets/drop.png');
   this.level1 = this.load.image('level1', 'assets/levels/level1a.png');
 //
   this.level2 = this.load.image('level2', 'assets/levels/level2a.png');
   this.level3 = this.load.image('level3', 'assets/levels/level3a.png');
   this.level4 = this.load.image('level4', 'assets/levels/level4a.png');
   this.level5 = this.load.image('level5', 'assets/levels/level5a.png');
   this.load.image('back2', 'assets/levels/back.jpg');
   this.load.image('cap', 'assets/levels/cap.png');


 }
resize() {
    // tslint:disable-next-line:one-variable-per-declaration
    const canvas = phaserGame.canvas, width = window.innerWidth, height = window.innerHeight;
    console.log(canvas);
    // tslint:disable-next-line:one-variable-per-declaration
    const wratio = width / height, ratio = canvas.width / canvas.height;
    if (wratio < ratio) {
      canvas.style.width = width  + 'px';
      canvas.style.height = (width / ratio) + 'px';
    } else {
      canvas.style.width = (height * ratio) + 260  + 'px';
      canvas.style.height = 400 + 'px';
    }
  }

  image(x= 0) {
    const  event = Phaser.Input.Events;
    // tslint:disable-next-line:no-non-null-assertion
    this.imgg1!.destroy(true);
    // tslint:disable-next-line:no-non-null-assertion
    this.imgg2!.destroy(true);
    // tslint:disable-next-line:no-non-null-assertion
    this.imgg3!.destroy(true);
    this.imgg4!.destroy(true);
    this.imgg5!.destroy(true);
    this.imgg1 = this.physics.add.sprite( x + 360, 350, 'course1').setInteractive().setName('drop');
    this.imgg1.scale = 0.6;
    this.imgg2 = this.physics.add.sprite(  x + 580,   350, 'course2').setInteractive().setName('drop');
    this.imgg2.scale = 0.6;
    this.imgg3 = this.physics.add.sprite(  x + 800,   350, 'course3').setInteractive().setName('drop');
    this.imgg3.scale = 0.6;
    this.imgg4 = this.physics.add.sprite(  x + 1020,   350, 'course4').setInteractive().setName('drop');
    this.imgg4.scale = 0.6;
    this.imgg5 = this.physics.add.sprite(  x + 1252,   350, 'course5').setInteractive().setName('drop');
    this.imgg5.scale = 0.6;
    this.imgg1.on(event.POINTER_DOWN , (image) => {

      // this.test(b);
      // this.scene.launch('gameOver', {name:"scene3"});
      // this.scene.start('welcome');
    routinga.BSequencing();

    });
    this.imgg2.on(event.POINTER_DOWN , (image) => {

      // this.test(b);
      // this.scene.launch('gameOver', {name:"scene3"});
      // this.scene.start('welcome');
    routinga.BLoop();

    });
    this.imgg3.on(event.POINTER_DOWN , (image) => {

      // this.test(b);
      // this.scene.launch('gameOver', {name:"scene3"});
      // this.scene.start('welcome');
    routinga.BCondition();

    });
  }
  create() {
   console.log('hello lila azul fillawen ni jit hnaya ');
   window.addEventListener('resize', this.resize);
   this.resize();
   const sahara = this.add.image( 350,  250, 'cap');
   sahara.scale = 1.5;
   // this.back = this.add.image( 0, 0, 'back');
    // this.back = this.add.image( 347, 270, 'back');
   // this.back.scale = 0.16;
   this.button = this.physics.add.sprite(400, 350, 'drop').setInteractive();
   const value = 0x66000000;
   this.button.scale = 0.01;
   this.button.setTint(Phaser.Display.Color.GetColor(value, value, value));

   this.imgg1 = this.add.image( 360, 350, 'course1').setInteractive().setName('drop');
   this.imgg1.scale = 0.7;
   this.imgg2 = this.add.image(  583,   350, 'course2').setInteractive().setName('drop');
   this.imgg2.scale = 0.6;
   this.imgg3 = this.add.image(  800,   350, 'course3').setInteractive().setName('drop');
   this.imgg3.scale = 0.6;
   this.imgg4 = this.add.image(  1020,   350, 'course4').setInteractive().setName('drop');
   this.imgg4.scale = 0.6;
   this.imgg5 = this.add.image(  1260,   350, 'cours5').setInteractive().setName('drop');
   this.imgg5.scale = 0.6;
   const  event = Phaser.Input.Events;
    this.imgg1.on(event.POINTER_DOWN , (image) => {

      // this.test(b);
      // this.scene.launch('gameOver', {name:"scene3"});
      // this.scene.start('welcome');
      routinga.BSequencing()

    });
    this.imgg2.on(event.POINTER_DOWN , (image) => {

      // this.test(b);
      // this.scene.launch('gameOver', {name:"scene3"});
      // this.scene.start('welcome');
      routinga.BLoop();

    });
    this.imgg3.on(event.POINTER_DOWN , (image) => {

      // this.test(b);
      // this.scene.launch('gameOver', {name:"scene3"});
      // this.scene.start('welcome');
      routinga.BCondition();

    });

   this.text2 = ' ' ;
   this.swipeInput = this.rexGestures.add.swipe({ velocityThreshold: 1000 })
      // tslint:disable-next-line:only-arrow-functions
      .on('swipe', function(swipe) {

        // print.text += `swipe, v = ${swipe.dragVelocity}\n`;
       // print.text += this.text2 + '\n';
      }, this);


    // tslint:disable-next-line:prefer-const

   this.button.input.alwaysEnabled = true;

   function over(item) {
      console.log('over');
    }
   function out(item) {
      console.log('out');  }

    // tslint:disable-next-line:prefer-const

  }

  update() {
    if (this.physics.overlap( this.imgg1, this.button)) {
      // Call the new hit() method
      this.tweens.add({
        targets: this.imgg1, // on the player
       // duration: 200, // for 200ms
        scaleX: 0.75, // that scale vertically by 20%
        scaleY: 0.75, // and scale horizontally by 20%
       // yoyo: true, // at the end, go back to original scale
      });
      console.log('image');
// this.text2 = 'Sequencing';

      // tslint:disable-next-line:align
    } if (this.physics.overlap( this.imgg2, this.button)) {
      // Call the new hit() method
      this.tweens.add({
        targets: this.imgg2, // on the player
       // duration: 200, // for 200ms
        scaleX: 0.7, // that scale vertically by 20%
        scaleY: 0.7, // and scale horizontally by 20%
       // yoyo: true, // at the end, go back to original scale
      });
      console.log('image');
// this.text2 = 'Sequencing';

      // tslint:disable-next-line:align
    }if (this.physics.overlap( this.imgg3, this.button)) {
      // Call the new hit() method
      this.tweens.add({
        targets: this.imgg3, // on the player
       // duration: 200, // for 200ms
        scaleX: 0.7, // that scale vertically by 20%
        scaleY: 0.7, // and scale horizontally by 20%
       // yoyo: true, // at the end, go back to original scale
      });
      console.log('image');
// this.text2 = 'Sequencing';

    }if (this.physics.overlap( this.imgg4, this.button)) {
      // Call the new hit() method
      this.tweens.add({
        targets: this.imgg4, // on the player
       // duration: 200, // for 200ms
        scaleX: 0.7, // that scale vertically by 20%
        scaleY: 0.7, // and scale horizontally by 20%
       // yoyo: true, // at the end, go back to original scale
      });
      console.log('image');
// this.text2 = 'Sequencing';

    }if (this.physics.overlap( this.imgg5, this.button)) {
      // Call the new hit() method
      this.tweens.add({
        targets: this.imgg5, // on the player
       // duration: 200, // for 200ms
        scaleX: 0.7, // that scale vertically by 20%
        scaleY: 0.7, // and scale horizontally by 20%
       // yoyo: true, // at the end, go back to original scale
      });
      console.log('image');
// this.text2 = 'Sequencing';

    }

    if (this.swipeInput.isSwiped) {

  console.log(this.dumpDirectionStates(this.swipeInput));
  if (this.dumpDirectionStates(this.swipeInput) === ' left') {
        this.x = this.x + 220;
        this.image(this.x);
      }
  if (this.dumpDirectionStates(this.swipeInput) === ' right') {
        this.x = this.x - 220;
        this.image(this.x);
      }
     // this.print.text += `update(): swipe ${this.dumpDirectionStates(this.swipeInput)}\n`;
      // this.x = this.x + 20;
      // this.image(this.x);
    }
  }

  dumpDirectionStates(swipe) {
    let s = '';
    let dir;
    const directions = ['left', 'right', 'up', 'down'];
    for (let i = 0, cnt = directions.length; i < cnt; i++) {
      dir = directions[i];
      if (swipe[dir]) {
        s += ' ' + dir;
      }
    }
    return s;
  }




}

import { Component, OnInit } from '@angular/core';
import { constructor } from 'phaser';

@Component({
  selector: 'app-platformer',
  templateUrl: './platformer.component.html',
  styleUrls: ['./platformer.component.css'],
})
export class PlatformerComponent implements OnInit {
  phaserGame: Phaser.Game;

  config: Phaser.Types.Core.GameConfig;

  constructor() {
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [MainScene],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 500 },
          debug: false,
        },
      },
    };
  }

  ngOnInit(): void {
    this.phaserGame = new Phaser.Game(this.config);
  }
}
class MainScene extends Phaser.Scene {
  map;
  player;
  cursors;
  groundLayer;
  coinLayer;
  play;

  text;
  score = 0;
  array1: number[] = [];
  i: number = 0;
  constructor() {
    super({ key: 'main' });
  }

  preload() {
    this.load.image('ground', '../assets/ground.png');
    this.load.image('star', '../assets/star.png');
    this.load.image('dude2', '../assets/dude2.png');
    this.load.image('play2', '../assets/play2.png');
    // map made with Tiled in JSON format
    this.load.tilemapTiledJSON('map', 'assets/map.json');
    // tiles in spritesheet
    this.load.spritesheet('tiles', 'assets/tiles.png', {
      frameWidth: 70,
      frameHeight: 70,
    });
    // simple coin image
    this.load.image('coin', 'assets/coinGold.png');
    // player animations
    this.load.atlas('player', 'assets/player.png', 'assets/player.json');
  }

  create() {
    // load the map
    this.map = this.make.tilemap({ key: 'map' });

    // tiles for the ground layer
    var groundTiles = this.map.addTilesetImage('tiles');
    // create the ground layer
    this.groundLayer = this.map.createDynamicLayer('World', groundTiles, 0, 0);
    // the player will collide with this layer
    this.groundLayer.setCollisionByExclusion([-1]);

    // coin image used as tileset
    var coinTiles = this.map.addTilesetImage('coin');
    // add coins as tiles
    this.coinLayer = this.map.createDynamicLayer('Coins', coinTiles, 0, 0);

    // set the boundaries of our game world
    this.physics.world.bounds.width = this.groundLayer.width;
    this.physics.world.bounds.height = this.groundLayer.height;

    // create the player sprite
    this.player = this.physics.add.sprite(200, 200, 'player');
    this.player.setBounce(0.2); // our player will bounce from items
    this.player.setCollideWorldBounds(true); // don't go out of the map

    // small fix to our player images, we resize the physics body object slightly
    this.player.body.setSize(this.player.width, this.player.height - 8);

    // player will collide with the level tiles
    this.physics.add.collider(this.groundLayer, this.player);

    this.coinLayer.setTileIndexCallback(17, this.collectCoin, this);
    // when the player overlaps with a tile with index 17, collectCoin
    // will be called
    this.physics.add.overlap(this.player, this.coinLayer);
    var platforms = this.physics.add.staticGroup();

    var p = platforms.create(450, 430, 'ground');
    p.setInteractive({ dropZone: true });
    p.setName('whatever');
    var star = this.add.image(400, 200, 'star');

    this.play = this.add.image(130, 130, 'play2').setInteractive();
    var drop2 = platforms.create(200, 200, 'ground');
    star.setInteractive({ dropped: true });
    var dude2 = this.add.image(260, 260, 'dude2');
    drop2.setInteractive({ dropZone: true });

    star.setName('what');
    dude2.setName('zone2');
    dude2.setInteractive({ dropped: true });
    star.setInteractive();
    this.input.setDraggable(star);
    dude2.setInteractive();
    this.input.setDraggable(dude2);

    this.input.on(
      'dragstart',
      function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      },
      this
    );

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on('dragenter', function (pointer, gameObject, dropZone) {
      p.scaleY = 4.5;

      /*   graphics.clear();
      graphics.lineStyle(2, 0x00ffff);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );*/
      //  star.scale.set
    });

    this.input.on('dragleave', function (pointer, gameObject, dropZone) {
      p.scaleY = 0;
      /*   graphics.clear();
      graphics.lineStyle(2, 0xffff00);
      graphics.strokeRect(
        zone.x - zone.input.hitArea.width / 2,
        zone.y - zone.input.hitArea.height / 2,
        zone.input.hitArea.width,
        zone.input.hitArea.height
      );*/
    });

    this.input.on('drop', function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;
    });

    this.input.on('dragend', function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }
    });

    var bool;
    this.input.on(
      'drop',
      (
        e: any,
        object: Phaser.GameObjects.Image,
        target: Phaser.GameObjects.Image
      ) => {
        if (object.name == 'what') {
          bool = 1;
          //  this.player.setVelocityX(160);

          //  this.player.anims.play('run', true);
          // stuff
        } else if (object.name == 'zone2') {
          //     this.player.anims.play('fall', true);
          bool = 2;
        }
        this.array1[this.i] = bool;
        this.i++;
        //console.log(bool);
      }
    );

    // player walk animation
    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNames('player', {
        prefix: 'p1_walk',
        start: 1,
        end: 11,
        zeroPad: 2,
      }),
      frameRate: 10,
      repeat: -1,
    });
    // idle with only one frame, so repeat is not neaded
    this.anims.create({
      key: 'idle',
      frames: [{ key: 'player', frame: 'p1_stand' }],
      frameRate: 10,
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    this.play.on('pointerup', () => {
      //   setTimeout(() => this.play.setAlpha(4));
      this.walk(this.array1);
    });
  }

  // this function will be called when the player touches a coin
  collectCoin(sprite, tile) {
    this.coinLayer.removeTileAt(tile.x, tile.y); // remove the tile/coin
    this.score++; // add 10 points to the score
    // this.text.setText(this.score); // seyt the text to show the current score
    return false;
  }
  async walk(array1) {
    for (let i = 0; i < this.array1.length; i++) {
      await this.waitfunction(500);

      console.log(this.i);

      //   console.log(this.array1[0]);
      if (this.array1[i] == 1) {
        console.log('dkhlt lel case1 ');
        this.player.body.setVelocityX(-200);
        this.player.anims.play('walk', true); // walk left
        this.player.flipX = true; // flip the sprite to the left
      } else if (this.array1[i] == 2) {
        console.log('dkhlt lel case2 ');

        this.player.body.setVelocityX(200);
        this.player.anims.play('walk', true);
        this.player.flipX = false; // use the original sprite looking to the right
      } else {
        console.log('undifined khay');
      }
    }
  }

  waitfunction(ms) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(''), ms);
    });
  }

  update(time, delta) {
    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-200);
      this.player.anims.play('walk', true); // walk left
      this.player.flipX = true; // flip the sprite to the left
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(200);
      this.player.anims.play('walk', true);
      this.player.flipX = false; // use the original sprite looking to the right
    } else {
      this.player.body.setVelocityX(0);
      this.player.anims.play('idle', true);
    }
    // jump
    if (this.cursors.up.isDown && this.player.body.onFloor()) {
      this.player.body.setVelocityY(-500);
    }
  }
}

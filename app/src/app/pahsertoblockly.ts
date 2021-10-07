export class Pahsertoblockly extends Phaser.Scene {
  static player;
  static replay;
  tween;
  constructor() {
    super({ key: 'main' });
  }
  create() {
    var dragab = this.physics.add.group();

    const map = this.make.tilemap({ key: 'level1' });
    const tileset = map.addTilesetImage('mapPack_tilesheet', 'tiles');
    map.createLayer('Calque de Tuiles 1', tileset);
    const coll = map.createLayer('collision', tileset);
    const coll2 = dragab.create(340, 290, 'box').setImmovable();

    coll.setCollisionByProperty({ collides: true });

    const debugGraphics = this.add.graphics().setAlpha(0.7);
    coll.renderDebug(debugGraphics, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
      faceColor: new Phaser.Display.Color(40, 39, 37, 255),
    });
    Pahsertoblockly.player = this.physics.add.sprite(115, 290, 'man');
    this.physics.add.collider(Pahsertoblockly.player, coll);
    this.physics.add.collider(Pahsertoblockly.player, coll2, hitBox);

    this.anims.create({
      key: 'walk',
      frameRate: 10,
      frames: this.anims.generateFrameNumbers('man', { start: 6, end: 7 }),
      repeat: 0,
    });
    function hitBox(coll2: any) {
      console.log('hellooooooo');
      coll2.disableBody(true);
      // player.setVelocityY(-360);
      // Pahsertoblockly.player.setTint(0xff0000);
      Pahsertoblockly.player.play('walk');
      Pahsertoblockly.player.setBounce(0);
      Pahsertoblockly.player.body.reset(340, 290);
      Pahsertoblockly.player.body.immovable = true;
      Pahsertoblockly.player.body.moves = false;

      Pahsertoblockly.player.x = 0;
      //  scene.start('menu');

      //  scene.restart();
    }
  }

  moveForward() {
    // You may want to imbed your player.body.touching.down check in this function.
    //  Pahsertoblockly.player.body.moves = false;
    Pahsertoblockly.player.x += 100;

    //  Pahsertoblockly.player.setVelocityX(100, 0);

    // Pahsertoblockly.player.y = 100;
    // console.log('jump yaaay');
  }

  jump() {
    // You may want to imbed your player.body.touching.down check in this function.
    Pahsertoblockly.player.setVelocityY(-100);
    // console.log('jump yaaay');
  }
  moveRight() {
    Pahsertoblockly.player.x += 100;
  }
  moveLeft() {
    Pahsertoblockly.player.setVelocityX(-160);
  }
  preload() {
    this.load.image('skynight', '../assets/BG.png');
    this.load.image('dude', '../assets/penguin.png');
    this.load.image('box', '../assets/IceBox.png');

    this.load.image('dude', '../assets/dude2.png');
    this.load.image('tiles', '../assets/tiles/mapPack_tilesheet.png');
    this.load.tilemapTiledJSON('level1', '../assets/tiles/loop2.json');
    this.load.spritesheet('man', '../assets/dude.png', {
      frameWidth: 130,
      frameHeight: 150,
    });

    this.load.image('bg', '../assets/BG.png');
    this.load.image('replay', '../assets/replay.png');
    this.load.image('ground', '../assets/10.png');
  }
  update() {
    // Pahsertoblockly.player.body.stop();
    //Pahsertoblockly.player.body.moves = true;
    //Pahsertoblockly.player.setVelocityX = 0;
    //  Pahsertoblockly.player.body.reset(0, 0);
    //  Pahsertoblockly.player.body.allowGravity = false;
    //Pahsertoblockly.player.body.enable = false;
  }
}

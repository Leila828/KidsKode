import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from "../_services/token-storage.service";
import { AuthService } from "../_services/auth.service";
import { UserService } from "../_services/user.service";
import { Parent } from "../parent";
import { Child } from "../child";
import { enfantLearning } from "../enfantLearning";
import { GameOver, Scene3 } from "../sequencing/sequencing.component";
import { NavbarService } from "../navbar.service";
import {Router} from '@angular/router';
import {Home} from '../home-page/home-page.component';
let loop;
declare function pop(): any;
let phaserGame;
var updat;
let routing;
@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css'],
})
export class Game2Component implements OnInit {

  currentUser: any;
  parent!: Parent;
  username!: Parent;
  User!: Child;
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  id_user!;

  Userlearning?: enfantLearning;
  s?: enfantLearning;

  Userdata;
  config: Phaser.Types.Core.GameConfig;
  constructor(
    private router1: Router,
    private token: TokenStorageService,
    private authservice: AuthService,
    private userauth: UserService,
    private nav: NavbarService
  ) {
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [
        MainScene,
        MenuScene,
        NewScene,
        Completscene,
        Giftscene,
        finalscene,
        GameOver,
        faillscene,
      ],
      //  scene: [ NewScene, MenuScene , MainScene ],
      parent: "gameContainer",
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 700 },
          debug: false,
        },
      },
    };
  }
  ngOnInit(): void {
    this.nav.hide();
    phaserGame = new Phaser.Game(this.config );
    pop();
    updat = this;
    this.update_score();
  }
  navigate() {
    this.router1.navigate(['home']);
  }
  navigateblockly() {
    this.router1.navigate(["/blocklysequencing"]);
  }
  update_score() {
    this.currentUser = this.token.getUser();
    //  var l = parseInt(localStorage.getItem("score")) || 0;
    //var v = parseInt(localStorage.getItem("score2")) || 0;

    var l = parseInt(sessionStorage.getItem("score")!)  || 0;
    var v = parseInt(sessionStorage.getItem("score2")!)  || 0;
    if (this.currentUser.roles == "ROLE_CHILD") {
      this.userauth.getenfantlearning(this.currentUser.id).subscribe((data) => {
        this.Userlearning = data;
        if (this.Userlearning == undefined) {
          console.log("yaw undifined");
          console.log("ereeeeeeeer");
          this.authservice.initialize(this.currentUser.id).subscribe((data) => {
            this.s = data;
            console.log(this.s);
          });
        } else {
          if (l == 0) {
            console.log("score2" + l);
            this.authservice
              .sendscore(
                this.currentUser.id,
                this.currentUser.username,
                this.Userlearning.points,
                this.Userlearning.points2,
                this.Userlearning.points_sequencing_blockly,
                this.Userlearning.points_loop_blockly,
                this.Userlearning.points_condition_blockly
              )
              .subscribe(
                (data) => {
                  console.log(data);
                  //    this.isSuccessful = true;
                },
                (err) => {
                  //this.errorMessage = err.error.message;
                }
              );
          } else if (l != 0) {
            this.authservice
              .sendscore(
                this.currentUser.id,
                this.currentUser.username,
                l,
                this.Userlearning.points2,
                this.Userlearning.points_sequencing_blockly,
                this.Userlearning.points_loop_blockly,
                this.Userlearning.points_condition_blockly
              )
              .subscribe(
                (data) => {
                  console.log(data);
                  //    this.isSuccessful = true;
                },
                (err) => {
                  //this.errorMessage = err.error.message;
                }
              );
          }
        }
      });
    } else if (this.currentUser.roles == "ROLE_PARENT") {
      this.token.getinfo().subscribe((data) => {
        this.username = data;
        this.id_user = this.username.enfant.compte.id;

        var l = parseInt(sessionStorage.getItem("score")!)  || 0;
        var v = parseInt(sessionStorage.getItem("score2")!)  || 0;

        this.userauth.getenfantlearning(this.id_user).subscribe((data) => {
          this.Userlearning = data;
          if (this.Userlearning == undefined) {
            console.log("yaw undifined");
            console.log("ereeeeeeeer");
            this.authservice.initialize(this.id_user).subscribe((data) => {
              this.s = data;
              console.log(this.s);
            });
          } else {
            if (l == 0) {
              console.log("score2" + v);
              this.authservice
                .sendscore(
                  this.id_user,
                  this.username.enfant.compte.username,
                  this.Userlearning.points,
                  this.Userlearning.points2,
                  this.Userlearning.points_sequencing_blockly,
                  this.Userlearning.points_loop_blockly,
                  this.Userlearning.points_condition_blockly
                )
                .subscribe(
                  (data) => {
                    console.log(data);
                    //    this.isSuccessful = true;
                  },
                  (err) => {
                    //this.errorMessage = err.error.message;
                  }
                );
            } else if (l != 0) {
              this.authservice
                .sendscore(
                  this.id_user,
                  this.username.enfant.compte.username,
                  l,
                  this.Userlearning.points2,
                  this.Userlearning.points_sequencing_blockly,
                  this.Userlearning.points_loop_blockly,
                  this.Userlearning.points_condition_blockly
                )
                .subscribe(
                  (data) => {
                    console.log(data);
                    //    this.isSuccessful = true;
                  },
                  (err) => {
                    //this.errorMessage = err.error.message;
                  }
                );
            }
          }
        });
      });
    }
  }

  getinfo2(): void {
    this.token.getinfo().subscribe((data) => {
      this.username = data;
      this.id_user = this.username.enfant.id;

      var l = parseInt(sessionStorage.getItem("score")!) || 0;
      var v = parseInt(sessionStorage.getItem("score2")!)  || 0;

      this.userauth.getenfantlearning(this.id_user).subscribe((data) => {
        this.Userlearning = data;
        if (this.Userlearning == undefined) {
          console.log("yaw undifined");
          console.log("ereeeeeeeer");
          this.authservice.initialize(this.id_user).subscribe((data) => {
            this.s = data;
            console.log(this.s);
          });
        } else {
          if (l == 0) {
            console.log("score2" + v);
            this.authservice
              .sendscore(
                this.id_user,
                this.username.enfant.compte.username,
                this.Userlearning.points,
                this.Userlearning.points2,
                this.Userlearning.points_sequencing_blockly,
                this.Userlearning.points_loop_blockly,
                this.Userlearning.points_condition_blockly
              )
              .subscribe(
                (data) => {
                  console.log(data);
                  //    this.isSuccessful = true;
                },
                (err) => {
                  //this.errorMessage = err.error.message;
                }
              );
          } else if (l != 0) {
            this.authservice
              .sendscore(
                this.id_user,
                this.username.enfant.compte.username,
                l,
                this.Userlearning.points2,
                this.Userlearning.points_sequencing_blockly,
                this.Userlearning.points_loop_blockly,
                this.Userlearning.points_condition_blockly
              )
              .subscribe(
                (data) => {
                  console.log(data);
                  //    this.isSuccessful = true;
                },
                (err) => {
                  //this.errorMessage = err.error.message;
                }
              );
          }
        }
      });
    });
  }
}

////////////////////////////////////////////////////////////////////////////

export class MenuScene extends Phaser.Scene {
  cursors;
  player = null;
  loop;
  dragobj;
  play;
  dude2;
  child;
  zone;
  run;
  container;
  loopchange;
  loopchild1;
  loopchild2;
  dude1;
  bigground;
  break = false;
  score = 0;
  scoreText;
  bool: number = 0;
  array: number[] = [];
  array1: number[] = [];
  arr = new Array<number>(2);
  bg;
  coll;
  scene;
  testcorrect: Boolean = false;
  i: number = 0;

  constructor() {
    super({ key: "menu" });
  }
  closeGameOve() {
    this.scene.stop("completed");
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
      canvas.style.width = (height * ratio) + 273 + 'px';
      canvas.style.height = 370 + 'px';
    }
  }

  create() {
    console.log('raki hna fl menu');
    window.addEventListener('resize', this.resize);
    this.resize();
    this.closeGameOve()
    console.log("hadi menu");
    var windowWidth = window.innerWidth;
    var widnowHeight = window.innerHeight;
    (this as any).bg = (this as any).add.image(
      windowWidth / 2,
      widnowHeight / 2,
      "skynight"
    );
    (this as any).bg.setDisplaySize(windowWidth, widnowHeight);

    var platforms = (this as any).physics.add.staticGroup();
    var bloc1 = platforms.create(750, 100, "ground");
    var bloc2 = platforms.create(750, 180, "ground");
    var bloc3 = platforms.create(750, 260, "ground");

    bloc2.setScale(0.8);
    bloc1.setScale(0.8);
    bloc3.setScale(0.8);

    var dragab = (this as any).physics.add.group();
    var coin = dragab.create(410, 340, "icebox");
    var obstacle1 = dragab.create(360, 320, "crate");
    var coin2 = dragab.create(520, 340, "icebox");
    var obstacle2 = dragab.create(460, 320, "crate");
    var coin3 = dragab.create(300, 340, "icebox");
    obstacle1.setScale(0.6);
    obstacle2.setScale(0.6);
    coin.setScale(0.3);
    coin2.setScale(0.3);
    coin3.setScale(0.3);
    var terre = platforms.create(60, 630, "terre_1");
    var terre2 = platforms.create(185, 630, "terre");
    var terre3 = platforms.create(305, 630, "terre");
    var terre4 = platforms.create(430, 630, "terre");
    var terre4 = platforms.create(555, 630, "terre");
    var terre4 = platforms.create(680, 630, "terre");
    var terre4 = platforms.create(805, 630, "terre");

    var terreneige = platforms.create(60, 510, "terreneige");
    var terreneige = platforms.create(188, 510, "terreneige2");
    var terreneige = platforms.create(316, 510, "terreneige2");
    var terreneige = platforms.create(444, 510, "terreneige2");
    var terreneige = platforms.create(572, 510, "terreneige2");
    var terreneige = platforms.create(700, 510, "terreneige2");
    var terreneige = platforms.create(828, 510, "terreneige2");
    var plaque = platforms.create(560, 60, "sign2");
    plaque.setScale(0.9);
    var plaque2 = platforms.create(360, 555, "sign1");

    var jumpgr = platforms.create(555, 100, "14");
    var jumpgr2 = platforms.create(605, 100, "15");
    var jumpgr3 = platforms.create(640, 100, "16");
    var snowman = platforms.create(612, 50, "snowman");

    var Tree = (this as any).add.image(100, 365, "tree");
    var Tree2 = (this as any).add.image(700, 365, "tree2");

    var igloo = (this as any).add.image(135, 400, "igloo");
    //  var plaay = this.add.image(500, 600, 'plaay');
    var rep = (this as any).add.image(730, 570, "replaysnow");

    rep.setInteractive();
    rep.setScale(0.5);

    Tree.setScale(0.6);
    Tree2.setScale(0.6);

    snowman.setScale(0.3);
    var crystal = dragab.create(615, 410, "crystal");
    igloo.setScale(0.5);
    jumpgr.setScale(0.4);
    jumpgr2.setScale(0.4);
    jumpgr3.setScale(0.4);
    var score = (this as any).score;

    var scoreholder = this.add.image(100, 50, "scoreholder");
    scoreholder.setScale(0.15);

    var scoreText = (this as any).add.text(120, 40, " ", {
      fontSize: "32px",
    });
    scoreText.setText("" + this.score);
    var dude1 = dragab.create(755, 180, "dude2");

    var dude1child = dragab.create(755, 180, "dude2");
    //  375, 535,
    var dude2 = dragab.create(750, 260, "play");
    var dude2child = dragab.create(750, 260, "play");

    var bigground = platforms.create(360, 535, "bigground2");
    dude2.setScale(0.8);
    dude2child.setScale(0.8);

    dude1.setScale(0.8);
    dude1child.setScale(0.8);

    (this as any).run = (this as any).add.image(730, 510, "nextsnow");
    (this as any).run.setScale(0.5);

    bigground.setScale(0.42);
    var scene = (this as any).scene;

    obstacle1.setInteractive();

    dude1.body.setAllowGravity(false);
    dude1child.body.setAllowGravity(false);

    dude2.body.setAllowGravity(false);
    dude2child.body.setAllowGravity(false);

    (this as any).run.setInteractive();

    var loopchild1 = platforms.create(340, 535, "ground");
    var loopchild2 = platforms.create(380, 535, "ground");
    //   var buttonGameRestart = dragab.create(120, 200, "play");
    loopchild1.setScale(0.4);
    loopchild2.setScale(0.4);

    loopchild1.setName("loopchild1");
    loopchild2.setName("loopchild2");

    coin.body.setAllowGravity(false);
    coin2.body.setAllowGravity(false);
    coin3.body.setAllowGravity(false);

    crystal.body.setAllowGravity(false);
    obstacle1.body.setAllowGravity(false);
    obstacle2.body.setAllowGravity(false);

    dude2.setName("zone2");
    dude1.setName("zone1");
    dude1child.setName("zone1");
    dude2child.setName("zone2");

    loopchild2.setInteractive({ dropZone: true });
    loopchild1.setInteractive({ dropZone: true });

    dude2.setInteractive({ dropped: true });
    dude1child.setInteractive({ dropped: true });
    loopchild1.visible = false;
    loopchild2.visible = false;

    dude1.setInteractive({ dropped: true });

    dude2.setInteractive();
    (this as any).input.setDraggable(dude2);
    dude1.setInteractive();
    (this as any).input.setDraggable(dude1);
    dude1child.setInteractive();
    (this as any).input.setDraggable(dude1child);
    var that = this;
    (this as any).input.on(
      "dragstart",
      function (pointer, gameObject) {
        that.children.bringToTop(gameObject);
      },
      this as any
    );

    (this as any).input.on("drag", function (
      pointer,
      gameObject,
      dragX,
      dragY
    ) {
      gameObject.x = dragX;
      gameObject.y = dragY;
      if (gameObject.name == "loop") {
        console.log("rani f drag ");

        loopchild1.setInteractive({ dropZone: false });
        loopchild2.setInteractive({ dropZone: false });

        loopchild1.input.enable = false;
        loopchild2.input.enable = false;
        bigground.setInteractive({ dropZone: true });
      } else {
      }
    });

    (this as any).input.on("dragenter", function (
      pointer,
      gameObject,
      dropZone
    ) {
      if (gameObject.name == "loop") {
        console.log("dkhalt ground dragenter");

        loopchild1.input.enable = false;
        loopchild2.input.enable = false;
      }
    });

    (this as any).input.on("dragleave", function (
      pointer,
      gameObject,
      dropZone
    ) {
      if (gameObject.name == "loop") {
        console.log("dkhalt ground f dragleave");

        bigground.input.enable = false;
        loopchild1.setInteractive({ dropZone: false });
        loopchild2.setInteractive({ dropZone: false });

        loopchild1.input.enable = false;
        loopchild2.input.enable = false;
      }
    });

    (this as any).input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }
      if (gameObject.name == "loop") {
        console.log("rani f dragend");

        bigground.input.enable = false; //nrmlmnt hadi hiya li darat disable
      }
    });
    var brek = (this as any).break;
    (this as any).player = (this as any).physics.add.sprite(310, 415, "dude");
    //    (this as any).play = (this as any).physics.add.sprite(130, 130, "play");

    (this as any).loop = (this as any).physics.add.sprite(
      750,
      100,
      "loopbefore"
    );

    (this as any).loop.body.setAllowGravity(false);
    //  (this as any).play.body.setAllowGravity(false);

    (this as any).loop.setScale(0.25);
    (this as any).loop.setName("loop");
    //  (this as any).play.setName("play");

    (this as any).loop.setInteractive();
    (this as any).input.setDraggable((this as any).loop);

    //  (this as any).play.setInteractive();
    // (this as any).input.setDraggable((this as any).play);

    dude2.setCollideWorldBounds(true);
    (this as any).physics.add.collider((this as any).player, platforms);
    (this as any).physics.add.collider((this as any).loop, platforms);
    //   (this as any).physics.add.collider((this as any).play, platforms);
    (this as any).physics.add.collider(obstacle1, platforms);

    (this as any).coll = (this as any).physics.add.collider(
      (this as any).player,
      coin,
      hitBox
    );
    (this as any).physics.world.removeCollider((this as any).coll);

    (this as any).physics.add.collider((this as any).player, coin2, hitBox);

    (this as any).physics.add.collider((this as any).player, coin3, hitBox);

    (this as any).physics.add.collider(dragab, platforms);
    dude1.setCollideWorldBounds(true);
    //this.physics.collide(dragab);
    (this as any).player.setBounce(0.2);
    (this as any).loop.setCollideWorldBounds(true);
    // (this as any).play.setCollideWorldBounds(true);

    //(this as any).play.visible = false;

    (this as any).player.setCollideWorldBounds(true);

    (this as any).input.on("drop", function (pointer, gameObject, dropZone) {
      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;
      dropZone.input.enabled = false;

      if (gameObject.name == "loop") {
        console.log("rani f drop ");

        console.log("dkhalt ground f leave");

        loopchild1.visible = true;
        loopchild1.scaleX = 0.6;
        loopchild2.scaleX = 0.6;
        loopchild2.visible = true;
        loop.setTexture("loop");
        loop.setScale(0.2);

        bigground.enabled = false;
        //   buttonGameRestart.setInteractive();
      }
      if (gameObject.name == "zone1") {
        //  dude1.setScale(0.5);
        //dude1child.setScale(0.5);
        gameObject.setScale(0.5);
      }
      if (gameObject.name == "zone2") {
        gameObject.setScale(0.5);

      }
    });
    (this as any).anims.create({
      key: "run",
      frames: (this as any).anims.generateFrameNumbers("dude", {
        start: 5,
        end: 7,
      }),
      frameRate: 10,
      repeat: 0,
    });
    (this as any).anims.create({
      key: "fall",
      frames: (this as any).anims.generateFrameNumbers("dude", {
        start: 9,
        end: 10,
      }),
      frameRate: 10,
      repeat: 0,
    });
    this.array1 = [];
    (this as any).input.on("drag", function (
      pointer,
      gameObject,
      dragX,
      dragY
    ) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });
    this.i = 0;
    (this as any).input.on(
      "drop",
      (
        e: any,
        object: Phaser.GameObjects.Image,
        target: Phaser.GameObjects.Image
      ) => {
        switch (object.name) {
          case "zone1": {
            (this as any).bool = 1;

            (this as any).array1[(this as any).i] = (this as any).bool;

            break;
          }
          case "zone2": {
            (this as any).bool = 2;

            (this as any).array1[(this as any).i] = (this as any).bool;
            console.log((this as any).array1);

            break;
          }
          case "loop": {
            break;
          }
        }
        (this as any).i++;
      }
    );
    console.log("la taille ta3 larray" + (this as any).array1.length);

    var player = (this as any).player;

    var loop = (this as any).loop;
    //  var bigground = this.bigground;
    var play = (this as any).play;
    var child = (this as any).child;
    // var loopchild2 = this.loopchild2;
    var array = (this as any).array1;
    var loopchange = (this as any).loopchange;
    var container = (this as any).container;
    var zone = (this as any).zone;
    rep.on("pointerdown", () => {
      console.log("restart normal");
      // this.registry.destroy(); // destroy registry
      //this.scene.cache.destroy();
      //this.events.off();// disable all active events
      this.testcorrect = false;
      this.scene.restart(); // restart current scene
      // (this as any).scene.restart();
    });
    (this as any).run.on("pointerdown", () => {
      console.log("array[1]" + this.array1[1]);
      (this as any).test((this as any).array1);
      console.log(
        "hahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay"
      );

      if (this.array1[1] == 2) {
        console.log("rak ghalat aniis");
        this.testcorrect = true;
      } else if (this.array1[1] == 1) {
        this.testcorrect = false;
      }

      if (this.testcorrect == true) {
        (this as any).physics.add.collider((this as any).player, crystal, win);

        console.log("trueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      } else if (this.testcorrect == false) {
        (this as any).physics.add.collider(
          (this as any).player,
          crystal,
          loose
        );
        console.log("yaaw kharaj lwinnnnnnn");
        console.log("faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalse");
      }
      // console.log("ni f test +correct" + MenuScene.correct);
    });

    function hitBox(player: any, box: any) {
      box.disableBody(true, true);
      // player.setVelocityY(-360);
      player.setVelocityX(0);
      score += 10;
      scoreText.setText(score);
      // localStorage.setItem("score", JSON.stringify(score));

      //  scene.start('menu');

      //  scene.restart();
    }
    function loose(player: any, crystal: any) {
      crystal.disableBody(true, true);
      player.x = 540;

      scene.launch("fail");
    }
    var that = this;
    function win(player: any, crystal: any) {
      crystal.disableBody(true, true);
      sessionStorage.setItem("score", JSON.stringify(score));
      console.log("session:" + parseInt(sessionStorage.getItem("score")!)  || 0);
      // player.setVelocityY(-360);
      //   player.setTint(0xff0000);
      //   player.setVelocityX(0);
      // player.setVelocityY(0);

      player.setVelocity(0, 0);
      player.x = 600;
      // player.visible = false;
      //scene.pause();
      //  bg2.visible = true;
      // bg2.setScale(1);

      that.break = true;
      console.log("send score:" + score);
      scene.launch("completed", { score: score });
      //updat.update_score();
      //scene.launch("level2", { score: score });
      /* if (this.testcorrect == true) {
        console.log("rak ghalat aniis");
      } else if (this.testcorrect == false) {
      }*/
      //  scene.restart();*/
      // scene.launch("fail");
    }
    console.log("testcorrect" + this.testcorrect);
  }

  gameOver() {
    this.scene.restart();
  }
  hitBomb(player: any, coin: any) {
    console.log("hii");

    coin.disableBody(true, true);
  }
  testtest(l: number) {
    if (l == 1) {
      this.scene.launch("complete");
    } else if (l == 2) {
      this.scene.launch("fail");
    }
  }
  init(data) {
    console.log("data receievd" + data);
    this.score = data.score;
    console.log("data.score" + data.score);
  }
  datasave() {
    var file = {
      score: (this as any).score,
    };
    localStorage.setItem("data", JSON.stringify(file));
  }
  loadFile() {
    var file = JSON.parse(localStorage.getItem("data")!)!;
    (this as any).score = file.score;
  }

  async test(b) {
    for (var x = 0; x < 3; x++) {
      for (var j = 1; j < b.length; j++) {
        await (this as any).sleep(800);
        console.log(b[j]);
        if (b[j] == 1) {
          (this as any).player.x += 110;
          console.log("hi first");
        } else if (b[j] == 2) {
          (this as any).player.setVelocityY(-200);

          console.log("hi second");
        }
      }
    }
    /*    if (b[1] != 1) {
      console.log("f test rani:+correct=");
      this.scene.remove();
      this.scene.launch("fail");
    }*/
  }
  collectStar(player, star) {
    star.disableBody(true, true);
  }
  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  waitfunction(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms * 1000);
    });
  }
  gofunction() {
    (this as any).player.x += 10;
  }
  upfunction() {
    (this as any).player.y -= 360;
  }
  preload() {
    (this as any).load.image("sky", "../assets/aicha/sahara.jpg");
    (this as any).load.image("skynight", "../assets/aicha/BG.png");
    (this as any).load.image("plaay", "../assets/aicha/plaay.png");
    (this as any).load.image("replay", "../assets/aicha/replay.png");
    (this as any).load.image("loop", "../assets/aicha/loop.png");
    (this as any).load.image("loopbefore", "../assets/aicha/loopbefore.png");

    (this as any).load.image("ground", "../assets/aicha/mapTile_077.png");
    (this as any).load.image("star", "../assets/aicha/coinGold.png");
    (this as any).load.image("sign1", "../assets/aicha/Sign_1.png");
    (this as any).load.image("sign2", "../assets/aicha/Sign_2.png");

    (this as any).load.image("terre", "../assets/aicha/5.png");
    (this as any).load.image("terre_1", "../assets/aicha/4.png");
    (this as any).load.image("terre_2", "../assets/aicha/6.png");
    (this as any).load.image("14", "../assets/aicha/14.png");
    (this as any).load.image("15", "../assets/aicha/15.png");
    (this as any).load.image("16", "../assets/aicha/16.png");

    (this as any).load.image("terreneige", "../assets/aicha/1.png");
    (this as any).load.image("terreneige2", "../assets/aicha/2.png");

    (this as any).load.image("dude2", "../assets/aicha/right.png");
    (this as any).load.image("play", "../assets/aicha/up.png");
    //(this as any).load.image('bigground', '../assets/aicha/bigground.png');
    (this as any).load.image("bigground2", "../assets/aicha/pingui.png");

    //  (this as any).load.image('run', '../assets/aicha/play.png');

    (this as any).load.image("dude", "../assets/aicha/penguin.png");
    (this as any).load.image("igloo", "../assets/aicha/Igloo.png");
    (this as any).load.image("crystal", "../assets/aicha/Crystal.png");
    (this as any).load.image("tree", "../assets/aicha/Tree_1.png");
    (this as any).load.image("tree2", "../assets/aicha/Tree_2.png");

    (this as any).load.image("crate", "../assets/aicha/Crate.png");
    (this as any).load.image("snowman", "../assets/aicha/SnowMan.png");

    (this as any).load.image("icebox", "../assets/aicha/IceBox.png");
    (this as any).load.image("scoreholder", "../assets/aicha/scoresnow@3x.png");

    this.load.image("replaysnow", "../assets/aicha/retrysnow2@2x.png");
    this.load.image("nextsnow", "../assets/aicha/nextsnow2@2x.png");
  }

  update() {}

  //////////////////////////////////////////////////////////////////////
}

////////////////////////////////////////////////////////////////////////////
export class MainScene extends Phaser.Scene {
  cursors;
  player = null;
  loop;
  dragobj;
  hand1 = null;
  hand2 = null;
  hand3 = null;
  hand4 = null;

  dude2;
  child;
  zone;
  run;
  container;
  loopchange;
  loopchild1;
  loopchild2;
  dude1;
  bigground;
  score = 0;
  scoreText;
  bool: number = 0;
  array: number[] = [];
  array1: number[] = [0, 0];

  arr = new Array<number>(2);
  bg;
  coll;
  scene;
  testcorrect: Boolean = false;

  i: number = 0;

  constructor() {
    super({ key: "main" });
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
      canvas.style.width = (height * ratio) + 273 + 'px';
      canvas.style.height = 370 + 'px';
    }
  }
  create() {
    window.addEventListener('resize', this.resize);
    this.resize();
    console.log("hadi main");
    var windowWidth = window.innerWidth;
    var widnowHeight = window.innerHeight;
    this.bg = this.add.image(windowWidth / 2, widnowHeight / 2, "skynight");
    this.bg.setDisplaySize(windowWidth, widnowHeight);

    var platforms = this.physics.add.staticGroup();
    var dragab = this.physics.add.group();

    var bloc1 = platforms.create(750, 100, "ground");
    var bloc2 = platforms.create(750, 180, "ground");

    bloc2.setScale(0.8);
    bloc1.setScale(0.8);

    // (this as any).hand4.setCollideWorldBounds(true);
    (this as any).hand1 = this.add.image(700, 100, "hand2");
    var hand1 = (this as any).hand1;

    hand1.setScale(0.4);
    this.guide();
    var coin = dragab.create(410, 430, "icebox");

    var coin2 = dragab.create(520, 430, "icebox");
    var coin3 = dragab.create(300, 430, "icebox");
    coin.setScale(0.3);
    coin2.setScale(0.3);
    coin3.setScale(0.3);
    var terre = platforms.create(60, 630, "terre_1");
    var terre2 = platforms.create(185, 630, "terre");
    var terre3 = platforms.create(305, 630, "terre");
    var terre4 = platforms.create(430, 630, "terre");
    var terre4 = platforms.create(555, 630, "terre");
    var terre4 = platforms.create(680, 630, "terre");
    var terre4 = platforms.create(805, 630, "terre");

    var terreneige = platforms.create(60, 510, "terreneige");
    var terreneige = platforms.create(188, 510, "terreneige2");
    var terreneige = platforms.create(316, 510, "terreneige2");
    var terreneige = platforms.create(444, 510, "terreneige2");
    var terreneige = platforms.create(572, 510, "terreneige2");
    var terreneige = platforms.create(700, 510, "terreneige2");
    var terreneige = platforms.create(828, 510, "terreneige2");

    var jumpgr = platforms.create(555, 100, "14");
    var jumpgr2 = platforms.create(605, 100, "15");
    var jumpgr3 = platforms.create(640, 100, "16");
    var Tree = this.add.image(780, 365, "tree1");
    var Tree2 = this.add.image(50, 365, "tree1");

    var snowman = this.add.image(120, 400, "snowman");
    snowman.setScale(4);
    Tree.setScale(0.6);
    Tree2.setScale(0.6);

    var crystal = dragab.create(615, 410, "crystal");
    snowman.setScale(0.5);
    jumpgr.setScale(0.4);
    jumpgr2.setScale(0.4);
    jumpgr3.setScale(0.4);
    var jumpgr_1 = platforms.create(150, 250, "14");
    var jumpgr2_2 = platforms.create(185, 250, "15");
    var jumpgr3_3 = platforms.create(220, 250, "16");
    jumpgr_1.setScale(0.4);
    jumpgr2_2.setScale(0.4);
    jumpgr3_3.setScale(0.4);
    var tree2 = this.add.image(190, 207, "treesnow");
    var snowman2 = this.add.image(605, 63, "snowman2");
    snowman2.setScale(1);
    tree2.setScale(1);
    var scoreholder = this.add.image(100, 50, "scoreholder");
    scoreholder.setScale(0.15);
    var scoreText = this.add.text(120, 35, "0", { fontSize: "32px" });
    var dude1 = dragab.create(755, 180, "dude2");
    var dude1child = dragab.create(755, 180, "dude2");
    dude1.setScale(0.8);
    dude1child.setScale(0.8);
    //  375, 535,
    var dude2 = dragab.create(300, 300, "play");
    var bigground = platforms.create(360, 535, "bigground2");
    // var bigground2 = platforms.create(400, 550, 'bigground2');
    this.run = this.add.image(100, 200, "run");
    bigground.setScale(0.42);
    this.run.setScale(0.1);
    var scene = this.scene;
    var score = this.score;





    dude1.body.setAllowGravity(false);
    dude1child.body.setAllowGravity(false);

    dude2.body.setAllowGravity(false);

    this.run.setInteractive();
    (this as any).hand2 = this.add.image(360, 450, "hand1");

    (this as any).hand3 = this.add.image(700, 180, "hand2");
    var hand3 = (this as any).hand3;

    hand3.setScale(0.4);

    hand3.visible = false;
    (this as any).hand2.visible = false;
    (this as any).hand4 = this.add.image(650, 500, "hand2");
    (this as any).hand4.visible = false;
    (this as any).hand4.scale = 0.4;

    var hand2 = (this as any).hand2;

    var hand4 = (this as any).hand4;

    var loopchild1 = platforms.create(360, 535, "ground");
    // var buttonGameRestart = dragab.create(120, 200, "play");
    loopchild1.setScale(0.4);

    loopchild1.setName("loopchild1");

    coin.body.setAllowGravity(false);
    coin2.body.setAllowGravity(false);
    coin3.body.setAllowGravity(false);

    crystal.body.setAllowGravity(false);

    dude2.setName("zone2");
    dude1.setName("zone1");
    dude1child.setName("zone1");

    loopchild1.setInteractive({ dropZone: true });

    dude2.setInteractive({ dropped: true });
    dude1child.setInteractive({ dropped: true });
    loopchild1.visible = false;

    dude1.setInteractive({ dropped: true });
    //dude1.setInteractive({ dropped: true });
    this.loop = this.physics.add.sprite(750, 100, "loopbefore");

    dude2.setInteractive();
    this.input.setDraggable(dude2);
    dude1.setInteractive();
    this.input.setDraggable(dude1);
    dude1child.setInteractive();
    this.input.setDraggable(dude1child);

    var rep = this.add.image(730, 570, "replaysnow");
    var run = this.add.image(730, 510, "nextsnow");
    rep.setInteractive();
    run.setInteractive();
    run.setScale(0.5);
    rep.setScale(0.5);

    rep.on("pointerdown", () => {
      console.log("restart normal");
      this.scene.restart();
    });
    run.on("pointerdown", () => {
      //this.scene.restart();
      console.log("run normal");
      //  this.hand2.destroy(true);
      hand4.visible = false;

      this.test(this.array1);
      if (this.array1[1] == 1) {
        console.log("waah khayti rah nichan");
      }
      //  this.hand2.visible = false;
    });
    var that = this;
    this.input.on(
      "dragstart",
      function (pointer, gameObject) {
        that.children.bringToTop(gameObject);
      },
      this
    );

    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async function guide2(hand2) {
      console.log("ni dkhlt guide2");
      await sleep(800);

      for (var j = 0; j < 100; j++) {
        hand2.x -= 40;
        await sleep(300);
        hand2.x += 40;
        await sleep(300);
      }
    }
    async function guide3(hand3) {
      console.log("ni dkhlt guide3");
      for (var j = 0; j < 100; j++) {
        hand2.x -= 40;
        await sleep(500);
        hand2.x += 40;
        await sleep(500);
      }
    }

    this.input.on("drag", function (pointer, gameObject, dragX, dragY) {
      gameObject.x = dragX;
      gameObject.y = dragY;
      //  this.hand1.destroy(true);
      hand1.visible = false;

      // this.guide(this.hand1);
      if (gameObject.name == "loop") {
        console.log("rani f drag ");

        loopchild1.setInteractive({ dropZone: false });

        loopchild1.input.enable = false;

        bigground.setInteractive({ dropZone: true });
      } else if (gameObject.name == "zone1") {
        //  hand3.visible = false;
        hand3.destroy(true);

        //   guide2(hand3);
      }
      hand2.visible = true;
      hand2.scale = 0.4;
      //  hand1.visible = false;

      //   guide2();
    });

    this.input.on("dragenter", function (pointer, gameObject, dropZone) {
      if (gameObject.name == "loop") {
        console.log("dkhalt ground dragenter");

        loopchild1.input.enable = false;
      }
    });
    this.input.on("dragleave", function (pointer, gameObject, dropZone) {
      if (gameObject.name == "loop") {
        console.log("dkhalt ground f dragleave");

        bigground.input.enable = false;
        loopchild1.setInteractive({ dropZone: false });

        loopchild1.input.enable = false;
      }
    });

    this.input.on("dragend", function (pointer, gameObject, dropped) {
      if (!dropped) {
        gameObject.x = gameObject.input.dragStartX;
        gameObject.y = gameObject.input.dragStartY;
      }
      if (gameObject.name == "loop") {
        console.log("rani f dragend");

        bigground.input.enable = false; //nrmlmnt hadi hiya li darat disable
      }
    });

    (this as any).player = this.physics.add.sprite(200, 415, "dude");

    this.loop.body.setAllowGravity(false);

    this.loop.setScale(0.17);

    this.loop.setName("loop");

    this.loop.setInteractive();
    this.input.setDraggable(this.loop);

    dude2.setCollideWorldBounds(true);
    this.physics.add.collider((this as any).player, platforms);
    this.physics.add.collider(this.loop, platforms);

    this.coll = this.physics.add.collider((this as any).player, coin, hitBox);
    this.physics.world.removeCollider(this.coll);

    this.physics.add.collider((this as any).player, coin2, hitBox);
    this.physics.add.collider((this as any).player, crystal, win);

    this.physics.add.collider((this as any).player, coin3, hitBox);

    this.physics.add.collider(dragab, platforms);
    dude1.setCollideWorldBounds(true);

    (this as any).player.setBounce(0.2);
    this.loop.setCollideWorldBounds(true);

    (this as any).player.setCollideWorldBounds(true);
    //this.array1 = [0, 0];

    this.input.on("drop", function (pointer, gameObject, dropZone) {
      hand2.visible = false;

      gameObject.x = dropZone.x;
      gameObject.y = dropZone.y;

      gameObject.input.enabled = false;
      dropZone.input.enabled = false;

      if (gameObject.name == "loop") {
        loopchild1.visible = true;

        bigground.enabled = false;

        loop.setTexture("loop");
        loop.setScale(0.2);
        hand3.visible = true;
        hand3.scale = 0.4;
        guide2(hand3);
      } else if (gameObject.name == "zone1") {
        // dude1.setScale(0.5);
        dude1child.setScale(0.5);

        hand4.visible = true;
        hand4.scale = 0.4;
      }
    });
    async function guide4(hand4) {
      console.log("ni dkhlt guide2");
      await sleep(800);

      for (var j = 0; j < 100; j++) {
        hand4.x -= 40;
        await sleep(300);
        hand4.x += 40;
        await sleep(300);
      }
    }

    this.i = 0;
    this.input.on(
      "drop",
      (
        e: any,
        object: Phaser.GameObjects.Image,
        target: Phaser.GameObjects.Image
      ) => {
        switch (object.name) {
          case "zone1": {
            this.bool = 1;
            console.log("ni f zone 1 yaw");
            console.log("l i 9bal :" + this.i);
            console.log("objectname:" + object.name);
            console.log("bool:" + this.bool);

            this.array1[this.i] = this.bool;

            break;
          }
          case "zone2": {
            this.bool = 2;
            console.log("l i 9bal :" + this.i);
            console.log("objectname:" + object.name);
            console.log("bool:" + this.bool);

            this.array1[this.i] = this.bool;
            console.log(this.array1);

            break;
          }
          case "loop": {
            break;
          }
        }
        this.i++;
      }
    );

    var player = this.player;
    var loop = this.loop;

    var child = this.child;
    // var loopchild2 = this.loopchild2;
    var array = this.array1;
    var loopchange = this.loopchange;
    var container = this.container;
    var zone = this.zone;

    this.run.on("pointerdown", () => {
      this.test(this.array1);
    });
    function hitBox(player: any, box: any) {
      box.disableBody(true, true);

      player.setVelocityX(0);
      score = score + 10;
    }
    function win(player: any, crystal: any) {
      crystal.disableBody(true, true);
      console.log("score li b3atah" + score);
      scene.launch("level2", { score: score });
    }
  }

  gameOver() {
    this.scene.restart();
  }
  async guide() {
    for (let j = 0; j < 100; j++) {
      console.log("ni nkhdem");
      (this as any).hand1.x -= 40;
      await this.sleep(500);
      (this as any).hand1.x += 40;
      await this.sleep(500);
    }
  }

  hitBomb(player: any, coin: any) {
    console.log("hii");

    coin.disableBody(true, true);
  }
  async test(b) {
    for (var x = 0; x < 4; x++) {
      for (var j = 0; j < b.length + 1; j++) {
        await this.sleep(300);
        console.log(b[j]);
        if (b[j] == 1) {
          (this as any).player.x += 110;
          console.log("hi first");
        } else if (b[j] == 2) {
          (this as any).player.setVelocityY(-200);

          console.log("hi second");
        }
      }
    }
  }
  async guide2(hand2) {
    console.log("ni dkhlt guide2");
    for (var j = 0; j < 40; j++) {
      hand2.y -= 40;
      await this.sleep(500);
      hand2.y += 40;
      await this.sleep(500);
    }
  }
  async guide3(hand2) {
    console.log("ni dkhlt guide3");
    for (var j = 0; j < 100; j++) {
      hand2.y -= 40;
      await this.sleep(500);
      hand2.y += 40;
      await this.sleep(500);
    }
  }
  collectStar(player, star) {
    star.disableBody(true, true);
  }
  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  update() {}
  preload() {
    this.load.image("replay", "../assets/aicha/png/replayfinal.png");
    this.load.image("plaay", "../assets/aicha/plaay.png");
    //   this.load.image('replay', '../assets/replay.png');
    this.load.image("skynight", "../assets/aicha/BG.png");
    this.load.image("terre", "../assets/aicha/5.png");
    this.load.image("terre_1", "../assets/aicha/4.png");
    this.load.image("terre_2", "../assets/aicha/6.png");
    this.load.image("14", "../assets/aicha/14.png");
    this.load.image("15", "../assets/aicha/15.png");
    this.load.image("16", "../assets/aicha/16.png");
    this.load.image("hand1", "assets/lila/hand2.png");
    this.load.image("hand2", "assets/lila/hand1.png");
    this.load.image("home", "../assets/aicha/Home@2x.png");
    this.load.image("terreneige", "../assets/aicha/1.png");
    this.load.image("terreneige2", "../assets/aicha/2.png");

    //  this.load.image('dude2', '../assets/aicha/dude2.png');
    //  this.load.image('play', '../assets/aicha/play2.png');
    this.load.image("bigground", "../assets/aicha/pingui.png");
    //  this.load.image('bigground2', '../assets/aicha/bigground.png');
    this.load.image("snowman", "../assets/aicha/SnowMan.png");
    this.load.image("tree1", "../assets/aicha/Tree_2.png");
    this.load.image("icebox", "../assets/aicha/IceBox.png");
    this.load.image("treesnow", "../assets/aicha/mapTile_109.png");
    this.load.image("snowman2", "../assets/aicha/mapTile_094.png");
    this.load.image("loopbefore", "../assets/aicha/loopbefore.png");
    this.load.image("loop", "../assets/aicha/loop.png");
    (this as any).load.image("dude", "../assets/aicha/penguin.png");
    (this as any).load.image("sky", "../assets/aicha/sahara.jpg");
    (this as any).load.image("skynight", "../assets/aicha/BG.png");
    (this as any).load.image("plaay", "../assets/aicha/plaay.png");
    (this as any).load.image("replay", "../assets/aicha/replay.png");
    (this as any).load.image("loop", "../assets/aicha/loop.png");
    (this as any).load.image("loopbefore", "../assets/aicha/loopbefore.png");

    (this as any).load.image("ground", "../assets/aicha/mapTile_077.png");
    (this as any).load.image("star", "../assets/aicha/coinGold.png");
    (this as any).load.image("sign1", "../assets/aicha/Sign_1.png");
    (this as any).load.image("sign2", "../assets/aicha/Sign_2.png");

    (this as any).load.image("terre", "../assets/aicha/5.png");
    (this as any).load.image("terre_1", "../assets/aicha/4.png");
    (this as any).load.image("terre_2", "../assets/aicha/6.png");
    (this as any).load.image("14", "../assets/aicha/14.png");
    (this as any).load.image("15", "../assets/aicha/15.png");
    (this as any).load.image("16", "../assets/aicha/16.png");

    (this as any).load.image("terreneige", "../assets/aicha/1.png");
    (this as any).load.image("terreneige2", "../assets/aicha/2.png");

    (this as any).load.image("dude2", "../assets/aicha/right.png");
    (this as any).load.image("play", "../assets/aicha/up.png");
    //(this as any).load.image('bigground', '../assets/aicha/bigground.png');
    (this as any).load.image("bigground2", "../assets/aicha/pingui.png");

    //  (this as any).load.image('run', '../assets/aicha/play.png');

    (this as any).load.image("dude", "../assets/aicha/penguin.png");
    (this as any).load.image("igloo", "../assets/aicha/Igloo.png");
    (this as any).load.image("crystal", "../assets/aicha/Crystal.png");
    (this as any).load.image("tree", "../assets/aicha/Tree_1.png");
    (this as any).load.image("tree2", "../assets/aicha/Tree_2.png");

    (this as any).load.image("crate", "../assets/aicha/Crate.png");
    (this as any).load.image("snowman", "../assets/aicha/SnowMan.png");

    (this as any).load.image("icebox", "../assets/aicha/IceBox.png");
    //  this.load.image("replaysnow", "../assets/aicha/retrysnow@2x.png");
    (this as any).load.image("scoreholder", "../assets/aicha/scoresnow@3x.png");

    // this.load.image("nextsnow", "../assets/aicha/runsnow@2x.png");

    this.load.image("replaysnow", "../assets/aicha/retrysnow2@2x.png");
    this.load.image("nextsnow", "../assets/aicha/nextsnow2@2x.png");
  }
}

//////////////////////////////////////////////////////
class NewScene extends Phaser.Scene {
  cursors;

  score: any;
  scoreText;

  bg;

  i: number = 0;

  constructor() {
    super({ key: "level2" });
  }

  closeGameOve() {
    this.scene.stop("level2");
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
  create() {
    console.log('raki hna fl menu');
    window.addEventListener('resize', this.resize);
    this.resize();
//this.closeGameOve();
    var windowWidth = window.innerWidth;
    var widnowHeight = window.innerHeight;
    // this.bg = this.add.image(400, widnowHeight / 2, "popup");
    this.bg = this.add.image(400, 209, "popup2");

    this.bg.setScale(0.7);

    // var plaay = this.add.image(510, 275, "p");
    //plaay.setInteractive();

    var next = this.add.image(450, 350, "nextsnow");
    next.setScale(0.6);
    //  var replay = this.add.image(250, 290, "replay");
    var retry = this.add.image(350, 348, "replaysnow");
    retry.setInteractive();
    next.setInteractive();
    retry.setScale(0.6);
    var icebox = this.add.image(360, 250, "icebox");
    icebox.setScale(0.3);
    var scoreText = this.add.text(390, 235, "", { fontSize: "32px" });
    console.log(this.score);
    scoreText.setText(" " + this.score);
    /*  plaay.on(
      "pointerdown",
      (pointer, targets) => {
        console.log("go to level 2 ta3 pop up");

        this.scene.start("menu", { score: this.score });
      },
      true
    );*/

    next.on(
      "pointerdown",
      (pointer, targets) => {
        console.log("run pressed");
        this.scene.start("menu", { score: this.score });
      },
      true
    );

    //replay.setInteractive();

    retry.on(
      "pointerdown",
      (pointer, targets) => {
        console.log("restart ta3 popup");
        this.scene.start("main");
        //  this.scene.restart();

        console.log("retry presses");
      },
      true
    );

    /* replay.on(
      "pointerdown",
      (pointer, targets) => {
        console.log("restart ta3 popup");
        this.scene.start("menu");
      },
      true
    );*/
  }
  init(data) {
    console.log("data receievd" + data);
    this.score = data.score;
    console.log("data.score" + data.score);
  }
  update() {}
  datasave() {
    var file = {
      score: this.score,
    };
    localStorage.setItem("data", JSON.stringify(file));
  }
  loadFile() {
    var file = JSON.parse(localStorage.getItem("data")!)!;
    this.score = file.score;
  }

  preload() {
    this.load.image("skynight", "../assets/aicha/BG.png");
    this.load.image("popup", "../assets/aicha/menu.png");
    this.load.image("popup2", "../assets/aicha/snowmenu@2x.png");

    this.load.image("replay", "../assets/aicha/png/replayfinal.png");
    this.load.image("plaay", "../assets/aicha/plaay.png");
    this.load.image("replaysnow", "../assets/aicha/retrysnow@2x.png");
    this.load.image("nextsnow", "../assets/aicha/runsnow@2x.png");

    this.load.image("terre", "../assets/aicha/5.png");
    this.load.image("terre_1", "../assets/aicha/4.png");
    this.load.image("terre_2", "../assets/aicha/6.png");
    this.load.image("14", "../assets/aicha/14.png");
    this.load.image("15", "../assets/aicha/15.png");
    this.load.image("16", "../assets/aicha/16.png");
    this.load.image("p", "../assets/aicha/playfinal.png");

    this.load.image("terreneige", "../assets/aicha/1.png");
    this.load.image("terreneige2", "../assets/aicha/2.png");

    this.load.image("dude2", "../assets/aicha/right.png");
    this.load.image("play", "../assets/aicha/playfinal.png");
    this.load.image("bigground", "../assets/aicha/pingui.png");
    //  this.load.image('bigground2', '../assets/aicha/bigground.png');
    this.load.image("tree1", "../assets/aicha/Tree_2.png");
    this.load.image("snowman", "../assets/aicha/SnowMan.png");

    this.load.image("icebox", "../assets/aicha/IceBox.png");
    this.load.image("treesnow", "../assets/aicha/mapTile_109.png");
    this.load.image("snowman2", "../assets/aicha/mapTile_094.png");
  }
}

//Course Complete scene
//////////////////////////////////////
class Completscene extends Phaser.Scene {
  cursors;

  score: any;
  scoreText;

  bg;

  i: number = 0;

  constructor() {
    super({ key: "completed" });
  }

  create() {
    var windowWidth = window.innerWidth;
    var widnowHeight = window.innerHeight;
    // this.bg = this.add.image(400, widnowHeight / 2, "popup");
    this.bg = this.add.image(400, 235, "complete");

    this.bg.setScale(0.1);
    var next = this.add.image(400, 337, "next");
    next.setScale(0.2);
    next.setInteractive();
    var scoreText = this.add.text(390, 235, "", { fontSize: "32px" });
    var coin = this.add.image(373, 247, "icebox");
    coin.setScale(0.3);
    console.log(this.score);
    scoreText.setText(" " + this.score);
    next.on(
      "pointerdown",

      (pointer, targets) => {
        this.scene.start("gift");

        console.log("next pressed");
      },
      true
    );
  }
  init(data) {
    console.log("data receievd" + data);
    this.score = data.score;
    console.log("data.score" + data.score);
  }
  preload() {
    this.load.image("replaysnow", "../assets/aicha/retrysnow@2x.png");
    this.load.image("nextsnow", "../assets/aicha/runsnow@2x.png");
    this.load.image("complete", "../assets/aicha/coursecomplete@3x.png");
    this.load.image("next", "../assets/aicha/nextsnow@2x.png");
    (this as any).load.image("icebox", "../assets/aicha/IceBox.png");
  }
}

//Gift scene
//////////////////////////////////////
class Giftscene extends Phaser.Scene {
  cursors;

  score: any;
  scoreText;

  bg;

  i: number = 0;

  constructor() {
    super({ key: "gift" });
  }

  create() {
    var windowWidth = window.innerWidth;
    var widnowHeight = window.innerHeight;
    // this.bg = this.add.image(400, widnowHeight / 2, "popup");
    this.bg = this.add.image(400, 269, "reward");

    this.bg.setScale(0.6);
    var get = this.add.image(400, 377, "get");
    get.setScale(0.18);

    get.setInteractive();
    get.on(
      "pointerdown",

      (pointer, targets) => {
        this.scene.start("final");
      },
      true
    );

    var close = this.add.image(490, 135, "close");

    close.setScale(0.13);
    close.setInteractive();
    close.on(
      "pointerdown",

      (pointer, targets) => {
        console.log("close pressed");
      },
      true
    );
    var crystal = this.add.image(400, 180, "crystal");
  }

  preload() {
    this.load.image("reward", "../assets/aicha/rward@2x.png");
    this.load.image("close", "../assets/aicha/closesnow@2x.png");
    this.load.image("get", "../assets/aicha/getsnow@2x.png");
    this.load.image("crystal", "../assets/aicha/Crystal.png");
  }
}

class finalscene extends Phaser.Scene {
  cursors;

  score: any;
  scoreText;

  bg;

  i: number = 0;

  constructor() {
    super({ key: "final" });
  }

  create() {
    console.log('ani jit lilila');
    var windowWidth = window.innerWidth;
    var widnowHeight = window.innerHeight;
    // this.bg = this.add.image(400, widnowHeight / 2, "popup");
    this.bg = this.add.image(400, 220, "finalpopup");

    this.bg.setScale(0.6);
    var next = this.add.image(465, 310, "next");
    next.setScale(0.18);

    next.setInteractive();
    next.on(
      "pointerdown",

      (pointer, targets) => {
        updat.navigateblockly();
      },

      true
    );
    var home = this.add.image(330, 310, "home");
    home.setScale(0.9);

    home.setInteractive();
    home.on(
      "pointerdown",

      (pointer, targets) => {
        updat.navigate();
      },

      true
    );
    /*var close = this.add.image(490, 90, "close");

    close.setScale(0.13);
    close.setInteractive();
    close.on(
      "pointerdown",

      (pointer, targets) => {
        console.log("close pressed");
      },
      true
    );*/
  }

  preload() {
    this.load.image("reward", "../assets/aicha/rward@2x.png");
    this.load.image("close", "../assets/aicha/closesnow@2x.png");
    this.load.image("next", "../assets/aicha/nextsnow@2x.png");
    this.load.image("home", "../assets/aicha/Home@2x.png");
    this.load.image("finalpopup", "../assets/aicha/final@2x.png");
  }
}

class faillscene extends Phaser.Scene {
  cursors;

  score: any;
  scoreText;

  bg;

  i: number = 0;

  constructor() {
    super({ key: "fail" });
  }

  create() {
    var windowWidth = window.innerWidth;
    var widnowHeight = window.innerHeight;
    // this.bg = this.add.image(400, widnowHeight / 2, "popup");
    this.bg = this.add.image(400, widnowHeight / 3, "finalpopup");

    this.bg.setScale(0.6);
    var restart = this.add.image(400, 330, "replaysnow");
    restart.setScale(0.55);

    restart.setInteractive();
    restart.on(
      "pointerdown",

      (pointer, targets) => {
        //this.scene.remove("menu");

        //(this as any).scene.start("menu");
        //   this.sys.game.destroy(true);
        //   this.scene.stop();
        this.scene.start("menu");
      },

      true
    );
    var close = this.add.image(510, 120, "close");
    close.setScale(0.1);

    close.setInteractive();
    close.on(
      "pointerdown",

      (pointer, targets) => {
        this.scene.remove("fail");
      },

      true
    );
    /*var close = this.add.image(490, 90, "close");

    close.setScale(0.13);
    close.setInteractive();
    close.on(
      "pointerdown",

      (pointer, targets) => {
        console.log("close pressed");
      },
      true
    );*/
  }

  preload() {
    this.load.image("reward", "../assets/aicha/rward@2x.png");
    this.load.image("close", "../assets/aicha/closesnow@2x.png");
    this.load.image("next", "../assets/aicha/nextsnow@2x.png");
    this.load.image("home", "../assets/aicha/Home@2x.png");
    this.load.image("finalpopup", "../assets/aicha/fail@2x.png");
    this.load.image("replaysnow", "../assets/aicha/retrysnow2@2x.png");
  }
}

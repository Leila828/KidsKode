/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Blocks for Maze game.
 * @author fraser@google.com (Neil Fraser)
 */
import { Component, OnInit } from "@angular/core";
import * as Blockly from "blockly";
import "phaser";
import { GameOver } from "../sequencing/sequencing.component";

import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
// import { GameOver } from "../sequencing/sequencing.component";

import block = Blockly.Tooltip.block;
import visible = Blockly.Tooltip.visible;
// import { Scene7 } from "./game6";
import { TokenStorageService } from "../_services/token-storage.service";
import { AuthService } from "../_services/auth.service";
import { UserService } from "../_services/user.service";
import { Parent } from "../parent";
import { Child } from "../child";
import { enfantLearning } from "../enfantLearning";
import { Router } from "@angular/router";
let routinga;
var i = 0;
var m = "";
var scoreblockly;
var scoreblockly2;
var score_condition;
var score_repeat;
let phaserGame;
let okk;
//import any = jasmine.any;
//import closure = require('./node_modules/closure-library.ts/index');
@Component({
  selector: "app-blockly",
  templateUrl: "./blockly.component.html",
  styleUrls: ["./blockly.component.css"],
})
export class BlocklyComponent implements OnInit {
  workspace: any;
  currentUser: any;
  parent?: Parent;
  username!: Parent;
  User!: Child;
  Userlearning?: enfantLearning;
  s?: enfantLearning;

  Userdata;
  id_user?;
  existingScreenOrientation: string;
  config: Phaser.Types.Core.GameConfig;
  constructor(private so: ScreenOrientation,
    private token: TokenStorageService,
    private authservice: AuthService,
    private userauth: UserService,
    private router1: Router
  ) {
    this.existingScreenOrientation = this.so.type;
    this.config = {
      type: Phaser.AUTO,
      width: 800, // Width of the game in pixels
      height: 550, // Height of the game in pixels
      // The background color (blue)

      scene: [Scene4, Scene5, Scene6, Scene7, GameOver], // The name of the scene we created
      physics: { default: "arcade" }, // The physics engine to use
    };


  }
  lockToLandscape() {
    this.so.lock(this.so.ORIENTATIONS.LANDSCAPE);
  }
  ngOnInit(): void {
    scoreblockly = this;
    scoreblockly2 = this;
    okk=this;
    routinga =this;
    this.so.lock(this.so.ORIENTATIONS.PORTRAIT);
    phaserGame = new Phaser.Game(this.config);
  }
  menu() {
    console.log('clickedmenu');
    this.router1.navigate(['home']);
  }
  update_score_sequencing() {
    this.currentUser = this.token.getUser();
    //  var l = parseInt(localStorage.getItem("score")) || 0;
    //var v = parseInt(localStorage.getItem("score2")) || 0;

    var l = parseInt(sessionStorage.getItem("score")!) || 0;
    var v = parseInt(sessionStorage.getItem("score2")!) || 0;
    var score3 = parseInt(sessionStorage.getItem("scoreblockly")!) || 0;
    console.log("rani f function score-sequencing" + score3);

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
          if (score3 == 0) {
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
          } else if (score3 != 0) {
            this.authservice
              .sendscore(
                this.currentUser.id,
                this.currentUser.username,
                this.Userlearning.points,
                this.Userlearning.points2,
                score3,
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
        this.id_user = this.username.enfant.id;

        var l = parseInt(sessionStorage.getItem("score")!) || 0;
        var v = parseInt(sessionStorage.getItem("score2")!) || 0;
        var score3 = parseInt(sessionStorage.getItem("scoreblockly")!) || 0;

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
            if (score3 == 0) {
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
            } else if (score3 != 0) {
              this.authservice
                .sendscore(
                  this.id_user,
                  this.username.enfant.compte.username,
                  this.Userlearning.points,
                  this.Userlearning.points2,
                  score3,
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
  update_score_condition() {
    this.currentUser = this.token.getUser();
    //  var l = parseInt(localStorage.getItem("score")) || 0;
    //var v = parseInt(localStorage.getItem("score2")) || 0;

    var update_score_condition =
      parseInt(sessionStorage.getItem("scorecondition")!) || 0;
    console.log("rani f function score-condition" + update_score_condition);

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
          if (update_score_condition == 0) {
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
          } else if (update_score_condition != 0) {
            this.authservice
              .sendscore(
                this.currentUser.id,
                this.currentUser.username,
                this.Userlearning.points,
                this.Userlearning.points2,
                this.Userlearning.points_sequencing_blockly,
                this.Userlearning.points_loop_blockly,
                update_score_condition
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
        this.id_user = this.username.enfant.id;

        var update_score_condition =
          parseInt(sessionStorage.getItem("scorecondition")!) || 0;

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
            if (update_score_condition == 0) {
              console.log("score_condition" + update_score_condition);
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
            } else if (update_score_condition != 0) {
              this.authservice
                .sendscore(
                  this.id_user,
                  this.username.enfant.compte.username,
                  this.Userlearning.points,
                  this.Userlearning.points2,
                  this.Userlearning.points_sequencing_blockly,
                  this.Userlearning.points_loop_blockly,
                  update_score_condition
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
  update_score_loop() {
    this.currentUser = this.token.getUser();
    //  var l = parseInt(localStorage.getItem("score")) || 0;
    //var v = parseInt(localStorage.getItem("score2")) || 0;

    var update_score_loop = parseInt(sessionStorage.getItem("scoreloop")!) || 0;
    console.log("rani f function score-loop" + update_score_loop);

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
          if (update_score_loop == 0) {
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
          } else if (update_score_loop != 0) {
            this.authservice
              .sendscore(
                this.currentUser.id,
                this.currentUser.username,
                this.Userlearning.points,
                this.Userlearning.points2,
                this.Userlearning.points_sequencing_blockly,
                update_score_loop,
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
        this.id_user = this.username.enfant.id;

        var update_score_loop =
          parseInt(sessionStorage.getItem("scoreloop")!) || 0;

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
            if (update_score_loop == 0) {
              console.log("score2" + update_score_loop);
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
            } else if (update_score_loop != 0) {
              this.authservice
                .sendscore(
                  this.id_user,
                  this.username.enfant.compte.username,
                  this.Userlearning.points,
                  this.Userlearning.points2,
                  this.Userlearning.points_sequencing_blockly,
                  update_score_loop,
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
  navigate() {
    this.router1.navigate(["/blocklyloop"]);
  }
}

export class Scene4 extends Phaser.Scene {
  go: any;
  ok: any;
  cod: any;
  i: number = 0;
  workspace: any;
  up: any;
  score1: any;
  lettuce: any;
  score: any;
  run: any;
  drop: any;
  arrow: any;
  arrowA: any;
  arrow2: any;
  arrow3: any;
  arrow4: any;
  player: any;
  player2: any;

  scoreText: any;
  right2: any;
  right3: any;

  l!: BlocklyComponent;

  constructor() {
    super("game4");
  }
  preload() {
    Blockly.Blocks["string_length"] = {
      init: function () {
        (this as any)
          .appendValueInput("VALUE")
          .setCheck("String")
          .appendField("length of");
        (this as any).setOutput(true, "Number");
        (this as any).setColour(280);
        //this.setNextStatement(true);
        (this as any).setTooltip(
          "Returns number of letters in the provided text."
        );
        (this as any).setHelpUrl(
          "http://www.w3schools.com/jsref/jsref_length_string.asp"
        );
      },
    };
    Blockly.Blocks["gridworld_gonorth"] = {
      init: function () {
        (this as any).setColour(320);
        (this as any).appendDummyInput().appendField("Go east");
        (this as any).setTooltip("Move right (towards the top of the screen)");
        (this as any).setNextStatement(true);
        (this as any).setPreviousStatement(true);
      },
    };
    Blockly.Blocks["gowest"] = {
      init: function () {
        (this as any).setColour(320);
        (this as any).appendDummyInput().appendField("Go west");
        (this as any).setTooltip("Move right (towards the top of the screen)");
        (this as any).setNextStatement(true);
        (this as any).setPreviousStatement(true);
      },
    };
    Blockly.Blocks["gridworld_gosouth"] = {
      init: function () {
        (this as any).setColour(320);
        (this as any).appendDummyInput().appendField("Go north");
        (this as any).setTooltip(
          "Move south (towards the bottom of the screen)"
        );
        (this as any).setNextStatement(true);
        (this as any).setPreviousStatement(true);
      },
    };
    Blockly.Blocks["goForword"] = {
      init: function () {
        (this as any).setColour(320);
        (this as any).appendDummyInput().appendField("Go south");
        (this as any).setTooltip(
          "Move south (towards the bottom of the screen)"
        );
        (this as any).setNextStatement(true);
        (this as any).setPreviousStatement(true);
      },
    };
    Blockly.Blocks["turn"] = {
      init: function () {
        (this as any)
          .appendDummyInput()
          .appendField(new Blockly.FieldLabelSerializable("turn"), "NAME")
          .appendField(
            new Blockly.FieldDropdown([
              ["left", "turnLeft"],
              ["right", "turn right"],
            ]),
            "turn"
          );
        (this as any).setColour(230);
        (this as any).setTooltip("");
        (this as any).setHelpUrl("");
      },
    };

    (Blockly as any).JavaScript["gridworld_gonorth"] = function (block) {
      return "GoEast();";
    };
    (Blockly as any).JavaScript["gowest"] = function (block) {
      return "gowest();";
    };
    (Blockly as any).JavaScript["goForword"] = function (block) {
      return "goSouth;";
    };

    (Blockly as any).JavaScript["turn"] = function (block) {
      return "turn();";
    };

    (Blockly as any).JavaScript["gridworld_gosouth"] = function (block) {
      return "GoNorth();";
    };

    const blocklyDiv: any = document.getElementById("blocklyDiv");
    this.workspace = Blockly.inject(blocklyDiv, {
      readOnly: false,
      media: "media/",
      trashcan: true,
      move: {
        scrollbars: true,
        drag: true,
        wheel: true,
      },
      toolbox: `
      <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox-simple" style="display: none" class="col-6">
        <div class="col-6"></div>


        <block type="gridworld_gosouth"></block>
        <block type="goForword"></block>

        <block type="gowest"></block>
        <block type="gridworld_gonorth"></block>

      </xml>
        `,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
      grid: { spacing: 20, length: 3, colour: "#ccc", snap: true },
    });
    this.workspace.addChangeListener(this.test1);

    this.load.image("sahara", "assets/tilesetM.png");
    this.load.image("sahara44", "assets/tileset.jpg");
    this.load.image("player", "assets/face.png");
    this.load.image("player2", "assets/left.png");
    this.load.image("playerWest", "assets/right.png");
    this.load.image("playerNorth", "assets/back.png");
    this.load.image("happy", "assets/hqppy.png");
    this.drop = this.load.image("drop", "assets/drop.png");
    this.arrow = this.load.image("right", "assets/arrow.png");
    this.arrow2 = this.load.image("down", "assets/arrowDown.png");
    this.arrow3 = this.load.image("left", "assets/arrowleft.png");
    this.arrow4 = this.load.image("up", "assets/arrowUp.png");
    this.load.image("title", "assets/title.png");
    this.load.image("run", "assets/run.png");
    this.load.image("score1", "assets/score.png");
    this.load.image("block", "assets/block.png");
    this.load.image("blockk", "assets/blockk.png");
    this.load.image("compass", "assets/compass.png");
    this.load.image("lettuce", "assets/goldA.png");
    this.load.image("help1", "assets/lila/help1.png");
    this.load.image('menu', 'assets/lila/menu.png');
  }
  resize() {
    const canvas = phaserGame.canvas, width = window.innerWidth, height = window.innerHeight;
    const wratio = width / height, ratio = canvas.width / canvas.height;
    if (wratio < ratio) {
      canvas.style.width = width  + 'px';
      canvas.style.height = (width / ratio) + 'px';
    } else {
      canvas.style.width = (height * ratio) - 120 + 'px';
      canvas.style.height = height   + 'px';
    }
  }
  closeGameOve1() {

    this.scene.stop('home');
    console.log('scene closed');
  }
  create() {
    okk.lockToLandscape();
    //okk.ok();
    this.closeGameOve1();
    window.addEventListener('resize', this.resize);
    this.resize();
    this.arrowA = this.input.keyboard.createCursorKeys();
    this.anims.create({
      frames: this.anims.generateFrameNumbers("brawler", {
        frames: [0, 1, 2, 3],
      }),
      frameRate: 8,
      repeat: -1,
    });
    //this.add.text(20, 20, 'Loading..');
    const event = Phaser.Input.Events;

    const sahara = this.add.image(350, 380, "sahara");
    sahara.scale = 1.5;
    const sahara2 = this.add.image(350, 240, "sahara");
    sahara2.scale = 1.5;
    this.player = this.physics.add.sprite(350, 76, "player");
    this.player.scale = 1.7;
    var that = this;

    const compass = this.add.image(690, 50, "compass");
    compass.scale = 0.25;

    this.lettuce = this.physics.add.sprite(350, 290, "lettuce");
    this.lettuce.setScale(0.4);
    this.tweens.add({
      targets: this.lettuce, // on the player
      duration: 400, // for 200ms
      scaleX: 0.3, // that scale vertically by 20%
      scaleY: 0.3, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });
    var b = [] as any;
this.help1();
    const run = this.physics.add.sprite(730, 500, "run").setInteractive();

    run.scale = 0.25;
    run.on(event.POINTER_DOWN, (image) => {
      const str = document.getElementById("code")!.innerHTML;
      //console.log("document is :"+str);
      b = str.split(";");
      for (let j = 0; j < b.length - 1; j++) {
        console.log("elemnt is : " + b[j]);
      }
      this.test(b);
    });

    this.score1 = this.physics.add.sprite(60, 60, "score1");

    this.score1.setScale(0.2);

    this.score = 0;
    let style = { font: "30px Arial", fill: "#00000" };
    // Parameters: x position, y position, text, style
    this.scoreText = this.add.text(45, 54, this.score, style);

    this.scoreText.setScale(0.85);
    const menu = this.add.image(60, 500, 'menu').setInteractive();
    menu.scale = 0.25;
    menu.on(event.POINTER_DOWN, (image) => {
      console.log('menu');
      routinga.menu();
    });
  }
  async  help1() {
   // this.load.image("help1", "assets/lila/help1.png");

    await this.waitfunction(500);
    const help1 = this.add.image(450, 300, 'help1').setInteractive();
    help1.scale = 0.7;
    await this.waitfunction(4000);
    help1.destroy(true);
  }
  getname() {}
  correct(b) {
    if (b[0] == "goSouth" && b[1] == "goSouth") {
      this.time.addEvent({
        delay: 500,
        callback: this.gameOver,
        callbackScope: this,
      });
    } else {
      this.scene.launch("gameOver", { score: this.score, name: "gameLose" });
    }
  }
  hit() {
    // Change the position x and y of the coin randomly
    // this.lettuce.x = Phaser.Math.Between(100, 600);
    //this.lettuce.y = Phaser.Math.Between(100, 300);
    this.lettuce.destroy(true);
    // this.player.destroy(true);
    // Increment the score by 10
    this.score += 10;
    // this.player2 = this.physics.add.sprite(500, 338, 'happy');
    //this.player2.scale = 0.3;
    sessionStorage.setItem("scoreblockly", JSON.stringify(this.score));
    scoreblockly.update_score_sequencing();
    console.log("sequencing score" + this.score);
    // Display the updated score on the screen
    this.scoreText.setText(this.score);

    // Create a new tween Ykbr ki yakol
    this.tweens.add({
      targets: this.player, // on the player
      duration: 200, // for 200ms
      scaleX: 0.5, // that scale vertically by 20%
      scaleY: 0.5, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });
  }

  walkNorth() {
    console.log("going north");
  }

  goEast() {
    this.player.x += 70;

    console.log("done go");
  }
  upfunction() {
    this.player.y -= 70;
    console.log("done go");
  }

  waitfunction(ms) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(""), ms);
    });
  }

  async move1() {
    this.player.x = 357;
    await this.waitfunction(50);
    this.player.x = 350;
  }
  async move2() {
    this.player.x = 343;
    await this.waitfunction(50);
    this.player.x = 347;
  }
  async move3() {
    this.player.y = 73;
    await this.waitfunction(50);
    this.player.y = 76;
  }

  async test(myArr) {
    console.log(myArr.length);

    //for (let j=0;j<myArr.length-1;j++){
    for (let j = 0; j < 2; j++) {
      await this.waitfunction(500);

      console.log(myArr[j]);
      if (myArr[j] == "GoEast()") {
        // this.lettuce.destroy(true);
        var x = this.player.x;
        var y = this.player.y;
        this.player.destroy(true);
        // Increment the score by 10
        // this.score += 10;

        this.player = this.physics.add.sprite(x, y, "player2");
        this.player.scale = 1.7;
        this.goEast();
      }
      if (myArr[j] == "goSouth") {
        var x = this.player.x;
        var y = this.player.y;
        this.player.destroy(true);
        this.player = this.physics.add.sprite(x, y, "player");
        this.player.scale = 1.7;

        this.player.y += 70;
      }
      if (myArr[j] == "gowest()") {
        var x = this.player.x;
        var y = this.player.y;
        this.player.destroy(true);
        this.player = this.physics.add.sprite(x, y, "playerWest");
        this.player.scale = 1.7;
        this.player.x -= 70;
      }
      if (myArr[j] == "turn()") {
        this.goEast();
      } else if (myArr[j] == "GoNorth()") {
        var x = this.player.x;
        var y = this.player.y;
        this.player.destroy(true);
        this.player = this.physics.add.sprite(x, y, "playerNorth");
        this.player.scale = 1.7;
        this.upfunction();
      }
      console.log("listner" + j);
    }
    await this.waitfunction(500);

    this.correct(myArr);

    //this.scene.start('game1')
  }
  async wait(ms) {
    await this.waitfunction(ms);
  }

  update() {
    console.log("update method");
    if (this.player.x < 0) {
      this.player.x = 0;
    }

    if (this.player.x > 700) {
      this.player.x = 700;
    }
    if (this.player.x > 350) {
      this.move1();
    }
    if (this.player.x < 345) {
      this.move2();
    }
    if (this.player.y < 0) {
      this.player.y = 0;
    }
    if (this.player.y > 550) {
      this.player.y = 548;
    }
    if (this.player.y < 76) {
      this.move3();
    }

    if (this.physics.overlap(this.player, this.lettuce)) {
      // Call the new hit() method
      console.log("hitted");
      this.hit();
    }
  }

  test1(event) {
    // (Blockly as any).JavaScript.addReservedWords('code');
    var code = (Blockly as any).JavaScript.workspaceToCode(
      Blockly.mainWorkspace
    );
    // var myInterpreter = new Interpreter(code);
    document.getElementById("code")!.innerHTML = code;

    console.log(code);
  }
  gameOver() {
    this.scene.launch("gameOver", { score: this.score, name: "game4" });
  }
  closeGameOve() {
    this.scene.stop("gameOver");
  }
}

//Loop
export class Scene5 extends Phaser.Scene {
  go: any;
  ok: any;
  cod: any;
  count: any;
  i: number = 0;
  workspace: any;
  up: any;
  score1: any;
  lettuce: any;
  score: any;
  run: any;
  drop: any;
  arrow: any;
  arrowA: any;
  arrow2: any;
  arrow3: any;
  arrow4: any;
  player: any;
  player2: any;

  scoreText: any;
  right2: any;
  right3: any;

  l!: BlocklyComponent;

  constructor() {
    super("repeat");
  }
  preload() {
    Blockly.Blocks["string_length"] = {
      init: function () {
        (this as any)
          .appendValueInput("VALUE")
          .setCheck("String")
          .appendField("length of");
        (this as any).setOutput(true, "Number");
        (this as any).setColour(280);
        //this.setNextStatement(true);
        (this as any).setTooltip(
          "Returns number of letters in the provided text."
        );
        (this as any).setHelpUrl(
          "http://www.w3schools.com/jsref/jsref_length_string.asp"
        );
      },
    };
    Blockly.Blocks["gridworld_gonorth"] = {
      init: function () {
        (this as any).setColour(320);
        (this as any).appendDummyInput().appendField("Go east");
        (this as any).setTooltip("Move right (towards the top of the screen)");
        (this as any).setNextStatement(true);
        (this as any).setPreviousStatement(true);
      },
    };
    Blockly.Blocks["gowest"] = {
      init: function () {
        (this as any).setColour(320);
        (this as any).appendDummyInput().appendField("Go west");
        (this as any).setTooltip("Move right (towards the top of the screen)");
        (this as any).setNextStatement(true);
        (this as any).setPreviousStatement(true);
      },
    };
    Blockly.Blocks["gridworld_gosouth"] = {
      init: function () {
        (this as any).setColour(320);
        (this as any).appendDummyInput().appendField("Go north");
        (this as any).setTooltip(
          "Move south (towards the bottom of the screen)"
        );
        (this as any).setNextStatement(true);
        (this as any).setPreviousStatement(true);
      },
    };
    Blockly.Blocks["goForword"] = {
      init: function () {
        (this as any).setColour(320);
        (this as any).appendDummyInput().appendField("Go south");
        (this as any).setTooltip(
          "Move south (towards the bottom of the screen)"
        );
        (this as any).setNextStatement(true);
        (this as any).setPreviousStatement(true);
      },
    };
    Blockly.Blocks["turn"] = {
      init: function () {
        (this as any)
          .appendDummyInput()
          .appendField(new Blockly.FieldLabelSerializable("turn"), "NAME")
          .appendField(
            new Blockly.FieldDropdown([
              ["left", "turnLeft"],
              ["right", "turn right"],
            ]),
            "turn"
          );
        (this as any).setColour(230);
        (this as any).setTooltip("");
        (this as any).setHelpUrl("");
      },
    };

    (Blockly as any).JavaScript["gridworld_gonorth"] = function (block) {
      return "this.GoEast();";
    };
    (Blockly as any).JavaScript["gowest"] = function (block) {
      return "this.gowest();";
    };
    (Blockly as any).JavaScript["goForword"] = function (block) {
      return "this.goSouth();";
    };

    (Blockly as any).JavaScript["turn"] = function (block) {
      return "turn();";
    };

    (Blockly as any).JavaScript["gridworld_gosouth"] = function (block) {
      return "this.GoNorth();";
    };

    const blocklyDiv: any = document.getElementById("div2");
    this.workspace = Blockly.inject(blocklyDiv, {
      readOnly: false,
      media: "media/",
      trashcan: true,
      move: {
        scrollbars: true,
        drag: true,
        wheel: true,
      },
      toolbox: `
      <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox-simple" style="display: none" class="col-6">
        <div class="col-6"></div>
  <block type="controls_repeat_ext">
        <value name="TIMES">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
        <block type="gridworld_gosouth"></block>
        <block type="goForword"></block>
        <block type="gowest"></block>
        <block type="gridworld_gonorth"></block>








      </xml>
        `,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
      grid: { spacing: 20, length: 3, colour: "#ccc", snap: true },
    });
    this.workspace.addChangeListener(this.test1);
    this.load.image("sahara", "assets/tilesetM.png");
    this.load.image("sahara44", "assets/tileset.jpg");
    this.load.image("player", "assets/face.png");
    this.load.image("player2", "assets/left.png");
    this.load.image("playerWest", "assets/right.png");
    this.load.image("playerNorth", "assets/back.png");
    this.load.image("happy", "assets/hqppy.png");
    this.drop = this.load.image("drop", "assets/drop.png");
    this.arrow = this.load.image("right", "assets/arrow.png");
    this.arrow2 = this.load.image("down", "assets/arrowDown.png");
    this.arrow3 = this.load.image("left", "assets/arrowleft.png");
    this.arrow4 = this.load.image("up", "assets/arrowUp.png");
    this.load.image("title", "assets/title.png");
    this.load.image("run", "assets/run.png");
    this.load.image("lettuce", "assets/goldA.png");
    this.load.image("score1", "assets/score.png");
    this.load.image("block", "assets/block.png");
    this.load.image("blockk", "assets/blockk.png");
    this.load.image("compass", "assets/compass.png");
    this.load.image("help2", "assets/lila/help2.png");
    this.load.image("menu", "assets/lila/menu.png");


  }
  resize() {
    const canvas = phaserGame.canvas, width = window.innerWidth, height = window.innerHeight;
    const wratio = width / height, ratio = canvas.width / canvas.height;
    if (wratio < ratio) {
      canvas.style.width = width  + 'px';
      canvas.style.height = (width / ratio) + 'px';
    } else {
      canvas.style.width = (height * ratio) - 120 + 'px';
      canvas.style.height = height  - 30 + 'px';
    }
  }
  create() {
    window.addEventListener('resize', this.resize);
    this.resize();
    okk.lockToLandscape();
    this.closeGameOve();

    this.arrowA = this.input.keyboard.createCursorKeys();
    this.anims.create({
      frames: this.anims.generateFrameNumbers("brawler", {
        frames: [0, 1, 2, 3],
      }),
      frameRate: 8,
      repeat: -1,
    });
    //this.add.text(20, 20, 'Loading..');
    const event = Phaser.Input.Events;

    const sahara = this.add.image(350, 380, "sahara");
    sahara.scale = 1.5;
    const sahara2 = this.add.image(350, 240, "sahara");
    sahara2.scale = 1.5;
    this.player = this.physics.add.sprite(350, 76, "player");
    this.player.scale = 1.7;
    var that = this;
    const compass = this.add.image(690, 50, "compass");
    compass.scale = 0.25;
    this.lettuce = this.physics.add.sprite(350, 310, "lettuce");
    this.lettuce.setScale(0.4);
    this.tweens.add({
      targets: this.lettuce, // on the player
      duration: 400, // for 200ms
      scaleX: 0.3, // that scale vertically by 20%
      scaleY: 0.3, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });
    this.help2();
    var b = [] as any;

    const run = this.physics.add.sprite(730, 500, "run").setInteractive();

    run.scale = 0.25;
    run.on(event.POINTER_DOWN, (image) => {
      // eval(document.getElementById('div2').innerHTML);

      //  const myArr1 = code.split("{");
      // let code1= myArr1[0];
      //let code2 = myArr1[1];
      //let text3 = code1.concat(" { this.w();   console.log(\"running\" ); this.w(); ",code2,"  this.w();  ");
      (Blockly as any).JavaScript.addReservedWords("div2");
      var code = (Blockly as any).JavaScript.workspaceToCode();

      let me;
      me = document.getElementById("code")!.innerText;
      const myArr1 = code.split(");");
      let code1 = myArr1[0];
      const code2 = myArr1[myArr1.length - 1];
      console.log("code2 = " + code2 + code2.length);

      let ok = "); await this.waitfunction(500);";
      let text3 = code1.concat(ok);
      //console.log(text3);
      let text4 = "";
      for (var i = 0; i < myArr1.length - 1; i++) {
        let tex = myArr1[i].concat(ok);
        b[i] = tex;
        //console.log("here is :"+tex);
      }

      for (var i = 0; i < b.length; i++) {
        text4 = text4.concat(b[i]);
      }
      let text5;
      if (code2.length == 2 && code2.includes("}")) {
        console.log("ni ntestii fi hadi");

        text5 = text4.concat("}");
      } else {
        console.log("");
        text5 = text4;
      }
      // this.waitfunction(500)  if (me  == you ){ console.log(" we are equals" )}else {console.log(" we not equals"+me)}
      this.correct(me);
      //  this.correct(me);
      try {
        console.log("text5 " + text5);
        eval("(async () => {" + text5 + "})()");
      } catch (e) {
        alert(e);
      }

      /*

        var me ;
        var mee ;
        var meee ;
        var meee3 ;
        var you ="for (var count = 0; count < 2; count++) { this.goSouth(count);}";


        mee="this.goSouth(count);";
        meee= "this.goSouth(count);this.goSouth(count);";
        meee3= "this.goSouth(0);this.goSouth(0);";
        if (me == mee){
          const myArr1 = code.split("(");
          let code1= myArr1[0];
          let code2 = myArr1[1];
          let text3 = code1.concat("(0);");

          try {
            eval(text3);
          } catch (e) {
            alert(e);
          }
          this.correct2(me,you);
        }else if (me == meee){

          try {
            eval(meee3);

          } catch (e) {
            alert(e);
          }
          this.score=10;
          this.correct2(me,you);
        }else {
          //  if (me  == you ){ console.log(" we are equals" )}else {console.log(" we not equals"+me)}
          this.correct2(me,you);
          //  this.correct(me);
          try {
            eval(code);
          } catch (e) {
            alert(e);
          }

        }
*/

      // console.log("running" )
    });

    this.score1 = this.physics.add.sprite(60, 60, "score1");

    this.score1.setScale(0.2);

    this.score = 10;
    let style = { font: "30px Arial", fill: "#00000" };
    // Parameters: x position, y position, text, style
    this.scoreText = this.add.text(45, 54, this.score, style);

    this.scoreText.setScale(0.85);
    // this.load.image("menu", "assets/lila/menu.png");
    const menu = this.add.image(60, 500, 'menu').setInteractive();
    menu.scale = 0.25;
    menu.on(event.POINTER_DOWN, (image) => {
      console.log('menu');
      routinga.menu();
    });
  }

  hit() {
    // Change the position x and y of the coin randomly
    // this.lettuce.x = Phaser.Math.Between(100, 600);
    //this.lettuce.y = Phaser.Math.Between(100, 300);
    this.lettuce.destroy(true);
    // this.player.destroy(true);
    // Increment the score by 10
    this.score += 10;

    // this.player2 = this.physics.add.sprite(500, 338, 'happy');
    //this.player2.scale = 0.3;

    // Display the updated score on the screen
    this.scoreText.setText(this.score);

    // Create a new tween Ykbr ki yakol
    this.tweens.add({
      targets: this.player, // on the player
      duration: 200, // for 200ms
      scaleX: 0.5, // that scale vertically by 20%
      scaleY: 0.5, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });
  }

  goSouth() {
    let a = this.player.x;
    let b = this.player.y;
    this.player.destroy(true);
    this.player = this.physics.add.sprite(a, b, "player");
    this.player.scale = 1.7;
    this.player.y += 70;
  }
  GoNorth() {
    let a = this.player.x;
    let b = this.player.y;
    this.player.destroy(true);
    this.player = this.physics.add.sprite(a, b, "playerNorth");
    this.player.scale = 1.7;
    this.player.y -= 70;
  }

  async GoEast() {
    let a = this.player.x;
    let b = this.player.y;
    this.player.destroy(true);
    this.player = this.physics.add.sprite(a, b, "player2");
    this.player.scale = 1.7;
    this.player.x += 70;
  }
  async gowest() {
    let a = this.player.x;
    let b = this.player.y;
    this.player.destroy(true);
    this.player = this.physics.add.sprite(a, b, "playerWest");
    this.player.scale = 1.7;
    this.player.x -= 70;
  }
  upfunction() {
    this.player.y -= 70;
    console.log("done go");
  }

  waitfunction(ms) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(""), ms);
    });
  }
  async  help2() {
    // this.load.image("help1", "assets/lila/help1.png");

    await this.waitfunction(500);
    const help2 = this.add.image(450, 300, 'help2').setInteractive();
    help2.scale = 0.7;
    await this.waitfunction(4000);
    help2.destroy(true);
  }
  async move1() {
    this.player.x = 357;
    await this.waitfunction(50);
    // this.player.x = 350;
  }

  async move2() {
    this.player.x = 343;
    await this.waitfunction(50);
    this.player.x = 347;
  }
  async move3() {
    this.player.y = 73;
    await this.waitfunction(50);
    this.player.y = 76;
  }

  async wait(ms) {
    await this.waitfunction(ms);
  }

  update() {
    console.log("update method");
    if (this.player.x < 0) {
      this.player.x = 0;
    }

    if (this.player.x > 700) {
      this.player.x = 700;
    }
    if (this.player.x > 350) {
      this.move1();
    }
    if (this.player.x < 345) {
      this.move2();
    }
    if (this.player.y < 0) {
      this.player.y = 0;
    }
    if (this.player.y > 550) {
      this.player.y = 548;
    }
    if (this.player.y < 76) {
      this.move3();
    }

    if (this.physics.overlap(this.player, this.lettuce)) {
      // Call the new hit() method
      console.log("hitted");
      this.hit();
    }
  }

  correct(code) {
    console.log("ni dkhalt hna");
    var you = "for (var count = 0; count < 2; count++) { this.goSouth();}";

    if (code == you) {
      this.time.addEvent({
        delay: 500,
        callback: this.gameOver,
        callbackScope: this,
      });
    } else {
      console.log("no not today");
    }
  }

  test1(event) {
    // (Blockly as any).JavaScript.addReservedWords('code');
    var code = (Blockly as any).JavaScript.workspaceToCode(
      Blockly.mainWorkspace
    );
    // var myInterpreter = new Interpreter(code);
    document.getElementById("code")!.innerHTML = code;

    console.log(code);
  }

  closeGameOve() {
    document.getElementById("blocklyDiv")!.style.display = "none";
    document.getElementById("code")!.innerHTML! = "";
    this.scene.stop("game4");
  }

  correct2(code, you) {
    if (code == you) {
      this.time.addEvent({
        delay: 500,
        callback: this.gameOver,
        callbackScope: this,
      });
    } else {
      this.time.addEvent({
        delay: 500,
        callback: this.gamelose,
        callbackScope: this,
      });
    }
  }
  gameOver() {
    this.scene.launch("gameOver", { score: this.score, name: "repeat" });
  }
  gamelose() {
    this.scene.launch("gameOver", { score: this.score, name: "gameLose2" });
  }
}
export class Scene6 extends Phaser.Scene {
  go: any;
  ok: any;
  cod: any;
  count: any;
  i: number = 0;
  workspace: any;
  up: any;
  score1: any;
  lettuce: any;
  score: any;
  run: any;
  drop: any;
  arrow: any;
  arrowA: any;
  arrow2: any;
  arrow3: any;
  arrow4: any;
  player: any;
  player2: any;

  scoreText: any;
  right2: any;
  right3: any;

  l!: BlocklyComponent;

  constructor() {
    super("game6");
  }
  preload() {
    Blockly.Blocks["string_length"] = {
      init: function () {
        (this as any)
          .appendValueInput("VALUE")
          .setCheck("String")
          .appendField("length of");
        (this as any).setOutput(true, "Number");
        (this as any).setColour(280);
        //this.setNextStatement(true);
        (this as any).setTooltip(
          "Returns number of letters in the provided text."
        );
        (this as any).setHelpUrl(
          "http://www.w3schools.com/jsref/jsref_length_string.asp"
        );
      },
    };
    Blockly.Blocks["gridworld_gonorth"] = {
      init() {
        (this as any).setColour(320);
        (this as any).appendDummyInput().appendField("Go east");
        (this as any).setTooltip("Move right (towards the top of the screen)");
        (this as any).setNextStatement(true);
        (this as any).setPreviousStatement(true);
      },
    };
    Blockly.Blocks["gowest"] = {
      init() {
        (this as any).setColour(320);
        (this as any).appendDummyInput().appendField("Go west");
        (this as any).setTooltip("Move right (towards the top of the screen)");
        (this as any).setNextStatement(true);
        (this as any).setPreviousStatement(true);
      },
    };
    Blockly.Blocks["gridworld_gosouth"] = {
      init() {
        (this as any).setColour(320);
        (this as any).appendDummyInput().appendField("Go north");
        (this as any).setTooltip(
          "Move south (towards the bottom of the screen)"
        );
        (this as any).setNextStatement(true);
        (this as any).setPreviousStatement(true);
      },
    };
    Blockly.Blocks["goForword"] = {
      init() {
        (this as any).setColour(320);
        (this as any).appendDummyInput().appendField("Go south");
        (this as any).setTooltip(
          "Move south (towards the bottom of the screen)"
        );
        (this as any).setNextStatement(true);
        (this as any).setPreviousStatement(true);
      },
    };
    //  Blockly.Blocks['turn'] = {
    Blockly.Blocks.turn = {
      init() {
        (this as any)
          .appendDummyInput()
          .appendField(new Blockly.FieldLabelSerializable("turn"), "NAME")
          .appendField(
            new Blockly.FieldDropdown([
              ["left", "turnLeft"],
              ["right", "turn right"],
            ]),
            "turn"
          );
        (this as any).setColour(230);
        //this.setTooltip("");
        // this.setHelpUrl("");
      },
    };

    (Blockly as any).JavaScript["gridworld_gonorth"] = function (block) {
      return "this.GoEast();";
    };
    (Blockly as any).JavaScript["gowest"] = function (block) {
      return "this.gowest();";
    };
    (Blockly as any).JavaScript["goForword"] = function (block) {
      return "this.goSouth();";
    };

    (Blockly as any).JavaScript["turn"] = function (block) {
      return "turn();";
    };

    (Blockly as any).JavaScript["gridworld_gosouth"] = function (block) {
      return "this.GoNorth();";
    };

    Blockly.defineBlocksWithJsonArray([
      {
        type: "wait_seconds",
        message0: " wait %1 seconds",
        args0: [
          {
            type: "field_number",
            name: "SECONDS",
            min: 0,
            max: 600,
            value: 1,
          },
        ],
        previousStatement: null,
        nextStatement: null,
        colour: "%{BKY_LOOPS_HUE}",
      },
    ]);

    /**
     * Generator for wait block creates call to new method
     * <code>waitForSeconds()</code>.
     */
    (Blockly as any).JavaScript["wait_seconds"] = function (block) {
      var seconds = Number(block.getFieldValue("SECONDS"));
      var code = "this.waitForSeconds(" + seconds + ");\n";
      return code;
    };

    const blocklyDiv: any = document.getElementById("blocklyDiv2");
    this.workspace = Blockly.inject(blocklyDiv, {
      readOnly: false,
      media: "media/",
      trashcan: true,
      move: {
        scrollbars: true,
        drag: true,
        wheel: true,
      },
      toolbox: `
      <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox-simple"  class="col-6">
        <div class="col-6"></div>
      <block type="controls_repeat_ext">
        <value name="TIMES">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
        <block type="gridworld_gosouth"></block>
        <block type="goForword"></block>
        <block type="gowest"></block>
        <block type="gridworld_gonorth"></block>


      </xml>
        `,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
      grid: { spacing: 20, length: 3, colour: "#ccc", snap: true },
    });
    this.workspace.addChangeListener(this.test1);

    this.load.image("sahara2", "assets/tileset2.jpg");
    this.load.image("player", "assets/face.png");
    this.load.image("player2", "assets/left.png");
    this.load.image("playerWest", "assets/right.png");
    this.load.image("playerNorth", "assets/back.png");
    this.load.image("happy", "assets/hqppy.png");
    this.drop = this.load.image("drop", "assets/drop.png");
    this.arrow = this.load.image("right", "assets/arrow.png");
    this.arrow2 = this.load.image("down", "assets/arrowDown.png");
    this.arrow3 = this.load.image("left", "assets/arrowleft.png");
    this.arrow4 = this.load.image("up", "assets/arrowUp.png");
    this.load.image("title", "assets/title.png");
    this.load.image("run", "assets/run.png");
    this.load.image("lettuce", "assets/goldA.png");
    this.load.image("score1", "assets/score.png");
    this.load.image("block", "assets/block.png");
    this.load.image("blockk", "assets/blockk.png");
    this.load.image("compass", "assets/compass.png");
    this.load.image("help3", "assets/lila/help3.png");
    this.load.image("menu", "assets/lila/menu.png");


  }
  resize() {
    const canvas = phaserGame.canvas, width = window.innerWidth, height = window.innerHeight;
    const wratio = width / height, ratio = canvas.width / canvas.height;
    if (wratio < ratio) {
      canvas.style.width = width  + 'px';
      canvas.style.height = (width / ratio) + 'px';
    } else {
      canvas.style.width = (height * ratio) - 120 + 'px';
      canvas.style.height = height  - 30 + 'px';
    }
  }
  create() {
    window.addEventListener('resize', this.resize);
    this.resize();
    this.closeGameOve();

    this.anims.create({
      frames: this.anims.generateFrameNumbers("brawler", {
        frames: [0, 1, 2, 3],
      }),
      frameRate: 8,
      repeat: -1,
    });
    //this.add.text(20, 20, 'Loading..');
    const event = Phaser.Input.Events;

    const sahara = this.add.image(350, 180, "sahara2");
    sahara.scale = 1.5;
    const sahara2 = this.add.image(350, 305, "sahara2");
    sahara2.scale = 1.5;
    this.player = this.physics.add.sprite(182, 427, "player2");
    // this.player = this.physics.add.sprite(215, 403, 'player2');
    this.player.scale = 1.7;
    var that = this;
    const compass = this.add.image(690, 50, "compass");
    compass.scale = 0.25;
    this.lettuce = this.physics.add.sprite(437, 142, "lettuce");
    this.lettuce.setScale(0.4);
    this.tweens.add({
      targets: this.lettuce, // on the player
      duration: 400, // for 200ms
      scaleX: 0.3, // that scale vertically by 20%
      scaleY: 0.3, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });
    var b = [] as any;

    const run = this.physics.add.sprite(730, 500, "run").setInteractive();
this.help3();
    run.scale = 0.25;
    run.on(event.POINTER_DOWN, (image) => {
      // eval(document.getElementById('div2').innerHTML);

      //  const myArr1 = code.split("{");
      // let code1= myArr1[0];
      //let code2 = myArr1[1];
      //let text3 = code1.concat(" { this.w();   console.log(\"running\" ); this.w(); ",code2,"  this.w();  ");
      (Blockly as any).JavaScript.addReservedWords("blocklyDiv2");
      var code = (Blockly as any).JavaScript.workspaceToCode();
      let me;
      me = document.getElementById("code")!.innerText;
      const myArr1 = code.split(");");
      let code1 = myArr1[0];
      const code2 = myArr1[myArr1.length - 1];
      console.log("code2 = " + code2 + code2.length);

      let ok = "); await this.waitfunction(500);";
      let text3 = code1.concat(ok);
      //console.log(text3);
      let text4 = "";
      for (var i = 0; i < myArr1.length - 1; i++) {
        let tex = myArr1[i].concat(ok);
        b[i] = tex;
        //console.log("here is :"+tex);
      }

      for (var i = 0; i < b.length; i++) {
        text4 = text4.concat(b[i]);
      }
      let text5;
      if (code2.length == 2 && code2.includes("}")) {
        console.log("ni ntestii fi hadi");

        text5 = text4.concat("}");
      } else {
        console.log("");
        text5 = text4;
      }

      // this.waitfunction(500)  if (me  == you ){ console.log(" we are equals" )}else {console.log(" we not equals"+me)}
      this.correct(me);
      //  this.correct(me);
      try {
        console.log("text5 " + text5);
        eval("(async () => {" + text5 + "})()");
      } catch (e) {
        alert(e);
      }
    });

    this.score1 = this.physics.add.sprite(60, 60, "score1");

    this.score1.setScale(0.2);

    this.score = 20;
    let style = { font: "30px Arial", fill: "#00000" };
    // Parameters: x position, y position, text, style
    this.scoreText = this.add.text(45, 54, this.score, style);

    this.scoreText.setScale(0.85);
    // this.load.image("menu", "assets/lila/menu.png");
    const menu = this.add.image(60, 500, 'menu').setInteractive();
    menu.scale = 0.25;
    menu.on(event.POINTER_DOWN, (image) => {
      console.log('menu');
      routinga.menu();
    });
  }

  hit() {
    // Change the position x and y of the coin randomly
    // this.lettuce.x = Phaser.Math.Between(100, 600);
    //this.lettuce.y = Phaser.Math.Between(100, 300);
    this.lettuce.destroy(true);
    // this.player.destroy(true);
    // Increment the score by 10
    this.score += 10;
    // this.player2 = this.physics.add.sprite(500, 338, 'happy');
    //this.player2.scale = 0.3;

    // Display the updated score on the screen
    this.scoreText.setText(this.score);

    // Create a new tween Ykbr ki yakol
    this.tweens.add({
      targets: this.player, // on the player
      duration: 200, // for 200ms
      scaleX: 0.5, // that scale vertically by 20%
      scaleY: 0.5, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async demo() {
    console.log("Taking a break...");
    await this.sleep(2000);
    console.log("Two seconds later, showing sleep in a loop...");
  }

  goSouth() {
    let a = this.player.x;
    let b = this.player.y;
    this.player.destroy(true);
    this.player = this.physics.add.sprite(a, b, "player");
    this.player.scale = 1.7;
    this.player.y += 70;
  }
  GoNorth() {
    let a = this.player.x;
    let b = this.player.y;
    this.player.destroy(true);
    this.player = this.physics.add.sprite(a, b, "playerNorth");
    this.player.scale = 1.7;
    this.player.y -= 70;
  }
  async  help3() {
    // this.load.image("help1", "assets/lila/help1.png");

    await this.waitfunction(500);
    const help1 = this.add.image(450, 300, 'help3').setInteractive();
    help1.scale = 0.7;
    await this.waitfunction(4000);
    help1.destroy(true);
  }
  async GoEast() {
    let a = this.player.x;
    let b = this.player.y;
    this.player.destroy(true);
    this.player = this.physics.add.sprite(a, b, "player2");
    this.player.scale = 1.7;
    this.player.x += 70;
  }
  async gowest() {
    let a = this.player.x;
    let b = this.player.y;
    this.player.destroy(true);
    this.player = this.physics.add.sprite(a, b, "playerWest");
    this.player.scale = 1.7;
    this.player.x -= 70;
  }
  upfunction() {
    this.player.y -= 70;
    console.log("done go");
  }

  waitfunction(ms) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(""), ms);
    });
  }

  async move1() {
    this.player.x = 357;
    await this.waitfunction(50);
    // this.player.x = 350;
  }

  async move2() {
    this.player.x = 343;
    await this.waitfunction(50);
    this.player.x = 347;
  }
  async move3() {
    this.player.y = 73;
    await this.waitfunction(50);
    this.player.y = 76;
  }
  waitForSeconds() {}
  initInterpreterWaitForSeconds(interpreter, globalObject) {
    // Ensure function name does not conflict with variable names.
    (Blockly as any).JavaScript.addReservedWords("this.waitForSeconds");
  }

  async wait(ms) {
    await this.waitfunction(ms);
  }

  update() {
    console.log("update method");

    if (this.player.x < 0) {
      this.player.x = 0;
    }

    if (this.player.x > 700) {
      this.player.x = 700;
    }

    if (this.player.x > 215 && this.player.x < 395 && this.player.y < 403) {
      this.player.x = this.player.x - 2;
      this.player.y = 406;
    }
    if (this.player.x > 215 && this.player.x < 395 && this.player.y > 451) {
      this.player.x = this.player.x - 2;
      this.player.y = 448;
    }

    if (this.physics.overlap(this.player, this.lettuce)) {
      // Call the new hit() method
      console.log("hitted");
      this.hit();
    }
  }
  closeGameOve() {
    this.scene.stop("repeat");

    document.getElementById("div2")!.style.display = "none";
    document.getElementById("code")!.innerHTML = "";
    console.log("hello game6");
  }

  correct(code) {
    console.log("ni dkhalt hna");
    var you =
      "for (var count = 0; count < 4; count++) { this.GoEast();} for (var count2 = 0; count2 < 3; count2++) { this.GoNorth();}";
    var you2 =
      "for (var count = 0; count < 4; count++) { this.GoEast();} for (var count2 = 0; count2 < 4; count2++) { this.GoNorth();}";

    if (code == you || code == you2) {
      this.time.addEvent({
        delay: 3500,
        callback: this.gameOver,
        callbackScope: this,
      });
    } else {
      this.time.addEvent({
        delay: 3500,
        callback: this.gamelose,
        callbackScope: this,
      });
    }
  }

  test1(event) {
    // (Blockly as any).JavaScript.addReservedWords('code');
    var code = (Blockly as any).JavaScript.workspaceToCode(
      Blockly.mainWorkspace
    );
    // var myInterpreter = new Interpreter(code);
    document.getElementById("code")!.innerHTML = code;

    console.log(code);
  }

  gameOver() {
    sessionStorage.setItem("scoreloop", JSON.stringify(this.score));
    scoreblockly2.update_score_loop();
    console.log("score loop" + this.score);
    this.scene.launch("gameOver", { score: this.score, name: "game6" });
  }
  gamelose() {
    this.scene.launch("gameOver", { score: this.score, name: "gameLose3" });
  }
}
//conditions

export class Scene7 extends Phaser.Scene {
  go: any;
  ok: any;
  stone: any;
  stone1: any;
  stone2: any;
  count: any;
  i: number = 0;
  workspace: any;
  up: any;
  score1: any;
  lettuce: any;
  score: any;
  run: any;
  drop: any;
  arrow: any;
  arrowA: any;
  arrow2: any;
  arrow3: any;
  arrow4: any;
  player: any;
  player2: any;

  scoreText: any;
  right2: any;
  right3: any;

  l!: BlocklyComponent;

  constructor() {
    super("game7");
  }
  preload() {
    Blockly.Blocks["string_length"] = {
      init: function () {
        (this as any)
          .appendValueInput("VALUE")
          .setCheck("String")
          .appendField("treasure");
        (this as any).setOutput(true, "Number");
        (this as any).setColour(280);
        //this.setNextStatement(true);
        (this as any).setTooltip(
          "Returns number of letters in the provided text."
        );
        (this as any).setHelpUrl(
          "http://www.w3schools.com/jsref/jsref_length_string.asp"
        );
      },
    };
    Blockly.Blocks["block_type"] = {
      init: function () {
        (this as any)
          .appendValueInput("treasure")
          .setCheck(null)
          .appendField("stone");
        (this as any).setInputsInline(false);
        (this as any).setOutput(true, null);
        (this as any).setColour(230);
        (this as any).setTooltip("");
        (this as any).setHelpUrl("");
      },
    };
    Blockly.Blocks["gridworld_gonorth"] = {
      init: function () {
        (this as any).setColour(320);
        (this as any).appendDummyInput().appendField("Go east");
        (this as any).setTooltip("Move right (towards the top of the screen)");
        (this as any).setNextStatement(true);
        (this as any).setPreviousStatement(true);
      },
    };
    Blockly.Blocks["gowest"] = {
      init: function () {
        (this as any).setColour(320);
        (this as any).appendDummyInput().appendField("Go west");
        (this as any).setTooltip("Move right (towards the top of the screen)");
        (this as any).setNextStatement(true);
        (this as any).setPreviousStatement(true);
      },
    };
    Blockly.Blocks["gridworld_gosouth"] = {
      init: function () {
        (this as any).setColour(320);
        (this as any).appendDummyInput().appendField("Go north");
        (this as any).setTooltip(
          "Move south (towards the bottom of the screen)"
        );
        (this as any).setNextStatement(true);
        (this as any).setPreviousStatement(true);
      },
    };
    Blockly.Blocks["goForword"] = {
      init: function () {
        (this as any).setColour(320);
        (this as any).appendDummyInput().appendField("Go south");
        (this as any).setTooltip(
          "Move south (towards the bottom of the screen)"
        );
        (this as any).setNextStatement(true);
        (this as any).setPreviousStatement(true);
      },
    };
    Blockly.Blocks["jump"] = {
      init: function () {
        (this as any).setColour(320);
        (this as any).appendDummyInput().appendField("jump");
        (this as any).setTooltip(
          "Move south (towards the bottom of the screen)"
        );
        (this as any).setNextStatement(true);
        (this as any).setPreviousStatement(true);
      },
    };
    Blockly.Blocks["turn"] = {
      init: function () {
        (this as any)
          .appendDummyInput()
          .appendField(new Blockly.FieldLabelSerializable("turn"), "NAME")
          .appendField(
            new Blockly.FieldDropdown([
              ["left", "turnLeft"],
              ["right", "turn right"],
            ]),
            "turn"
          );
        (this as any).setColour(230);
        (this as any).setTooltip("");
        (this as any).setHelpUrl("");
      },
    };

    (Blockly as any).JavaScript["gridworld_gonorth"] = function (block) {
      return "this.GoEast();";
    };
    (Blockly as any).JavaScript["gowest"] = function (block) {
      return "this.gowest();";
    };
    (Blockly as any).JavaScript["jump"] = function (block) {
      return "this.jump();";
    };
    (Blockly as any).JavaScript["goForword"] = function (block) {
      return "this.goSouth();";
    };

    (Blockly as any).JavaScript["turn"] = function (block) {
      return "turn();";
    };

    (Blockly as any).JavaScript["gridworld_gosouth"] = function (block) {
      return "this.GoNorth();";
    };

    Blockly.defineBlocksWithJsonArray([
      {
        type: "wait_seconds",
        message0: " wait %1 seconds",
        args0: [
          {
            type: "field_number",
            name: "SECONDS",
            min: 0,
            max: 600,
            value: 1,
          },
        ],
        previousStatement: null,
        nextStatement: null,
        colour: "%{BKY_LOOPS_HUE}",
      },
    ]);

    /**
     * Generator for wait block creates call to new method
     * <code>waitForSeconds()</code>.
     */
    (Blockly as any).JavaScript["wait_seconds"] = function (block) {
      var seconds = Number(block.getFieldValue("SECONDS"));
      var code = "this.waitForSeconds(" + seconds + ");\n";
      return code;
    };
    let that = this;
    this.stone = false;
    (Blockly as any).JavaScript["block_type"] = function (block) {
      var value_treasure = (Blockly as any).JavaScript.valueToCode(
        block,
        "treasure",
        (Blockly as any).JavaScript.ORDER_ATOMIC
      );
      // TODO: Assemble JavaScript into code variable.
      // that.treasure = true;
      var code = "this.stone";
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, (Blockly as any).JavaScript.ORDER_NONE];
    };

    const blocklyDiv: any = document.getElementById("blocklyDiv3");
    this.workspace = Blockly.inject(blocklyDiv, {
      readOnly: false,
      media: "media/",
      trashcan: true,
      move: {
        scrollbars: true,
        drag: true,
        wheel: true,
      },
      toolbox: `
      <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox-simple" style="display: none" class="col-6">
        <div class="col-6"></div>
      <block type="controls_repeat_ext">
        <value name="TIMES">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
        <block type="gridworld_gosouth"></block>
        <block type="goForword"></block>
        <block type="gowest"></block>
        <block type="gridworld_gonorth"></block>
        <block type="controls_if"></block>
        <block type="block_type"></block>
        <block type="jump"></block>


      </xml>
        `,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
      grid: { spacing: 20, length: 3, colour: "#ccc", snap: true },
    });
    this.workspace.addChangeListener(this.test1);

    this.load.image("sahara3", "assets/tileset7.png");
    this.load.image("sahara4", "assets/tileset7.png");
    this.load.image("player", "assets/face.png");
    this.load.image("player2", "assets/left.png");
    this.load.image("playerWest", "assets/right.png");
    this.load.image("playerNorth", "assets/back.png");
    this.load.image("happy", "assets/hqppy.png");
    this.drop = this.load.image("drop", "assets/drop.png");
    this.arrow = this.load.image("right", "assets/arrow.png");
    this.arrow2 = this.load.image("down", "assets/arrowDown.png");
    this.arrow3 = this.load.image("left", "assets/arrowleft.png");
    this.arrow4 = this.load.image("up", "assets/arrowUp.png");
    this.load.image("title", "assets/title.png");
    this.load.image("run", "assets/run.png");
    this.load.image("stone", "assets/stone.png");
    this.load.image("lettuce", "assets/goldA.png");
    this.load.image("score1", "assets/score.png");
    this.load.image("block", "assets/block.png");
    this.load.image("blockk", "assets/blockk.png");
    this.load.image("compass", "assets/compass.png");
    this.load.image("help4", "assets/lila/help4.png");
    this.load.image("menu", "assets/lila/menu.png");


  }
  create() {
    this.closeGameOve();
    this.arrow = this.input.keyboard.createCursorKeys();

    this.arrowA = this.input.keyboard.createCursorKeys();
    this.anims.create({
      frames: this.anims.generateFrameNumbers("brawler", {
        frames: [0, 1, 2, 3],
      }),
      frameRate: 8,
      repeat: -1,
    });
    //this.add.text(20, 20, 'Loading..');
    const event = Phaser.Input.Events;
    const sahara2 = this.add.image(420, 305, "sahara4");
    sahara2.scale = 1.1;
    //sahara2.rotation -= 90;

    const sahara = this.add.image(330, 240, "sahara3");
    sahara.scale = 1.1;
    //  sahara.rotation -= 0.200;

    this.player = this.physics.add.sprite(240, 306, "player2");
    // this.player = this.physics.add.sprite(215, 403, 'player2');
    this.player.scale = 1.7;
    var that = this;
    const compass = this.add.image(690, 50, "compass");
    compass.scale = 0.25;
    this.stone1 = this.physics.add.sprite(437, 327, "stone");
    this.stone1.scale = 0.173;
    this.stone2 = this.physics.add.sprite(457, 327, "stone");
    this.stone2.scale = 0.1;
    this.lettuce = this.physics.add.sprite(710, 330, "lettuce");
    this.lettuce.setScale(0.32);
    this.tweens.add({
      targets: this.lettuce, // on the player
      duration: 400, // for 200ms
      scaleX: 0.3, // that scale vertically by 20%
      scaleY: 0.3, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });
    var b = [] as any;

    const run = this.physics.add.sprite(730, 500, "run").setInteractive();
this.help4();
    run.scale = 0.25;
    run.on(event.POINTER_DOWN, (image) => {
      (Blockly as any).JavaScript.addReservedWords("div3");
      var code = (Blockly as any).JavaScript.workspaceToCode();
      console.log(that.stone);
      let me;
      me = document.getElementById("code")!.innerText;
      const myArr1 = code.split(");");
      let code1 = myArr1[0];
      const code2 = myArr1[myArr1.length - 1];
      console.log("code2 = " + code2 + code2.length);

      let ok = "); await this.waitfunction(500);console.log(this.stone);";
      let text3 = code1.concat(ok);
      //console.log(text3);
      let text4 = "";
      for (var i = 0; i < myArr1.length - 1; i++) {
        let tex = myArr1[i].concat(ok);
        b[i] = tex;
        //console.log("here is :"+tex);
      }
      for (var i = 0; i < b.length; i++) {
        text4 = text4.concat(b[i]);
      }
      let text5;
      if (code2.length == 2 && code2.includes("}")) {
        console.log("ni ntestii fi hadi");

        text5 = text4.concat("}");
      } else if (code2.length == 4 && code2.includes("}")) {
        console.log("ni ntestii fi hadi");

        text5 = text4.concat("}}");
      } else {
        text5 = text4;
        console.log(text5);
      }

      // this.waitfunction(500)  if (me  == you ){ console.log(" we are equals" )}else {console.log(" we not equals"+me)}
      this.correct(me);
      //  this.correct(me);
      try {
        console.log("text5 " + text5);
        eval("(async () => {" + text5 + "})()");
      } catch (e) {
        alert(e);
      }
    });

    this.score1 = this.physics.add.sprite(60, 60, "score1");

    this.score1.setScale(0.2);

    this.score = 30;
    let style = { font: "30px Arial", fill: "#00000" };
    // Parameters: x position, y position, text, style
    this.scoreText = this.add.text(45, 54, this.score, style);

    this.scoreText.setScale(0.85);
    // this.load.image("menu", "assets/lila/menu.png");
    const menu = this.add.image(60, 500, 'menu').setInteractive();
    menu.scale = 0.25;
    menu.on(event.POINTER_DOWN, (image) => {
      console.log('menu');
      routinga.menu();
    });
  }

  hit() {
    // Change the position x and y of the coin randomly
    // this.lettuce.x = Phaser.Math.Between(100, 600);
    //this.lettuce.y = Phaser.Math.Between(100, 300);
    this.lettuce.destroy(true);
    // this.player.destroy(true);
    // Increment the score by 10

    // Create a new tween Ykbr ki yakol
    this.tweens.add({
      targets: this.player, // on the player
      duration: 200, // for 200ms
      scaleX: 0.5, // that scale vertically by 20%
      scaleY: 0.5, // and scale horizontally by 20%
      yoyo: true, // at the end, go back to original scale
    });
  }
  olap() {
    this.player.x = 395;
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async demo() {
    console.log("Taking a break...");
    await this.sleep(2000);
    console.log("Two seconds later, showing sleep in a loop...");
  }

  goSouth() {
    this.player.y += 70;
  }
  GoNorth() {
    this.player.y -= 70;
  }
  async jump() {
    this.player.y -= 70;
    this.player.x += 70;
    await this.waitfunction(100);
    this.player.y += 70;
    this.player.x += 70;
  }

  async GoEast() {
    this.player.x += 70;
    console.log(this.player.x + "y is : " + this.player.y);
  }
  async gowest() {
    this.player.x -= 70;
  }
  upfunction() {
    this.player.y -= 70;
    console.log("done go");
  }

  waitfunction(ms) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(""), ms);
    });
  }

  async move1() {
    this.player.x = 357;
    await this.waitfunction(50);
    // this.player.x = 350;
  }

  async move2() {
    this.player.x = 343;
    await this.waitfunction(50);
    this.player.x = 347;
  }
  async move3() {
    this.player.y = 73;
    await this.waitfunction(50);
    this.player.y = 76;
  }
  waitForSeconds() {}
  initInterpreterWaitForSeconds(interpreter, globalObject) {
    // Ensure function name does not conflict with variable names.
    (Blockly as any).JavaScript.addReservedWords("this.waitForSeconds");
  }

  async wait(ms) {
    await this.waitfunction(ms);
  }

  update() {
    console.log("update method");
    // console.log(this.player.x + " "+ this.player.y);
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

    if (this.player.x < 0) {
      this.player.x = 0;
    }

    if (this.player.x > 700) {
      this.player.x = 700;
    }
    if (this.player.y > 480) {
      this.player.y = 470;
    }

    if (this.player.y < 56) {
      this.player.y = 54;
    }

    /*let aa=380;
    if ((this.player.x >aa && this.player.x < 381  )  && (this.player.y === 306)) {
      console.log("ni hna fl hajra");
      this.player.x = 380;

      if (this.stone== true){
         aa=800;
      }

    }*/
    if (this.player.x > 370 && this.player.x < 450 && this.player.y == 306) {
      this.stone = true;
      console.log("your stone is true");
    } else {
      this.stone = false;
    }
    /*
    if (this.player.x > 215 && this.player.x <395 && this.player.y < 403   ) {

      this.player.x = this.player.x-2;
      this.player.y = 406;

    }
    if (this.player.x > 215 && this.player.x <395 && this.player.y > 451   ) {

      this.player.x = this.player.x-2;
      this.player.y = 448;

    }
*/

    if (this.physics.overlap(this.player, this.lettuce)) {
      // Call the new hit() method
      //  console.log("hitted");
      this.hit();
    }
    if (this.physics.overlap(this.stone2, this.player)) {
      // Call the new hit() method

      this.olap();
      //console.log("hitted x = "+this.player.x+" y is "+this.player.y);
    }
  }
  async  help4() {
    // this.load.image("help1", "assets/lila/help1.png");

    await this.waitfunction(500);
    const help1 = this.add.image(450, 300, 'help4').setInteractive();
    help1.scale = 0.7;
    await this.waitfunction(4000);
    help1.destroy(true);
  }

  correct(code) {
    console.log("ni dkhalt hna");
    var you =
      "for (var count = 0; count < 5; count++) { this.GoEast();if (this.stone) { this.jump();} }";

    if (code == you) {
      this.score += 10;
      // this.player2 = this.physics.add.sprite(500, 338, 'happy');
      //this.player2.scale = 0.3;

      // Display the updated score on the screen
      this.scoreText.setText(this.score);
      console.log("score blockly :" + this.score);
      sessionStorage.setItem("scorecondition", JSON.stringify(this.score));
      scoreblockly.update_score_condition();
      console.log("score condition " + this.score);

      this.time.addEvent({
        delay: 3500,
        callback: this.gameOver,
        callbackScope: this,
      });
    } else {
      this.time.addEvent({
        delay: 3500,
        callback: this.gamelose,
        callbackScope: this,
      });
    }
  }

  test1(event) {
    // (Blockly as any).JavaScript.addReservedWords('code');
    var code = (Blockly as any).JavaScript.workspaceToCode(
      Blockly.mainWorkspace
    );
    // var myInterpreter = new Interpreter(code);
    document.getElementById("code")!.innerHTML = code;

    console.log(code);
  }

  closeGameOve() {
    this.scene.stop("game6");
    this.scene.stop("repeat");
    this.scene.stop("game4");
    document.getElementById("blocklyDiv2")!.style.display = "none";
    document.getElementById("code")!.innerHTML = "";
    console.log("hello game7");
  }

  gameOver() {
    this.scene.launch("gameOver", { score: this.score, name: "game7" });
  }
  gamelose() {
    this.scene.launch("gameOver", { score: this.score, name: "gameLose4" });
  }
}

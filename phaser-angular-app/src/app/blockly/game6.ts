import * as Blockly from "blockly";
import "phaser";
import block = Blockly.Tooltip.block;
import { BlocklyComponent } from "./blockly.component";
import LOGIC_BOOLEAN_TRUE = Blockly.Msg.LOGIC_BOOLEAN_TRUE;

var i = 0;
var m = "";
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
      sessionStorage.setItem("scoreblockly", JSON.stringify(this.score));

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

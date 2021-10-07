import { Component, OnInit, Injectable } from "@angular/core";
import * as Blockly from "blockly";
import { Pahsertoblockly } from "../pahsertoblockly";
import { computeDecimalDigest } from "@angular/compiler/src/i18n/digest";
//import { goog } from 'google-closure-library';
//goog.require('BlocklyGames');

@Component({
  selector: "app-testblock",
  templateUrl: "./testblock.component.html",
  styleUrls: ["./testblock.component.css"],
})
export class TestblockComponent extends Phaser.Scene implements OnInit {
  phaserGame: Phaser.Game;

  player;

  config: Phaser.Types.Core.GameConfig;
  constructor() {
    super({ key: "main" });

    this.config = {
      type: Phaser.AUTO,
      height: 500,
      width: 500,
      scene: [Pahsertoblockly],
      parent: "gameContainer",
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
          debug: false,
        },
      },
    };
  }
  workspace: any;
  instance: any;

  ngOnInit() {
    const blocklyDiv = document.getElementById("blocklyDiv");
    this.phaserGame = new Phaser.Game(this.config);
    Blockly.Blocks.moveForward = {
      init() {
        this.appendDummyInput().appendField("MoveForward");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
      },
    };
    Blockly.Blocks.run = {
      init() {
        this.appendStatementInput("When_Run")
          .setCheck(null)
          .appendField(new Blockly.FieldLabelSerializable("Run"), "NAME");
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
      },
    };

    Blockly.Blocks.moveBackward = {
      init() {
        this.appendDummyInput().appendField("MoveBackward");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
      },
    };
    Blockly.Blocks.turn = {
      init() {
        this.appendDummyInput()
          .appendField("Turn")
          .appendField(
            new Blockly.FieldDropdown([
              ["right", "right"],
              ["left", "left"],
              ["", ""],
            ]),
            "NAME"
          );
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
      },
    };
    /*    Blockly.inject(blocklyDiv, {
      readOnly: false,
      media: 'media/',
      trashcan: true,
      move: {
        scrollbars: true,
        drag: true,
        wheel: true,
      }, 

      toolbox: `
      <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox-simple" style="display: none">
        <block type="controls_ifelse"></block>
        <block type="logic_compare"></block>
        <block type="moveForward"></block>
        <block type="moveBackward"></block>

        <block type="logic_operation"></block>
        <block type="controls_repeat_ext">
            <value name="TIMES">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="logic_operation"></block>
        <block type="logic_negate"></block>
        <block type="logic_boolean"></block>
        <block type="logic_null" disabled="true"></block>
        <block type="logic_ternary"></block>
        <block type="text_charAt">
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR">text</field>
                </block>
            </value>
        </block>
      </xml>
        `,   

    } as Blockly.BlocklyOptions);*/
    const toolbox = `<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox-simple" style="display: none">
    <block type="controls_ifelse"></block>
    <block type="logic_compare"></block>
    <block type="moveForward"></block>
    <block type="moveBackward"></block>
    <block type="run"></block>

    <block type="turn"></block>

    <block type="math_number">
    <field name="NUM"></field>
  </block>
 <block type="text"></block>
  <block type="text_print"></block>


    
    <block type="logic_operation"></block>
    <block type="controls_repeat_ext">
        <value name="TIMES">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <block type="logic_operation"></block>
    <block type="logic_negate"></block>
    <block type="logic_boolean"></block>
    <block type="logic_null" disabled="true"></block>
    <block type="logic_ternary"></block>
    <block type="text_charAt">
        <value name="VALUE">
            <block type="variables_get">
                <field name="VAR">text</field>
            </block>
        </value>
    </block>
  </xml>
    `;

    this.workspace = Blockly.inject("blocklyDiv", {
      toolbox,
      readOnly: false,
      media: "media/",
      trashcan: true,
      move: {
        scrollbars: true,
        drag: true,
        wheel: true,
      },
    });
    this.instance = new Pahsertoblockly();
  }

  Update(event) {
    //  console.log(code);
  }

  runcode() {
    let code = (Blockly as any).JavaScript.workspaceToCode(
      Blockly.mainWorkspace
    );
    document.getElementById("code").innerHTML = code;
    eval(document.getElementById("code").innerHTML);
  }

  /*  var rep = this.add.image(115, 290, 'replay');
    rep.setInteractive();
    rep.on(
      'pointerdown',
      (pointer, targets) => {
        this.player.setVelocity(100, 0);
      },
      true
    );*/

  code0 = ((Blockly as any).JavaScript["run"] = function (block) {
    var statements_when_run = (Blockly as any).JavaScript.statementToCode(
      block,
      "When_Run"
    );
    // TODO: Assemble JavaScript into code variable.
    return statements_when_run;
  });
  code1 = ((Blockly as any).JavaScript["moveBackward"] = function (block) {
    // TODO: Assemble JavaScript into code variable.

    new Pahsertoblockly().moveForward();
    return "moveBackward()\n";
  });

  code4 = ((Blockly as any).JavaScript["turn"] = function (block) {
    var dropdown_name = block.getFieldValue("NAME");
    // TODO: Assemble JavaScript into code variable.
    var code = "turn" + dropdown_name + "();\n";

    return code;
  });
}

/*
@Injectable()

export class block extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }

  create() {
    var windowWidth = window.innerWidth;
    var widnowHeight = window.innerHeight;
    var bg = this.add.image(windowWidth / 2, widnowHeight / 2, 'skynight');
    bg.setDisplaySize(windowWidth, widnowHeight);
    var player = this.physics.add.sprite(200, 400, 'dude');

    player.setCollideWorldBounds(true);
 
  }

  preload() {
    this.load.image('skynight', '../assets/BG.png');
    this.load.image('dude', '../assets/penguin.png');
  }

  update() {
    function moveLeft() {
      this.player.setVelocityX(-160);
      this.player.anims.play('left', true);
    }

    function moveRight() {
      this.player.setVelocityX(160);
      this.player.anims.play('right', true);
    }

    function jump() {
      // You may want to imbed your player.body.touching.down check in this function.
      this.player.setVelocityY(-330);
    }
  }
}
*/

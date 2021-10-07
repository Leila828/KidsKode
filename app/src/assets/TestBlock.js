import {CustomBlock} from "ngx-blockly";

declare var Blockly: any;

export class TestBlock extends CustomBlock {


  constructor() {
    // Add Mutator or further args if needed
    super('TestBlock');
    this.class = TestBlock;
  }

  defineBlock() {
    this.block.appendDummyInput()
      .appendField(this.type)
      .appendField(new Blockly.FieldImage('assets/testblock.png', 50, 50, '*'))
      .appendField(new Blockly.FieldImage(this.args[0], 50, 50, '*'));
    this.block.setOutput(true, 'Input');
    this.block.setColour(30);
    this.block.setTooltip('');
    this.block.setHelpUrl('');
  }

  toXML() {
    return '<block type="test"></block>';
  }

  toDartCode(block: CustomBlock): string | any[] {
    return 'Not implemented';
  }

  toJavaScriptCode(block: CustomBlock): string | any[] {
    return 'Not implemented';
  }

  toLuaCode(block: CustomBlock): string | any[] {
    return 'Not implemented';
  }

  toPHPCode(block: CustomBlock): string | any[] {
    return 'Not implemented';
  }

  toPythonCode(block: CustomBlock): string | any[] {
    return 'Not implemented';
  }


  onChange(changeEvent: any) {
    console.log(changeEvent);
  }
}

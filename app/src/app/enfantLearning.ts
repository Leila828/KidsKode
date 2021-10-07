import { Level } from './level';

// tslint:disable-next-line:class-name
export class enfantLearning {
  id!: string;
  nom!: string;
  points!: number;
  points2!: number;
  // tslint:disable-next-line:variable-name
  points_sequencing_blockly!: number;
  // tslint:disable-next-line:variable-name
  points_loop_blockly!: number;
  // tslint:disable-next-line:variable-name
  points_condition_blockly!: number;

  level!: Level[];
}

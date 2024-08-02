/* eslint-disable @typescript-eslint/member-ordering */
import { Command as CommanderProgram } from 'commander';

/**
 * 命令参数类型。
 */
export interface CommandOption {
  /**
   * 参数全称。
   */
  flag: string;
  /**
   * 参数缩写。
   */
  abbreviation?: string;
  /**
   * 参数说明。
   */
  description?: string;
  /**
   * 参数默认值。
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue?: any;
  /**
   * 是否必填。
   */
  required?: boolean;
}

export interface CommandArgs {
  name: string;
  description?: string;
  options: CommandOption[];
}

export abstract class BaseCommand {
  constructor(public readonly args: CommandArgs) {}

  protected command!: CommanderProgram;

  public get name(): string {
    return this.args.name;
  }

  public init(program: CommanderProgram): void {
    const command = program.createCommand(this.name);
    this.command = command;

    const { description, options } = this.args;

    if (description) command.description(description);

    for ( of options) {
    }
  }

  public abstract execute(): void;
}

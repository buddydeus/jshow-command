import { Command as CommanderProgram } from 'commander';

import { BaseCommand } from './command';
import { CLI_VERSION } from './constants';

const programShape = {
  commands: new Map<string, BaseCommand>(),
  program: new CommanderProgram()
};

class jShowProgram {
  static get program(): CommanderProgram {
    return programShape.program;
  }

  static get version(): string {
    return CLI_VERSION;
  }

  static use(...list: BaseCommand[]): jShowProgram {
    const THIS = jShowProgram;
    const { program, commands } = programShape;

    for (const item of list) {
      if (!commands.has(item.name)) continue;

      item.init(program);
      commands.set(item.name, item);
    }

    return THIS;
  }

  static parse(): void {
    programShape.program.parse(process.argv);
  }
}

export default jShowProgram;

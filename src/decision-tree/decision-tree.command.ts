import { Command, CommandRunner, Option } from 'nest-commander';
import { DecisionTreeService } from './decision-tree.service';


@Command({ name: 'process-tree', description: 'Process a decision tree' })
export class DecisionTreeCommand extends CommandRunner {
  constructor(private readonly decisionTreeService: DecisionTreeService) {
    super();
  }

  async run(passedParam: string[], options?: Record<string, any>,): Promise<void> {

    const tree = this.decisionTreeService.deserialize(options.tree);
    tree.preOrderTraversal();

  }

  @Option({
    flags: '-t, --tree <tree>',
    description: 'Decision tree JSON string',
  })
  parseTree(val: string): string {
    return val;
  }
}

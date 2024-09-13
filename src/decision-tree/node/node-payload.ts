import { NodeExpression } from './node-expression';
import { NodeActionFactory } from './node-action-factory'; 
import { Action } from '../interface/action.interface';

export class NodePayload {
  private expression: NodeExpression | null;
  private action1: Action | null;
  private action2: Action | null;

  constructor(
    expression: string | null,
    
    actionType1: string | null,
    actionArgs1: any[] | null,
    
    actionType2: string | null,
    actionArgs2: any[] | null,
    
  ) {
    this.expression = expression ? new NodeExpression(expression) : null;
    this.action1 = actionType1 ? NodeActionFactory.createAction(actionType1, actionArgs1) : null;
    this.action2 = actionType2 ? NodeActionFactory.createAction(actionType2, actionArgs2) : null;
  }

  execute(): void {
    if (!this.expression) return;
    this.expression.execute() ? this.action1?.execute() : this.action2?.execute();
  }

  get getExpression(): NodeExpression | null {
    return this.expression;
  }
  get getAction1(): Action | null {
    return this.action1;
  }
  get getAction2(): Action | null {
    return this.action2;
  }

  toJson(): Record<string, any> {
    return {
      expression: this.expression ? this.expression.toJson() : null,
      action1: this.action1 ? this.action1.toJson() : null,
      action2: this.action2 ? this.action2.toJson() : null,
    };
  }
}

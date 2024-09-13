export class NodeExpression {
    private expression: string;
    private evaluated: boolean;
    private result: boolean;
    private issecure: boolean;

  
    constructor(expression: string) {
      this.expression = expression;
      this.issecure = this.validate(this.expression);
      this.evaluated = false;
      this.result = null;
    }

    toJson(): Record<string, any> {
      return {
        value: this.expression,
        // evaluated: this.evaluated,
        // issecure: this.issecure,
      };
    }  
    
    execute(): boolean {
      try {

        if(!this.issecure) return false;
        if(this.evaluated) return this.result;
  
        console.log(`Going to evaluate: ${this.expression}`);
        this.result = eval(this.expression);
        
        return this.result;

      } catch (error) {

        console.error('Error executing expression:', error);
        
        this.evaluated = true;
        return this.result = false;
      }
    }
  
    validate(expression: string): boolean {
      try {
        // Use the Function constructor to validate the expression syntax
        // This throws if the expression is not syntactically correct
        new Function(`return (${expression});`);
        return true;
      } catch (error) {
        console.error('Invalid JavaScript expression:', error.message);
        return false;
      }
  }
}
  
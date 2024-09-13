import { Action } from '../../interfaces/action.interface'
import { TreeNode } from '../tree-node';

export class LoopAction implements Action {
    private repeats: number;
    private subtree: TreeNode;
  
    constructor(subtree: TreeNode, repeats: number) {
      this.repeats = repeats;
      this.subtree = subtree;
    }
  
    execute(): void {
        for(let i = 0; i < this.repeats; ++i) {
            this.subtree.preOrderTraversal();
        }
    }
    toJson(): Record<string, any> {
      return {
        args: [this.repeats, this.subtree.toJson()],
        type: 'LoopAction',
      }
    }
  
  }
  
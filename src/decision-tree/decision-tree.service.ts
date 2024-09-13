import { Injectable } from '@nestjs/common';
import { TreeNode } from './node/tree-node';
import { NodePayload } from './node/node-payload';

@Injectable()
export class DecisionTreeService { 


    serialize(root: TreeNode): string {
        // Helper function to convert TreeNode to JSON
        function serializeNode(node: TreeNode): any {
          if (!node) return null;
          return node.toJson();
        }
    
        const serializedTree = serializeNode(root);
        return JSON.stringify(serializedTree);
      }
    
      deserialize(data: string): TreeNode {
        
        function deserializeNode(nodeData: any): TreeNode {
          if (!nodeData) return null;
    
          
          const { expression, action1, action2 } = nodeData.payload;    
          const payload = new NodePayload(
            expression.value, 

            action1 ? action1.type : null,
            action1 ? action1.args : null,

            action2 ? action2.type : null,
            action2 ? action2.args : null,
          )
    
          const node = new TreeNode(payload);
          nodeData.children.forEach((childData: any) => {
            node.addChild = deserializeNode(childData); // Recursively deserialize children
          });
    
          return node;
        }
    
        const parsedData = JSON.parse(data); // Parse JSON string
        // console.log(parsedData);
        return deserializeNode(parsedData); // Convert parsed data to TreeNode
      }
    

    test(): void {

        const payload = new NodePayload(
            'new Date().getFullYear() === 2025', // Expression to evaluate
            'SendSMS', ['1234567890'], // First action
            'SendEmail', ['sender@example.com', 'receiver@example.com'], // Second action
        );

        const rootNode = new TreeNode(payload);
        const childPayload = new NodePayload(
            'true',
            'SendEmail', ['childsender@example.com', 'childreceiver@example.com'], null, null,
        );

        const childNode = new TreeNode(childPayload);
        rootNode.addChild = childNode;
        
        rootNode.preOrderTraversal();


        console.log(this.serialize(rootNode))        

    }
}

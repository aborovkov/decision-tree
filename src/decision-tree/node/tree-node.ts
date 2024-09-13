import { NodePayload } from "./node-payload";

export class TreeNode {
  private children: TreeNode[] = [];
  private payload: NodePayload;

  constructor(payload: NodePayload) {
    this.payload = payload;
  }

  get getChildren(): TreeNode[] {
    return this.children;
  }

  get getPayload(): NodePayload {
    return this.payload;
  }

  set addChild(node: TreeNode) {
    this.children.push(node);
  }

  toJson(): Record<string, any> {
    return {
      payload: this.payload.toJson(),
      children: this.children.map((child) => child.toJson()),
    };
  }

  preOrderTraversal(): void {
    this.payload.execute();
    this.children.forEach((child) => child.preOrderTraversal());
  }
}

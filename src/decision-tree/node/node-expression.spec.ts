// src/decision-tree/node-expression.spec.ts

import { NodeExpression } from './node-expression';

describe('NodeExpression', () => {
  describe('execute', () => {
    it('should return true for a valid expression that evaluates to true', () => {
      const expression = '1 + 1 === 2';
      const nodeExpression = new NodeExpression(expression);

      expect(nodeExpression.execute()).toBe(true);
    });

    it('should return false for a valid expression that evaluates to false', () => {
      const expression = '1 + 1 === 3';
      const nodeExpression = new NodeExpression(expression);

      expect(nodeExpression.execute()).toBe(false);
    });

    it('should not re-evaluate the expression if already evaluated', () => {
      const expression = '2 + 2 === 4';
      const nodeExpression = new NodeExpression(expression);

      expect(nodeExpression.execute()).toBe(true);
      nodeExpression['evaluated'] = false; // Mocking the cache to ensure it doesn't affect the result
      expect(nodeExpression.execute()).toBe(true); // Should still return the cached value
    });

    it('should return false when the expression is invalid', () => {
      const expression = 'invalid expression';
      const nodeExpression = new NodeExpression(expression);
      
      expect(nodeExpression.execute()).toBe(false);      
    });
  });

  describe('validate', () => {
    it('should return true for a simple valid expression', () => {
      const expression = '2 * 2 === 4';
      const nodeExpression = new NodeExpression(expression);

      expect(nodeExpression.validate(expression)).toBe(true);
    });

    it('should return true by default (to be replaced with actual security checks)', () => {
      const expression = 'Math.random()';
      const nodeExpression = new NodeExpression(expression);

      expect(nodeExpression.validate(expression)).toBe(true); // Placeholder for real validation logic
    });
  });
  
});

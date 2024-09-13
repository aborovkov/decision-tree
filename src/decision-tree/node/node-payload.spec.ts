import { NodePayload } from './node-payload';
import { NodeActionFactory } from './node-action-factory';
import { NodeExpression } from './node-expression';

jest.mock('./node-action-factory');

describe('NodePayload', () => {
  let createActionMock: jest.Mock;

  beforeEach(() => {
    createActionMock = NodeActionFactory.createAction as jest.Mock;
    createActionMock.mockClear();
  });

  it('should execute action1 when expression evaluates to true', () => {
    const mockTrueAction = { execute: jest.fn() };
    const mockFalseAction = { execute: jest.fn() };

    createActionMock.mockImplementation((actionType) => {
      if (actionType === 'SendSMS') return mockTrueAction;
      if (actionType === 'SendEmail') return mockFalseAction;
      return null;
    });

    const expression = '1 + 1 === 2'; // A valid expression that evaluates to true
    const payload = new NodePayload(
      expression,
      'SendSMS', ['1234567890'], // Action 1 details
      'SendEmail', ['sender@example.com', 'receiver@example.com'], // Action 2 details
    );

    payload.execute();

    expect(mockTrueAction.execute).toHaveBeenCalled();
    expect(mockFalseAction.execute).not.toHaveBeenCalled();
  });

  it('should execute action2 when expression evaluates to false', () => {
    // Mock return values for actions
    const mockTrueAction = { execute: jest.fn() };
    const mockFalseAction = { execute: jest.fn() };

    // Mock the factory to return the actions
    createActionMock.mockImplementation((actionType) => {
      if (actionType === 'SendSMS') return mockTrueAction;
      if (actionType === 'SendEmail') return mockFalseAction;
      return null;
    });

    const expression = '1 + 1 === 3'; // A valid expression that evaluates to false
    const payload = new NodePayload(
      expression,
      'SendSMS', ['1234567890'], // Action 1 details
      'SendEmail', ['sender@example.com', 'receiver@example.com'], // Action 2 details
    );

    payload.execute();

    expect(mockFalseAction.execute).toHaveBeenCalled();
    expect(mockTrueAction.execute).not.toHaveBeenCalled();
  });

  it('should not execute any actions when expression is null', () => {
    // Mock return values for actions
    const mockTrueAction = { execute: jest.fn() };
    const mockFalseAction = { execute: jest.fn() };

    // Mock the factory to return the actions
    createActionMock.mockImplementation((actionType) => {
      if (actionType === 'SendSMS') return mockTrueAction;
      if (actionType === 'SendEmail') return mockFalseAction;
      return null;
    });

    const payload = new NodePayload(
      null, // No expression provided
      'SendSMS', ['1234567890'],
      'SendEmail', ['sender@example.com', 'receiver@example.com'],
    );

    payload.execute();

    expect(mockTrueAction.execute).not.toHaveBeenCalled();
    expect(mockFalseAction.execute).not.toHaveBeenCalled();
  });

  it('should handle invalid expressions by not executing any action', () => {
    const expression = 'invalid expression'; // This will cause eval to fail
    const mockTrueAction = { execute: jest.fn() };
    const mockFalseAction = { execute: jest.fn() };

    // Mock the factory to return the actions
    createActionMock.mockImplementation((actionType) => {
      if (actionType === 'SendSMS') return mockTrueAction;
      if (actionType === 'SendEmail') return mockFalseAction;
      return null;
    });

    const payload = new NodePayload(
      expression,
      'SendSMS', ['1234567890'],
      'SendEmail', ['sender@example.com', 'receiver@example.com'],
    );

    // Mock the execute method of NodeExpression to simulate an invalid expression
    jest.spyOn(NodeExpression.prototype, 'execute').mockImplementation(() => {
      throw new Error('Invalid expression');
    });

    expect(() => payload.execute()).toThrowError('Invalid expression');
    expect(mockTrueAction.execute).not.toHaveBeenCalled();
    expect(mockFalseAction.execute).not.toHaveBeenCalled();
  });
});

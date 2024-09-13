
import { NodeActionFactory } from './node-action-factory';
import { SendSMS } from './node-action/send-sms';
import { SendEmail } from './node-action/send-email';

const PHONE_NUMBER = '1234567890', SENDER = 'sender@example.com', RECEIVER = 'receiver@example.com';

describe('NodeActionFactory', () => {

    it('should create a SendSMS action when actionType is "SendSMS"', () => {
        const action = NodeActionFactory.createAction('SendSMS', [PHONE_NUMBER]);
        expect(action).toBeInstanceOf(SendSMS);
    });
    it('should create a SendSMS with property phone number', () => {
        const action = NodeActionFactory.createAction('SendSMS', [PHONE_NUMBER]);
        expect(action).toHaveProperty('phoneNumber', PHONE_NUMBER);
    });

    it('should create a SendEmail action when actionType is "SendEmail"', () => {
        const action = NodeActionFactory.createAction('SendEmail', [SENDER, RECEIVER]);
        expect(action).toBeInstanceOf(SendEmail);
    });

    it('should create a SendEmail with matching sender', () => {
        const action = NodeActionFactory.createAction('SendEmail', [SENDER, RECEIVER]);
        expect(action).toHaveProperty('sender', SENDER);
    });

    it('should create a SendEmail matching receiver', () => {
        const action = NodeActionFactory.createAction('SendEmail', [SENDER, RECEIVER]);
        expect(action).toHaveProperty('receiver', RECEIVER);
    });

    it('should throw an error for an unknown action type', () => {
        expect(() => {
            NodeActionFactory.createAction('UnknownAction', []);
        }).toThrow('Unknown action type: UnknownAction');
    });
});
import { Action } from "../interface/action.interface";
import { SendSMS } from "./node-action/send-sms";
import { SendEmail } from "./node-action/send-email";


export class NodeActionFactory {
  static createAction(actionType: string, args: any[]): Action {
    switch (actionType) {
      case 'SendSMS':
        return new SendSMS(args[0]);
      case 'SendEmail':
        return new SendEmail(args[0], args[1]);
      default:
        throw new Error(`Unknown action type: ${actionType}`);
    }
  }
}

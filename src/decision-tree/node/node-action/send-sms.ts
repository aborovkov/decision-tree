import { Action } from '../../interface/action.interface'

export class SendSMS implements Action {
  private phoneNumber: string;

  constructor(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }

  execute(): void {
    console.log(`Sending SMS to ${this.phoneNumber}`);
  }

  toJson(): Record<string, any> {
    return {
      args: [this.phoneNumber],
      type: 'SendSMS'
    }
  }

}
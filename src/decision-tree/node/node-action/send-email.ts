import { Action } from '../../interface/action.interface'

export class SendEmail implements Action {
    private sender: string;
    private receiver: string;
  
    constructor(sender: string, receiver: string) {
      this.sender = sender;
      this.receiver = receiver;
    }
  
    execute(): void {
      console.log(`Sending Email from ${this.sender} to ${this.receiver}`);
    }

    toJson(): Record<string, any> {
      return {
        args: [this.sender, this.receiver],
        type: 'SendEmail',
      }
    }
  }
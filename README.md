## Usage
1. to run tests `npx jest`
2. cli command is available through
ts-node src/cmd.ts process-tree -t '{"payload":{"expression":{"value":"new Date().getFullYear() === 2025"},"action1":{"args":["1234567890"],"type":"SendSMS"},"action2":{"args":["sender@example.com","receiver@example.com"],"type":"SendEmail"}},"children":[{"payload":{"expression":{"value":"true"},"action1":{"args":["childsender@example.com","childreceiver@example.com"],"type":"SendEmail"},"action2":null},"children":[]}]}'
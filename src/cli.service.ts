import { Module } from '@nestjs/common';
import { DecisionTreeCommand } from './decision-tree/decision-tree.command';
import { AppService } from './app.service';

@Module({
  providers: [DecisionTreeCommand, AppService],
})
export class CliModule {}
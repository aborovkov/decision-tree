import { Module } from '@nestjs/common';
import { DecisionTreeService } from './decision-tree/decision-tree.service';
import { DecisionTreeCommand } from './decision-tree/decision-tree.command'

@Module({
  providers: [ DecisionTreeService, DecisionTreeCommand ],
})
export class CliModule {}
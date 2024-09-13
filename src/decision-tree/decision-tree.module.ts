import { Module } from '@nestjs/common';
import { DecisionTreeService } from './decision-tree.service';
import { DecisionTreeCommand } from './decision-tree.command';

@Module({
  providers: [DecisionTreeService, DecisionTreeCommand],
})
export class DecisionTreeModule {}

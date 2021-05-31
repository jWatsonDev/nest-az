import { Module } from '@nestjs/common';
import { AzureTableStorageModule } from '@nestjs/azure-database';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Module({
  imports: [AzureTableStorageModule.forFeature(Todo, {
    table: 'Todo',
    createTableIfNotExists: true
  })],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}

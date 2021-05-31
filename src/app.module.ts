import { Module } from '@nestjs/common';
import { AzureTableStorageModule } from '@nestjs/azure-database';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    AzureTableStorageModule.forRoot({
      connectionString: process.env.AZURE_STORAGE_CONNECTION_STRING,
    }),
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

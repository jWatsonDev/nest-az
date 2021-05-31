import {
    EntityBoolean,
    EntityPartitionKey,
    EntityRowKey,
    EntityString,
  } from '@nestjs/azure-database';
  
  @EntityPartitionKey('TodoId')
  @EntityRowKey('TodoName')
  export class Todo {
    @EntityString() name: string;
    @EntityString() user: string;
    @EntityString() description: string;
    @EntityBoolean() status: boolean;
  }
  
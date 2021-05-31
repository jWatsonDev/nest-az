import {
    AzureTableStorageResponse,
    AzureTableStorageResultList,
    InjectRepository,
    Repository,
  } from '@nestjs/azure-database';
  import { Injectable } from '@nestjs/common';
  import { Todo } from './todo.entity';
  
  @Injectable()
  export class TodoService {
    constructor(
      @InjectRepository(Todo)
      private readonly todoRepository: Repository<Todo>,
    ) {}
  
    // find one todo entitu by its rowKey
    async find(rowKey: string, todo: Todo): Promise<Todo> {
      return this.todoRepository.find(rowKey, todo);
    }
  
    // find all Todo entities
    async findAll(): Promise<AzureTableStorageResultList<Todo>> {
      return this.todoRepository.findAll();
    }
  
    // create a new Todo entity
    async create(todo: Todo): Promise<Todo> {
      return this.todoRepository.create(todo);
    }
  
    // update the a Todo entity by its rowKey
    async update(rowKey: string, todo: Partial<Todo>): Promise<Todo> {
      return this.todoRepository.update(rowKey, todo);
    }
  
    // delete a Todo entity by its rowKey
    async delete(
      rowKey: string,
      todo: Todo,
    ): Promise<AzureTableStorageResponse> {
      return this.todoRepository.delete(rowKey, todo);
    }
  }
  
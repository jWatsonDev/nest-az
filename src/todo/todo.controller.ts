import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Patch,
    Post,
    Put,
    UnprocessableEntityException,
  } from '@nestjs/common';
import { Console } from 'console';
  import { TodoDTO } from './todo.dto';
  import { Todo } from './todo.entity';
  import { TodoService } from './todo.service';
  
  @Controller('todo')
  export class TodoController {
    constructor(private readonly todoService: TodoService) {}
  
    @Get()
    async getAllCats() {
      return await this.todoService.findAll();
    }
  
    @Get(':rowKey')
    async getCat(@Param('rowKey') rowKey) {
      try {
        return await this.todoService.find(rowKey, new Todo());
      } catch (error) {
        // Entity not found
        throw new NotFoundException(error);
      }
    }
  
    @Post()
    async createCat(
      @Body()
      catData: TodoDTO,
    ) {
      try {
        const todo = new Todo();
        // Disclaimer: Assign only the properties you are expecting!
        Object.assign(todo, catData);
  
        return await this.todoService.create(todo);
      } catch (error) {
        throw new UnprocessableEntityException(error);
      }
    }
  
    @Put(':rowKey')
    async saveCat(@Param('rowKey') rowKey, @Body() catData: TodoDTO) {
      try {
        const todo = new Todo();
        // Disclaimer: Assign only the properties you are expecting!
        Object.assign(todo, catData);
  
        return await this.todoService.update(rowKey, todo);
      } catch (error) {
        throw new UnprocessableEntityException(error);
      }
    }
  
    @Patch(':rowKey')
    async updateCatDetails(
      @Param('rowKey') rowKey,
      @Body() catData: Partial<TodoDTO>,
    ) {
      try {
        const todo = new Todo();
        // Disclaimer: Assign only the properties you are expecting!
        Object.assign(todo, catData);

        console.log('are we even here');
  
        return await this.todoService.update(rowKey, todo);
      } catch (error) {
        throw new UnprocessableEntityException(error);
      }
    }
  
    @Delete(':rowKey')
    async deleteDelete(@Param('rowKey') rowKey) {
      try {
        const response = await this.todoService.delete(rowKey, new Todo());
  
        if (response.statusCode === 204) {
          return null;
        } else {
          throw new UnprocessableEntityException(response);
        }
      } catch (error) {
        throw new UnprocessableEntityException(error);
      }
    }
  }
  
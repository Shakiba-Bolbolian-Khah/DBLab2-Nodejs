import { Body, Controller, Get, Post, Put, Header, Delete } from '@nestjs/common';
import {ApiResponse } from '@nestjs/swagger';
import BooksServices from './books.service';
import CreateBookDto from '../dto/create-book.dto';
import EditBookDto from '../dto/edit-book.dto';

@Controller('books')
export default class BooksController {
  constructor(private readonly bookServices: BooksServices) {}
  @Post('post')
  postBook( @Body() book: CreateBookDto) {
    return this.bookServices.insert(book);
  }

  @Get()
  getAll() {
    return this.bookServices.getAllBooks();
  }

  @Put('update')
  @ApiResponse({ status:200, description:'Updating selected book' })
  async update( @Body() book: EditBookDto) {
    return this.bookServices.update(book);
  }


  @Delete('delete')
  @ApiResponse({ status:200, description:'Deleting selected book' }) 
  @Header('Content-Type', 'application/json')
  async delete(@Body() bookID: number) {
    return this.bookServices.delete(bookID);
  }
}

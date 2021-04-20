import { Body, Controller, Get, Post } from '@nestjs/common';
import BooksServices from './books.service';
import CreateBookDto from '../dto/create-book.dto';

@Controller('books')
export default class BooksController {
  constructor(private readonly bookServices: BooksServices) {}
  @Post('post')
  postBook( @Body() genre: CreateBookDto) {
    return this.bookServices.insert(genre);
  }

  @Get()
  getAll() {
    return this.bookServices.getAllBooks();
  }
}

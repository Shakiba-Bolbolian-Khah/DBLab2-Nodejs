import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './db/user/user.module';
import BooksModule from './db/books/books.module';
import GenreModule from './db/genre/genre.module';
import UserEntity from './db/user.entity';
import BookEntity from './db/book.entity';
import GenreEntity from './db/genre.entity';

@Module({
  imports: [HelloModule,
        UserModule ,
        BooksModule,
        GenreModule,
        TypeOrmModule.forFeature(
        [UserEntity, BookEntity , GenreEntity],
        ),

        TypeOrmModule.forRoot({
          type: "postgres",     
          host: "localhost",     
          port: 5432,     
          username: "postgres",
          password: "shakiba-db",     
          database: "books",
          entities: [
            "dist/db/**/*.js"
          ],
          synchronize: true 
        }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
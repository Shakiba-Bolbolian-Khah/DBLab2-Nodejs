import BookEntity from '../book.entity';
import CreateBookDto from '../dto/create-book.dto';
import EditBookDto from '../dto/edit-book.dto';
import UserEntity from '../user.entity';
import { createQueryBuilder, getConnection } from 'typeorm';
import GenreEntity from '../genre.entity';

export default class BooksService {

  async insert(bookDetails: CreateBookDto): Promise<BookEntity> {
    console.log(bookDetails)
    const { name , userID , genreIDs } = bookDetails;
    const book = new BookEntity();
    book.name = name;
    book.user = await UserEntity.findOne(userID) ;
    book.genres=[];
    console.log(bookDetails.genreIDs.length)
    console.log(genreIDs.length)
    for ( let i = 0; i < genreIDs.length ; i++)
    {
             const genre = await GenreEntity.findOne(genreIDs[i]);
             book.genres.push(genre);
    }
    await book.save();
    return book;
  }

  async getAllBooks(): Promise<BookEntity[] > {
    // const user: UserEntity = await UserEntity.findOne({where: {id: 2}, relations: ['books']});
    return BookEntity.find();
  }

  async update(bookDetails: EditBookDto): Promise<BookEntity> {
    const { bookID, name , userID , genreIDs } = bookDetails;
    var book = BookEntity.findOne(bookID);
    
    if(bookDetails.name)
      (await book).name = name;

    if(bookDetails.userID)
      (await book).user = await UserEntity.findOne(userID);


    if(genreIDs)
    {
      const genres = [];
      for(let i = 0; i < genreIDs.length; i++)
      {
        const genre = await GenreEntity.findOne(genreIDs[i]);
        genres.push(genre);
      }
      (await book).genres = genres;
    }

    BookEntity.update(bookID, await book);

    return book;
  }

  async delete(bookID: number): Promise<BookEntity> {
    const book = await BookEntity.findOne(bookID);
    BookEntity.delete(bookID);
    return book; 
  }
}
import * as dotenv from "dotenv";
dotenv.config({ path: 'C:/nest-test/bookstest/connection.env' })
//console.log(process.env.connection)
import { Module } from '@nestjs/common';
/*import { BooksController } from './books/Books.controller';
import { BooksService,BooksSchema } from './books/books.service';*/
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from'@nestjs/mongoose';
import { BooksModule } from "./books/books.module";

@Module({
  imports: [BooksModule, MongooseModule.forRoot(process.env.connection)],
  providers: [],
  controllers: []
})
export class AppModule {}


import { Controller,Get,Post,Delete,Put } from '@nestjs/common';
import * as mongoose from 'mongoose'
import {BooksSchema,BooksService,BooksDocument} from "./books.service"

@Controller('api/books:id')
export class BooksController {
    [x: string]: any;
    Book: any;
    constructor(){
    this.BooksService=BooksService
    }
    @Get()
    getBook(id) {
        return this.BooksService.Book.findById({id, function(err, doc){
            //mongoose.disconnect();
             
            if(err) return console.log(err);
             
            console.log(doc);
        }
    }
        )
    
    }
    @Put()
    updateBook(id,book1) {
        return this.BooksService.Book.findByIdAndUpdate({id,book1,function(err:any){
     
            //mongoose.disconnect();
            if(err) return console.log(err);
            console.log("Обновленный объект")
        }
        }
        )
    }
        @Post('api/books')
        createBook(book123)    {
            return book123.save()
        }
    
    @Delete()
    deleteBook(id) {
        return this.BooksService.Book.findByIdAndDelete(id, function(err, doc){
            //mongoose.disconnect();
             
            if(err) return console.log(err);
             
            console.log("Удален пользователь ", doc);
        });
    }
    
    
}
function deleteBook(id: any):string {
    throw new Error('Function not implemented.');
}



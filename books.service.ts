import { Injectable } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from'@nestjs/mongoose';
import { Document } from'mongoose';
import * as mongoose from 'mongoose'

export type  BooksDocument =BooksService & Document

@Schema()
export class BooksService {
  static title: string;
   constructor(){
    var Book = mongoose.model("Book", BooksSchema)
    var book = new Book({
        title: "opfjda",
        description: "amkmaf",
        authors: ["akm"],
        favorite: "kfan",
        fileCover: "amdf",
        fileName:"nafkd"
    })}
    @Prop()
    title:string
    @Prop()
    description:string
    @Prop()
    authors:string[]
    @Prop()
    favorite: string
    @Prop()
    fileCover:string
    @Prop()
    fileName:string
}
export const BooksSchema = SchemaFactory.createForClass(BooksService)

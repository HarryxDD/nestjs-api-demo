import * as mongoose from 'mongoose';

export const ProductsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
});

export interface Product extends mongoose.Document {
    id: string;
    title: string;
    description: string;
    price: number;
}

// export class Product {
//     // id: string;
//     // title: string;
//     // description: string;
//     // price: number;

//     constructor(
//         public id: string, 
//         public title:string, 
//         public desc: string, 
//         public price: number,
//     ) {
//         // this.id = id;
//         // this.title = title;
//         // this.description = desc;
//         // this.price = price;
//     }
// }
export class BookModel {
    id: number;
    userID: number;
    title: string; 
    author: string;
    numberBooks: number;
    description: string;
    location: string;
    disponibility: string;
}

export class BookModelReturned {
    id: number;
    bookID;
    user: number;
    title: string; 
    author: string;
}
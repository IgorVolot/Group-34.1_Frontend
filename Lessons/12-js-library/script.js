const library = [];
// isbn;title;author;year
let inputData = prompt('Enter book data separate by ";"');

/*
11111;book1;author1;2001
22222;book2;author2;2002
33333;book3;author3;2003
11111;book4;author2;2001
4444;book4;author5;1967
 */

// class Book {
//     constructor(isbn, title, author, year) {
//         this.isbn = isbn;
//         this.title = title;
//         this.author = author;
//         this.year = +year;
//     }
//
//     toString() {
//         return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of Issue: ${this.year}`;
//     }
// }

// while (inputData) {
//     // create and add to library only unique book by isbn
//     const arr = inputData.split(';');
//     if(findBook(library, arr[0] ) === -1){
//         const book = new Book(arr[0], arr[1], arr[2], arr[3]);
//         library.push(book);
//     }
//
//     inputData = prompt('Enter book data separate by ";"');
// }


while (inputData) {
    const bookData = inputData.split(';');
    // const book = new Book(...bookData);

    if (findBook(library, bookData[0]) === -1) {
        const book = new Book(bookData[0], bookData[1], bookData[2], bookData[3]);
        library.push(book);
    }
    inputData = prompt('Enter book data separate by ";"');
}

printLibrary(library);

function printLibrary(library) {
    console.log('====================');
    // console.table(library);

    for (let i = 0; i < library.length; i++) {
        console.log(library[i].toString());
    }
    console.log('====================');
}

function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            return i;
        }
    }
    return -1;
}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISB: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, year of issue: ${this.year}`;
    }
}

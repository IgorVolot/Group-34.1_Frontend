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

while (inputData) {
    const bookData = inputData.split(';');
    if (findBook(library, bookData[0]) === -1) {
        const book = new Book(bookData[0], bookData[1], bookData[2], bookData[3]);
        library.push(book);
    }
    inputData = prompt('Enter book data separate by ";"');
}

printLibrary(library);

function printLibrary(library) {
    for (let i = 0; i < library.length; i++) {
        const newLiText = document.createTextNode(library[i].toString());
        const newLi = document.createElement('li');
        newLi.appendChild(newLiText);
        result.appendChild(newLi);
    }
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

const addBook = document.getElementById('addBook');
const printBooks = document.getElementById('printBooks');

const library = [];

result.style.border = '1px solid black';
sortedBook.style.border = '1px solid blue';

addBook.onclick = function () {
    if (findBook(library, isbn.value) === -1) {
        const book = new Book(isbn.value, title.value, author.value, year.value);
        library.push(book);
    } else {
        alert(`Book with isbn = ${isbn.value} exists`);
    }
    isbn.value = title.value = author.value = year.value = '';
}

printBooks.onclick = function () {
    // clear sortedBook
    while (sortedBook.firstElementChild){
        sortedBook.removeChild(sortedBook.firstElementChild);
    }

    const sortedList = document.createElement('sortedBook')

    const list = document.createElement('ol');
    for (let i = 0; i < library.length; i++) {
        const text = document.createTextNode(library[i].toString());
        const li = document.createElement('li');
        li.appendChild(text);
        list.appendChild(li);
    }

    const bookOldest = library.reduce((accum, b) => b.year < accum.year ? b : accum);
    const bookNewest = library.reduce((accum, b) => b.year > accum.year ? b : accum);
    const bookOldestP = document.createElement('p');
    bookOldestP.append(`Oldest book: ${bookOldest.toString()}`);
    const bookNewestP = document.createElement('p');
    bookNewestP.append(`Newest book: ${bookNewest.toString()}`);

    // container.append(list, bookNewestP, bookOldestP);

    if (result.firstElementChild) {
        result.replaceChild(list, result.firstElementChild);
        sortedBook.replaceChild(sortedList, sortedBook.firstElementChild);
    } else {
        result.appendChild(list);
        sortedBook.appendChild(sortedList);
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
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, year of issue: ${this.year}`;
    }
}

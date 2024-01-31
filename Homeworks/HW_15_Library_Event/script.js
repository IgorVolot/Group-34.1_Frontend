const addBook = document.getElementById('addBook');
const printBooks = document.getElementById('printBooks');

const library = [];
const sortedList = [];

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
    const list = document.createElement('ol');
    for (let i = 0; i < library.length; i++) {
        const text = document.createTextNode(library[i].toString());
        const li = document.createElement('li');
        li.appendChild(text);
        list.appendChild(li);
    }
    if (result.firstElementChild) {
        result.replaceChild(list, result.firstElementChild);
    } else {
        result.appendChild(list);
    }

    sortLibrary(library, year);
    const minMaxBooksList = document.createElement('ul');
    for (let i = 0; i < sortedList.length; i++) {
        const text = document.createTextNode(sortedList[i].toString());
        const li = document.createElement('li');
        li.appendChild(text);
        minMaxBooksList.appendChild(li);
    }
    sortedBook.appendChild(minMaxBooksList);
}

function sortLibrary(library, sortBy) {
    if (sortBy === year) {
        library.sort((a, b) => a.year - b.year);
        const oldestBook = library[0];
        const newestBook = library[library.length - 1];
        sortedList.push(oldestBook, newestBook);
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

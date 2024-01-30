const addBook = document.getElementById('addBook');
const printBooks = document.getElementById('printBooks');
const library = [];
result.style.border = '1px solid black';

addBook.onclick = function () {
    // Collect data from inputs, create new book and add new book to library if this book unique
    const isbnInput = document.getElementById('isbn');
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const yearInput = document.getElementById('year');
    const resultDiv = document.getElementById('result');

    const isbn = isbnInput.value.trim();
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const year = yearInput.value.trim();

    if (isbn === '' || title === '' || author === '' || year === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Check if the book with the same ISBN already exists in the library
    const existingBookIndex = findBook(library, isbn);
    if (existingBookIndex !== -1) {
        alert('A book with the same ISBN already exists in the library.');
        return;
    }

    // Create a new Book object and add it to the library
    const book = new Book(isbn, title, author, year);
    library.push(book);

    // Clear the input fields
    isbnInput.value = '';
    titleInput.value = '';
    authorInput.value = '';
    yearInput.value = '';

    // Notify the user that the book has been added
    // alert('The book has been successfully added to the library.');
}

printBooks.onclick = function () {
    // Create ordered list, add all books from library to list as list items. And add list to div with id=result
    // If div with id = result isn't empty, then replace its child.
    // Hint: look Clock application

    const resultDiv = document.getElementById('result');

    // Clear the previous content in the resultDiv (remove this method if alternative replace method is in use)
    while (resultDiv.firstChild) {
        resultDiv.removeChild(resultDiv.firstChild);
    }

    // Create an ordered list element
    const orderedList = document.createElement('ol');

    // Add each book from the library as list items
    for (let i = 0; i < library.length; i++) {
        const book = library[i];
        const listItem = document.createElement('li');
        listItem.textContent = book.toString();
        orderedList.appendChild(listItem);
    }

    // Append the ordered list to the resultDiv (remove this method if alternative replace method is in use)
    resultDiv.appendChild(orderedList);

    // Alternative replace method
    // if (resultDiv.firstChild) {
    //     resultDiv.replaceChild(orderedList, resultDiv.firstChild);
    // } else {
    //     resultDiv.appendChild(orderedList);
    // }
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

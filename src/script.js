const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title,
    this.author = author,
    this.pages = pages, 
    this.isRead = isRead,
    this.info = () => {
        return `${title} by ${author}, ${pages} pages, ${isRead ? 'done reading' : 'not read yet'}`;
    }
}

function addBookToLibrary() {
    const newTitle = window.prompt("What is the title of the book you would like to add to the library?");
    const newAuthor = window.prompt("Who wrote this book?");
    const newPages = parseInt(window.prompt("How many pages does this book have?"));
    const newIsRead = window.prompt("Have you completed reading this book?") == 'yes' ? true : false;
    
    const newBook = new Book(newTitle, newAuthor, newPages, newIsRead);

    myLibrary.push(newBook);
    updateBookShelf();
    return myLibrary;
}

const addBtn = document.getElementById("add");
window.addEventListener('click', addBookToLibrary)

const bookShelf = document.getElementById("bookShelf");
const updateBookShelf = () => {
    myLibrary.forEach((book) => {
        console.log(book);
        bookShelf.innerHTML += `<div class='border rounded-md'>${book.title}</div>`;
    })
}


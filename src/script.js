const myLibrary = [];

function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages, 
    this.isRead = false, // Toggle to true below
    this.info = () => {
        return `${title} by ${author}, ${pages} pages.`;
    }
}

const addBookToLibrary = (e) => {
    e.preventDefault();
    const newTitle = window.prompt("What is the title of the book you would like to add to the library?");
    const newAuthor = window.prompt("Who wrote this book?");
    const newPages = parseInt(window.prompt("How many pages does this book have?"));
    
    const newBook = new Book(newTitle, newAuthor, newPages);

    myLibrary.push(newBook);
    updateBookShelf();
    return myLibrary;
}

const addBtn = document.getElementById("add");
addBtn.addEventListener("click", addBookToLibrary);

const bookShelf = document.getElementById("bookShelf");
const updateBookShelf = () => {
    bookShelf.innerHTML = '';
    let bookCount;
    
    myLibrary.forEach((book) => {
        const bookBlock = document.createElement('div');
        bookBlock.innerHTML = `<h3 class='font-semibold text-center'>${book.title}</h3><span class='text-center'> by ${book.author}</span>`;
        bookBlock.classList.add("h-28","w-20","border-3","border-green-400","bg-gray-100","bg-opacity-80","text-blue-800","rounded-md","items-center","justify-center","flex","flex-col");
        bookBlock.setAttribute("id", "book");
        bookCount = document.querySelectorAll("#book").length;
        bookBlock.setAttribute("data-book-count", bookCount);
        // console.log(bookCount);
        bookShelf.append(bookBlock);
        
        // bookShelf.innerHTML += `<div id='book' class='h-28 w-20 border-3 border-green-400 bg-gray-100 bg-opacity-80 text-blue-800 rounded-md items-center justify-center flex flex-col' data-isRead=${book.isRead}></div>`;
        // if (book.getAttribute("data-isread") == 'false') {
        //     console.log(book);
        // }
    })

    const books = document.querySelectorAll('#book');
    books.forEach((book) => {
        
    })
}


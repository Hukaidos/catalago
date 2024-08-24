function loadBooks() {
    const booksJSON = localStorage.getItem('books');
    return booksJSON ? JSON.parse(booksJSON) : [];
}

function saveBooks(books) {
    localStorage.setItem('books', JSON.stringify(books));
}

function displayBooks(bookArray) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    bookArray.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} - ${book.author} (${book.year}) [${book.genre}]`;
        bookList.appendChild(li);
    });
}

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const year = document.getElementById('year').value;

    if (title && author && genre && year) {
        const newBook = { title, author, genre, year: parseInt(year) };
        const books = loadBooks();
        books.push(newBook);
        saveBooks(books);
        displayBooks(books);

        
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('genre').value = '';
        document.getElementById('year').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function searchBook() {
    const query = document.getElementById('search').value.toLowerCase();
    const books = loadBooks();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks);
}


document.addEventListener('DOMContentLoaded', () => {
    const books = loadBooks();
    displayBooks(books);
});

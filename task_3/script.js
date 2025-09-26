const bookForm = document.getElementById('bookForm');
const bookList = document.getElementById('bookList');

const API_URL = 'http://localhost:3000/books';

async function fetchBooks() {
  const res = await fetch(API_URL);
  const books = await res.json();
  bookList.innerHTML = '';
  books.forEach(book => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span><strong>${book.title}</strong> by ${book.author}</span>
      <button onclick="deleteBook(${book.id})">Delete</button>
    `;
    bookList.appendChild(li);
  });
}

bookForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, author })
  });

  bookForm.reset();
  fetchBooks();
});

async function deleteBook(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  fetchBooks();
}

fetchBooks();

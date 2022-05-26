let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title 
  this.author = author
  this.pages = pages
  this.read = read

}

function addBookToLibrary() {
    //do stuff here...
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;
  const newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook); 
}

function loadLibrary(bookArray){
    //loop through array and display each book on page...
    for(i = 0; i < bookArray.length; i++){
        book = myLibrary[i]
        createCard(book); 
        

    }
}

function createCard(book){
  const grid = document.querySelector('.book-grid');
    //For each book in the library take all of the contents, turn it into a little card, and append it to the dom 
    const card = document.createElement('div');
    card.classList.add('card');
    //add content to the card 
   const title = document.createElement('h4');
  title.textContent = `Title: ${book.title}`;
  card.appendChild(title);

  const author = document.createElement('h4');
  author.textContent = `Author: ${book.author}`;
  card.appendChild(author);

  const pages = document.createElement('h4');
  pages.textContent = `Pages: ${book.pages}`;
  card.appendChild(pages);

  const read = document.createElement('h4');
  read.textContent = `Read: ${book.read}`;
  card.appendChild(read);

  grid.appendChild(card);
    
}

function clearGrid(){
  const grid = document.querySelector('.book-grid');

  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  
}

const addBook = document.querySelector('.new-book');
addBook.addEventListener('click', function(){
  document.querySelector('.form').classList.add('active')
})

const submit = document.querySelector('.submit-btn');
submit.addEventListener('click', function(event){
  document.querySelector('.form').classList.remove('active')
  addBookToLibrary();
clearGrid(); 
  loadLibrary(myLibrary);
  event.preventDefault();
})





let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title 
  this.author = author
  this.pages = pages
  this.read = read

}


Book.prototype.toggleReadStatus = function(){
  if (this.read === true){
    this.read = false;
  } else if (this.read === false){
    this.read = true;

  }
}




function addBookToLibrary() {
    //Take user's input and add to object array 
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    const newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook); 
}

function loadLibrary(){
    //loop through array and display each book on page...
    for(i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i]
        createCard(book, i); 
    }
}

function createCard(book, index){
  const grid = document.querySelector('.book-grid');
  const card = document.createElement('div');
  card.classList.add('card-body');
  
  //assign each card an id 
  card.setAttribute('id', index);
  
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

  const removeBtn = document.createElement('div');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove-btn');

  removeBtn.addEventListener('click', function(){
  myLibrary.splice(index, 1);
  clearGrid();
  loadLibrary(); 
  })
  card.append(removeBtn);

  const readStatusBtn = document.createElement('div');

  console.log(book.read);
   
  if(book.read === true){

    
    readStatusBtn.textContent = 'Read';
    readStatusBtn.classList.add('read-btn');
  
  } else{
      readStatusBtn.textContent = 'Unread';
    readStatusBtn.classList.add('unread-btn');
    }
    
  card.append(readStatusBtn);

  readStatusBtn.addEventListener('click', function(){
    book.toggleReadStatus();
    if(book.read === true){

      readStatusBtn.classList.remove('unread-btn');
      readStatusBtn.textContent = 'Read';
      readStatusBtn.classList.add('read-btn');
    
    } else{
      readStatusBtn.classList.remove('read-btn');
        readStatusBtn.textContent = 'Unread';
      readStatusBtn.classList.add('unread-btn');
      }
      
    
  })
  


  grid.appendChild(card);

}




//Display form when new book button is clicked
const newBookBtn = document.querySelector('.new-book');
newBookBtn.addEventListener('click', function(){
  document.querySelector('form').classList.add('active');
})

const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', function(e){
  document.querySelector('form').classList.remove('active');
  addBookToLibrary();
  clearGrid();
  loadLibrary();
  e.preventDefault();
} )

function clearGrid(){
  const grid = document.querySelector('.book-grid');
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
}







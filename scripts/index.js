const addForm = document.querySelector(".addForm");
const form = document.querySelector("form");
const submitBook = document.querySelector("#submitBtn");
const modal = document.querySelector("#dialog");
const libraryContainer = document.querySelector(".cards-container");

// Book library array
const myLibrary = [];

// Book constructor
function Book(title, author, pages){
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// add book to library
function addBookToLibrary(){
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");

  // check if input.value is empty
  if (title.value === "" && author.value === "" && pages.value === ""){
    alert("Please fill out this form");
    return;
  } else {
    // new Book instance
    const newBook = new Book(title.value, author.value, pages.value);

    // push the newBook instance to myLibrary array
    myLibrary.push(newBook);

    // render the books on the ui
    updateDisplay();
  }
}

// render books ui
function updateDisplay(){
  // loop over the books in myLibrary to avoid duplicates
  for (let i = 0; book = myLibrary, i <= myLibrary.length; i++){
    // libraryContainer.innerHTML = "";

    libraryContainer.innerHTML += 
    `
    <div class="card" id="${i}">
    <h3 class="title">${myLibrary[i].title}</h3>
    <p class="author">${myLibrary[i].author}</p>
    <p class="pages">${myLibrary[i].pages} Pages</p>
    <button id="read" onclick="toggleReadStatus(this)">Read</button>
    <button class="deleteBtn" onclick="deleteBook(this)"><img src="icons/delete.svg" alt="delete svg icon">Delete</button>
    </div> 
    `;

    // remove any duplicates
    book.splice(myLibrary[i], 1);
  }
}

// toggleReadStatus(): can't figure out
function toggleReadStatus(event){
  if (event.target.innerText === "Read"){
    event.target.innerText = "Not Read"
  } else {
    event.target.innerText = "Read"
  }
}

// deleteBook function
function deleteBook(button){
  // find the book index
  const bookIndex = myLibrary.findIndex(
    (book) => book.id === button.parentElement.id
  )
  
  // remove from ui
  button.parentElement.remove();
  myLibrary.splice(bookIndex, 1);
}

// open modal
addForm.addEventListener("click", ()=>{
  form.reset();
  modal.showModal();
});

// submit modal and form
submitBook.addEventListener("click", (event)=>{
  addBookToLibrary();
  event.preventDefault();
  modal.close()
});
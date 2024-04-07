const displayMessage = document.querySelector(".message");
const addNewBook = document.querySelector(".addForm");
const modal = document.querySelector("dialog");
const submitForm = document.querySelector("#submitBtn");
const libraryContainer = document.querySelector(".cards-container");
const form = document.querySelector("form");
const readBtn = document.getElementById("read");

// myLibrary array
const myLibrary = [];

// Book constructor
function Book(title, author, pages){
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addToLibrary(){
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");

  // check if input is empty
  if(title.value ==="" && author.value === "" & pages.value === ""){
    return;
  } else {
    const newBook = new Book(title.value, author.value, pages.value);
    myLibrary.push(newBook);

    // update display
    updateDisplay(myLibrary);
  }
}

// add to the ui 
function updateDisplay(){
  //  loop through the myLibrary to find duplicate and insert to the ui
  for (let i = 0; books = myLibrary, i <= myLibrary.length; i++){
    libraryContainer.innerHTML += `
    <div class="card">
    <h3 class="title">${myLibrary[i].title}</h3>
    <p class="author">${myLibrary[i].author}</p>
    <p class="pages">${myLibrary[i].pages} Pages</p>
    <button id="read">Read</button>
    <button class="deleteBtn"><img src="icons/delete.svg" alt="delete svg">Delete</button>
    </div>
    `;
    books.splice(myLibrary[i], 1);
  }
}

addNewBook.addEventListener("click", ()=>{
  form.reset();
  modal.showModal();
});

submitForm.addEventListener("click", (event)=>{
  addToLibrary();
  event.preventDefault();
  modal.close();
});


function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => console.log(json))
    .catch((error) => console.error("Error fetching books:", error));
  /*if books cant be fetteched*/
}

function fetchBooks() {
  // Fetch the data and return the fetch promise.
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((books) => renderBooks(books))
    .catch((error) => console.error("Error fetching books:", error));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  main.innerHTML = ''; /*Clear the main element before rendering new books.*/
  books.forEach((book) => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks().then(() => {
    console.log("Books fetched and rendered.");
  });
});

////////////////////////////////////////////////////////////////////


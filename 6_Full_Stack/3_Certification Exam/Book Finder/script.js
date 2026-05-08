// Click handler for search button
const captureSearchValue = () => {
  const input = document.querySelector('input#search-bar')
  return input.value;
};

// Filter books based on search input
const filterBooks = (search, bookList) => {
  const booksToCompare = flattenObjectValuesIntoArray(bookList);
  return bookList.filter((book, index) => {
    return booksToCompare[index].some((value) => {
      return value.toString().toLowerCase() === search.toLowerCase()
    })
  })
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = (bookList) => {
  return bookList.map((book) => {
    return structureBookAsHtml(book)
  })
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (bookList) => {
  const search = captureSearchValue();
  const filteredBooks = filterBooks(search, bookList);
  const htmlBooks = structureBooksAsHtml(filteredBooks);
  renderBooksToDom(htmlBooks);
}

// Grab search button from the DOM
const searchBtn = document.getElementById("search-btn");

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });
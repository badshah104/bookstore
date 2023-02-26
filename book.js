// Define a list of books with their properties
const books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 10.99,
      image: 'https://images.pexels.com/photos/1058273/pexels-photo-1058273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald.'
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 9.99,
      image: 'https://images.pexels.com/photos/1719239/pexels-photo-1719239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: 'To Kill a Mockingbird is a novel by Harper Lee published in 1960.'
    },
    {
      title: '1984',
      author: 'George Orwell',
      price: 12.99,
      image: 'https://images.pexels.com/photos/5335904/pexels-photo-5335904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      description: '1984 is a dystopian novel by English author George Orwell.'
    }
  ];
  
  // Get the book list element
  const bookList = document.querySelector('.book-list');
  
  // Create a function to display books on the page
  function displayBooks() {
    // Clear the existing book list
    bookList.innerHTML = '';
  
    // Loop through the books array and create a book element for each book
    books.forEach(book => {
      // Create the book element
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');
  
      // Create the book image element
      const bookImage = document.createElement('img');
      bookImage.src = book.image;
      bookElement.appendChild(bookImage);
  
      // Create the book title element
      const bookTitle = document.createElement('h3');
      bookTitle.textContent = book.title;
      bookElement.appendChild(bookTitle);
  
      // Create the book author element
      const bookAuthor = document.createElement('p');
      bookAuthor.textContent = `Author: ${book.author}`;
      bookElement.appendChild(bookAuthor);
  
      // Create the book description element
      const bookDescription = document.createElement('p');
      bookDescription.textContent = book.description;
      bookElement.appendChild(bookDescription);
  
      // Create the book price element
      const bookPrice = document.createElement('p');
      bookPrice.classList.add('price');
      bookPrice.textContent = `$${book.price}`;
      bookElement.appendChild(bookPrice);
  
      // Create the buy button element
      const buyButton = document.createElement('button');
      buyButton.textContent = 'Buy Now';
      bookElement.appendChild(buyButton);
  
      // Add the book element to the book list
      bookList.appendChild(bookElement);
    });
  }
  
  // Call the displayBooks function to initially display the books on the page
  displayBooks();
  
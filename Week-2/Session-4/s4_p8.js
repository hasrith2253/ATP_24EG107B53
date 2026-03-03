/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc./*
*/


class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = true;
  }

  borrow() {  
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(` "${this.title}" has been borrowed.`);
    } else {
      console.log(` "${this.title}" is already borrowed.`);
    }
  }

  returnBook() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      console.log(` "${this.title}" has been returned.`);
    } else {
      console.log(`  "${this.title}" was already available.`);
    }
  }

  getInfo() {
    return `"${this.title}" by ${this.author} (${this.pages} pages)`;
  }

  isLongBook() {
    return this.pages > 300;
  }
}

const books = [                // created books of 5 entries
  new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling",       309),
  new Book("1984",                                  "George Orwell",      328),
  new Book("The Hobbit",                            "J.R.R. Tolkien",     310),
  new Book("The Alchemist",                         "Paulo Coelho",       208),
  new Book("To Kill a Mockingbird",                 "Harper Lee",         281),
];
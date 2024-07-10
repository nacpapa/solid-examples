class Library {
  private books: { [title: string]: boolean } = {};

  addBook(title: string): void {
    this.books[title] = true;
  }

  borrowBook(title: string): boolean {
    if (this.books[title]) {
      this.books[title] = false;
      return true;
    }
    return false;
  }

  returnBook(title: string): void {
    this.books[title] = true;
  }

  generateReport(): string {
    return Object.entries(this.books)
      .map(
        ([title, available]) =>
          `${title}: ${available ? "Available" : "Borrowed"}`
      )
      .join("\n");
  }
}

// Uso
const library = new Library();
library.addBook("Moby Dick");
library.addBook("The Great Gatsby");
library.borrowBook("Moby Dick");
console.log(library.generateReport());

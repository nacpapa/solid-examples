// class Book {
//     constructor(private title: string, private available: boolean = true) {}

//     getTitle(): string {
//       return this.title;
//     }

//     isAvailable(): boolean {
//       return this.available;
//     }

//     borrow(): boolean {
//       if (this.available) {
//         this.available = false;
//         return true;
//       }
//       return false;
//     }

//     return(): void {
//       this.available = true;
//     }
//   }

//   class Library {
//     private books: Map<string, Book> = new Map();

//     addBook(title: string): void {
//       const book = new Book(title);
//       this.books.set(title, book);
//     }

//     borrowBook(title: string): boolean {
//       const book = this.books.get(title);
//       if (book) {
//         return book.borrow();
//       }
//       return false;
//     }

//     returnBook(title: string): void {
//       const book = this.books.get(title);
//       if (book) {
//         book.return();
//       }
//     }

//     getBooks(): Book[] {
//       return Array.from(this.books.values());
//     }
//   }

//   class ReportGenerator {
//     generateLibraryReport(library: Library): string {
//       return library.getBooks()
//         .map(book => `${book.getTitle()}: ${book.isAvailable() ? 'Available' : 'Borrowed'}`)
//         .join('\n');
//     }
//   }

//   // Uso
//   const library = new Library();
//   library.addBook('Moby Dick');
//   library.addBook('The Great Gatsby');
//   library.borrowBook('Moby Dick');

//   const reportGenerator = new ReportGenerator();
//   console.log(reportGenerator.generateLibraryReport(library));

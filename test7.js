class Book{
    constructor(title, author){
        this.title=title;
        this.author=author;
        this.isAvailable =true;
    }

    checkOut(){
        if (this.isAvailable){
            this.isAvailable=false;
            return true;
        }
        return true;
    }

    returnBook(){
        this.isAvailable=true;
    }
}

class Library{
    constructor(){
        this.books=[];
    }

    addBook(book){
        this.books.push(book);
    }

    cekOutBook(title){
        const book =this.books.find(b => b.title === title && b.isAvailable);
        if (book){
            book.checkOut();
            console.log("You've checked out"+book.title+" by "+book.author);
        }else {
            console.log("Sorry"+title+"is not availabale");
        }
    }

    returnBook(title){
        const book = this.books.find(b=> b.title === title && !b.isAvailable );
        if (book){
            book.returnBook();
            console.log("You've returned"+book.title+". Thank you!");
        }else{
            console.log(title+"Was not cheked out or doesn't exist");
        }
    }

    listAvailableBooks(){
        console.log("Available books:")
        this.books.forEach(book=>{
            if (book.isAvailable){
                console.log(book.title+" by "+book.author);
            }
        });
    }
}

const myLibrary=new Library()
myLibrary.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald"));
myLibrary.addBook(new Book("1984", "George Orwell"));
myLibrary.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));

myLibrary.listAvailableBooks();
myLibrary.cekOutBook("1984");
myLibrary.listAvailableBooks();
myLibrary.returnBook("1984");

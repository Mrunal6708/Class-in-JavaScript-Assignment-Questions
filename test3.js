//Constructor function for Book
function Book(title, author){
    this.title =title;
    this.author=author;
}

//Adding a method to the pretotype
Book.prototype.displayInfo =function(){
    console.log("Title:"+this.title,  "  Author:"+this.author);
};

//Creating book instances
const book1 =new Book("Pride And Prejudice"," Jane Austen");
const book2 =new Book("The Old Man And The Sea","Ernest Hemingway");

//Displaying book information
book1.displayInfo();
book2.displayInfo();
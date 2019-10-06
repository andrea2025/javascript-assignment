
//object of a book

var book = {
    title : "Alice in wonderland",
    author : "alice Smith",
    pages : 300,
    chapters : 7
};
for(let x in book){
    alert(x);
}
    console.log(Object.values(book));

 book.author="jemnny";
 book.description = "Adventure related"
console.log (book.author,book.title,book.description);
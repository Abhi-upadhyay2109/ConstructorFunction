function Author(name,dob,nation){
    this.name = name;
    this.dob = dob;
    this.nation = nation;
}

function Book(title,author,gener,price){
    this.title = title;
    this.author = author;
    this.gener = gener;
    this.price = price;
}

let myform = document.querySelector("#authorData");


let data =[]
let BookData =[]

myform.addEventListener("submit",function(e){
    e.preventDefault();
    let authorName = document.getElementById("authorName").value;
    let authorDob = document.getElementById("authorDob").value;
    let authorNation = document.getElementById("authorNation").value;


    author1 = new Author(authorName,authorDob,authorNation)

    data.push(author1);
    
    console.log(author1);

   myform.reset();

})


let bookData = document.querySelector("#bookData");

bookData.addEventListener("submit",function(event){
      event.preventDefault();
      let bookName = document.getElementById("bookName").value;
      let bookGener = document.getElementById("bookGener").value;
      let bookPrice = document.getElementById("bookPrice").value;
      
      let book = new Book(bookName, data[0],bookGener,bookPrice)

      data = [] 
      console.log(book);

      bookData.reset();

})
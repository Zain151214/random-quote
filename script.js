let btn = document.getElementById("btn");

let quote = document.getElementById("quote");

let author = document.getElementById("author");

btn.addEventListener("click", function(){

    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = `"${data.content}"` ;
        author.innerHTML = data.author;        
    }); 
      
});













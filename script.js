let btn=document.getElementById("b1");
let quotesid=document.getElementById("msg");
let writtenby=document.getElementById("msg2");

btn.addEventListener("click" , ()=>{

var quotes={
    "-Theodore Roosevelt":'"Believe you can and you’re halfway there."',
    "-Søren Kierkegaard":'"Life can only be understood backwards; but it must be lived forwards.  "',
    "-Bruce Lee ":'"If you spend too much time thinking about a thing, you’ll never get it done. "',
    "-Forrest Gump":'"Life is like a box of chocolates. You never know what you’re going to get. "',
    "-Albert Camus ":'" The realization that life is absurd cannot be an end, but only a beginning. "',
    "-Seneca":'" Not how long, but how well you have lived is the main thing. "',
    "-Tony Robbins":'" The quality of your life is directly related to how much uncertainty you can comfortably handle. "'
};
    var authors= Object.keys(quotes);
    var author=authors[Math.floor(Math.random() * authors.length)];

    var newquotes= quotes[author];
    quotesid.innerHTML=newquotes,author;
    writtenby.innerText=author;


    


});
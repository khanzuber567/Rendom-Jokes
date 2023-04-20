
// let button = document.querySelector('button')

// async function getjoke(){
    
//     const response = await fetch('https://api.chucknorris.io/jokes/random')
//     const joke = await response.json()
//     let heading = document.querySelector("h5")
//     heading.innerText = joke.value

// }
// button.addEventListener("click" , getjoke)


let quote_btn = document.querySelector('#quote-btn')

async function getQuote(){
    
    const response = await fetch('https://quotable.io/random')
    const quote = await response.json()
    const quote_heading = document.querySelector('#quote-heading')
    const quote_author = document.querySelector('.card-text')
   quote_author.innerText = quote.author
   quote_heading.innerText = quote.content
}

quote_btn.addEventListener("click" , getQuote)
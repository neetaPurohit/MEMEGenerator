const generateMemeBtn = document.querySelector('.generate-meme-button')
const memeImage = document.querySelector("img")
const memeTitle = document.querySelector(".meme-title")
const memeAuthor = document.querySelector(".meme-author")

const updateDetails = (url,title,author) =>{
   memeImage.setAttribute("src",url);
   memeTitle.innerHTML = title;
   memeAuthor.innerHTML = author;
}

const generateMeme = ()=>{
  fetch("https://meme-api.com/gimme/wholesomememes")
  .then(Response => Response.json()
  .then(data =>{
    updateDetails(data.url,data.title,data.author)
  }))
}

generateMemeBtn.addEventListener("click",generateMeme)

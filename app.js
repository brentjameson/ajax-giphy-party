console.log("Let's get this party started!");

let giphyForm = document.querySelector('#giphyForm')
let submitBtn = document.querySelector('submitBtn')

giphyForm.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('it is working')
})

// api.giphy.com/v1/gifs/search

// http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym

async function giphy() {
    const response = await axios.get('http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym', {params: {limit: 1}})
    for(let gif of response.data.data) {
        const newImg = document.createElement('img');
        newImg.src = gif.url
        document.body.append(newImg);
    }
}
giphy();



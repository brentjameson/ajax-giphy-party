let giphyForm = document.querySelector('#giphyForm')
let submitBtn = document.querySelector('#submitBtn')
let removeBtn = document.querySelector('#removeBtn')

giphyForm.addEventListener('submit', function(event){
    event.preventDefault();
    let searchInput = document.querySelector('input[type="text"]')
    giphy(searchInput.value)
})

removeBtn.addEventListener('click', function(event){
    let allDivs = document.querySelectorAll('div')
    // allDivs[0].innerHTML = '';
    for (let div of allDivs){
        div.parentNode.removeChild(div)
    }
    
})

async function giphy(search) {
    const response = await axios.get('http://api.giphy.com/v1/gifs/random', {params: {api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym', tag: search}})
        const newImg = document.createElement('img');
        newImg.src = response.data.data.images.original.url
        const newDiv = document.createElement('div')
        document.body.append(newDiv)
        newDiv.append(newImg);
}



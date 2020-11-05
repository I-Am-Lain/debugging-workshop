const form = document.getElementById('joke-form')
const jokeList = document.getElementById('joke-list')
let username = document.getElementById('name-input').value
let joke;


function fetchJoke(){
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      "Accept": "application/json"
    }
  })
  .then(res => res.json())
  .then(jokeData => renderJoke(jokeData))
}

function renderJoke(jData){
  const newJokeLi = document.createElement('li')
  
  newJokeLi.innerHTML = `<span class="username">${username} says:</span> ${jData.joke}`
  jokeList.appendChild(newJokeLi)
}


function addFormEvent(){
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    username =  event.target[0].value

    if (username !== ''){
      fetchJoke()
    }
  })
}




////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////



document.addEventListener('DOMContentLoaded', () => {

  addFormEvent()
})

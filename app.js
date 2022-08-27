const form = document.querySelector('#form')
const info = document.querySelector('.info')
const Name = document.querySelector('.name')
const capital = document.querySelector('.capital')
const region = document.querySelector('.region')
const population = document.querySelector('.population')
const image = document.querySelector('.image')
const container = document.querySelector('.container')
const card = document.querySelector('.card')
const load = document.querySelector('#loading')



function displayLoad(){
   load.classList.add('display')
   setTimeout(() => {
    load.classList.remove('display')
   }, 4000);
}

function hideLoad(){
    load.classList.remove('display')
}

form.addEventListener('submit', async function (e) {
    card.style.visibility = 'hidden'
    displayLoad()
    setTimeout(() => {
        card.style.visibility = 'visible'
    }, 4500)
    e.preventDefault()
    const search = form.elements.search.value
    const config = {params:{search}}
    const res = await axios.get(`https://restcountries.com/v3.1/name/${search}`)
    information(res.data[0])
    form.elements.search.value = ''
    hideLoad()
    
})

function information(result){
        
        Name.innerHTML= `<h5 class="card-title name">Name: ${result.name.common}</h5>`
        capital.innerHTML =`<p class="card-text capital">Capital: ${result.capital[0]}</p>`
        region.innerHTML = `<p class="card-text region">Continent: ${result.region}</p>`
        population.innerHTML =`<p class="card-text population">population: ${result.population}</p>` 
        image.src = result.flags.png
          
}
const apiKey = 'f6fa055'
const searchBtn = document.getElementById('searchBtn')
const poster = document.querySelector('.moviePosterarea')
const movieInfo = document.querySelector('.movieInfoarea')


async function getMovieDetails(){
    const movieName = document.getElementById('searchBox').value.trim()
    const apiURL = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`
    const response = await fetch(apiURL)
    const data = await response.json()

    poster.innerHTML = ""
    movieInfo.innerHTML = ""
    
    const posterimg = document.createElement('img')
    posterimg.src = data.Poster
    poster.appendChild(posterimg)

    const movieTitle = document.createElement('h1')
    movieTitle.innerHTML = data.Title
    movieInfo.appendChild(movieTitle)

    const movieYear = document.createElement('span')
    movieTitle.appendChild(movieYear)
    movieYear.innerHTML = ` (${data.Year})`

    const movieRating = document.createElement('p')
    movieInfo.appendChild(movieRating)
    movieRating.innerHTML = `⭐ ${data.imdbRating}/10`

    const movieGenre = document.createElement('p')
    movieInfo.appendChild(movieGenre)
    movieGenre.innerHTML = `<strong>Genre:</strong> ${data.Genre}`

    const movieRuntime = document.createElement('p')
    movieInfo.appendChild(movieRuntime)
    movieRuntime.innerHTML = `<strong>Runtime:</strong> ${data.Runtime}`

    const movieActors = document.createElement('p')
    movieInfo.appendChild(movieActors)
    movieActors.innerHTML = `<strong>Actors:</strong> ${data.Actors}`

    const movieDirector = document.createElement('p')
    movieInfo.appendChild(movieDirector)
    movieDirector.innerHTML = `<strong>Director:</strong> ${data.Director}`
    
    const movieWriter = document.createElement('p')
    movieInfo.appendChild(movieWriter)
    movieWriter.innerHTML = `<strong>Writer:</strong> ${data.Writer}`

    const movieLanguage = document.createElement('p')
    movieInfo.appendChild(movieLanguage)
    movieLanguage.innerHTML = `<strong>Language:</strong> ${data.Language}`

    const movieCountry = document.createElement('p')
    movieInfo.appendChild(movieCountry)
    movieCountry.innerHTML = `<strong>Country:</strong> ${data.Country}`

    const movieAwards = document.createElement('p')
    movieInfo.appendChild(movieAwards)
    movieAwards.innerHTML = `<strong>Awards:</strong> ${data.Awards}`

    const BoxOffice = document.createElement('p')
    movieInfo.appendChild(BoxOffice)
    BoxOffice.innerHTML = `<strong>BoxOffice:</strong> ${data.BoxOffice}`

    const moviePlot = document.createElement('p')
    movieInfo.appendChild(moviePlot)
    moviePlot.innerHTML = `<strong>Plot:</strong> ${data.Plot}`

}

searchBtn.addEventListener('click', getMovieDetails)
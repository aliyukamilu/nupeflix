const urlString = window.location.search;
const urlParamss = new URLSearchParams(urlString);
const movID = urlParamss.get('id')

async function getMovie() {
  const response = await fetch(`${HOST}/php/index.php?specificMovie&id=${movID}`)
  const movieData = await response.json()

  $('#movieName').html(movieData[0].movie_title)
  $('#movieDescr').html(movieData[0].movie_description)
  $('#categ').html(movieData[0].movie_category)

  $('#videoCont').html(movieData[0].movie_link)
}

getMovie()
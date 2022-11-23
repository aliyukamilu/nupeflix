function convertMovieTime(movieTime) {
  let movie_length = movieTime.split(':')
  return parseInt(movie_length[0]) + "h " + parseInt(movie_length[1]) + "m"
}
async function getMovies() {
  const response = await fetch(`${HOST}/php/index.php?allmovies`)
  const moviesData = await response.json()

  moviesData.forEach((movie, i) => {

    let movie_length_final = convertMovieTime(movie.movie_length)
    $('#movies').append(`
    <div class="col-sm-6 col-md-4 col-lg-3 mb-5">
      <div class="movie">
        <div class="moviesCont">
          <img src="../assets/img/moviePosters/mov1.png" class="img-fluid">
        </div>
        <div class="moviesInfo hidden">
          <div class='d-flex justify-content-between align-items-center mt-2 iconsBtn w-full'>
            <div class='d-flex align-items-center'>
              <button class='btn playBtn' data-movieid='${movie.movie_id}' id='playBtn'><i class='fas fa-play'></i></button>
              <button class='btn addBtn' id='addBtn'><i class='fas fa-plus'></i></button>
              <button class='btn likeBtn' id='likeBtn'><i class='fas fa-thumbs-up'></i></button>
            </div>
            <button class='btn menuBtn' data-movieid='${movie.movie_id}' id='menuBtn' data-bs-toggle="modal" data-bs-target="#movInfoModal"><i class="fas fa-ellipsis-v"></i></button>
          </div>
          <div class='d-flex timeInfo mt-3'>
            <p class='mb-0'>${movie_length_final}</p>
            <p class='mb-0'>HD</p>
            <p class='mb-0'>12+</p>
          </div>
          <p class='mt-2 mb-0' style='font-size: 12px'>${movie.movie_category}</p>
        </div>
      </div>
    </div>
  `)
  })

  let movieConts = document.querySelectorAll('.moviesPoster .movie')
  let trailerVid = document.querySelector('#trailerVid')
  let menuBtns = document.querySelectorAll('#menuBtn')
  let playBtns = document.querySelectorAll('#playBtn')

  playBtns.forEach((playBtn) => {
    playBtn.addEventListener('click', () => {
      window.location.href = `play.html?id=${playBtn.dataset.movieid}`;
    })
  })
  movieConts.forEach((movieCont, i) => {
    movieCont.addEventListener('mouseover', () => {
      let movieInfo = movieCont.querySelector('.moviesInfo')
      movieInfo.classList.remove('hidden')
    })

    movieCont.addEventListener('mouseleave', () => {
      let movieInfo = movieCont.querySelector('.moviesInfo')
      movieInfo.classList.add('hidden')
    })
  })

  menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener('click', () => {
      let moviedata = moviesData.filter(mov => mov.movie_id == menuBtn.dataset.movieid)
      $('#videoCont').html(moviedata[0].movie_link)
      let releaseYear = moviedata[0].release_date.split('-')
      $('#videoInfo').html(`
        <p class="tags">${releaseYear[2]}</p>
        <p class="tags">${convertMovieTime(moviedata[0].movie_length)}</p>
        <p class="tags">HD</p>
        <p class="tags">12+</p>
      `)
      $('.moviedescription').html(moviedata[0].movie_description)
      $('#theCast').html(moviedata[0].movie_cast)
      $('#genre').html(moviedata[0].movie_category)
      setTimeout(() => {
        // trailerVid.play()
        $('#playVideo').on('click', function () {
          window.location.href = `play.html?id=${moviedata[0].movie_id}`;
        })
      }, 2000);
    })
  })

  $('#muteBtn').on('click', function () {
    trailerVid.muted = false
    $('#UnmuteBtn').removeClass('hidden')
    $('#muteBtn').addClass('hidden')
  })

  $('#UnmuteBtn').on('click', function () {
    trailerVid.muted = true
    $('#muteBtn').removeClass('hidden')
    $('#UnmuteBtn').addClass('hidden')
  })

  $('#movInfoModal').on('hidden.bs.modal', function () {
    trailerVid.pause()
  })
}

getMovies()

async function getBannerMovie() {
  const response = await fetch(`${HOST}/php/index.php?movieBanner&id=1`)
  const moviesBanner = await response.json()

  $('#bannerMovieName').html(moviesBanner[0].movie_title)
  $('#BanMovDesc').html(moviesBanner[0].movie_description)

  $('#bannerMov').on('click', function () {
    window.location.href = `play.html?id=${moviesBanner[0].id}`
  })
}

getBannerMovie()


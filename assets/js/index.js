let movies = [
  {
    id: "eytu23tiyowe",
    img: 'mov1.png',

  }, {
    id: "eytu23tiyowe",
    img: 'mov2.png',

  }, {
    id: "eytu23tiyowe",
    img: 'mov3.png',

  }, {
    id: "eytu23tiyowe",
    img: 'mov4.png',

  }
]

movies.forEach((movie, i) => {
  $('#movies').append(`
    <div class="col-sm-3 mb-5">
      <div class="movie">
        <div class="moviesCont">
          <img src="../assets/img/moviePosters/${movie.img}" class="img-fluid">
        </div>
        <div class="moviesInfo hidden">
          <div class='d-flex justify-content-between align-items-center mt-2 iconsBtn w-full'>
            <div class='d-flex align-items-center'>
              <button class='btn playBtn' id='playBtn'><i class='fas fa-play'></i></button>
              <button class='btn addBtn' id='addBtn'><i class='fas fa-plus'></i></button>
              <button class='btn likeBtn' id='likeBtn'><i class='fas fa-thumbs-up'></i></button>
            </div>
            <button class='btn menuBtn' id='menuBtn' data-bs-toggle="modal" data-bs-target="#movInfoModal"><i class="fas fa-ellipsis-v"></i></button>
          </div>
          <div class='d-flex timeInfo mt-3'>
            <p class='mb-0'>1h 23m</p>
            <p class='mb-0'>HD</p>
            <p class='mb-0'>12+</p>
          </div>
          <p class='mt-2 mb-0' style='font-size: 12px'>Drama</p>
        </div>
      </div>
    </div>
  `)
})

movies.forEach((movie, i) => {
  $('#moviesConti').append(`
    <div class="col-sm-3 mb-5">
      <div class="movie">
        <div class="moviesCont">
          <img src="../assets/img/moviePosters/${movie.img}" class="img-fluid">
        </div>
        <div class="moviesInfo hidden">
          <div class='d-flex justify-content-between align-items-center mt-2 iconsBtn w-full'>
            <div class='d-flex align-items-center'>
              <button class='btn playBtn' id='playBtn'><i class='fas fa-play'></i></button>
              <button class='btn addBtn' id='addBtn'><i class='fas fa-plus'></i></button>
              <button class='btn likeBtn' id='likeBtn'><i class='fas fa-thumbs-up'></i></button>
            </div>
            <button class='btn menuBtn' id='menuBtn' data-bs-toggle="modal" data-bs-target="#movInfoModal"><i class="fas fa-ellipsis-v"></i></button>
          </div>
          <div class='d-flex timeInfo mt-3'>
            <p class='mb-0'>1h 23m</p>
            <p class='mb-0'>HD</p>
            <p class='mb-0'>12+</p>
          </div>
          <p class='mt-2 mb-0' style='font-size: 12px'>Drama</p>
        </div>
      </div>
    </div>
  `)
})

let movieConts = document.querySelectorAll('.moviesPoster .movie')
let trailerVid = document.querySelector('#trailerVid')
let menuBtns = document.querySelectorAll('#menuBtn')

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
    setTimeout(() => {
      trailerVid.play()

    }, 1000);
  })
})

$('#muteBtn').on('click', function() {
  trailerVid.muted = false
  $('#UnmuteBtn').removeClass('hidden')
  $('#muteBtn').addClass('hidden')
})

$('#UnmuteBtn').on('click', function() {
  trailerVid.muted = true
  $('#muteBtn').removeClass('hidden')
  $('#UnmuteBtn').addClass('hidden')
})

$('#movInfoModal').on('hidden.bs.modal', function () {
  trailerVid.pause()
})

function showMyMusic() {
  window.location.href = 'myMusic.html';
}

// Добавление трека в Local Storage при его прослушивании
function addToLocalStorage(trackName) {
  let tracks = localStorage.getItem('tracks') ? JSON.parse(localStorage.getItem('tracks')) : {};
  if (tracks[trackName]) {
      tracks[trackName]++;
  } else {
      tracks[trackName] = 1;
  }
  localStorage.setItem('tracks', JSON.stringify(tracks));
}
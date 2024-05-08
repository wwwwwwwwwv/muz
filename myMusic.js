// Отображение прослушанных треков на странице My Music
window.onload = function() {
  let tracks = localStorage.getItem('tracks') ? JSON.parse(localStorage.getItem('tracks')) : {};
  let trackList = document.getElementById('trackList');

  for (let track in tracks) {
      let p = document.createElement('p');
      p.textContent = `${track}: ${tracks[track]} times`;
      trackList.appendChild(p);
  }
};

import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeCheck, 1000));

function timeCheck(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
  if (event.seconds === event.duration) {
    localStorage.removeItem('videoplayer-current-time');
  }
}

if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}


import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const throttle = require('lodash.throttle');
const USER_STOPED_VIDEO_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTimeUser = localStorage.getItem(USER_STOPED_VIDEO_KEY);
const parsedCurrentTimeUser = JSON.parse(currentTimeUser) ?? []; 

// videoplayer-current-time


function onPlay (data) { 
        
    localStorage.setItem(USER_STOPED_VIDEO_KEY, JSON.stringify(data.seconds)); 

 console.log(JSON.stringify(data.seconds));
};
player.on('timeupdate', throttle(onPlay, 1000));


// player.setCurrentTime(parsedCurrentTimeUser).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });

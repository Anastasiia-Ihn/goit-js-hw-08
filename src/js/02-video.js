
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const throttle = require('lodash.throttle');
const USER_STOPED_VIDEO_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTimeUser = localStorage.getItem(USER_STOPED_VIDEO_KEY) ?? 0;
// const parsedCurrentTimeUser = JSON.parse(currentTimeUser) ?? []; 


function onPlay (data) { 
        
    localStorage.setItem(USER_STOPED_VIDEO_KEY, JSON.stringify(data.seconds)); 
};
player.on('timeupdate', throttle(onPlay, 1000));


player.setCurrentTime(currentTimeUser)

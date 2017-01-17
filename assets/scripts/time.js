'use strict';

function fix24HourTime(hr) {
  if (hr > 12) {
    return hr - 12;
  } else {
    return hr;
  }
}

function fixMinuteSecondZero(num) {
  if (num < 10) {
    return '0' + num;
  } else {
    return num;
  }
}


function updateClock() {
  let now = new Date(); // current date
  let months = ['January', 'February', '...']; // you get the idea
  let time = fixMinuteSecondZero(fix24HourTime(now.getHours())) + ':' + fixMinuteSecondZero(now.getMinutes()), // again, you get the idea

    // a cleaner way than string concatenation
    date = [now.getDate(),
      months[now.getMonth()],
      now.getFullYear()
    ].join(' ');
  let str = [date, time].join(' / ');
  // set the content of the element with the ID time to the formatted string
  $('.time-time').html(str);

  // call this function again in 1000ms
  setTimeout(updateClock, 1000);
}
updateClock(); // initial call

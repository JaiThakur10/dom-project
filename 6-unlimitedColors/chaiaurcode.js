const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const startColorChange = function () {
  setInterval(function () {
    document.body.style.backgroundColor = randomColor();
  }, 1000);
};

const stopColorChange = function () {};

start.addEventListener('click', startColorChange);
stop.addEventListener('click', stopColorChange);

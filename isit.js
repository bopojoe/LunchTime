function updateMessage() {
  var now = new Date();

  var a = new Date();
  a.setHours(15);
  a.setMinutes(30);

  var s = new Date();
  s.setHours(16);
  s.setMinutes(0);

  var e = new Date();
  e.setHours(17);
  e.setMinutes(0);

  var m = new Date();
  m.setHours(17);
  m.setMinutes(1);

  var current = now.getTime();
  var almostLunch = a.getTime();
  var startLunch = s.getTime();
  var endLunch = e.getTime();
  var missedLunch = m.getTime();
  var difference = (startLunch - current) / 1000;
  var value = difference / 60;

  var messageElement = document.getElementById('message');
  var timeLeftElement = document.getElementById('time-left');

  if (current > almostLunch && current < startLunch) {
    messageElement.className = 'almost';
    messageElement.textContent = 'Almost';
    timeLeftElement.className = 'almost';
    timeLeftElement.textContent = `${value.toFixed(2)} minutes`;
  } else if (current > endLunch && current < missedLunch) {
    messageElement.className = 'missed';
    messageElement.textContent = 'Just missed it';
    timeLeftElement.textContent = '';
  } else if (current < startLunch || current > endLunch) {
    messageElement.className = 'no';
    messageElement.textContent = 'No';
    timeLeftElement.textContent = '';
  } else {
    messageElement.className = 'yes';
    messageElement.textContent = 'Yes';
    timeLeftElement.textContent = '';
  }
}

// Update the message every second
setInterval(updateMessage, 1000);

// Initial call to set the message immediately on page load
updateMessage();

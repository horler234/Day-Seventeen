var clicks = 0;
function arithmetic() {
  clicks+=1;
  document.getElementById('number').innerHTML = clicks;

  if (clicks < 0) {
    document.getElementById('number').style.color = 'red';
  }

  else if (clicks > 0) {
    document.getElementById('number').style.color = 'green';
  }

  else {
    document.getElementById('number').style.color = 'yellow';
  }
}

function arithmetic2() {
  clicks-=1;
  document.getElementById('number').innerHTML = clicks;

  if (clicks < 0) {
    document.getElementById('number').style.color = 'red';
  }

  else if (clicks > 0) {
    document.getElementById('number').style.color = 'green';
  }

  else {
    document.getElementById('number').style.color = 'yellow';
  }
}

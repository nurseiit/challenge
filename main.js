const MS_IN_DAYS = 1000 * 60 * 60 * 24;

update();

function update () {
  let body = document.getElementsByTagName('body')[0];
  let app = document.getElementById('app');
  let children = app.getElementsByTagName('div');
  let element = children[1];

  let today = new Date();
  let days = daysDifference(today, startDate);
  // Change days in HTML
  element.innerHTML = days;
  let palette = [
    'rgb(255,23,68',
    'rgb(245,0,87',
    'rgb(213,0,249',
    'rgb(101,31,255',
    'rgb(61,90,254',
    'rgb(41,121,255',
    'rgb(0,176,255',
    'rgb(29,233,182',
    'rgb(0,230,118',
    'rgb(118,255,3'
  ];

  let len = palette.length;
  let index = Math.min(len - 1, Math.floor(len * days/target));
  let opacity = 1;
  // Background Color
  let color = palette[index] + opacity + ')';
  body.style.backgroundColor = color;
}

function daysDifference(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.abs(Math.floor((utc2 - utc1) / MS_IN_DAYS));
}

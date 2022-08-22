function renderPeople(boston, container) {
  let people = bostonSalaries.data;
  let html = ' ';
  for (let i = 0; i < bostonSalaries.data.length; i++) {
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }
  container.innerHTML = '<h2>List of poeple in Boston and their salaries</h2><ul id="data">' + html + '</ul>'
}
renderPeople(bostonSalaries, document.getElementById('container'));

function renderBigEarners(boston, bigEarners) {
  let person = bostonSalaries.data;
  let html =' ';
  for (let index = 0; index < bostonSalaries.data.length; index++) {
    if (person[index][11] >= 200000.00) {
      html += '<li class="post">' + '<h2>' + person[index][8] + '</h2>' + '<h3>' + person[index][11] + '</h3>';
    }

  bigEarners.innerHTML = '<h2>Big Earners</h2><ul id="data">' + html + '</ul>';

  }
}
renderBigEarners(bostonSalaries, document.getElementById('bigEarners'));

function topFive (boston, topFive) {
  let person =bostonSalaries.data;
  let html = ' ';
  
}

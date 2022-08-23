//The following is starter code provided to me for the assignment
function renderPeople(boston, container) {
  let people = boston.data;
  let html = ' ';
  for (let i = 0; i < bostonSalaries.data.length; i++) {
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>$' + people[i][11] + '</h3>';
  }

  container.innerHTML = '<h2>List of people in Boston and their salaries</h2><ul id="data">' + html + '</ul>'
}

renderPeople(bostonSalaries, document.getElementById('container'));

//My code from here on
function renderBigEarners(boston, bigEarners) {  //Function to take the people making over 100K and display them on the page
  let people = boston.data;
  //Assign bigSalaries to the result of people.filter which works by looking at the value at index 11 and adding it the array if it's over 100K
  let bigSalaries = people.filter((a) => a[11] >= 100000);
  let html =' ';
  //Loop through the bigSalaries array and add it to the HTML list that's going to be displayed
  for (let index = 0; index < bigSalaries.length; index++) {
      html += '<li class="post">' + '<h2>' + bigSalaries[index][8] + '</h2>' + '<h3>$' + bigSalaries[index][11] + '</h3>';
  }
  //Add the list to the bigEarners div in the HTML
  bigEarners.innerHTML = '<h2>There are ' + bigSalaries.length + ' people making more than 100K </h2><ul id="data">' + html + '</ul>';

}

renderBigEarners(bostonSalaries, document.getElementById('bigEarners'));

function renderTopFive (boston, topFive) { //This function sorts the array by salaries then slices off the first 5
  let people =boston.data;
  //Assign richest to the result of sorting the salaries then slice the top 5 results of the array
  let richest = people.sort((a, b) => b[11] - a[11]).slice(0, 5);
  let html = ' ';
  //Loop through the richest array and make an HTML list for it
  for (let index = 0; index < richest.length; index++) {
    html += '<li class="post">' + '<h2>' + richest[index][8] + '</h2>' + '<h3>$' + richest[index][11] + '<h3>';
  }
  //Add the list to the topFive div in the HTML 
  topFive.innerHTML = '<h2>The top 5 highest salaries in Boston</h2><ul id="data">' + html + '</ul>';
}

renderTopFive(bostonSalaries, document.getElementById('topFive'));

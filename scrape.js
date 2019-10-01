var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://foothillsanimalshelter.org/')
  .wait('a[href="/services/adopt/"]')
  .click('a[href="/services/adopt/"]')
  .wait('a[href="/services/adopt/dogs/"]')
  .click('a[href="/services/adopt/dogs/"]')
  .wait('h3')
  .evaluate(function () {
    let doggoNames = document.querySelectorAll('.sb-animal:nth-child(n) > .sb-animal-name > h3')
    var names = [].slice.call(doggoNames); 
    return names.map(node => node.innerText)
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
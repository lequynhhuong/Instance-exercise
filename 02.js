// Include data for accessing Google APIs

const apiKey = 'AIzaSyAeCBvd9M8RkW33747ZCFEbO8p2_-Ya24Y';
const url = "https://www.googleapis.com/urlshortener/v1/url";
const projection = 'FULL';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
  const urlToExpand = url + '?key=' + apiKey +
      '&shortUrl=' + $inputField.val();
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log(xhr.response);
      xhr.open('GET', urlToExpand);
      xhr.send();
    }};


  function shortenUrl() {

  }

  function expand() {
    $responseField.empty();
    expandUrl();
    return false;
  }

  function shorten() {
    $responseField.empty();
    shortenUrl();
    return false;
  }

// Call functions on submit

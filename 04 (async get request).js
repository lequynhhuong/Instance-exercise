// Include data for accessing Google APIs
const apiKey = '	AIzaSyAeCBvd9M8RkW33747ZCFEbO8p2_-Ya24Y';
const url = 'https://www.googleapis.com/urlshortener/v1/url';

async function expandUrl() {
  const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
  try {
    let response = await fetch(urlToExpand);
    if (response.ok) {
      let jsonResponse = await response.json();
      $responseField.append('<p> Your expanded URL is </p><p>' +
          jsonResponse.longUrl + '</p>');
      return jsonResponse;
    }
  }
  catch (error) {console.log(error);}
}

// Some page elements
const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

// Clear page and call AJAX functions
function expand() {
  $responseField.empty();
  expandUrl();
  return false;
};

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
};

$expandButton.click(expand);
$shortenButton.click(shorten);
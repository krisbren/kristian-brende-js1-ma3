// Make a call to the Rawg API.

// Go to https://rawg.io/apidocs and get an API key which you’ll use as part of the endpoint you’re making an API call to.
// You can use https://noroff.no for the URL and Noroff Assignment for the description.

// You'll be given an API Key you can add as a "key" parameter in your fetch request.

// Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE

// Loop through the results and display the following properties in HTML, but only for the first eight results:

//     name
//     rating
//     number of tags (not the tag details, just the amount of tags)

// The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.

const resultsContainer = document.querySelector(".results");

async function getGames() {
  try {
    const response = await fetch(
      "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=d033affa27f2456baf0e4f598a50b6d8"
    );
    const results = await response.json();
    const games = results.results;

    let html = "";

    resultsContainer.innerHTML = "";

    for (i = 0; i < 8; i++) {
      let name = games[i].name;
      let rating = games[i].rating;
      let tags = games[i].tags.length;
      html += `<div class="result"><p>${name}</p>
    <p>Rating: ${rating}</p>
    <p>Number of tags: ${tags}</p></div>`;
    }
    resultsContainer.innerHTML = html;
  } catch (error) {
    let html = "An error occured.";
    resultsContainer.innerHTML = html;
    console.log(error);
  }
}

getGames();

const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_lDe5FxmPSZ9Rei1bYa7gpexCwyuEcddgbJ3AGWedcREetGc7cwlesCWutgc3SUVR";

type = [];

// gets a random integer. this is later used to pick a random cat image
function randomNum(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showCatImage(index) {
  document.getElementById("cat_image").src = type[index].image.url;
}

fetch(url, {
  headers: {
    "x-api-key": api_key,
  },
})

  .then((response) => {
    return response.json();
  })
  .then((data) => {
    type = data;

    
    showCatImage(randomNum(0, type.length - 1));
  })
  .catch(function (error) {
    console.log(error);
  });
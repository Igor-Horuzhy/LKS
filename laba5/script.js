let movies;

fetch("movies.json").then(function(response) {
    response.json().then(function(response) {
      movies = response.results;
      init();
    });
});

function init() {
  let main = document.querySelector("movies");

  let listOfMovies;

  listOfMovies = [];
  listOfMovies = movies;
  updateDisplay();

  function updateDisplay() {
    
    for (let i = 0; i < listOfMovies.length; i++) {
      getMovieImage(listOfMovies[i]);
    }
  }

  function getMovieImage(movie) {
    const posterCommonPath = "http://image.tmdb.org/t/p/w300";
    let url = posterCommonPath + movie.poster_path;
    showmovie(url, movie);    
  }

  function showmovie(url, movie) {
    let section = document.createElement("section");
    let heading = document.createElement("h3");
    let imgBox = document.createElement("div");
    let overview = document.createElement("div");
    let averageAndChek = document.createElement("div");
    let chekAndLabel = document.createElement("label");
    let image = document.createElement("img");
    let average = document.createElement("p");
    let chek = document.createElement("input");
    let label = document.createElement("span");

    imgBox.setAttribute("class", "imgBox");
    chek.setAttribute("type", "checkbox");
    
    averageAndChek.setAttribute("class", "averageChek");
    chekAndLabel.setAttribute("class","checkBoxStyle");

    overview.textContent = movie.overview;
    heading.textContent = movie.title;
    average.textContent = movie.vote_average;
    label.innerHTML = "Watch later";
    
    image.src = url;
    image.alt = movie.name;
    
    main.appendChild(section);
    section.appendChild(imgBox);
    imgBox.appendChild(image);
    section.appendChild(heading);
    section.appendChild(averageAndChek);
    averageAndChek.appendChild(average);
    averageAndChek.appendChild(chekAndLabel);
    chekAndLabel.appendChild(chek);
    chekAndLabel.appendChild(label);

    section.appendChild(overview);

    window.onload = function() {
      let nameForId;
      for (let i = 0; i < listOfMovies.length; i++) {
        nameForId = "chekBox" + i;
        document.getElementsByTagName("input")[i].setAttribute("id", nameForId);
      }

      let storage = {
        itemLength: document
          .getElementById("movies")
          .getElementsByTagName("section").length,
        init: function() {
          this.checkStorageComp();
        },
        checkStorageComp: function() {
            storage.readStorage();
            storage.detectCheckboxClick();
        },
        detectCheckboxClick: function() {
          let inputEle = document.getElementsByTagName("input");
          for (let i = 0; i < inputEle.length; i++) {
            let t = document.getElementById("chekBox" + i);
            t.onclick = (function(j) {
              return function() {
                this.checked
                  ? storage.setStorage("chekBox" + j)
                  : storage.removeStorage("chekBox" + j);
              };
            })(i);
          }
        },
        setStorage: function(ele) {
          localStorage.setItem(ele, "true");
        },
        removeStorage: function(ele) {
          localStorage.removeItem(ele);
        },
        readStorage: function() {
          for (let i = 0; i < this.itemLength; i++) {
            let c = document.getElementById("chekBox" + i);
            localStorage.getItem("chekBox" + i)
              ? (c.checked = true)
              : (c.checked = false);
          }
        }
      };

      storage.init();
    };
  }
}
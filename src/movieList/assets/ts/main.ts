import { movies } from "./movie";

let moviesCopy = [...movies];

const movieSection = document.getElementById("movies") as HTMLElement;

function showMovies(): void {
  movieSection.innerHTML = "";

  moviesCopy.forEach((movie) => {
    const movieBox = document.createElement("div");
    movieBox.className = "box";

    const titel = document.createElement("h2");
    const year = document.createElement("p");
    const director = document.createElement("b");
    const time = document.createElement("p");
    const genres = document.createElement("ul");
    const rating = document.createElement("p");

    titel.textContent = movie[0];
    year.textContent = movie[1];
    director.textContent = movie[2];
    time.textContent = movie[3];
    movie[4].forEach((genre) => {
      const genreElement = document.createElement("li");
      genreElement.textContent = genre;
      genres.appendChild(genreElement);
    });
    rating.textContent = movie[5];

    movieBox.appendChild(titel);
    movieBox.appendChild(year);
    movieBox.appendChild(director);
    movieBox.appendChild(time);
    movieBox.appendChild(genres);
    movieBox.appendChild(rating);

    movieSection?.appendChild(movieBox);
  });
}

showMovies();

const btnYearUp = document.getElementById("btn_Year_up");
const btnYearDown = document.getElementById("btn_Year_down");
const btnBestRate = document.getElementById("btn_best_rate");
const btnSearch = document.getElementById("btn_search");

btnYearUp?.addEventListener("click", function (event: MouseEvent) {
  event.preventDefault();
  moviesCopy = movies.sort(
    (movie1, movie2) => Number(movie1[1]) - Number(movie2[1])
  );
  showMovies();
});
btnYearDown?.addEventListener("click", function (event: MouseEvent) {
  event.preventDefault();
  moviesCopy = movies.sort(
    (movie1, movie2) => Number(movie2[1]) - Number(movie1[1])
  );
  showMovies();
});
btnBestRate?.addEventListener("click", function (event: MouseEvent) {
  event.preventDefault();
  moviesCopy = movies.sort(
    (movie1, movie2) => Number(movie2[5]) - Number(movie1[5])
  );
  showMovies();
});

btnSearch?.addEventListener("click", function (event: MouseEvent) {
  event.preventDefault();
  const search_input = document.getElementById(
    "search_input"
  ) as HTMLInputElement;
  const searchText: string = search_input.value;

  moviesCopy = movies.filter(
    (movie) =>
      movie[0].includes(searchText) ||
      movie[1].includes(searchText) ||
      movie[2].includes(searchText)
  );
  showMovies();
});

import { movies } from "./movie";

const movieSection = document.getElementById("movies");

for (const movie of movies) {
  const movieBox = document.createElement("div");
  movieBox.className = "box";
}

/* Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers" */
    
    const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 },
  { id: 3, title: "The Matrix", genre: "Action", rating: 8.7 },
  { id: 4, title: "Oppenheimer", genre: "Drama", rating: 8.5 }
];

// 1.filtering for Sci-Fi Movies (Hasrith's favorite genre)
let movie=movies.filter((ele)=>ele.genre=="Sci-Fi")
console.log("Hasrith's favorite Sci-Fi movies:", movie)
//2. map to return Inception 8.8
movies.map(movie => {
    if (movie.title === "Inception") {
    console.log(`${movie.title} (${movie.rating})`);
  }
});
//3. avg of movie ratings 
let average = movies.reduce((sum, movie) => sum + movie.rating,0) / movies.length;
console.log(average);
//4. find() movie "Interstellar" (Hasrith's favorite)
let find=movies.find(ele=>ele.title=="Interstellar");
console.log("Hasrith's favorite movie details:", find)
//5.find index of The Matrix
let index=movies.findIndex(ele=>ele.title=="The Matrix");
console.log("Index of The Matrix in Hasrith's list:", index)
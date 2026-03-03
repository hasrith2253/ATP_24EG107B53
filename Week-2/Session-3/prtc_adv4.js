/*
ASSIGNMENT 4: 
------------
Movie Streaming Platform


You are working on a movie recommendation system.

Test data:
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
    5. findIndex() of "Avengers"
*/

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//1. filter() only "Sci-Fi" movies
const filt = movies.filter(t=>t.genre =="Sci-Fi");
console.log(filt)

//2. map() to return:
          //  "Inception (8.8)"
const rating = movies.map(ret=> ret.id)
console.log(rating)

//3.reduce() to find average movie rating

const ttl = movies.reduce((acc,num)=>acc+num.rating,0)
const avg = ttl/movies.length
console.log(avg)

//4.find() movie "Joker"
const mov = movies.find(m=>m.title="Joker")
console.log(mov)

//5.findIndex() of "Avengers"
const idx = movies.findIndex(movie => movie.title === "Avengers");
console.log(idx);
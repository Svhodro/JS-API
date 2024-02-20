let searchBtn = document.querySelector(".search");
let card = document.querySelector(".card")
let searchInput = document.querySelector(".input")
let movieImg = document.querySelector(".movie-img")
let movieName = document.querySelector(".movie-name")
let movieRateing = document.querySelector(".rateing")
let releseDate = document.querySelector(".r-date")
let duretion = document.querySelector(".dureton")
let cost = document.querySelector(".cost")
let box = document.querySelector(".box")
let plot = document.querySelector(".plot")
let show =document.querySelector(".show")

//fungtion To fatch movie detail's


// adding event letionar to search bar
searchBtn.addEventListener("click", function () {
console.log("ghuuuu");
    if (searchInput.value !== "") {
        card.classList.remove("hidden")  
        show.classList.add("hidden")   
        fetchData(searchInput.value);
    }




})

async function fetchData(movie) {
    try {

        let apiKey = "47b3c25c";
        let apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`;
        const response = await fetch(apiUrl); // Replace with your API endpoint
        if (!response.ok) {
            throw new Error('Network response was not ok');
            
        }
        const data = await response.json(); // Parse the response body as 
        console.log('Fetched data:', data);
        movieImg.src = data.Poster;
        movieName.innerHTML = data.Title;
        movieRateing.innerHTML = data.Rated;
        releseDate.innerHTML = data.Released;
        duretion.innerHTML = data.Runtime;
        cost.innerHTML = data.Genre;
        plot.innerHTML = data.Plot;
        box.innerHTML =data.BoxOffice;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}



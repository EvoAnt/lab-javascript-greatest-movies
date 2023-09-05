// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
    let directorArray = moviesArray.map((movie) => {
        return movie.director
    })
    return directorArray
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getUniqueDirectors(directorArray){
    let uniqueDirectors = new Set()
    for (let i = 0; i < directorArray.length; i++) {
        uniqueDirectors.add(directorArray[i])
    }
    let uniqueDirectorsArray = [...uniqueDirectors]
    return uniqueDirectorsArray
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenDramas = moviesArray.filter((movie) => {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            return movie
        }
    })
    return stevenDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let movieScores = moviesArray.reduce((a,b) => {
        return a += b.score ? b.score : 0
    }, 0)

    return moviesArray.length === 0 ? 0 : Math.round((movieScores/moviesArray.length)*100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let allDramas = moviesArray.filter((movie) => {
        if (movie.genre.includes("Drama")) {
            return movie 
        }
    })

    let allDramasScore = allDramas.reduce((a,b) => {
        return a += b.score
    }, 0)

    return allDramas.length === 0 ? 0 : Math.round((allDramasScore/allDramas.length)*100)/100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let copyArray = [...moviesArray]
    copyArray.sort((a,b) => {
        if (a.year < b.year) {
            return -1
        }
        if (a.year > b.year) {
            return 1
        }
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        }
    })
    return copyArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let copyArray = [...moviesArray]
    let movieTitles = copyArray.map((movie) => {
        return movie.title
    })
    movieTitles.sort((a,b) => {
        return a.localeCompare(b)
    })

    return movieTitles <= 20 ? movieTitles : movieTitles.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

var queryURL = 'http://api.themoviedb.org/3/search/movie?api_key=51a0abce642402e7b8d43b2081302e77&query=Troll'

$.ajax({url: queryURL, method: "GET"}).done(function(response) {

  var results = response.results;
  // Looping through each result item
  for (var i = 0; i < results.length; i++) {

    var imgURL = 'http://image.tmdb.org/t/p/w154' + results[i].poster_path;
    var image = $("<img>").attr("src", imgURL);
    var movieView = $("<div class='col m6 s12'>");
    // Storing the result name
    var title = results[i].title;
    // Creating a h3 tag with the result item's title
    var h3 = $("<h3>").text(title);
    // Appending to the "movieView" div
    movieView.append(image);
    movieView.append(h3);

    // Prepending the movieView to the HTML
    $("#moviesDiv").prepend(movieView);

  }
});


$(document).ready(function() {
  var queryURL = 'http://api.themoviedb.org/3/search/movie?api_key=51a0abce642402e7b8d43b2081302e77&query=Troll'

  $.ajax({url: queryURL, method: "GET"}).done(function(response) {

    var results = response.results;
    // Looping through each result item
    for (var i = 0; i < results.length; i++) {
      // Storing the result images
      var imgURL = 'http://image.tmdb.org/t/p/w154' + results[i].poster_path;
      // var image = $("<img>").attr("src", imgURL);
      var movieView = $("<div class='col m6 s12'>");
      // Storing the result titles
      var title = results[i].title;
      // Creating a h3 tag with the result item's title
      var movieName = $("<h3>").text(title);

      var movieView = $(
            [
              "<div class='col s12 m3 l2 main'>",
              "<div class='card'>",
              "<div class='card-image'>",
              "<img src =" + imgURL + ">",
              "</div>",
              "<div class='card-content'>",
              "<p class = 'center-align orange-text'>" + title + "</p>",
              "</div>",
              "</div>",
              "</div>"
            ].join("")
          );
      // Prepending the movieView to the HTML
      $("#moviesDiv").append(movieView);

    }
  });
});

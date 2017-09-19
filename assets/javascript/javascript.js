var queryURL = 'http://api.themoviedb.org/3/search/movie?api_key=51a0abce642402e7b8d43b2081302e77&query=Troll'

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      // console.log(response);
      // console.log('http://image.tmdb.org/t/p/w/154' + response.results[0].poster_path);
      // console.log(response.data);

var results = response.results;
// Looping through each result item
  for (var i = 0; i < results.length; i++) {

  console.log(results[i]);

  // $(".movieTitle").html("<h2>" + results[i].title + "</h2>");
  var imgURL = 'http://image.tmdb.org/t/p/w154' + results[i].poster_path;
  var nullImg = '300.png';
  var image = $("<img>").attr("src", imgURL);


        // Appending the image
        // $('.moviePoster').append(image);
        var movieView = $("<div class='col m6 s12'>");

        // Storing the result name
        var title = results[i].title;

        // Creating a h2 tag with the result item's title
        var h3 = $("<h3>").text(title);
        // Appending the paragraph and personImage we created to the "movieView" div we created
                      movieView.append(image);
                      movieView.append(h3);

                      // Prepending the movieView to the "#gifs-appear-here" div in the HTML
                      $("#moviesDiv").prepend(movieView);

      }
});
